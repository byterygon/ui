import { keyframes, styled } from "stitches";
import { Content } from "@radix-ui/react-alert-dialog";
import { forwardRef } from "react";
import { AlertDialogPortal } from "./AlertDialogPortal";
import { AlertDialogOverlay } from "./AlertDialogOverlay";

const enterKeyframe = keyframes({
  "0%": {
    opacity: 0,
    transform: "translate3d(-50%,-48%,0) scale3d(0.95,0.95,0.95) rotate(0)",
  },
});
const exitKeyframe = keyframes({
  to: {
    opacity: "0",
    transform: "translate3d(-50%,-48%,0) scale3d(0.95,0.95,0.95) rotate(0)",
  },
});
const StyledContent = styled(Content, {
  display: "grid",
  position: "fixed",
  zIndex: 50,
  padding: "1.5rem",
  gap: "1rem",
  borderWidth: "1px",
  width: "100%",
  maxWidth: "32rem",
  transitionDuration: "200ms",
  boxShadow:
    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%) rotate(0) skewX(0) skewY(0) scaleY(1)",
  "@media (min-width: 640px)": { borderRadius: "0.5rem" },
  "&[data-state='closed']": {
    animationName: `${exitKeyframe}`,
    animationDuration: 0.15,
  },
  "&[data-state=open]": {
    animation: `${enterKeyframe} 0.2s ease-out`,
  },
});

export const AlertDialogContent = forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <StyledContent ref={ref} {...props} />
  </AlertDialogPortal>
));
AlertDialogContent.displayName = Content.displayName;
