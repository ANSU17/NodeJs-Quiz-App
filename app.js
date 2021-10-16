const rl = require("readline-sync");
const chalk = require('chalk');

var name = rl.question(chalk.blueBright("What is your name ? "));
console.log(chalk.bgGray("Hello "+name+"!!!"));
console.log(chalk.blue.bold.underline("There is Quiz on Django with 10 questions "));
console.log(chalk.blueBright("\n+5 for right answer, -2 for wrong answer\n"));
var que = ["Django was introduced by _______?",
			"What are the features available in Django web framework? : ",
			"What is the most easiest, fastest, and most stable deployment choice in most cases with Django?",
			 "What Commands are used to create a project in Django?",
			 "What is the Django command to view a database schema of an existing (or legacy) database?",
			 "What is the most easiest, fastest, and most stable deployment choice in most cases with Django?",
			 "Which architectural pattern does django follow? ",
			 "Can I use Django offline? ",
			 "What does {{ name }} this mean in Django Templates? ",
			 "Which of the following is a valid forloop attributes of Django Template System?"
			];
var marks = 0;
var options = [ ["Adrian Holovaty","Bill Gates","Rasmus Lerdorf","Tim Berners-Lee"],
				["Admin Interface (CRUD)","Templating","Form handling","All of the above"],
				["FastCGI","mod_wsgi","SCGI","AJP"],
				["Project","_init_.py","manage.py","All of the above mentioned"],
				["manage.py legacydb","django-admin.py schemadump" ,"manage.py inspect","manage.py inspectdb"],
				["FastCGI","mod_wsgi","SCGI","AJP"],
				["PHP","HTML","MVT","None of the above"],
				["Yes","No","None","Both"],
				["{{ name }} will be the output.","The name will be replaced with values of Python variable.","It will be displayed as name in HTML. ","None of the above"],
				["forloop.reverse","forloop.firstitem","forloop.counter0","forloop.lastitem"],
				];
var answer = [1,4,2,4,4,2,3,1,2,3];


for (let i = 0 ; i<que.length;i++){

	console.log((i+1)+" )" + que[i]);
	for(let j = 0 ; j < options[i].length ; j++){
		console.log("    " + (j+1) + ") " + options[i][j]);
	} 

	let ans = Number(rl.question(" your answer : "));
	if (ans === answer[i]){
    console.log(chalk.green("Correct Answer !!"+"\n"));
		marks +=5;
	}
	else{
		console.log(chalk.red("Wrong Answer :: Correct answer is " + (options[i][answer[i]-1])+"\n"));
		marks -=2;
	}	
}

console.log(chalk.blue("Hey ! "+name+" Your total score is : "+marks) );
