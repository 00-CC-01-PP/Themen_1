
// Zeilenkommentar

/* 
    Blockkommentar 
*/

/***** Variablen 01 *******/

//console.log("Hi!"); // Ausgabe
//console.log(Hi); // " " fehlt und sorgt für Fehlermeldung

/* Deklaration + Wertzuweisung I */

//let firstName; // Deklaration (Definition)
//console.log(firstName);
//firstName = "Max"; // Wertzuweisung (assignment)
//console.log(firstName);
//let familyName = "Mütze"; // Deklaration + Wertzuweisung
//console.log("Hi, ich bin " + firstName + " " + familyName + "!");

/* 
Wertzuweisung II + Datentypen
JS ist eine untypisierte Sprache
*/

let test; // Deklaration
console.log("Datentyp: " + typeof test);
console.log("Inhalt: " + test);
console.log("------------");
test = "hello"; // string
console.log("Datentyp: " + typeof test);
console.log("Inhalt: " + test);
console.log("------------");
test = 2; // number
console.log("Datentyp: " + typeof test);
console.log("Inhalt: " + test);
console.log("------------");
test = true; // boolean
console.log("Datentyp: " + typeof test);
console.log("Inhalt: " + test);

