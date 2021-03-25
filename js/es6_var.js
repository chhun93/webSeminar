function varTest1() {
  var var_test1 = 1;
  if (var_test1 == 1) {
    var var_test2 = 2;
  }
  console.log(var_test1);
  console.log(var_test2);
}

function varTest2() {
  var var_test3 = 1;
  var var_test3 = 2;

  console.log(var_test3);
}

for (var mov = 0; mov < 4; mov++) {
  console.log(mov);
}
console.log(mov);

//hoisting
console.log(var_test4);
var var_test4 = 5;

console.log(var_test5);

//varHoist();
varHoist2();

var varHoist=()=>{
   console.log("HI");
};

function varHoist2(){
    console.log("HI2");
}
