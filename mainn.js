var year = document.getElementById("year");
var month = document.getElementById("month");
var day = document.getElementById("day");
// const year =2001
// const month =9
// const day =26
btn.addEventListener("click", function(){

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
})