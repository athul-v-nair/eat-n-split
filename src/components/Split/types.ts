import { FriendType } from "../Friend/types";

export interface SplitPropType{
    selected: FriendType;
    handleSplitBill: (value:number) => void
}