var Person = function(name){
    this._name='jw';
}
Person.prototype.eat= function () {
    console.log('eat');
}
function Girl(){

}


Girl.prototype = Object.create(Person.prototype);
var g = new Girl();
g.eat();
console.log(g._name)