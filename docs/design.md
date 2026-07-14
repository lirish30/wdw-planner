---
version: alpha
name: WDW Planner
description: A calm, family-first Walt Disney World planning system that pairs a starfield shell with highly readable itinerary surfaces.
colors:
  shell: "#07103D"
  shell-elevated: "#0D1B5E"
  on-shell: "#FFFFFF"
  surface: "#FFFFFF"
  surface-subtle: "#F8FAFC"
  accent: "#59C3FF"
  text-primary: "#14213D"
  text-secondary: "#475569"
  text-muted: "#64748B"
  border: "#E2E8F0"
  border-strong: "#CBD5E1"
  success-surface: "#E7F6F0"
  success: "#2E9D78"
  warning-surface: "#FFF4D6"
  warning: "#D97706"
  error-surface: "#FDECEF"
  error: "#D94C5A"
  park-magic-kingdom: "#79C7FF"
  park-epcot: "#9B8DFF"
  park-hollywood-studios: "#E86AA6"
  park-animal-kingdom: "#F59E5B"
typography:
  display:
    fontFamily: Nunito Sans
    fontSize: 40px
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: -0.02em
  heading-page:
    fontFamily: Nunito Sans
    fontSize: 28px
    fontWeight: 800
    lineHeight: 1.29
    letterSpacing: -0.01em
  heading-section:
    fontFamily: Nunito Sans
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.4
  body:
    fontFamily: Nunito Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: Nunito Sans
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.43
  caption:
    fontFamily: Nunito Sans
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
rounded:
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  full: 999px
spacing:
  2xs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
components:
  day-tab:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
    height: 96px
    width: 132px
  day-tab-selected:
    backgroundColor: "{colors.park-epcot}"
    textColor: "{colors.on-shell}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
    height: 96px
    width: 132px
  timeline-event:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
    height: 112px
  timeline-event-confirmed:
    backgroundColor: "{colors.success-surface}"
    textColor: "{colors.text-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
    height: 112px
  planning-alert-warning:
    backgroundColor: "{colors.warning-surface}"
    textColor: "{colors.text-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
    height: 120px
  planning-alert-error:
    backgroundColor: "{colors.error-surface}"
    textColor: "{colors.text-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
    height: 120px
  dining-credit-meter:
    backgroundColor: "{colors.success-surface}"
    textColor: "{colors.text-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
    height: 136px
    width: 320px
  lightning-lane-row:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
    height: 92px
  lightning-lane-row-selected:
    backgroundColor: "{colors.shell-elevated}"
    textColor: "{colors.on-shell}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
    height: 92px
  action-pill:
    backgroundColor: "{colors.park-epcot}"
    textColor: "{colors.on-shell}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "{spacing.md}"
    height: 44px
---

# WDW Planner Design System

## Overview

WDW Planner should feel like the calmest person in a busy family group chat: warm, specific, and always oriented toward the next useful action. The starfield shell and supplied park artwork provide the vacation emotion; the planning workspace stays light, quiet, and easy to scan. The system must never become a themed spreadsheet or a dashboard made from dozens of unrelated boxes.

## Colors

`shell` and `shell-elevated` carry navigation, hero artwork overlays, and in-park chrome. `surface` and `surface-subtle` hold dense planning content so text remains legible in bright outdoor conditions. `accent` is reserved for interaction and timeline continuity, while park colors identify destination context. Semantic colors always pair background and text tokens, and color is never the only signal: every warning, success, and conflict includes explicit language or an icon. Normal body text must meet WCAG AA contrast.

## Typography

Nunito Sans gives the planner a friendly, rounded character without sacrificing dense-data readability. `display` is limited to the trip hero, `heading-page` names a day or major screen, and `heading-section` separates itinerary areas. `body` carries descriptions, while `label` and `caption` handle statuses and metadata. Do not introduce decorative Disney-like script fonts into functional UI; official artwork may retain its own lettering inside supplied images.

## Layout

The 4px-based spacing scale supports compact itineraries while preserving breathing room around important decisions. Desktop uses a 12-column mental model with a wide schedule column and a narrower readiness rail; mobile collapses to one chronological stream with 16px side gutters. Day navigation may scroll horizontally, but the itinerary itself stays chronological and vertical. All interactive targets are at least 44px even when their visible mark is smaller.

## Elevation & Depth

Most hierarchy comes from surface contrast and spacing, not shadow. Use one restrained floating treatment—two soft, low-opacity shadows—for menus, dragged itinerary items, and truly elevated panels. Routine cards should remain flat or use `border`; stacking shadows on every row would recreate the visual noise the product is meant to remove.

## Shapes

The default 12px radius communicates approachable structure without becoming toy-like. Dense supporting surfaces may use 8px; hero panels and large mobile regions may use 16–24px. Pills and circular controls use `full`. Do not mix arbitrary radii inside one component family.

## Components

`day-tab` is compact navigation; only the active day uses a park-colored selected treatment. `timeline-event` is the primary chronological unit and varies by activity type and planning state. `planning-alert-warning` and `planning-alert-error` must explain the consequence and include a next action. `dining-credit-meter` always shows both a number and progress visualization. `lightning-lane-row` exposes tier and selection state without pretending to book anything; its error state explains invalid initial combinations. Components must support keyboard focus, loading, empty, disabled, and optimistic-edit rollback states in code.

## Do's and Don'ts

Do:

- Keep the selected day, next booking action, and unresolved conflict obvious within one glance.
- Preserve the family's language and original choices when importing a spreadsheet.
- Pair color with text labels such as “Confirmed,” “Conflict,” or “Group 1.”
- Design mobile screens for one-handed use in sun, crowds, and intermittent connectivity.
- Show the source date and applicability window for time-sensitive Disney rules.

Don't:

- Recreate the CSV as a grid of cells or rely on horizontal table scrolling.
- Turn every fact into a bordered card or floating panel.
- Use decorative SVG animation, novelty typography, or excessive themed ornament.
- Imply that the app books Disney products or guarantees availability.
- Hide naps, travel buffers, family subgroup notes, or reservation uncertainty behind secondary menus.
