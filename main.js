// 数字入力ができる（コンソールに反映）
// 1.液晶画面のHTMLを取得
// 2.液晶要素をJSで書き換える
//   document.getElementById("id")の要素を取得して変数に代入
// 3.条件分岐で「AC」の時と「=」の時、それ以外のボタンが押された時に返す処理を書く
// 数字を入力した際の「0」表示を消す
// 液晶部の文字を取得して、加工して、再表示させる
// 加工では取得した文字列の最後が演算子だったら、新しい文字に書き換える



function clickbutton(button) {
  let result = document.getElementById("result") //resultの中(液晶部分)を定義
  let get_value = button.innerHTML;              //get_valueという変数を定義
  const operator = ["+","-","*","/"];


  if (get_value == "AC") {
    result.innerHTML = "0"  // ACなら液晶は0になる
    } else if (get_value == "=") {
      result.innerHTML = eval(result.innerHTML)  //液晶表示の内容を代入

    } else if (operator.includes(get_value) == true && result.innerHTML.slice(-1) == "+") {
      const f = result.innerHTML.slice(0,-1);   //ここだけでは最後の文字を削除したまま
      result.innerHTML = f + get_value;         //削除した値に入力値を追加して再代入
    } else if (operator.includes(get_value) == true && result.innerHTML.slice(-1) == "-") {
      const f = result.innerHTML.slice(0,-1);
      result.innerHTML = f + get_value;
    } else if (operator.includes(get_value) == true && result.innerHTML.slice(-1) == "*") {
      const f = result.innerHTML.slice(0,-1);
      result.innerHTML = f + get_value;
    } else if (operator.includes(get_value) == true && result.innerHTML.slice(-1) == "/") {
      const f = result.innerHTML.slice(0,-1);
      result.innerHTML = f + get_value;
      
    } else {
        if (result.innerHTML == "0") {
          result.innerHTML = get_value    //「0」の時はそのまま値を代入
        } else {
          result.innerHTML += get_value   // その他の場合は「0」に押した数字を足して代入 
        }
    }
  }
