import { styled } from "stitches";

export const AlertDialogFooter = styled("div", {
  display: "flex",
  flexDirection: "column-reverse",
  "@media (min-width: 640px)": {
    marginLeft: "0.5rem",
    gap: "0.5rem",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
AlertDialogFooter.displayName = "AlertDialogFooter";
