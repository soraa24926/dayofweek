var year = document.getElementById("year");
var month = document.getElementById("month");
var day = document.getElementById("day");
// const year =2001
// const month =9
// const day =26

// 入力済みかのチェック
function checkinput(){
  // matchで正規表現を表示、/で囲む、\dで数字、+でそれ(\d)が１個以上を示す
  // nullはなしで!==は〜でないなので、数字が１個以上入ってなくない場合nobtnを消す
  if(year.value.match(/\d+/) !== null && month.value.match(/\d+/) !== null && day.value.match(/\d+/) !== null){
    btn.classList.remove("nobtn");
  }else{
    btn.classList.add("nobtn");
  }
}

// 画面表示の際に金額をすぐ入力できる様にフォーカス
year.focus();

// 年月日の入力された際に入力済みかチェック
year.addEventListener("keyup",checkinput);
month.addEventListener("keyup",checkinput);
day.addEventListener("keyup",checkinput);

btn.addEventListener("click", function(){

  // クラスにnobtnが含まれてたら　contains＝含まれる this=btnに
  if(this.classList.contains("nobtn") === true){
    // 先に進ませない
    return;
  }

  const n =new Date(year.value,month.value - 1,day.value).getDay();
  let answer;
  if(n === 0){
    answer = year.value + "年" + month.value + "月" + day.value + "日は日曜日です。";
  }else if(n === 1){
    answer = year.value + "年" + month.value + "月" + day.value + "日は月曜日です。";
  }else if(n === 2){
    answer = year.value + "年" + month.value + "月" + day.value + "日は火曜日です。";
  }else if(n === 3){
    answer = year.value + "年" + month.value + "月" + day.value + "日は水曜日です。";
  }else if(n === 4){
    answer = year.value + "年" + month.value + "月" + day.value + "日は木曜日です。";
  }else if(n === 5){
    answer = year.value + "年" + month.value + "月" + day.value + "日は金曜日です。";
  }else if(n === 6){
    answer = year.value + "年" + month.value + "月" + day.value + "日は土曜日です。";
  }
  // 結果画面に表示
  result.textContent = answer;

  // rsetの隠し外し
  reset.classList.remove("hidden");
})

// リセットが押されたら
reset.addEventListener("click",function(){
  // 全システムの初期化
  result.textContent = "ここに結果を表示します";
  year.value = "";
  month.value ="";
  day.value = "";
  btn.classList.add("nobtn");
  reset.classList.add("hidden");
  year.focus();
});