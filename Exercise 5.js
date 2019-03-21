function ubahHuruf(kata) {
    var temp = "";
    for(i=0;i<kata.length;i++){
        if(kata[i] === "z"){
            temp += "a"
        }
        else {
        temp += String.fromCharCode(kata.charCodeAt(i) + 1);
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