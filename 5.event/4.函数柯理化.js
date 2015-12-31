function say(name) {
    console.log(this+name.toString())
}


var newSay = say.bind('张三');
//
//function newSay (){
//    say.call(null,['张三'].concat(Array.prototype.slice.call(arguments)))
//}


newSay('你爱我');
newSay('我爱你');



//有一顿饭  吃五次 就说 我吃腻了



function eat (times,callback){
    function cb() {
        times--;
        if(times==0){
            callback();
        }
    }
    return cb;
}


var newEat = eat(5, function () {
    console.log('我吃够了')
})

newEat();
newEat();
newEat();
newEat();
newEat();










var arr1 = ['a','b']
var arr2 = ['d','e']

console.log(arr1.concat(arr2));

Array.prototype.push.apply(arr1,arr2);
console.log(arr1)






