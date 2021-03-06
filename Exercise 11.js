function shoppingTime(memberId, money) {
    
    var lempar = {};
    var listbarang= [];
    var sisamoney = money;


    if(memberId =="" || money == undefined){
        return "Mohon maaf, toko X hanya berlaku untuk member saja";
    }
    else if (money < 50000 ){
        return "Mohon maaf, Uang tidak cukup";
    }

    var barang = [
        {   nama : "Sepatu Stacattu",
            harga : 1500000
        },
        {   nama : "Baju Zoro",
            harga : 500000
        },
        {
            nama : "Baju H&N",
            harga : 250000
        },
        {
            nama : "Sweater Uniqloh",
            harga : 175000
        },
        {
            nama : "Casing Handphone",
            harga : 50000
        }
        
    ];
    
    lempar.memberId = memberId;
    lempar.money = money;
    
    for(i=0;i<barang.length;i++){
        if(money > barang[i].harga){
           listbarang.push(barang[i].nama);
            sisamoney -= barang[i].harga
        }
    }
    lempar.listPurchased = listbarang;
    lempar.changeMoney = sisamoney;



return lempar;
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja