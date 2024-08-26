import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-primary bg-primary text-white hover:bg-primary/80",
        secondary:
          "border-secondary bg-secondary text-white hover:bg-secondary/80",
        danger:
          "border-danger bg-danger text-white hover:bg-danger/80",
        warning:
        "border-warning bg-warning text-dark-700 hover:bg-warning/80",
        success:
        "border-success bg-success text-white hover:bg-success/80",
        dark:
        "border-dark-900 bg-dark-900 text-white hover:bg-dark-900/80",
      },
      size: {
        icon: "p-0",
        default: "px-2 py-0.5",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    },
  }
)

const Badge = React.forwardRef(function Badge(
    { className, variant, size, asChild = false, ...props },
    ref
  ) {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(badgeVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  });
  Badge.displayName = "Badge";
  

export { Badge, badgeVariants }