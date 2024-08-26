import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-white shadow hover:bg-primary/90",
        default_ghost: "text-primary hover:bg-accent hover:bg-primary/90 hover:text-white",
        default_link: "text-primary underline-offset-4 hover:underline",
        outline_default: "border-[1.5px] border-primary bg-transparent text-primary shadow-sm hover:bg-accent hover:text-accent-foreground hover:bg-primary hover:text-white",

        danger: "bg-danger text-white shadow-sm hover:bg-danger/90",
        danger_ghost: "text-danger hover:bg-accent hover:bg-danger/90 hover:text-white",
        danger_link: "text-danger underline-offset-4 hover:underline",
        danger_outline: "border-[1.5px] border-danger bg-transparent text-danger shadow-sm hover:bg-accent hover:text-accent-foreground hover:bg-danger/90 hover:text-white",



        dark: "bg-dark-700 text-white font-semibold shadow hover:bg-dark-700/85",
        secondary: "bg-secondary text-white shadow-sm hover:bg-secondary/80",
        success: "bg-success text-white shadow-sm hover:bg-success/80",
        warning: "bg-warning text-white shadow-sm hover:bg-warning/80",
        info: "bg-info text-white shadow-sm hover:bg-info/80",


        outlinePrimary: "border-[2px] border-primary bg-transparent text-primary shadow-sm hover:bg-accent hover:text-accent-foreground",
        outline_dark: "border-[1.5px] border-dark-700 bg-transparent text-dark-900 shadow-sm hover:bg-accent hover:text-accent-foreground hover:bg-dark-700 hover:text-white",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",

        light_outline: "border-[1.5px] border-light bg-transparent text-light shadow-sm hover:bg-accent hover:text-accent-foreground hover:bg-white/90 hover:text-dark-900",

      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(function Button(
  { className, variant, size, asChild = false, ...props },
  ref
) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };
