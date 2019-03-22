function tukarBesarKecil(kalimat) {
    var temp ="";

var kcl = "abcdefghijklmnopqrstuvwxyz"
var bsr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    for(i=0;i<kalimat.length;i++){
        var g = false;

        for(j=0;j<kcl.length;j++){
            if(kalimat[i] === kcl[j]){
                temp += bsr[j]
                g = true;
            }
            else if ( kalimat[i] === bsr[j]){
                temp += kcl[j];
                g = true;
            }
            
            }
            if (g === false){
                temp += kalimat[i];
            }
          
    }

    
return temp;
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"