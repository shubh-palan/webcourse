# Webdevelopment


## Destructuring Objects

Eg:
```
menu = {
   "demo1": "value1",
   "demo2": "value2" 
}

o/p: demo1 = value1, demo2 = value2

Soln1: let demo1, demo2
        demo1 = menu.demo1
        demo2 = menu.demo2

Soln2: let {demo1, demo2} = menu
```

## Functions

```
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
```
