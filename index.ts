import inquirer from "inquirer";

async function askQuestion() {
    let que= await inquirer.prompt([{
        name:"str",
        type:"input",
        message:"Please enter the text."
    }]);
    const count_arr=que.str.split(" ");
    console.log(count_arr);
    console.log(`words in paragraph ${count_arr.length}`);
    const charts=que.str.replace(/ /g,"");
    console.log(charts);
    console.log(`characters in paragraph ${charts.length}`);
}
askQuestion();
async function startAgain() {
    do{
       await askQuestion();
       var again=await inquirer.prompt([{
        name:"start",
        type:"input",
        message:"Do you to start again"
       }])
    }
    while(again.start===`y`)
    
}
startAgain();