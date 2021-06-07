function convertToRoman(num) {
    const singleMult = {
        1:"I",
        4:"IV",
        5:"V",
        9:"IX"
    }
    const doubleMult = {
        1:"X",
        4:"XL",
        5:"L",
        9: "XC",
    }
    const tripleMult = {
        1:"C",
        4:"CD",
        5:"D",
        9:"CM"
    }
    const quadMult = {
        1:"M"
    }
    
    let romanArr = [];
    
    for(let i = 0; i < num.toString().length; i++) {
      console.log(num.toString().length)
      switch(num.toString().length) {
        case 4:
        if(num.toString()[i] < 4) {
          romanArr.push(quadMult[1].repeat(num.toString()[i]))
          num -= 1000 * num.toString()[i];
          i--;
        }
        break;
        case 3:
        if(tripleMult[num.toString()[i]]) {
          romanArr.push(tripleMult[num.toString()[i]])
          num -= 100 * num.toString()[i];
          i--;
        }
        if(num.toString()[i] > 5) {
          romanArr.push(tripleMult[5])
          num = num - 500;
          i--;
        } 
        if(num.toString()[i] < 4) {
          romanArr.push(tripleMult[1].repeat(num.toString()[i]))
          num -= 100 * num.toString()[i];
          console.log(num)
          i--;
        }
        break;
        case 2:
        if(doubleMult[num.toString()[i]]) {
          romanArr.push(doubleMult[num.toString()[i]])
          num -= 10 * num.toString()[i];
          i--;
        }
        if(num.toString()[i] > 5) {
          romanArr.push(doubleMult[5])
          num = num - 50;
          i--;
        } 
        if(num.toString()[i] < 4) {
          romanArr.push(doubleMult[1].repeat(num.toString()[i]))
          num -= 10 * num.toString()[i];
          i--;
        }
        break;
        case 1:
        if(singleMult[num.toString()[i]]) {
          romanArr.push(singleMult[num.toString()[i]])
          num -= 1 * num.toString()[i];
        }
        if(num.toString()[i] > 5) {
          romanArr.push(singleMult[5])
          num = num - 5;
        } 
        if(num.toString()[i] < 4) {
          romanArr.push(singleMult[1].repeat(num.toString()[i]))
          num -= 1 * num.toString()[i];
        }
        break;
      }
    }
    
     return romanArr.join("");
    }

    console.log("12123")
    
    console.log(convertToRoman(335));