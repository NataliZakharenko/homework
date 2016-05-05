var test = {
    header: 'Тест по программированию',
    question: ['Вопрос №1' , 'Вопрос №2' ,' Вопрос №3'],
    checkboxName: ['one' , 'two' , 'three' , 'four' , 'five' , 'six' , 'seven' ,'eight','nine'],
    id: ['1' , '2' , '3' , '4' , '5' , '6' , '7' ,'8','9'],
    answer: ['Вариант ответа №1','Вариант ответа №2', 'Вариант ответа №3',
            'Вариант ответа №1','Вариант ответа №2', 'Вариант ответа №3',
            'Вариант ответа №1','Вариант ответа №2', 'Вариант ответа №3'],
    submit: 'Проверить мои результаты'
};
var k = 0;

var header = document.createElement ('h3');
    header.innerHTML = test.header;


var form = document.createElement( 'form');
    form.action = '#';
    form.method = 'post';
    form.classList.add ('form-group');

var list = document.createElement ('ol');
    list.classList.add ('list-group');


var parent = document.body;

var container = document.createElement ('div');
    container.classList.add ('container');


var button = document.createElement ('button');
    button.classList.add ('btn');
    button.classList.add ('btn-default');
    button.type = 'submit';
    button.innerHTML = test.submit;


container.appendChild (header);
parent.appendChild (container);
container.appendChild (form);
form.appendChild (list);

for (var i = 0; i < test.question.length; i++) {
  var listItem = document.createElement ('li');

  list.appendChild (listItem);

  var question = document.createElement ('h4');
      question.innerHTML = test.question [i];

  listItem.appendChild (question);
  for (var j = 0; j < 3; j++) {
    var checkbox = document.createElement ('input');
      checkbox.type = 'checkbox';
      checkbox.name = test.checkboxName [k];
      checkbox.id = test.id [k];

    var answer = document.createElement ('p');

    var label = document.createElement ('label');
      label.htmlFor = test.id [k];
      label.style.marginLeft = '10px';
      label.style.fontSize = '18px';
      label.style.fontWeight = 'normal';

    label.appendChild (document.createTextNode(test.answer [k]));
    listItem.appendChild (answer);
    answer.appendChild (checkbox);
    answer.appendChild (label);
    k++;
  }
}
