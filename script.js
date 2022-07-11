function compute() {
    //declare values and calculator
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);

    // declare Principal valdation checker
    var principalCheck = parseInt(principal) > 0;

    // validate Principal input
    if(!principalCheck) {
        alert("Enter a positive number");
        principal.focus();
    } else {
    // declare Compute Interest button text
    document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"
    }

}

// update the range slider
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}