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
 * 说明  exports = module.exports的    导出的文件module.exports
 *
 * */