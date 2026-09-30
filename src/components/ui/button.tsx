import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex h-12 items-center justify-center gap-2 rounded-full border px-6 text-[0.7rem] font-semibold uppercase tracking-[0.18em] transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        copper: "border-primary bg-primary text-primary-foreground hover:border-copper-light hover:bg-copper-light",
        outline: "border-cream/40 bg-transparent text-cream hover:border-cream hover:bg-cream hover:text-charcoal",
        dark: "border-charcoal bg-charcoal text-cream hover:border-primary hover:bg-primary",
        default: "border-primary bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "border-destructive bg-destructive text-destructive-foreground hover:bg-destructive/90",
        secondary: "border-secondary bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "border-transparent bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground",
        link: "h-auto border-transparent bg-transparent px-0 text-primary underline-offset-4 hover:underline",
      },
      size: { default: "h-12 px-6", wide: "h-14 px-8", sm: "h-9 px-3", lg: "h-11 px-8", icon: "size-10 p-0" },
    },
    defaultVariants: { variant: "copper", size: "default" },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants> & { asChild?: boolean };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
  },
);

Button.displayName = "Button";
