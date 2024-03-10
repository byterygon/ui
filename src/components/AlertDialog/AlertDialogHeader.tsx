import { styled } from "stitches";

export const AlertDialogHeader = styled("div", {
  display: "flex",
  marginTop: "0.5rem",
  flexDirection: "column",
  textAlign: "center",
  "@media (min-width: 640px)": { textAlign: "left" },
});
AlertDialogHeader.displayName = "AlertDialogHeader";
