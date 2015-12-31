function Bell(name){
    this._name=name;
    this._events={};
}

Bell.prototype.on= function (eventName, callback) {
    if(this._events[eventName]){
        this._events[eventName].push(callback);
    }else{
        this._events[eventName]=[callback];
    }
};


Bell.prototype.emit= function (eventName) {
    var self = this;
    var arr = Array.prototype.slice.call(arguments,1);
    this._events[eventName].forEach(function (cb) {
        cb.apply(self,arr)
    })
};
Bell.prototype.once= function (eventName,callback) {
    this.on(eventName,fn);
    function fn(){
        console.log(arguments);
        callback.apply(this,arguments);
        this.removeListener(eventName,fn);
    }
};
Bell.prototype.removeListener= function (eventName,callback) {
    this._events[eventName]=this._events[eventName].filter(function (cb) {
        return cb != callback
    });

};
var b = new Bell();

b.on('voice', function (who) {
    console.log(who+'想一次')
});

b.once('right', function (who) {
    console.log(who+'想二次')
});

b.emit('right','大松1');
b.emit('right','大松1');
