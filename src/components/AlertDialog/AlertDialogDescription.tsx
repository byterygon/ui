import { styled } from "stitches";
import { Description } from "@radix-ui/react-alert-dialog";
export const AlertDialogDescription = styled(Description, {
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
  color: "hsl($muted-foreground)",
});
AlertDialogDescription.displayName = Description.displayName;
