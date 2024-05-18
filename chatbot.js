/*

1. GREETINGS

Reads easier but contains more lines of code and also more variables, making it slower.
document.getElementById("name_input").addEventListener("change", greet);

function greet(event){
    const greetings = document.getElementById("greetings");
    greetings.innerHTML = event.target.value;
}
*/

/*
Good option.
document.getElementById("name_input").addEventListener("change", function(event){
    document.getElementById("greetings").innerHTML = event.target.value;
});
*/
// Using the same function but with an arrow function:
//document.getElementById("greetings").innerHTML = "Hallo " + event.target.value + "!";
document.getElementById("name_input").addEventListener("input", (event) => {
    document.getElementById("greetings").innerHTML = `Hallo ${event.target.value}!`;
});


/* 
2. COUNT DOWN
*/ 

document.getElementById("countdown_number").addEventListener("change", (event) => {
    let countdown_number = event.target.value; // should make Number() ? Already have a number HTML input element so can't be anything else
    let counter = document.getElementById("counter");
    while(countdown_number >= 0){
        counter.innerHTML += `${countdown_number} <br/>`;
        countdown_number--;
    }
});


/* 
3. GUESS AGE
*/
document.getElementById("guess_age").addEventListener("click", (event) => {
    let rem3 = document.getElementById("rem3").value;
    let rem5 = document.getElementById("rem5").value;
    let rem7 = document.getElementById("rem7").value;
    let age_guess = document.getElementById("age_guess");

    // Short if: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
    if (rem3 !== "" && rem5 !== "" && rem7 !== "") {
        let age = (rem3 * 70 + rem5 * 21 + rem7 * 15) % 105;
        age_guess.innerHTML = `Jouw leeftijd is: ${age}`;
    } else {
        age_guess.innerHTML = "Ik kan je leeftijd pas berekenen als je alle velden invult.";
    }
});

