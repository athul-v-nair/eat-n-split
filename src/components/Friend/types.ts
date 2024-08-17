export interface FriendType{
    id: number
    name: string
    image: string
    balance: number
}

export interface FriendPropType{
    friend: FriendType
    handleSelection: (friend: FriendType)=> void
    selected: FriendType | null
}