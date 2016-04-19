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

  for (var i = 0; i < 5; i++){
      arr.push(prompt('Введите имя ', ''));
}

  var userName = prompt('Введите имя пользователя', '');

  var p = arr.indexOf(userName);

     if (arr[p] === userName) {
          alert(arr[p] + ' ,Вы успешно вошли');
}    else {
          alert('Имя не найдено');
}

