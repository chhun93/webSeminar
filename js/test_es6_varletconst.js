function varTest1(){
    var var_test1 = 1;
    if(var_test1==1){
        var var_test2 = 2;
    }
    console.log(var_test1);
    console.log(var_test2);
}
function varTest2(){
    var var_test1 = 1;    
    var var_test1 = 2;
    
    console.log(var_test1);
}

function letTest1(){
    let let_test1 = 1;
    if(let_test1==1){
        let let_test2 = 2;
    }
    console.log(let_test1);
    console.log(let_test2);
}

function letTest2(){
    let let_test3 = 1;
    let let_test4 = 2;
    let_test3 = let_test4;
    console.log(let_test3);
    console.log(let_test4);
}

function letTest3(){
    let let_test5 = 1;
    let let_test5 = 2;    
    console.log(let_test5);
}

function constTest1(){
    const const_test1 = 1;
    if(const_test1==1){
        const const_test2 = 2;
    }
    console.log(const_test1);
    console.log(const_test2);
}

function constTest2(){
    const const_test3 = 1;
    const const_test4 = 2;
    const_test3 = const_test4;
    console.log(const_test3);
    console.log(const_test4);
}

const constTest3={
    const_test5 : 1,
    const_test6 : 1
}
constTest3.const_test6=2;
console.log(const_test6);

