

// Type your code below this line!
function FriendList(){
    this.friends = []

}

const friendList1 = new FriendList()

const numberOfFriends = process.argv[3]

for(let i = 1; i <= numberOfFriends; i++){
    friendList1.friends.push(process.argv[i + 3])
}

console.log(friendList1.friends)

// Type your code above this line!

