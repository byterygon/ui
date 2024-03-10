import { Title } from "@radix-ui/react-alert-dialog";
import { styled } from "stitches";

export const AlertDialogTitle = styled(Title, {
  fontSize: "1.125rem",
  lineHeight: "1.75rem",
  fontWeight: 600,
});
AlertDialogTitle.displayName = Title.displayName;
