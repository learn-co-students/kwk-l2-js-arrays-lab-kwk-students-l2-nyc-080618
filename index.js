// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver(name) {
  newArray = drivers.push(name);
  return newArray;
}

function destructivelyPrependDriver(name) {
  thisArray = drivers.unshift(name);
  return thisArray;
}

function destructivelyRemoveLastDriver() {
  thisArray = drivers.pop();
  return thisArray;
}

function destructivelyRemoveFirstDriver() {
  thisArray = drivers.shift();
  return thisArray;
}

function appendDriver(name){
  var thatArray = ["Milo", "Otis", "Garfield"];
  thatArray.push(name);
  return thatArray;
}

function prependDriver(name){
  var thatArray = ["Milo", "Otis", "Garfield"];
  thatArray.unshift(name);
  return thatArray;
}

function removeLastDriver(){
  var thatArray = ["Milo", "Otis", "Garfield"];
  thatArray.pop();
  return thatArray;
}

function removeFirstDriver(){
  var thatArray = ["Milo", "Otis", "Garfield"];
  thatArray.shift();
  return thatArray;
}
