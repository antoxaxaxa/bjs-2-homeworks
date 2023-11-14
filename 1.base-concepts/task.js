"use strict"
function solveEquation(a,b,c){ 
  
  desk = Math.pow(b,2)+4*a*c;
  if (desk === 0){
    let sum = [];
    sum=(-b)/(2*a);
    return sum;
  }
  else if(desk > 0){
    let sum = [];
    sum = (-b + Math.sqrt(d) )/(2*a);
    sum = (-b - Math.sqrt(d) )/(2*a);
    return sum;  
  }
  else{
    let desk=[];
    return desk;
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}