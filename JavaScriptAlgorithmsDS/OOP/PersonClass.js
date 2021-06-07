var Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    const nameArr = firstAndLast.split(" ");
    // getters
    this.getFullName = function() {
      return nameArr.join(" ");
    };
    this.getFirstName = () => {
      return nameArr[0];
    }
    this.getLastName = () => {
      return nameArr[1];
    }
    // setters
    this.setFirstName = (first) => {
      nameArr[0] = first;
    }
    this.setLastName = (last) => {
      nameArr[1] = last;
    }
    this.setFullName = (full) => {
      nameArr[0] = full.split(" ")[0];
      nameArr[1] = full.split(" ")[1];
    }
    return firstAndLast;
  };
  
  var bob = new Person('Bob Ross');
  // bob.setFirstName("HelloBle");
  bob.setFullName("Haskell Curry");
  console.log(bob.getFullName());
  console.log(Person);

  /**ALternative  */
  var Person = function(firstAndLast) {
    var fullName = firstAndLast;
  
    this.getFirstName = function() {
      return fullName.split(" ")[0];
    };
  
    this.getLastName = function() {
      return fullName.split(" ")[1];
    };
  
    this.getFullName = function() {
      return fullName;
    };
  
    this.setFirstName = function(name) {
      fullName = name + " " + fullName.split(" ")[1];
    };
  
    this.setLastName = function(name) {
      fullName = fullName.split(" ")[0] + " " + name;
    };
  
    this.setFullName = function(name) {
      fullName = name;
    };
  };
  
//   var bob = new Person("Bob Ross");
//   bob.getFullName();
  /**ALternative  */