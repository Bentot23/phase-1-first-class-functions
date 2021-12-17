const receivesAFunction = function(callback) {
    callback();
}

function returnsANamedFunction() {
    return function aNamedFunction(){};
}

function returnsAnAnonymousFunction() {
    return function (){};
}