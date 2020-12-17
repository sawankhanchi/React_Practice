/* Spread Operator in React */


// 1st case

const fullname = ["sawan", "khanchi"];

const biodata = [1, 25, "male", ...fullname];

console.log(fullname);
console.log(biodata);

// 2nd case

var shooterGames = ['call of Duty', 'Far Cry', 'Resident Evil'];
var racingGames = ['Need For Speed', 'Burnout' ];
var games = [...shooterGames, ...racingGames];

console.log(games);

// 3rd case

var shooterGames = ['call of Duty', 'Far Cry', 'Resident Evil'];
var [first, ...remaining] = shooterGames;

console.log(first);
console.log(remaining);


// In Case of Array Object 

const fullName = {
    fname: "sawan", 
    lname: "khanchi",
};

const bioData = {
    id: 1, 
    ...fullName,
    age: 26,
    gender: "male"
};

console.log(bioData);
