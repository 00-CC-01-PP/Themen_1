

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

//const prompt = require('prompt-sync')({sigint: true});
const ERROR_STR_DIV = "I'm afraid i can't do that, Dave!";

//agreement : "+"" "-" "*" "/"

output(calculator(3,2,"+"));
output(calculator(3,2,"-"));
output(calculator(3,2,"*"));
output(calculator(3,2,":"));
output(calculator(3,2,"/"));
output(calculator(3,0,"/"));
output(calculator(3,2,"#?!"));


//output(calculator(a(prompt())),(b(prompt())),(op(prompt())));

function calculator(a,b,op) 
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
				return "Durch Null ist nicht teilbar!";
			} else 
			{
				return a / b;
			}
		default: 
			return ERROR_STR_DIV; //Error
	}
}



// output("hello");
// output(2);
function output(outputData) {
	console.log(outputData);
}
