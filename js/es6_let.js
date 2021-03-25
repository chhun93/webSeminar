function letTest1() {
  let let_test1 = 1;
  if (let_test1 == 1) {
    let let_test2 = 2;
  }
  console.log(let_test1);
  console.log(let_test2);
}

function letTest2() {
  let let_test3 = 1;
  let let_test4 = 2;
  let_test3 = let_test4;
  console.log(let_test3);
  console.log(let_test4);
}

function letTest3() {
  let let_test5 = 1;
  let let_test5 = 2;
  console.log(let_test5);
}

for (let mov = 0; mov < 4; mov++) {
  console.log(mov);
}
console.log(mov);

