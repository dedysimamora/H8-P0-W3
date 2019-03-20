function shoppingTime(memberId, money) {
    
    if(memberId =="" || money == undefined){
        return "Mohon maaf, toko X hanya berlaku untuk member saja";
    }
    else if (money < 50000 ){
        return "Mohon maaf, Uang tidak cukup";
    }

    var kembali = money;
    var belanjaan =[];

    if (kembali >=  1500000 ){
        belanjaan.push("Sepatu Stacattu");
        kembali -= 1500000;
    }
    if (kembali >= 500000){
        belanjaan.push("Baju Zoro");
        kembali -= 500000;
    }
    if(kembali >= 250000){
        belanjaan.push("Baju H&N");
        kembali -= 250000;
    }
    if(kembali >= 175000){
        belanjaan.push("Sweater Uniklooh");
        kembali -= 175000;
    }
    if (kembali >=  50000){
        belanjaan.push("casing Handphone");
        kembali -= 50000
    }

    var member = {
        memberId : memberId,
        money : money,
        listPurchased : belanjaan,
        changeMoney : kembali
    }

return member;
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