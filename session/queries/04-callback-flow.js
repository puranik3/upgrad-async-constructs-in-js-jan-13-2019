function coffeeMachine(name) { 
    alert("Preparing " + name);
}

function prepare(callback) {
    var name = prompt("What coffee would you like to have? Espresso or Latte?");
    callback(name);
}

prepare(coffeeMachine);