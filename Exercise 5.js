function ubahHuruf(kata) {
    var temp = "";
    var lib = "abcdefghijklmnopqrstuvwxyz"
    for(i=0;i<kata.length;i++){
        
        for(j=0;j<lib.length;j++){
            
            if(kata[i] === lib[j]){
                if(kata[i] === "z"){
                    temp += lib[0];
                }else{
                temp += lib[j+1];
                }
            }

            
        }
        
    
    
    }

return temp;

  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu