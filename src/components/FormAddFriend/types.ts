import { FriendType } from "../Friend/types";

export interface FormAddFriendPropType{
    handleAddNewFriends: (friend: FriendType)=> void;
}