/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funkionsaufruf | Call
//test();

// Funktionsrumpf | callee
// Funktionsdeklaration
//function test()
//{
//    console.log("Katzen sind toll!");
//}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

//Call
//ausgabeNamen();

// Funktion
//function ausgabeNamen() 
{
    // interne Variable | What happens in Vegas...
//    let firstName = "Ripley";
//    console.log("Hey " + firstName + "!");
}

// console.log(firstName); // Fehler scope

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

// Argumente sind Daten für Parameter
/*ausgabeNamen2("Yuffie"); // Argument
ausgabeNamen2("Legoshi");
ausgabeNamen2("Ripley");

function ausgabeNamen2(firstName) // Parameter
{
    console.log("Hey " + firstName + "!");
}*/

//ausgabeNamenParams("Keks","Krümel");
/*
const prompt = require('prompt-sync')({sigint: true});
ausgabeNamenParams(prompt("Vorname: "), prompt("Nachname: "));

function ausgabeNamenParams(firstName, familyName) // Parameter
{
    console.log("Hey " + firstName + " " + familyName + "!");
}
*/
/***** Funktionen 03a *****/
// 03a. Vorbereitung -Trennen der Funktionalitäten
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

/*ausgabeNamenSRP("Keks","Krümel");

function ausgabeNamenSRP(firstName, familyName) // Parameter
{
    // 1. Funktionalität: string composing
    const GAP = " ";
    let outputStr = "Hey " + firstName + GAP + familyName + "!"

    // 2. Funktionalität: string output
    console.log(outputStr);
}
*/
/***** Funktionen 03b *****/

// 1. Funktionalität (string composing)

output(getString("Ellen","Ripley"));

function getString(firstName,familyName)
{
    const GAP = " ";
    let outputStr = "Hey " + firstName + GAP + familyName + "!";
    return outputStr; // Ausgabe
    console.log("blubb");
}

// 2. Funktionalität (string output)
/*
output("hi");
output(2);
output(true);
*/
function output(outputData)
{
    console.log(outputData);
}
