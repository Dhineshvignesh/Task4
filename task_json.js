var user = {name: "person1", age:5};
var user1 = {age:5, name:"person 1"};
function isEqual(user, user1){
    // console.log(user);
    // console.log(user1);
    var userkeys = object.keys(user);
    var user1keys = object.keys(user1);
    console.log(user['name']);
    console.log(user['age']);
//     console.log(user1['name']);
//    console.log(user1['age']);
   if (userkeys.length != user1keys.lenth){
    return false;
   } 
   for (var userkey of userkeys){
    console.log(userkeys);
    console.log(userkey);
    if (user[userkey] != user1[userkey]){
        return false;

    }
   }
   return true;
}
console.log(isEqual(user, user1));