//sync = همزمان
//async = غیرهمزمان

function a(){
    setTimeout(() => {
        console.log("a with delay 2 sec");
    }, 2000);
}
function b(){
    console.log("b");
}
function c(){
    console.log("c");
}
a()
b()
c()

// setTimeout(() => {
//     console.log("hello-World!");
// }, 2000);