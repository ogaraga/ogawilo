const oneTime = document.getElementById("btn");
const monTime = document.getElementById("btn-mon");
const oneTimMon = document.getElementById("one_time");
const monTimMon = document.getElementById("_monthly");
const oneTimCur = document.getElementById("symbol-1");
const monTimCur = document.getElementById("symbol-2");

monTime.addEventListener("click",()=>{
    if (monTimMon.style.display === "none" && monTimCur.style.display === "none") {
       monTimMon.style.display = "block";
       monTimCur.style.display = "block";
       oneTimMon.style.display = "none";
       oneTimCur.style.display = "none"; 
    }
    
} )

oneTime.addEventListener("click",()=>{
    if (monTimMon.style.display === "block" && monTimCur.style.display === "block") {
       monTimMon.style.display = "none";
       monTimCur.style.display = "none";
       oneTimMon.style.display = "block";
       oneTimCur.style.display = "block"; 
    }
    else{
        oneTimMon.style.display = "block";
        oneTimCur.style.display = "block";
        monTimMon.style.display = "none";
        monTimCur.style.display = "none";
        
    }    
} )


var one_Times = document.getElementsByClassName("one_time");
var once = document.getElementById("one-time");
var monthly = document.getElementById("monthly");
var total = document.getElementById("total_1");
var total_2 = document.getElementById("total");
var symbol_1 = document.getElementById("symbol-1");
var symbol_2 = document.getElementById("symbol-2");
var naira = document.getElementById("naira");
var dollar = document.getElementById("dollar");
var pounds = document.getElementById("pounds");
var euro = document.getElementById("euro");
var naira2 = document.getElementById("naira_2");
var dollar2 = document.getElementById("dollar_2");
var pounds2 = document.getElementById("pounds_2");
var euro2 = document.getElementById("euro_2");
function Fmoney(Fvalue){
    total.value = "";
    total.value += `₦${Fvalue}`;
    
    if(symbol_1.value === "USD"){
        total.value = "";
        dollar.value = "USD"
        total.value += `$${Fvalue}`;
    }
    
    else if(symbol_1.value === "GBP"){
        total.value = "";
        pounds.value = "GBP";
        total.value += `£${Fvalue}`;

    }

    else if(symbol_1.value === "EUR"){
        total.value = "";
        euro.value = "EUR";
        total.value += `€${Fvalue}`;

    }
    else{
        total.value = `₦${Fvalue}`;
        naira.value = "NGN";
    }
}
function Fcash(fvalue) {
    total_2.value = "";
    total_2.value += `₦${fvalue}`;
    
    if(symbol_2.value === "USD"){
        total_2.value = "";
        dollar2.value = "USD"
        total_2.value += `$${fvalue}`;
    }
    
    else if(symbol_2.value === "GBP"){
        total_2.value = "";
        pounds2.value = "GBP";
        total_2.value += `£${fvalue}`;

    }

    else if(symbol_2.value === "EUR"){
        total_2.value = "";
        euro2.value = "EUR";
        total_2.value += `€${fvalue}`;

    }
    else{
        total_2.value = `₦${fvalue}`;
        naira2.value = "NGN";
    }

}
const next = document.getElementById("next");
const validation = document.getElementById("validated");
next.onclick = ()=>{
    
    if(total.value !== "" || total_2.value !== ""){
        validation.innerText = "Selection saved successfully";
        validation.style.color = "darkgreen";
        total.value = "";
        total_2.value = "";
    }
    else{
        validation.innerText = "Try make selection if you can";
        validation.style.color = "red";
    }

}
oneTime.onclick = ()=>{
    validation.innerText = "";
    total.value = "";
    total_2.value = "";
}
monTime.onclick = ()=>{
    validation.innerText = "";
    total.value = "";
    total_2.value = "";
}