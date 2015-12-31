var EventEmitter = require('events');
var util = require('util')

function Girl(name,age){
    this._name=name;
    this._age=age;
}
util.inherits(Girl,EventEmitter);
var g = new Girl('大松',26);
var cry = function () {
    console.log(this._name+'哭了')
}

var cry1= function () {
    console.log(this._name+'哭了1')
}
//g.setMaxListeners(1);


util.isArray([]);
console.log(util.isArray({}))
g.on('cry',cry);

g.on('cry',cry1);


g.once('crying',function () {
    console.log(this._name+'正在哭')
});
g.emit('cry');
g.removeListener('cry',cry);
g.emit('cry');










