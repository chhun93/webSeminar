function constTest1() {
  const const_test1 = 1;
  if (const_test1 == 1) {
    const const_test2 = 2;
  }
  console.log(const_test1);
  console.log(const_test2);
}

function constTest2() {
  const const_test3 = 1;
  const const_test4 = 2;
  const_test3 = const_test4;
  console.log(const_test3);
  console.log(const_test4);
}

const constTest3 = {
  const_test5: 1,
  const_test6: 1,
};

constTest3.const_test6 = 2;

console.log(const_test6);

for (const mov = 0; mov < 4; mov++) {
  console.log(mov);
}
console.log(mov);


