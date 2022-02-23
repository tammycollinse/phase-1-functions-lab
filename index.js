// Code your solution in this file!
// function distanceFromHqInBlocks(numBlocks){
// let startLocation;
// //const hqLocation = 42;
// if (location > 42){
// return numBlocks = startLocation - 42;
// }
// else if (startLocation < 42){
// return numBlocks = 42 - startLocation;   
// }
// }

// function distanceFromHqInFeet(distanceInFeet){
//   distanceFromHqInBlocks(numBlocks)
// distanceInFeet = numBlocks * 264;
// }

// function distanceTravelledInFeet(start , destination) {

//    let distanceInFeet = (start - destination) * 264;

// }



function distanceFromHqInBlocks(location){
if (location > 42){
  let distanceInBlocks = location - 42;
  console.log(distanceInBlocks);
  return distanceInBlocks
} else if (location < 42){
  let distanceInBlocks = 42 - location;
  console.log(distanceInBlocks);
  return distanceInBlocks
}
return distanceInBlocks;
}
distanceFromHqInBlocks(50);

function distanceFromHqInFeet(location){
  if (location > 42){
    let distanceInBlocks = location - 42;
    let distanceInFeet = distanceInBlocks * 264
    console.log(distanceInFeet);
    return distanceInFeet;
  } else if (location < 42){
    let distanceInBlocks = 42 - location;
    let distanceInFeet = distanceInBlocks * 264
    console.log(distanceInFeet);
    return distanceInFeet
  }
  return distanceInFeet;
}

distanceFromHqInFeet(43);

function distanceTravelledInFeet(start, destination){
 if ( start > destination) {
let numFeet = (start - destination) * 264;
return numFeet;
} else if (destination > start){
  let numFeet = (destination - start) * 264;
return numFeet;
}
}

function calculatesFarePrice(start, destination){
let numberFeet;
  if ( start > destination) {
  numberFeet = (start - destination) * 264;
    
    } else if (destination > start){
   numberFeet = (destination - start) * 264;
     }
  if (numberFeet <= 400){
  let fare = 0;
  return fare; 
  } 
  if ( numberFeet > 400){
    if (numberFeet < 2000){
    let fare = (numberFeet - 400) * 0.02  
    return fare;
    }
  }

  if (numberFeet > 2000){
    if (numberFeet < 2500){
      let fare = 25; 
      return fare;  
    }
  } 
  if ( numberFeet > 2500 ){
    return "cannot travel that far";
  }
}

calculatesFarePrice(34,24);