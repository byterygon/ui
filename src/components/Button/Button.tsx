import { Slot } from "@radix-ui/react-slot";
import React from "react";
import { css, styled } from "stitches";
import { VariantProps } from "@stitches/react";

export const cssButton = css({
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "0.375rem",
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
  fontWeight: 500,
  whiteSpace: "nowrap",
  transitionProperty:
    "color, background-color, border-color, text-decoration-color, fill, stroke",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: "300ms",

  variants: {
    variant: {
      default: {
        backgroundColor: "hsl($primary)",
        color: "hsl($primary-foreground)",
        boxShadow:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        ":hover": {
          backgroundColor: "hsl($primary/.9)",
        },
      },
      secondary: {
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",

        backgroundColor: "hsl($secondary)",
        color: "hsl($secondary-foreground)",
        ":hover": {
          backgroundColor: "hsl($secondary/.8)",
        },
      },
      destructive: {
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",

        backgroundColor: "hsl($destructive)",
        color: "hsl($destructive-foreground)",
        ":hover": {
          backgroundColor: "hsl($destructive/.9)",
        },
      },
      outline: {
        borderWidth: "1px",
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        ":hover": {
          backgroundColor: "hsl($accent)",
          color: "hsl($accent-foreground)",
        },
        backgroundColor: "hsl($background)",
      },
      ghost: {
        ":hover": {
          backgroundColor: "hsl($accent)",
          color: "hsl($accent-foreground)",
        },
      },
      link: {
        textUnderlineOffset: "4px",
        ":hover": { textDecoration: "underline" },
        color: "hsl($primary)",
      },
    },
    size: {
      default: {
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
      },
      sm: {
        paddingLeft: "0.75rem",
        paddingRight: "0.75rem",
        borderRadius: "0.375rem",
        height: "2rem",
        fontSize: "0.75rem",
        lineHeight: "1rem",
      },
      lg: {
        paddingLeft: "2rem",
        paddingRight: "2rem",
        borderRadius: "0.375rem",
        height: "2.5rem",
      },
      icon: {
        height: "2.25rem",
        width: "2.25rem",
      },
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});
console.log(cssButton());
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantProps<typeof cssButton>["variant"];
  size?: VariantProps<typeof cssButton>["size"];
  asChild?: boolean;
}

const StyledSlot = styled(Slot, cssButton);
const StyledButton = styled("button", cssButton);

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, ...props }, ref) => {
    const Comp = asChild ? StyledSlot : StyledButton;
    return <Comp ref={ref} {...props} />;
  }
);

Button.displayName = "Button";
