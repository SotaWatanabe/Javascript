//for(変数 in オブジェクト) ステートメント
var obj = {a:1, b:2, c:3};
for(var p in obj){
    console.log("p ="+ p);
}

//p=a
//p=b
//p=c

var obj = {a:1, b:2; c:3};
for (var p in obj){
    console.log("obj."+ p+ obj[p]);
}
//obj.a=1
//obj.b=2
//obj.c=3
