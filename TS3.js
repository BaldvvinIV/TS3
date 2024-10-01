var Days = ["", "Monday" /* DaysOfWeek.first */, "Tuesday" /* DaysOfWeek.second */, "Wednesday" /* DaysOfWeek.third */, "Thursday" /* DaysOfWeek.fourth */, "Friday" /* DaysOfWeek.fifth */, "Saturday" /* DaysOfWeek.sixth */, "Sunday" /* DaysOfWeek.seventh */];
var Month = ["", "January" /* Months.first */, "February" /* Months.second */, "March" /* Months.third */, "April" /* Months.fourth */, "May" /* Months.fifth */, "June" /* Months.sixth */, "July" /* Months.seventh */, "August" /* Months.eighth */, "September" /* Months.ninth */, "October" /* Months.tenth */, "November" /* Months.eleventh */, "December" /* Months.twelfth */];
var Color = ["Red" /* Colors.first */, "Green" /* Colors.second */, "Blue" /* Colors.third */];
var Planet = ["Earth" /* planets.first */, "Mars" /* planets.second */, "Jupiter" /* planets.third */, "Saturn" /* planets.fourth */, "Uranus" /* planets.fifth */, "Neptune" /* planets.sixth */];
var Fruit = ["Apple" /* fruits.first */, "Banana" /* fruits.second */, "Orange" /* fruits.third */];

console.log(Days);
console.log(Month);
console.log(Color);
console.log(Planet);
console.log(Fruit);

let y = Days[prompt("Enter the number between 0-7")];
console.log(y);

let x = Month[prompt("Enter the number between 0-12")];
console.log(x);

let z = prompt("Choose color from Red, Green, Blue");
let found = false;
for (let i = 0; i < Color.length; i++) {
    if (z == Color[i]) {
        found = true;
        console.log("The color is " + Color[i]);
        break;
    }
}

if (found == false) {
    console.log("There is no such color");
}

let w = prompt("Назови планету и узнай его порядковый номер в солнечной системе");


for (let i = 0; i < Planet.length; i++) {
    if (w == Planet[i]) {
        console.log("The planet is " + Planet[i] + " and its number is " + i);
    }
}



let v = prompt("Choose fruit");
let found1 = false;
for (let i = 0; i < Fruit.length; i++) {
    if (v == Fruit[i]) {
        found1 = true;
        console.log("The fruit is delicous");
    }
}
if (found1 == false) {
    console.log("There is no such fruit");
}



