function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];

    var akhir= [];
    
    var naik = 0;
    var turun = 0;
    var ongkos = 0;
    
    


    for(i=0;i<arrPenumpang.length;i++){
        var pen = {}
        for (g=0;g<rute.length;g++){
            if (rute[g] == arrPenumpang[i][1] ){
                naik = g;
            }
            else if ( rute[g] == arrPenumpang[i][2]){
                turun = g
            }
        }
        ongkos = Math.abs(turun - naik)*2000
        
        
            pen['penumpang'] = arrPenumpang[i][0],
            pen.naikdari = arrPenumpang[i][1],
            pen.tujuan = arrPenumpang[i][2],
            pen.bayar = ongkos
        
        akhir.push(pen);
    }

    return akhir;
}
  
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'F', 'B'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]