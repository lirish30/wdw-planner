import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        shell: "var(--color-shell)",
        "shell-elevated": "var(--color-shell-elevated)",
        surface: "var(--color-surface)",
        "surface-subtle": "var(--color-surface-subtle)",
        accent: "var(--color-accent)",
        ink: "var(--color-text-primary)",
        "ink-secondary": "var(--color-text-secondary)",
        muted: "var(--color-text-muted)",
        border: "var(--color-border)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        error: "var(--color-error)",
      },
      borderRadius: {
        shell: "var(--radius-md)",
      },
      fontFamily: {
        sans: ["var(--font-nunito-sans)", "Nunito Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
