import { useState } from "react";
import Button from "./components/Button/Button";
import FormAddFriend from "./components/FormAddFriend/FormAddFriend";
import FriendsList from "./components/FriendsList/FriendsList";
import Split from "./components/Split/Split";
import { FriendType } from "./components/Friend/types";
import { initialFriends } from "./constants/constants";

function App() {
  const [showAddFriend, setShowAddFriend] = useState<boolean>(false);
  const [friends, setFriends] = useState<FriendType[]>(initialFriends);
  const [selected, setSelected] = useState<FriendType | null>(null);
  function handleShowAddFriend() {
    setShowAddFriend((prev) => !prev);
  }

  function handleAddNewFriends(friend: FriendType) {
    setFriends((prev) => [...prev, friend]);
    setShowAddFriend(false);
  }

  function handleSelection(friend: FriendType) {
    setSelected((selected) => (selected?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleSplitBill(value: number) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selected?.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelected(null)
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          handleSelection={handleSelection}
          selected={selected}
        />
        {showAddFriend ? (
          <FormAddFriend handleAddNewFriends={handleAddNewFriends} />
        ) : (
          ""
        )}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selected && (
        <Split selected={selected} handleSplitBill={handleSplitBill} />
      )}
    </div>
  );
}

export default App;
