import type { ComponentPropsWithoutRef, ReactNode } from "react";

type TypographyProps = ComponentPropsWithoutRef<"p"> & {
  children: ReactNode;
};

type HeadingProps = Omit<ComponentPropsWithoutRef<"h1">, "children"> & {
  children: ReactNode;
};

export function Display({ children, className = "", ...props }: HeadingProps) {
  return (
    <h1 className={`type-display ${className}`.trim()} {...props}>
      {children}
    </h1>
  );
}

export function PageHeading({ children, className = "", ...props }: HeadingProps) {
  return (
    <h1 className={`type-page-heading ${className}`.trim()} {...props}>
      {children}
    </h1>
  );
}

export function SectionHeading({ children, className = "", ...props }: HeadingProps) {
  return (
    <h2 className={`type-section-heading ${className}`.trim()} {...props}>
      {children}
    </h2>
  );
}

export function Text({ children, className = "", ...props }: TypographyProps) {
  return (
    <p className={`type-body ${className}`.trim()} {...props}>
      {children}
    </p>
  );
}

export function Label({ children, className = "", ...props }: TypographyProps) {
  return (
    <p className={`type-label ${className}`.trim()} {...props}>
      {children}
    </p>
  );
}

export function Caption({ children, className = "", ...props }: TypographyProps) {
  return (
    <p className={`type-caption ${className}`.trim()} {...props}>
      {children}
    </p>
  );
}
