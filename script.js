let counterNewValue = 0;
const btnAddElement = document.querySelector(".btn-add");
const btnResetElement = document.querySelector(".btn-reset");

btnAddElement.addEventListener("click", function(){
    counterNewValue++;

    document.getElementById("counter").innerHTML = counterNewValue;

    return counterNewValue;
});

btnResetElement.addEventListener("click", function(){
    counterNewValue = 0;
    let resetCounterValue = 0;

    document.getElementById("counter").innerHTML = resetCounterValue;
});