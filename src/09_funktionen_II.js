

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : 
*/

//const prompt = require('prompt-sync')({sigint: true});

/*
// module: addition a + b | test:
output(add(2,2));
output(add(2,-2));
output(add(2,0));

function add(a,b) 
{
	return a + b;
}

// module: subtraction a - b | test:
output(subtract(2,2));
output(subtract(2,-2));
output(subtract(2,0));

function subtract(a,b) 
{
	return a - b;
}

// module: multiplication a + b | test:
output(multiply(2,2));
output(multiply(2,-2));
output(multiply(2,0));

function multiply(a,b) 
{
	return a * b;
}
*/
// module: division a + b | test:
output(divide(2,2));
output(divide(2,-2));
output(divide(2,0));
output(divide(0,2));

function divide(a,b) 
{
	if (b == 0) {
		return a;
	} else {
		return a / b;
	}
	//return a / b;
}



// output("hello");
// output(2);
function output(outputData) {
	console.log(outputData);
}
