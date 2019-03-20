function changeMe(arr) {

    if (arr.length == 0){
        console.log('""');
    }
    
    var isi = {};

    for(i=0;i<arr.length;i++){
        isi.FirstName = arr[i][0]
        isi.LastName = arr[i][1]
        isi.Gender = arr[i][2]
        if(arr[i][3] === undefined || arr[i][3] >= 2019){
            isi.age = "Invalid Birth Year"
        }
        else {
            isi.age = 2019 - arr[i][3];
        }

        console.log(isi);

    }

    

  

}
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""