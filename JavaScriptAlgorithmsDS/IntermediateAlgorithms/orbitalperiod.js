console.log(Math.PI);

function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    // R = AVGALT + EARTHRADIUS
    // Orbital period equation: T= MATH.SQRT(R^3 *(4(MATH.PI)^2) / GM) 
  
    arr.map((obj) => {
      obj.orbitalPeriod = Math.round(Math.sqrt(Math.pow((earthRadius + obj.avgAlt),3)*(4*Math.pow((Math.PI),2)/GM)));
      delete obj.avgAlt;
    })
    return arr;
  }
  
  console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));

  /**Alternative Solution */
  function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var a = 2 * Math.PI;
    var newArr = [];
  
    var getOrbPeriod = function(obj) {
      var c = Math.pow(earthRadius + obj.avgAlt, 3);
      var b = Math.sqrt(c / GM);
      var orbPeriod = Math.round(a * b);
      // create new object
      return {name: obj.name, orbitalPeriod: orbPeriod};
    };
  
    for (var elem in arr) {
      newArr.push(getOrbPeriod(arr[elem]));
    }
  
    return newArr;
  }
  
  // test here
  orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
  /**Alternative Solution */