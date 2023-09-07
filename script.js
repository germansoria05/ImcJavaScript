console.log ("Hello world!");

function factorial(n) {
  if (n === 0) {
      return 1;
  }
  return n * factorial(n - 1);
}
var displayClosure = function() {
  var count = 0;
  return function () {
      return ++count;
  };
}
var inc = displayClosure();
inc();
inc();
inc();
function LCMCalculator(x, y) {
  var checkInt = function (x) { 
      if (x % 1 !== 0) {
          throw new TypeError(x + " no es un entero"); 
      }
      return x;
  };
  this.a = checkInt(x) 
  this.b = checkInt(y);
}

CMCalculator.prototype = {};
 
      
      var a = Math.abs(this.a), b = Math.abs(this.b), t;
      if (a < b) {
         
          t = b;
          b = a;
          a = t;
      }
      while (b !== 0) {
          t = b;
          b = a % b;
          a = t;
      }
      this['gcd'] = function () {
        return a;
    };
    return a;


  function factorial ()
    
    var lcm = this.a / this.gcd() * this.b;
    
    this.lcm = function () {
        return lcm;
    };
    return lcm;

 function suma() 
    return "LCMCalculator: a = " + this.a + ", b = " + this.b;



function output(x) {
document.body.appendChild(document.createTextNode(x));
document.body.appendChild(document.createElement('br'));
}


[[25, 55], [21, 56], [22, 58], [28, 56]].map(function (pair) { 
return new LCMCalculator(pair[0], pair[1]);
}).sort(function (a, b) { 
return a.lcm() - b.lcm();
}).forEach(function (obj) {
output(obj + ", gcd = " + obj.gcd() + ", lcm = " + obj.lcm());
});