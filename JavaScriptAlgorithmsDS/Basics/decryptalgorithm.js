//some decrypt method 
fullEncryptionArray = ['0123456789', '1357902468']
var encryptedText = "1357902468"; 
var newDecryptedText = ""

    var someArray = encryptedText.split("");
    
     var decipherTextArray = ['1', '3', '5', '7', '9', '0', '2', '4', '6', '8' ]
     var n = encryptedText.length;
     var temp = [...Array(n)];
     for(var i = 0; i < n; i++) {
         temp[decipherTextArray[i]] = someArray[i];
     }

     console.log(temp);


