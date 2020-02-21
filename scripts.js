// 1. Создать функцию, генерирующую шахматную доску.
// При этом можно использовать любые html-теги по своему желанию. ++
// Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. ++
// Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.

let div = document.createElement("div"),
    rows, columns, counter;

div.className = 'chess';
div.style.display = 'grid';
div.style.gridTemplate = 'repeat(10, 1fr) / repeat(10, 1fr)';
div.style.maxWidth = '1200px';
div.style.margin = '0 auto';
document.body.append(div);

for ( rows = 0, counter = 0; rows < 8; rows++){

    for ( columns = 0; columns < 8 ; columns++){
        var square = document.createElement("div");

        square.style.minHeight = '100px';
        square.style.minWidth = '100px';
        square.style.border = '1px solid #000';
        if (rows % 2 === 0){
            if (columns % 2 === 0){
                square.style.backgroundColor = 'white';
            }else{
                square.style.backgroundColor = 'black';
            }
        }else{
            if (columns % 2 === 0){
                square.style.backgroundColor = 'black';
            }else{
                square.style.backgroundColor = 'white';
            }
        }
        switcher(rows,columns);

        if (columns === 0){
            creator('1 / 2',rows + 2 +'',rows + 1 + '');
        }
        if (columns === 7){
            creator('10 / 11',-rows - 3,rows+1,true);
        }
        if (rows === 0){
            creator((-2 - columns) + '/' + (-3 - columns ),1,nTol (columns),true);
        }
        if (rows === 7){
            creator ((columns + 2) + '/' + (columns + 3),10,nTol (columns));
        }


        document.querySelector('.chess').append(square);
    }
}

function switcher (rows, columns){
    switch (rows) {
        case 0:{
            square.setAttribute('data','A' + (columns+1));
            break;
        }
        case 1:{
            square.setAttribute('data','B' + (columns+1));
            break;
        }
        case 2:{
            square.setAttribute('data','C' + (columns+1));
            break;
        }
        case 3:{
            square.setAttribute('data','D' + (columns+1));
            break;
        }
        case 4:{
            square.setAttribute('data','E' + (columns+1));
            break;
        }
        case 5:{
            square.setAttribute('data','F' + (columns+1));
            break;
        }
        case 6:{
            square.setAttribute('data','G' + (columns+1));
            break;
        }
        case 7:{
            square.setAttribute('data','H' + (columns+1));
            break;
        }
    }
}
function nTol (number){
    switch (number) {
        case 0:{
            return 'A';
        }
        case 1:{
            return 'B';
        }
        case 2:{
            return 'C';
        }
        case 3:{
            return 'D';
        }
        case 4:{
            return 'E';
        }
        case 5:{
            return 'F';
        }
        case 6:{
            return 'G';
        }
        case 7:{
            return 'H';
        }
    }
}
function creator (grid,rows,innerHTML,rotate){
    let el = document.createElement("div");

    if(rotate){
        el.style.transform = 'rotate(180deg)';
    }
    el.style.gridColumn = grid;
    el.style.gridRow = rows;
    el.innerHTML = innerHTML;
    el.style.placeSelf = 'center';
    el.style.fontSize = '24px';

    return  document.querySelector('.chess').prepend(el);

}
creator ('10 / 11',1,'');
creator ('1 / 2',1,'');



// 2. Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру,
// например К – король,
// Ф – ферзь и т.п., причем все фигуры должны стоять на своих местах и быть соответственно черными и белыми.



// 3. *Заменить буквы, обозначающие фигуры картинками.