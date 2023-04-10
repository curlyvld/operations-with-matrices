let error="";

/**
 * Валидация параметров ввода
 * Валидация проверяет, чтобы матрица состояла только из цифр 0 и 1, была квадратной и не пустой.
 */
function validate (input){
  let val=true;
  if(input.length > 0){
    let mas=input.split("\n");
    for(let i=0; i<mas.length; i++){
      for(let j=0; j<mas.length; j++){
        if(mas[i][j]!="1" && mas[i][j]!="0"){
          error="Матрица должна состоять только из цифр 0 и 1!";
          val=false;
        }
        if(mas.length!=mas[i].length){
          error="Матрица должна быть квадратной!";
          val=false;
        } 
      }
    }
  }
  else{
    error="Поле не должно быть пустым";
    val=false;
  }
  return val; //Функция возвращает логическое значение true, если матрица прошла валидацию и false, если матрица не прошла валидацию
}
/**
 * Функция выполняется при нажатии на кнопку "Рассчитать". 
 * Получает значение введенной пользователем матрицы и вызывает функцию валидации.
 */

function count(){
  let arr=document.getElementById("1");
  if (validate(arr.value)){
      let a=arr.value.split("\n");
      let mnogitel;
      let reflexivity=true;
      let simmetry=true;
      let skewsymmetry=true;
      let transitivity=true;
      for (let i=0;i<a.length;i++){
      for(let j=0;j<a.length;j++){
          if(a[i][j]!=a[j][i]){
              simmetry=false;
          }//симметрична относительньно главной диагонали
        }
      }
      // Проходим по всем элементам матрицы
     for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a[i].length; j++) {
          if (a[i][j] !== a[j][i]) {
            skewsymmetry = false;
            
          }
        }
      }
      for (let i=0;i<a.length;i++){
        if(a[i][i]=="0"){
            reflexivity=false;
        }//единичная главная ось
      }
      
      // Проходим по всем элементам матрицы
      for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
          // Если элементы i и j связаны, то ищем элементы, связанные с j
          if (a[i][j] === 1) {
            for (let k = 0; k < matrix[j].length; k++) {
              // Если элементы j и k связаны, то делаем связь между i и k
              if (a[j][k] === 1) {
                a[i][k] = 1;
                transitivity=false;
                    }
            }
          } 
        }
      }

    if (simmetry == true){
        document.getElementById("simmetry").innerHTML="симметрична"
    }
    else{
        document.getElementById("simmetry").innerHTML="не симметрична"
    }
    if (skewsymmetry == true){
        document.getElementById("skewsymmetry").innerHTML="кососимметрична"
    }
    else{
        document.getElementById("skewsymmetry").innerHTML="не кососимметрична"
    }
    if (transitivity == true){
        document.getElementById("transitivity").innerHTML="транзитивна"
    }
    else{
        document.getElementById("transitivity").innerHTML="не транзитивна"
    }
    if (reflexivity == true){
        document.getElementById("reflexivity").innerHTML="рефлексивна"
    }
    else{
        document.getElementById("reflexivity").innerHTML="не рефлексивна"
   }
} 
else {
  alert(error);
}
}
