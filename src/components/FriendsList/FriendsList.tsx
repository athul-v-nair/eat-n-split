import Friend from "../Friend/Friend";
import { FriendsListPropType } from "./types";

const FriendsList = ({friends, handleSelection, selected}: FriendsListPropType) => {
  return (
    <>
      <ul>
        {friends.map((friend) => (
          <Friend friend={friend} handleSelection={handleSelection} selected={selected} key={friend.id}/>
        ))}
      </ul>
    </>
  );
};

export default FriendsList;
