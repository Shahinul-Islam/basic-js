
function bestFriend(friends) {
    let bestFriend = friends[0];
    for(let i = 0; i < friends.length; i++){
    if (bestFriend.length < friends[i].length) {
       bestFriend = friends[i];
    }
}
 return bestFriend;   
}

let friends = ["babu", "shaikat", "masum", "ridoy", "rasel", "samsuzzaman", "shawon", "sizan arefin"];
console.log(bestFriend(friends));