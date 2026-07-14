"use server";

import { z } from "zod";

import { getClientEnv } from "@/lib/env";
import { createClient } from "@/lib/supabase/server";

export type SignInState = { status: "idle" | "sent" | "error"; message?: string };

export async function sendMagicLink(_: SignInState, formData: FormData): Promise<SignInState> {
  const parsed = z.string().trim().email().safeParse(formData.get("email"));
  if (!parsed.success) return { status: "error", message: "Enter a valid email address." };
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithOtp({
    email: parsed.data,
    options: { emailRedirectTo: `${getClientEnv().NEXT_PUBLIC_APP_URL}/auth/callback` },
  });
  if (error)
    return { status: "error", message: "We could not send a sign-in link. Please try again." };
  return { status: "sent" };
}
