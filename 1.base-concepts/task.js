"use strict"
function solveEquation(a,b,c){ 
  
  desk = Math.pow(b,2)+4*a*c;
  if (desk === 0){
    let sum = [];
    otv=(-b)/(2*a);
    sum.push(otv);
    return sum;
  }
  else if(desk > 0){
    let sum = [];
    otv1 = (-b + Math.sqrt(d) )/(2*a);
    otv2 = (-b - Math.sqrt(d) )/(2*a);
    sum.push(otv,otv2);
    return sum;  
  }
  else{
    let desk=[];
    return desk;
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}