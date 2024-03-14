import { styled } from "stitches";

export const Alert = styled("div", {
  position: "relative",
  paddingTop: "0.75rem",
  paddingBottom: "0.75rem",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  borderRadius: "0.5rem",
  borderWidth: "1px",
  width: "100%",
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
  "&>svg+div": {
    transform:
      "translate(0, -3px) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1)",
  },
  "&>svg": {
    position: "absolute",
    left: "1rem",
    top: "1rem",
    color: "hsl($foreground)",
  },
  "&>svg~*": {
    paddingLeft: "1.75rem",
  },
  variants: {
    variant: {
      default: {
        backgroundColor: "hsl($background)",
        color: "hsl($foreground)",
      },
      destructive: {
        borderColor: "hsl($destructive)",
        borderWidth: "1px",
        color: "hsl($destructive)",
        "[&>svg]": {
          color: "hsl($destructive)",
        },
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
Alert.displayName = "Alert";
