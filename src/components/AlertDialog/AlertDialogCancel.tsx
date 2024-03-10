import { Cancel } from "@radix-ui/react-alert-dialog";
import { cssButton } from "components";
import { css, styled } from "stitches";
const cssAlertDialogCancel = css(cssButton, {
  defaultVariants: {
    variant: "outline",
    size: "default",
  },
  marginTop: "0.5rem",
  "@media (min-width: 640px)": { marginTop: "0" },
});
export const AlertDialogCancel = styled(Cancel, cssAlertDialogCancel);
