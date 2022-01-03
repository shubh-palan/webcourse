"use strict";

const arrNames = ["Jay", "a_bc"]
let objNames = {"name1": "Jay", "name2": "a_bc"};

(function demo(names) {
    if(Array.isArray(names)){
        names.forEach(element => {
            console.log(element)
        })}
    else{
        for (const key in objNames) {
            let value = objNames[key]
            console.log(key, value)
        }
    }
})(objNames)

// demo(objNames)