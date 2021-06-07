var count = 0;

function cc(card) {
  // Only change code below this line
  //When a return statement is reached, the execution of the current function stops and control returns to the calling location.
  if(card >= 2 && card <= 6) {
    count += 1;
  } else if(card >= 7 && card <= 9) {
    count += 0;
  } 
    
    switch(card){
      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
        count -= 1;
        break;
    }
if (count > 0) {
    return count + " Bet "
    } else if (count <= 0) {
    return count + " Hold "
    }
      
  
  
  return count;
  // Only change code above this line
}
cc(2); 
cc(3); 
cc(7); 
cc('K'); 
cc('A');