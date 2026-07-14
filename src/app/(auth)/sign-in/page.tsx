import { AppShell } from "@/components/ui/AppShell";
import { MagicLinkForm } from "@/components/auth/MagicLinkForm";
import { PageHeading, Text } from "@/components/ui/Typography";

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  return (
    <AppShell>
      <section className="auth-panel" aria-labelledby="sign-in-heading">
        <p className="eyebrow">Private family tool</p>
        <PageHeading id="sign-in-heading">Sign in to your trip plan</PageHeading>
        <Text>
          WDW Planner helps invited family members coordinate; it does not book Disney or Universal
          inventory.
        </Text>
        {error === "invalid-link" && (
          <p role="alert">That sign-in link is invalid or expired. Request a new one below.</p>
        )}
        <MagicLinkForm />
      </section>
    </AppShell>
  );
}
