let bill = document.getElementById("bill");
let people = document.getElementById("people");
let total_amount = document.querySelector("#total_amount"); 
let totalTip = document.querySelector("#total_tip");
let percetageButtons = document.querySelectorAll("input[name='tip']")
let customTip = document.getElementById("customTip");
let resetBtn = document.getElementById("reset");
let totalObj = {
    bill: "", 
    people: ""
}

reset();

percetageButtons.forEach( button => {
    button.addEventListener("click", () => {
        customTip.value = ""; 
        calculate()
    })
})

bill.addEventListener("input", () => {
    totalObj.bill = bill.value;
    calculate();
});

people.addEventListener("input", () => {
    totalObj.people = people.value;
    calculate()
});

customTip.addEventListener("input", () => {
    calculate();
});

resetBtn.addEventListener("click", reset);

function calculate(){
    if(totalObj.bill != "" && totalObj.people != ""){
        let selectedPercentage = document.querySelector("input[name='tip']:checked").value;
        if(customTip.value != ""){
            selectedPercentage = Number(customTip.value);
        }
        let tipValue = Number((totalObj.bill  * (selectedPercentage / 100 ) ) / totalObj.people).toFixed(2);       
        totalTip.innerHTML = "$" + tipValue;
        total_amount.innerHTML = "$" + Number(totalObj.bill / totalObj.people + Number(tipValue)).toFixed(2); 
    }
}

function reset(){
    totalObj = {
        bill: "", 
        people: ""
    }
    total_amount.innerHTML = "$ 0.00";
    totalTip.innerHTML = "$ 0.00";
    bill.value = "";
    people.value = "";
    customTip.value = ""; 
}