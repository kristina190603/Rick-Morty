/* Задание №1.1. 
Сделайте запрос на адрес 'https://rickandmortyapi.com/api/character'.
Используйте fetch или ajax. Отобразите на странице имена персонажей из 
Рика и Морти в list. 
let block1 = $('.block1');
let list = $('.list');
(Вы можете стилизовать страницу по желанию.)
*/

/* Задание №1.2. 
Рядом с именами отобразите все изображения
которые вы получили вместе с остальными данными из сервера.
*/

/* Задание №1.3. 
Создайте файл db.json и запустите локальный сервер.
Данные которые вы получили во втором задании, сохраните 
в локальном сервере db.json, в массиве под 
названием "characters".
Подсказка: как только ваши данные сохранились в db.json
функцию, которая отправляет запрос на db.json стоит закомментировать.
*/

/* Задание №1.4. 
А теперь сделайте запрос на локальный сервер.
Во второй блок с классом 'block-2', отобразите имена, которые 
вы получили (стянули) с db.json.


/* Задание №1.5. 
К именам добавьте картинки персонажей.
В итоге у вас должна получиться точная копия первых двух тасков.
Отличие которых лишь в базе данных.
*/

let API = "https://rickandmortyapi.com/api/character";
let APIback = "http://localhost:8000/characters";

let block1 = document.querySelector(".block1");
let block2 = document.querySelector(".block2");
let list1 = document.querySelector(".list");
let list2 = document.querySelector(".list2");

fetch(API).then((res) =>
  res.json().then((info) => {
    info.results.forEach((item) => {
      setPerson(item);
      let liName = document.createElement("li");
      let liImage = document.createElement("li");

      liName.innerHTML = item.name;
      liImage.innerHTML = `<img src="${item.image}"/>`;

      list1.append(liName);
      list1.append(liImage);

      liImage.style.listStyleType = "none";
      liName.style.listStyleType = "none";
      liName.style.fontSize = "20px";
    });
  })
);


function setPerson(obj) {
  fetch(APIback, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
  });
}

console.log(list2);
fetch(APIback).then((data) =>
  data.json().then((info) => {
    console.log(info);
    info.forEach((item) => {
      let liName = document.createElement("li");
      let liImage = document.createElement("li");

      liName.innerHTML = item.name;
      liImage.innerHTML = `<img src="${item.image}"/>`;

      list2.append(liName);
      list2.append(liImage);

      liImage.style.listStyleType = "none";
      liName.style.listStyleType = "none";
      liName.style.fontSize = "20px";
    });
  })
);
