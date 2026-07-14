"use client";

import { useActionState } from "react";

import { sendMagicLink, type SignInState } from "@/app/(auth)/sign-in/actions";

const initialState: SignInState = { status: "idle" };

export function MagicLinkForm() {
  const [state, action, pending] = useActionState(sendMagicLink, initialState);
  return (
    <form action={action} className="auth-form" noValidate>
      <label htmlFor="email">Email address</label>
      <input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        required
        aria-describedby="sign-in-status"
      />
      <button className="action-pill" type="submit" disabled={pending}>
        {pending ? "Sending link…" : "Email me a sign-in link"}
      </button>
      <p id="sign-in-status" aria-live="polite" className="type-body">
        {state.status === "sent"
          ? "If that address can access this private planner, a sign-in link is on its way."
          : state.message}
      </p>
    </form>
  );
}
