// Named Invoked 
function add(a=4,b=5){
    console.log(a+b);
};

// Immediatly Invoked 
(function add(a=4,b=5){
    console.log(a+b);
})();

// Anonymous Functions
let add = function(a,b){
    console.log(a+b);
}

