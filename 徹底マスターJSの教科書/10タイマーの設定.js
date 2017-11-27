//指定時間後に実行する:setTimeout
setTimeout(function(){
    console.log(new Date());
}, 2000);

//指定時間事に繰り返し実行する
setInterval(function(){
    console.log(new Date());
},1000);

//関数の実行を取り消す
clearInterval(timer);
