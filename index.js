function monday(){
    console.log("Take Tayo for a walk")
    console.log("Do my labs")
}
function tuesday(){
    console.log("Take Tayo for a walk")
    console.log("Go to the gym")
}
function wednesday(){
    console.log("Take Tayo for a walk")
    console.log("Do my Labs")
}
function takeForWalk(){
    console.log("Take Tayo for a walk") 
}
function labs(){
    console.log("Do my labs") 
}
function gym(){
    console.log("Go to the gym")
}
function receivesAFunction(postWalk){
    takeForWalk(); 
    postWalk();
}

function monday(){
   receivesAFunction(labs) 
}
function receivesAFunction(postWalk){
    takeForWalk();
    postWalk();
}
receivesAFunction();
function returnsANamedFunction(){
    return function book(){
       console.log("Read a book") 
    }
}
function returnsAnAnonymousFunction(){
    return()=>{console.log("Write a poem")}
}
