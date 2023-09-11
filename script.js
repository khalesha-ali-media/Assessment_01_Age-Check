function verify(){
    var i;
    i = Number(document.getElementById("age").value);
    if(i>=19){
        alert("You're of age for all of the above."); /* block of code specifying if the variable is greater than or equal to 19*/

    }
    else if(i>=16){
        alert(" You're only of age to drive."); /* block of code to be excecuted if the variable is greater than or equal to 16*/

    }
    else if(i<=15){
        alert("You're not of age for any of the above."); /* block of code to be excecuted if the variable is less than or equal to 15*/
    }

}










