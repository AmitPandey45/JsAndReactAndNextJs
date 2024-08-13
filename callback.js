var x = 1;

function callBackDemo(cond, fun){
    if (cond) {
        fun();
    }
}

callBackDemo(x == 1, sayItIsOne);
callBackDemo(x == "apple", sayItIsApple);
callBackDemo(x > 0 && x < 10, sayItIsBetween0to10);

function sayItIsOne() {
    console.log("It is 1");
}

function sayItIsApple() {
    console.log("It is apple");
}

function sayItIsBetween0to10() {
    console.log("It is between 0 to 10");
}