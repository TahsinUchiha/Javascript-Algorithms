function pairElement(str) {
    let basePairs = 
    {'A': ["A","T"],
     'T': ["T","A"],
     'C': ["C","G"],
     'G': ["G","C"]
    };
    let newArr = []
    str.split("").forEach((e) => {
      if(Object.keys(basePairs).includes(e)) {
        newArr.push(basePairs[e])
      }
    })
    str = newArr;
  
  
    return str;
  }
  console.log(pairElement("TTGAG"));

  /**Alternative Solution */
  function pairElement(str) {
    //create object for pair lookup
    var pairs = {
      A: "T",
      T: "A",
      C: "G",
      G: "C"
    };
    //split string into array of characters
    var arr = str.split("");
    //map character to array of character and matching pair
    return arr.map(x => [x, pairs[x]]);
  }
  
  pairElement("GCG");
  /**Alternative Solution */