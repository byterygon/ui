import { Header, Trigger } from "@radix-ui/react-accordion";
import { styled } from "../stitches.config";

import { ChevronDownIcon } from "@radix-ui/react-icons";
import { forwardRef } from "react";
const StyledHeader = styled(Header, {
  display: "flex",
});
const StyledTrigger = styled(Trigger, {
  display: "flex",
  paddingTop: "1rem",
  paddingBottom: "1rem",
  flex: "1 1 0%",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
  fontWeight: 500,
  transitionProperty: "all",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: "300ms",
  ":hover": { textDecoration: "underline" },
  "&[data-state=open]>svg": {
    transform: "rotate(180deg)",
  },
});
const StyledIcon = styled(ChevronDownIcon, {
  shrink: "0",
  width: "1rem",
  height: "1rem",
  transitionProperty: "transform",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: "200ms",
  color: "hsl($muted-foreground)",
});
export const AccordionTrigger = forwardRef<
  React.ElementRef<typeof StyledTrigger>,
  React.ComponentPropsWithoutRef<typeof StyledTrigger>
>(({ children, ...props }, ref) => (
  <StyledHeader>
    <StyledTrigger {...props} ref={ref}>
      {children}
      <StyledIcon />
    </StyledTrigger>
  </StyledHeader>
));

AccordionTrigger.displayName = Trigger.displayName;
