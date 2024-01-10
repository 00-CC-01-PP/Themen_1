
/*********   CODE CHALLENGE 01 **********/
 
/*
    Geben Sie über eine Prompt-Anforderung eine Zahl ein.
    Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
    Berechnen Sie die Summe der beiden Zahlen.
    Geben Sie die Summe der Zahlen in die Konsole aus:
    "Die Summe der Zahlen ist: summe"
*/

/*
    const prompt = require('prompt-sync')({sigint: true});
    //let firstNumber = prompt("Erste Zahl: ");
    var num1 = prompt("Erste Zahl: ");
    //let secondNumber = prompt("Zweite Zahl: ");
    var num2 = prompt("Zweite Zahl: ");
    //let prompt();
    var sum = num1 + num2;
    console.log(firstNumber + " " + "+" + " " + secondNumber + "=" )
    console.log("Die Summe der Zahlen ist: " + sum );
*/

/*
    let a = prompt("Erste Zahl: ");
    let b = prompt("Zweite Zahl: ");
    console.log(a + " " + "und" + " " + b + " ergeben?");
    let c = prompt("Ergebnis: ");
    console.log("Die Summe der Zahlen ist: " + c);
*/


    const prompt = require('prompt-sync')({sigint: true});

    let a = Number(prompt("Erste Zahl: "));
    let b = Number(prompt("Zweite Zahl: "));
    let c = a + b;
    console.log("Die Summe der Zahlen ist: " + c);
