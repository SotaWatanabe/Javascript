switch(式){
    case 式1: 実行文1
              break;
    case 式2: 実行文2
              break;
    case 式n: 実行文n
              break;
    default: 実行文n+1
}

function binatyOperation(a,b,operation){
    switch(operation){
        case "+": return a+b;
        case "-": return a-b;
        case "*": return a*b;
        case "/": return a/b;
        default: return NaN;
    }
}
