// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]; 

function destructivelyAppendDriver(name) {
  drivers.push(name); 
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name); 
}

function destructivelyRemoveLastDriver() {
  drivers.pop(); 
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift(); 
}

function appendDriver(name) {
  var newDrivers = drivers.slice(0); 
  newDrivers.push(name); 
  return newDrivers; 
}

function prependDriver(name) {
  var newDrivers = drivers.slice(0); 
  newDrivers.unshift(name); 
  return newDrivers; 
}

function removeLastDriver() {
  var newDrivers = drivers.slice(0); 
  newDrivers.pop(); 
  return newDrivers; 
}

function removeFirstDriver() {
  var newDrivers = drivers.slice(0); 
  newDrivers.shift(); 
  return newDrivers; 
}

