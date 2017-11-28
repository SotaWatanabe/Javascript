//関数の定義
function square(x){
    return x*x;
}

//関数リテラルによる定義
var square = function(x){
    return x*x;
}

//Functionコンストラクタによる定義
var square = new Function("x","return x*x");

//アロー関数式による定義
var square = x => x*x;
