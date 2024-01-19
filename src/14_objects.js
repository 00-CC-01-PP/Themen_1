/***** Erinnerung: Arrays *******/
/* 
let arr;
arr = ["Ich","bin","Max"];
output(arr);
output(arr[0]);
output("------------");

// nested arrays - Prinzip: [[[]]]
// nested arrays  - hier: [[],[]]
arr =   [
                ["Ich","bin","Keks"],
                ["Ich","bin","Krümel"]
        ];
 
        
output(arr);
output(arr[0]);
output(arr[0][0]+ " " + arr[1][2]);
output(arr[1][0]);
output("------------");

// nested loop
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        output("Index i: " + i + " Index j: " + j);
        output(arr[i][j]);      
    }
}
*/
/***** Objekte 1 Daten/Funktionen *******/
const GAP = " ";
const PUNCT = ".";

let person = 
{
    firstName:  "Max",
    familyName: "Rockatansky",
    salary:     [120000, 160000],
    permission: true,
    sayHello:   function() 
    {
        return "Hello";
    }
};

output(person);
output(person.familyName);
output(person.firstName);
output(person.salary[1]);
output(person.sayHello());

const txt = person.sayHello() + PUNCT + GAP + "Ich bin"+ GAP + person.firstName + GAP + person.familyName 
            + GAP + "und verdiene" + GAP + person.salary[1] + GAP + "p.a.";
output(txt);

function output(outputData) {
    console.log(outputData);
}


