import { AppShell } from "@/components/ui/AppShell";
import { PageHeading, Text } from "@/components/ui/Typography";

export default function HomePage() {
  return (
    <AppShell>
      <section className="space-y-4 py-8 sm:py-12" aria-labelledby="home-heading">
        <p className="eyebrow">Private family trip planner</p>
        <PageHeading id="home-heading">One calm plan for every day.</PageHeading>
        <Text className="max-w-2xl text-lg text-ink-secondary">
          WDW Planner is ready for the September 2026 family trip. Import, sharing, and rule-aware
          planning arrive in the next foundation tasks.
        </Text>
      </section>
    </AppShell>
  );
}
