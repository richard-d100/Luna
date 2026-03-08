import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  container?: boolean;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, container = true, children, ...props }, ref) => {
    return (
      <section ref={ref} className={cn("py-16 md:py-24", className)} {...props}>
        {container ? (
          <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
            {children}
          </div>
        ) : (
          children
        )}
      </section>
    );
  }
);
Section.displayName = "Section";
