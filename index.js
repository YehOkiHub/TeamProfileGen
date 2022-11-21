import generatehtml from "./src/generatehtml.js";
import ask from "./src/AskQuestions.js";
// import {Intern} from "./lib/Intern.js";
// import {Engineer} from "./lib/Engineer.js";
// import {Manager} from "./lib/Manager.js";

import fs from "fs";

const managerQuestion = [
  {
    name: "name",
    type: "input",
    message: "Name of Manager",
  },
  {
    name: "id",
    type: "input",
    message: "Whats the Manager ID",
  },
  {
    name: "email",
    type: "input",
    message: "Whats the Managers Email",
  },
  {
    name: "officeNumber",
    type: "input",
    message: "Whats the Managers Office Number",
  },
];

const extraQuestions = [
    {
        name: "choice",
        type: "list",
        message: "Select your option",
        choices: [
        {
            key: "Engineer",
            value: "Engineer"

        
        },
        {
            key: "Intern",
            value: "Intern"

        
        },
        {
            key: "Finish Team Building",
            value: "Finish"

        
        }

        ]

    }

]

const engineerQuestions = [

    {
        name: "name",
        type: "input",
        message: "Name of Engineer",
      },
      {
        name: "id",
        type: "input",
        message: "Whats the Engineers ID",
      },
      {
        name: "email",
        type: "input",
        message: "Whats the Engineers Email",
      },
      {
        name: "github",
        type: "input",
        message: "Whats the Engineers Github username",
      },
]

const internQuestions = [

    {
        name: "name",
        type: "input",
        message: "Name of Interns",
      },
      {
        name: "id",
        type: "input",
        message: "Whats the Interns ID",
      },
      {
        name: "email",
        type: "input",
        message: "Whats the Interns Email",
      },
      {
        name: "school",
        type: "input",
        message: "Whats the Interns School name",
      },
]

async function init(){
    let team = []
    let askforTeamMember = true
    let managerAnswers = await ask(managerQuestion)    

    while(askforTeamMember === true){
        let answer = await ask(extraQuestions)
        if(answer.choice === "Finish"){
            askforTeamMember = false
        
        }else if(answer.choice === "Engineer"){
            let engineerAnswer = await ask(engineerQuestions)
            engineerAnswer.role = "Engineer"
            // let engineer = new Engineer(engineerAnswer.github)
            team.push(engineerAnswer);

        
        }else if(answer.choice === "Intern"){
            let internAnswer = await ask(internQuestions)
            internAnswer.role = "Intern"
            // let intern = new Intern(internAnswer.school)
            team.push(internAnswer);


        }


    }
    // let manager = new Manager(managerAnswers.officeNumber)


    let data = {
        manager: managerAnswers,
        team: team

    }
    let result = generatehtml(data)

    fs.writeFile("test.html", result, function(){
        console.log("HTML Generated")
    });


    
}
init()