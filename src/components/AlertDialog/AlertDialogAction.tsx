import { Action } from "@radix-ui/react-alert-dialog";
import { cssButton } from "components";
import { styled } from "stitches";

export const AlertDialogAction = styled(Action, cssButton);

AlertDialogAction.displayName = Action.displayName;
