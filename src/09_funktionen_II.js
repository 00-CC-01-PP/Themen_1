

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  	
2. Auswahl Rechenart : 				check
3. Fkt. Grundrechenarten : 			check
4. Ausgabe in Konsole : 			check
*/



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
/*
const ERROR_STR_DIV = "Durch Null ist nicht teilbar!";

output(divide(2,2));
output(divide(2,-2));
output(divide(2,0));
output(divide(0,2));

function divide(a,b) 
{
	if (b == 0) 
	{
		return ERROR_STR_DIV;
		//return a;
	} 
	else 
	{
		return a / b;
	}
	//return a / b;
}
*/

const prompt = require('prompt-sync')({sigint: true});
const ERROR_STR_GEN = "I'm afraid i can't do that, Dave!";
const ERROR_STR_DIV = "Can't divide by zero!";

startAPP();
function startAPP() 
{
	output(calculator(getNum1(),getOp(),getNum2()));
}

//agreement : "+"" "-" "*" "/"
/*
output(calculator(3,2,"+"));
output(calculator(3,2,"-"));
output(calculator(3,2,"*"));
output(calculator(3,2,":"));
output(calculator(3,2,"/"));
output(calculator(3,0,"/"));
output(calculator(3,2,"#?!"));
*/

//let a = prompt("Erste Zahl: ");
//let b = prompt("Zweite Zahl: ");
//let op = prompt("Operator: ");
//output(calculator(prompt("a:")),calculator(prompt("b: ")),calculator(prompt("op: ")));

function getNum1() 
{
	return parseFloat(prompt("a: ")); //parseInt gibt Ganzzahlen
									  //parseFloat gibt Fließkommazahlen
}

function getNum2() 
{
	return parseFloat(prompt("b: "));
}

function getOp() 
{
	return prompt("op: ");
}

function calculator(a,op,b) 
{
	switch (op) 
	{
		case "+": //add
			return a + b;
		case "-": //sub
			return a - b;
		case "*": //mul
			return a * b;
		case "/": //div
		case ":": //div
			if (b == 0) 
			{
				return ERROR_STR_DIV;
				//return "Das Ergebnis lautet " + a + ". Durch Null kann nicht geteilt werden!";
			} else 
			{
				return a / b;
			}
		default: 
			return ERROR_STR_GEN; //Error
	}
}

// output("hello");
// output(2);
function output(outputData) {
	console.log(outputData);
}
