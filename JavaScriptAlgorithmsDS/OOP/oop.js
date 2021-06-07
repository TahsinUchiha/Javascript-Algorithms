function Bird(name) {
    this.name = name;  //own property
  }
  
  Bird.prototype.numLegs = 2; // prototype property

  // super type
  function Animation() {}
  // other constructors can inherit from super type
  Bird.prototype = Object.create(Animal.prototype)

  // show that a bird constructor is a big 
  Bird.prototype.constructor = Bird;

  // mixin, for objects to inherit specifc behavior 
  // example fly 
  let flyMixin = function(obj) {
    obj.fly = function() {
      console.log("Flying, wooosh!");
    }
  };

  let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let plane = {
    model: "777",
    numPassengers: 524
  };
  
  flyMixin(bird);
  flyMixin(plane);

// protecting a property from being altered 
// changing weight to a let variable, and creating a method to get weight 
  function Bird() {
    let weight = 15;
  
    this.getWeight = () => { return weight }
  }

// immediately invoking a function 
(function () {
  console.log("A cozy nest is ready");
})();

// grouping mixins together

function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}

// into one module object 

let motionModule = (function () {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
})();

// similarly 

let funModule = (() => {
  return {
    isCuteMixin: (obj) => {
      obj.isCute = () => true;
    },
    singMixin: (obj) => {
      obj.sing = () => {
        console.log("Singing to an awesome tune");
      }
    }
  }
})();
