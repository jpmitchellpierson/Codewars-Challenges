// *** Welcome To The City *** //
// Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space betweeen each, and the length of the name array in test cases will vary.
// sayHello(['John', 'Smith'], 'Phoenix', 'Arizona') --> 'Hello, John Smith! Welcome to Phoenix, Arizona!'
function sayHello( name, city, state ) {
  let nameStr = name.reduce((a, c) => {return name.indexOf(c)===name.length-1?a+=c+'! ':a+=c+' ';},'');
  return 'Hello, ' + nameStr + 'Welcome to ' + city + ', ' + state + '!';
}