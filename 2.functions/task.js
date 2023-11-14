function getArrayParams(...arr) {
  if(arr.length !== 0){
    let sum = 0;
    for(let i=0; i < arr.length; i++){
      sum += arr[i];
    }
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const avg = sum / arr.length;
    return { min: min, max: max, avg: Number(avg.toFixed(2)) };
  }
  else{
    return 0;
  }
}

function summElementsWorker(...arr) {
  if(arr.length !== 0){
    let summa =[]
    for(let i = 0; i < arr.length; i++ ){
      summa.push(arr[i]);
    }
    const sum = summa.reduce(
      function(a,b){
        return a+b;
    });
    return sum;
  }
  else{
    return 0;
  }
}

function differenceMaxMinWorker(...arr) {
  if(arr.length !== 0){
    let work = Math.max(...arr) - Math.min(...arr);
    return work;
  }
  else{
    return 0;
  }
}

function differenceEvenOddWorker(...arr) {
  if(arr.length !== 0){
    sumEvenElement = 0;
    sumOddElement = 0;
    for(let i = 0; i < arr.length; i++ ){
      if (arr[i] % 2 == 0){
        sumEvenElement += arr[i];
      }
      else{
        sumOddElement += arr[i];
      }
    }
    const result = sumEvenElement - sumOddElement;
    return result;
  }
  else{
    return 0;
  }
}


function averageEvenElementsWorker(...arr) {
  if(arr.length !== 0){
    sumEvenElement = 0;
    countEvenElement = 0;
    for(let i = 0; i < arr.length; i++ ){
      if (arr[i] % 2 == 0){
        sumEvenElement += arr[i];
        countEvenElement++;
      }
   }
    result = sumEvenElement / countEvenElement;
    return result;
  }
  else{
    return 0;
  }
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++){
    const currectData = arrOfArr[i];
    const res = func(...currectData); 
  
    if (res > maxWorkerResult) {
      maxWorkerResult = res;
    }
  }
  return maxWorkerResult;
}
