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

ausgabeNamen2("Yuffie");
ausgabeNamen2("Legoshi");
ausgabeNamen2("Ripley");

function ausgabeNamen2(firstName) // Parameter
{
    console.log("Hey " + firstName + "!");
}
