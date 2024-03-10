import { styled } from "stitches";
import { Overlay } from "@radix-ui/react-alert-dialog";

export const AlertDialogOverlay = styled(Overlay, {
  position: "fixed",
  top: "0",
  right: "0",
  bottom: "0",
  left: "0",
  zIndex: 50,
  backgroundColor: "hsl(0,0,0,0.8)",
});
AlertDialogOverlay.displayName = Overlay.displayName;
