import * as React from "react";
import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  id: string;
  title?: string;
  subtitle?: string;
};

export function Section({ id, title, subtitle, className, children, ...props }: Props) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 py-14 md:py-20", className)}
      {...props}
    >
      {(title || subtitle) && (
        <div className="mb-8">
          {subtitle && (
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          )}
          {title && (
            <h2 className="mt-1 text-2xl font-semibold tracking-tight md:text-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              {title}
            </h2>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
