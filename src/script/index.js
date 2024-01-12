document.querySelector('button').addEventListener('click', function(event) {
    event.preventDefault(); // зупинка стандартної події відправки форми

    // Отрим дані з форми
    var selectValue = document.querySelector('#select').value;
    var selectValue2 = document.querySelector('#select2').value;
    var selectValue3 = document.querySelector('#select3').value;
    var selectValue4 = document.querySelector('#select4').value;
    // Перевірка отриманих даних
    var group = selectValue2;
    if (group == "Комп'ютерні науки") {
        group = "КН-";
    }
    if (group == "Прикладна механіка") {
        group = "ПМ-";
    }
    if (group == "Менеджент") {
        group = "МД-";
    }

    // Створення рядків таблиці
    var newRow = document.createElement('tr');
    var newCell = document.createElement('td');
    newCell.textContent = selectValue3;
    newRow.appendChild(newCell);
    var newCell = document.createElement('td');
    newCell.textContent = selectValue4;
    newRow.appendChild(newCell);
    var newCell = document.createElement('td');
    newCell.textContent = selectValue;
    newRow.appendChild(newCell);
    var newCell = document.createElement('td');
    newCell.textContent = group + (selectValue3-2000);
    newRow.appendChild(newCell);


    // додавання нового рядка
    document.querySelector('table').appendChild(newRow);
});