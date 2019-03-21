function sorting(arrNumber) {
    var temp = 0;
    for(i=0;i<arrNumber.length;i++){
        for(j=0;j<arrNumber.length-i;j++){
            if(arrNumber[j] > arrNumber[j+1]){
                temp = arrNumber[j];
                arrNumber[j] = arrNumber[j+1];
                arrNumber[j+1] = temp;
            }
        }
    }
   return arrNumber;
  }
  
  function getTotal(arrNumber) {
    var sering = 0;
    var p = arrNumber[arrNumber.length-1];
    
    if(arrNumber.length == 0){
        return " ' ' ";
    }
    
    for(i=0;i<arrNumber.length;i++){
        if (arrNumber[i] === p){
            sering += 1;
        }
    }
    return "angka paling besar adalah " + p + " dan jumlah kemunculan sebanyak "+ sering + " kali";
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''


  //console.log(sorting([2, 8, 4, 6, 8, 5, 8, 4]));