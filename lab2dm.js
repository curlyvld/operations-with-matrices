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
      let a=arr.value.split("\n"); //Строка матрицы arr.value разбивается по символу новой строки ("\n") и сохраняется в переменной a в виде массива строк.
      let mnogitel;
      let reflexivity=true;
      let simmetry=true;
      let skewsymmetry=true;
      let transitivity=true;
      for (let i=0;i<a.length;i++){
      for(let j=0;j<a.length;j++){ //Происходит двойной цикл for для проверки симметричности матрицы. Если элементы матрицы a[i][j] и a[j][i] не равны, то переменная symmetry устанавливается в false.
          if(a[i][j]!=a[j][i]){
              simmetry=false;
          }//симметрична относительньно главной диагонали
        }
      }
      // Проходим по всем элементам матрицы
      for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a[i].length; j++) { //Двойной цикл for для проверки кососимметричности матрицы. Если элементы матрицы a[i][j] и a[j][i] не равны, то переменная skewSymmetry устанавливается в false.
          if (a[i][j] !== a[j][i]) {
            skewsymmetry = false;
            
          }
        }
      }
      for (let i=0;i<a.length;i++){
        if(a[i][i]=="0"){ //Цикл for для проверки рефлексивности матрицы. Если элементы на главной диагонали матрицы a[i][i] равны "0", то переменная reflexivity устанавливается в false
            reflexivity=false;
        }//единичная главная ось
      }
      
      // Проходим по всем элементам матрицы
      for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
          // Если элементы i и j связаны, то ищем элементы, связанные с j
          if (a[i][j] === 1) {
            for (let k = 0; k < matrix[j].length; k++) { //Двойной цикл for используется для проверки транзитивности матрицы. Если элементы a[i][j] и a[j][k] равны 1, то элемент a[i][k] устанавливается в 1, и переменная transitivity устанавливается в false.
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
        document.getElementById("simmetry").innerHTML="Cимметричность: симметрична"
    }
    else{
        document.getElementById("simmetry").innerHTML="Симметричность: не симметрична"
    }
    if (skewsymmetry == true){
        document.getElementById("skewsymmetry").innerHTML="Кососимметричность: кососимметрична"
    }
    else{
        document.getElementById("skewsymmetry").innerHTML="Кососимметричность: не кососимметрична"
    }
    if (transitivity == true){
        document.getElementById("transitivity").innerHTML="Транзитивность: транзитивна"
    }
    else{
        document.getElementById("transitivity").innerHTML="Транзитивность: не транзитивна"
    }
    if (reflexivity == true){
        document.getElementById("reflexivity").innerHTML="Рефлексивность: рефлексивна"
    }
    else{
        document.getElementById("reflexivity").innerHTML="Рефлексивность: не рефлексивна"
   }
} 
else {
  alert(error);
}
}
