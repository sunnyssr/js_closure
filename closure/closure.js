// Exercise 1
let nonsense = (string) => {
  var blab = function(){
    alert(string);
  }
  blab();
}
nonsense("Something!");

// Exercise 2
let nonsense = (string) => {
  var blab = function(){
    alert(string);
  }
  setTimeout(blab, 2000);
}

// Exercise 3
let nonsense = (string) => {
  var blab = function(){
    alert(string);
  }
  return blab;
}
let blabLater = nonsense("some");
let blabAgainLater = nonsense("second example");

// Exercise 4
blabLater() // alert "some"
blabAgainLater() // alert "second example"

// Exercise 5
var lastNameTrier = function(firstName){


  var innerFunction = function(lastName) {
    //does stuff
    return firstName + " " + lastName;    
  }
  //maybe returns something here
  return innerFunction;
};

var firstNameFarmer = lastNameTrier('Farmer'); //logs nothing
firstNameFarmer('Brown'); //logs 'Farmer Brown'

// Exercise 6
let storyWriter = () => {
  let privateStr = "";

  return {
    erase : () => {
      privateStr = "";
      return privateStr;
    },
    addWords: (string) =>{
      privateStr += " " + string
      return privateStr;
    }
  }
}