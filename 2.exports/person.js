var name = 'jw';
var age = 18;



//exports.name= name;
//module.exports=name;

function Person(name,age){
    this._name = name;
    this._age=age;
}
Person.prototype.getName= function () {
    return this._name;
}
Person.prototype.setName= function (name) {
   this._name=name
}
module.exports =Person;

/**
 * ˵��  exports = module.exports��    �������ļ�module.exports
 *
 * */