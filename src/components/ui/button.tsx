import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary/80 text-primary-background hover:bg-primary/90",
        destructive:
          "bg-red-600 text-white hover:bg-red-600/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "bg-muted/50 hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        premium : "bg-gradient-to-r from-[hsl(142.1,76.2%,36.3%)] via-[hsl(142.1,56.2%,36.3%)] to-[hsl(0,0%,90%)] text-white border-0",
      },
      size: {
        default: "h-9 px-3 py-2",
        sm: "h-8 rounded-md px-2",
        lg: "h-10 rounded-md px-5 text-md",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
      isLoading? : boolean;
      icon? : React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, isLoading, disabled, icon : Icon, ...props }, ref) => {

    return (
        <button
          className={cn("flex items-center gap-1", buttonVariants({ variant, size, className }))}
          ref={ref}
          disabled={ disabled || isLoading || false}
          {...props}
        >
          {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
          {Icon && Icon}
          {children}
          </button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
