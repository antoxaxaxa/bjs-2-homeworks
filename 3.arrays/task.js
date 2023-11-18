function compareArrays(arr1, arr2){
    if (arr1.length !== arr2.length){
        return false;
    }

    const isTrue = arr1.every((element,i) =>{
        return element === arr2[i];
    })
    return isTrue;
}

function getUsersNamesInAgeRange(users, gender) {
  
  

  const filteredUsers = users.filter((user) => user.gender === gender);
  
  if (filteredUsers.length === 0 || (gender !== "мужской" && gender !== "женский")) {
    return 0; 
  }

  const ageSum = filteredUsers.map((user) => user.age ).reduce((a, b) => a + b);
  const result = ageSum/filteredUsers.length;
  
  
 
 
  return result;
}  