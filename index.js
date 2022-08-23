// Create  variables that assigns the acronym for HMBLMR
const actualName_1 = "Hold My Beer Let Me Rap"
const actualName_2 = "Hold my beer let me rap"
const actualName_3 = "hold my beer let me rap"

//Create a variable to store input element content using DOM
let inputContent = document.getElementById("input-el");
let formDiv = document.querySelector(".landing-page-form");
let quizDiv = document.querySelector(".landing-page-quiz");
// Create a function that checks if the answer is correct.
function submit_fn(){
    if (inputContent.value === actualName_1 ||inputContent.value === actualName_2||inputContent.value === actualName_3){
      //alert("Well Done You have won some merch!")
      //console.log(inputContent.value)
      formDiv.style.display = "block";
      quizDiv.style.display = "none"
      
    }
    else{
      alert("Not Quite, Try Again");
    }
  }

// Function Once Competition Details have been entered
function comp_done(){
    window.location.href="index_2.html#Landing-Page";
}