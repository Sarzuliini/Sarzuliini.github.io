var doCoolStuff = function () {
    var currentClassName = document.getElementById('cool').className;

if (currentClassName == 'cool'){
    document.getElementById('cool').className = 'cool red';
} else {
    document.getElementById('cool').className = 'cool'
}







//document.getElementById('cool').className = 'cool red';
}





var sayMyName = function (name) {
    alert('my name is: '+name);
}





var car = {
    make: 'VW',
    type: 'polo',
    color: 'blue',
    isTurnedOn: false,
    numberOfWheels: 4,
    seats: [
        'seat 1',
        'seat 2',
        'seat 3',
        'seat 4'
    ],
    turnOn: function (){
        this.isTurnedOn = true;
},
fly: function () {
    alert('fly');
},
switchCar: function (isOn) {
    if (isOn == true){
        this.isTurnedOn = true;
    }else{
        this.isTurnedOn = false;
}
}
};
console.log('mewou mewouuu!!!');