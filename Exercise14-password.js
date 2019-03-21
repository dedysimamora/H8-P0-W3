function changeVocals (str) {
    
    var voc = "aiueo"
    var vocbsr = "AIUEO"
    var can = "bjvfp"
    newstr = "";
    
    for(i=0;i<str.length;i++){
        var found = false;
        for(j=0;j<voc.length;j++){
            if(str[i]===voc[j] || str[i] === vocbsr[j]){
                newstr += can[j];
                found = true;
            }
           
        }
        if(found === false){
            newstr += str[i];
        }
        
    }
return newstr;
  }
  
  function reverseWord (str) {
    var bal ="";
    for(i=str.length-1;i>=0;i--){
        bal += str[i]
    }
    return bal;
  }
  
  function setLowerUpperCase (str) {
    var temp ="";

var kcl = "abcdefghijklmnopqrstuvwxyz"
var bsr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    for(i=0;i<str.length;i++){
        for(j=0;j<kcl.length;j++){
            if(str[i] === kcl[j]){
                temp += bsr[j]
            }
            else if (str[i] === bsr[j]){
                temp += kcl[j];
            }
            
            }
            if (str[i] === " "){
                temp +=" ";
        }
          
    }
return temp;
  }
  
  function removeSpaces (str) {
    var rem = "";
    for(i=0;i<str.length;i++){
        if(str[i] !== " "){
            rem += str[i];
        }
    }
    return rem;
  }
  
  function passwordGenerator (name) {
      if(name.length < 5){
          return "Minimal karakter yang diinput harus 5 karakter"
      }
    var cv = changeVocals(name);
    var balikkt = reverseWord(cv);
    var kclbsr = setLowerUpperCase(balikkt);
    var rs = removeSpaces(kclbsr);
    return rs;
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'

