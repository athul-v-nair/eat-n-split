import { FriendType } from "../Friend/types";

export interface FriendsListPropType{
    friends: FriendType[];
    handleSelection: (friend: FriendType)=> void
    selected: FriendType | null
}