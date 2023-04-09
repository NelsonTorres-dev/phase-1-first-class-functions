


function receivesAFunction(callback){
    callback();
}

//I am returning a name function call fool
function returnsANamedFunction (){
    return function fool(){ 
        
    }
}
returnsANamedFunction();


//returning an anonymous function
 function returnsAnAnonymousFunction(){
    return function(){""}
 }

