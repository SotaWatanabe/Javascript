var msg = "Everything is Perfect";

msg.substring(7,10) //→ "ing" 7〜9文字目まで
msg.slice(7,10) //→"ing" 同上
msg.slice(-3) //→"ct."　最後の3文字
msg.indexOf("t") //→ 5 tが初めて出てくる位置
msg.indexOf("i",10) //→11 10文字目以降でiが初めて出てくる位置
msg.lastIndexOf("t") //→文字tが最後に出てくる位置
msg.split("") //["Everything" "is" "Perfect"]で文字列を分割
msg.replace("P","p") //Pをpに置き換える
msg.toUpperCase() //すべて大文字に変換
msg.includes("thing") //thingを含むかどうかの論理式
