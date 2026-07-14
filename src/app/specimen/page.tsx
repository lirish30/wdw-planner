import { AppShell } from "@/components/ui/AppShell";
import {
  Caption,
  Display,
  Label,
  PageHeading,
  SectionHeading,
  Text,
} from "@/components/ui/Typography";

const colors = [
  ["Shell", "var(--color-shell)"],
  ["Shell elevated", "var(--color-shell-elevated)"],
  ["Accent", "var(--color-accent)"],
  ["Magic Kingdom", "var(--color-park-magic-kingdom)"],
  ["EPCOT", "var(--color-park-epcot)"],
  ["Hollywood Studios", "var(--color-park-hollywood-studios)"],
  ["Animal Kingdom", "var(--color-park-animal-kingdom)"],
] as const;

export default function SpecimenPage() {
  return (
    <AppShell>
      <div className="space-y-10" aria-labelledby="specimen-heading">
        <section className="space-y-3">
          <p className="eyebrow">Approved design tokens</p>
          <PageHeading id="specimen-heading">WDW Planner specimen</PageHeading>
          <Text className="max-w-2xl text-ink-secondary">
            A responsive reference for the shared foundation. Each interactive control meets the
            44px minimum target.
          </Text>
        </section>

        <section className="space-y-4" aria-labelledby="typography-heading">
          <SectionHeading id="typography-heading">Typography</SectionHeading>
          <div className="specimen-surface space-y-4">
            <Display>Trip hero display</Display>
            <PageHeading>Selected-day heading</PageHeading>
            <SectionHeading>Itinerary section heading</SectionHeading>
            <Text>Readable body text keeps family plans clear in bright outdoor conditions.</Text>
            <Label>Confirmed · Group 1</Label>
            <Caption>Last verified July 13, 2026</Caption>
          </div>
        </section>

        <section className="space-y-4" aria-labelledby="color-heading">
          <SectionHeading id="color-heading">Color and status</SectionHeading>
          <div className="specimen-grid">
            {colors.map(([label, color]) => (
              <div className="specimen-surface space-y-3" key={label}>
                <div
                  aria-label={`${label} color swatch`}
                  className="h-16 rounded-[var(--radius-sm)]"
                  style={{ backgroundColor: color }}
                />
                <Label>{label}</Label>
              </div>
            ))}
          </div>
          <div className="specimen-grid">
            <div className="status-sample status-sample--success">
              <Label>Confirmed</Label>
              <Text>Dining confirmation added to the plan.</Text>
            </div>
            <div className="status-sample status-sample--warning">
              <Label>Needs booking</Label>
              <Text>Reservation opening has not been completed.</Text>
            </div>
            <div className="status-sample status-sample--error">
              <Label>Conflict</Label>
              <Text>Choose one EPCOT Group 1 experience for the initial set.</Text>
            </div>
          </div>
        </section>

        <section className="specimen-surface space-y-3" aria-labelledby="action-heading">
          <SectionHeading id="action-heading">Action</SectionHeading>
          <Text className="text-ink-secondary">Pills are reserved for the next useful action.</Text>
          <button className="action-pill" type="button">
            Review planning alert
          </button>
        </section>
      </div>
    </AppShell>
  );
}
