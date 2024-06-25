const calculate= document.querySelector(".calc")
calculate.addEventListener("click",()=>{
    const totalBill= Number(document.querySelector(".totalBill").value);
    const yourTip= document.querySelector(".yourTip").value;
    const spiltBill=document.querySelector(".spiltBill").value;

    if (totalBill=="" || yourTip==0 || spiltBill==0){
        alert("please \"input\" value");
        return;
    } 
    let total= (totalBill*yourTip)/spiltBill;
    total=total.toFixed(2);
    const answer=document.getElementById("tipss");
    answer.textContent=total;

})