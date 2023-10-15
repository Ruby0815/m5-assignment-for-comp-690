let choice=prompt(`Enter your choice`);
let computerChoice=Math.random()
if (computerChoice<0.33) 
{
computerChoice='rock'
} else if (computerChoice<.67){
    computerChoice='paper'
}else {
    computerChoice='scissors'
}
let result;
if(choice===computerChoice){
    result='its tie'
}else if (choice==='rock' && computerChoice==='scissors'){
    result='you win'
}else if(choice==='scissors' && computerChoice==='paper'){
    result='you win'
}else if(choice==='paper' && computerChoice==='rock')
    result='you win'
else {
result='computer win';
}
if (
    choice !== "rock" &&
    choice !== "paper" &&
    choice !== "scissors"
  ) {
    alert = "Invalid input. Please choose rock, paper, or scissors.";
  }
  alert(`User chose: ${choice}\nComputer chose: ${computerChoice}\nResult: ${result}`);