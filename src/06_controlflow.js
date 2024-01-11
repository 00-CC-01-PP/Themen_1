//  Entscheidungsstrukturen | control flow

//  Deklaration + Assignment
const ageJohn = 30;
const ageMark = 30;

//  Deklaration
let isJohnOlder, isJohnEqual;

//  Test | Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

    //Ausgabe
    console.log("ageJohn: " + ageJohn);
    console.log("ageMark: " + ageMark);
    console.log("isJohnOlder: " + isJohnOlder);
    console.log("isJohnEqual: " + isJohnEqual);
    console.log("------------------");

/************ IF  ************/
// TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos
// Türsteher-Politik (Doors 10 p.m.)

//if (true)
//if (false)
//if (isJohnOlder)
/*if(ageJohn > ageMark)
{
    console.log("John ist älter!");
}*/

/*if (ageJohn > ageMark)
{
    console.log("John ist älter!");
} 
else 
{
    console.log("John ist jünger!");
}*/

/*********  Ternäre (ternary) Schreibweise **********/
//console.log((isJohnOlder) ? "John is older" : "John is younger");

/************ IF - ELSE IF  ************/
// mit alternativen Fällen (älter, jünger, gleich alt)

if (isJohnOlder)
// Ja-Zweig
{
    console.log("John ist älter!");
} 
// alternative Zweig ... 1
else if (isJohnEqual)
{
    console.log("John ist gleich alt!");
}
// gemeinsame Alternative
else 
{
    console.log("John ist jünger!");
}
