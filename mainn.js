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
    answer = "日曜日";
  }else if(n === 1){
    answer = "月曜日";
  }else if(n === 2){
    answer = "火曜日";
  }else if(n === 3){
    answer = "水曜日";
  }else if(n === 4){
    answer = "木曜日";
  }else if(n === 5){
    answer = "金曜日";
  }else if(n === 6){
    answer = "土曜日";
  }
  // 結果画面に表示
  result.textContent = answer;
})