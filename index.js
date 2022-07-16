function receivesAFunction(callback, spy) {
    return callback(spy);
}

function returnsANamedFunction() {
    // let fn = "name";

    // return function () {
    //     console.log(fn);
    // }

    return function newName() {

    }
}


function returnsAnAnonymousFunction() {
    

    return function () {
        
    }
}

