import { Content } from "@radix-ui/react-accordion";

import { styled, keyframes } from "../stitches.config";
import { forwardRef } from "react";

const StyledContent = styled(Content, {
  overflow: "hidden",
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
});

const AccordionUp = keyframes({
  "0%": { height: "0" },
  "100%": { height: "var(--radix-accordion-content-height)" },
});
const AccordionDown = keyframes({
  "0%": { height: "var(--radix-accordion-content-height)" },
  "100%": { height: "0" },
});
const StyledContentContainer = styled("div", {
  paddingTop: "0",
  paddingBottom: "1rem",
  "data-[state=closed]": {
    animation: `${AccordionUp} 0.2s ease-out`,
  },
  "data-[state=open]": {
    animation: `${AccordionDown} 0.2s ease-out`,
  },
});
const AccordionContent = forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(({ className, children, ...props }, ref) => (
  <StyledContent ref={ref} className="" {...props}>
    <StyledContentContainer>{children}</StyledContentContainer>
  </StyledContent>
));
AccordionContent.displayName = Content.displayName;
