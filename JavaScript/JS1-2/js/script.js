//Возведение в степень

  var number = prompt('Введите число ');
  var degree =  prompt('Введите степень');

  function pow(a, n) {
      var result = a;

      for (var i=1; i < n; i++) {
        result *= a;
     }
      return result;
}
 alert(pow (number, degree));


//Массив

var arr = [];
  for (var i = 0; i < 5; i++); {
  var n = prompt('Введите имя ','');
  arr.push (n);
}
  console.log(arr);

var userName = prompt('Введите имя пользователя', '');

  var p = arr.indexOf(userName);
  if (arr === userName) {
    alert ( userName + ' ,Вы успешно вошли');
  } else {
    alert ('Имя не найдено');
  }
  for (var i = 0; i < arr.length; i++) {
  alert( arr[i] );
}
