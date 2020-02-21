// 1. Создать функцию, генерирующую шахматную доску.
// При этом можно использовать любые html-теги по своему желанию. ++
// Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. ++
// Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.


//Create general chess div
let div = document.createElement("div"),
    rows, columns, counter;

div.className = 'chess';
div.style.display = 'grid';
div.style.gridTemplate = 'repeat(10, 1fr) / repeat(10, 1fr)';
div.style.maxWidth = '1200px';
div.style.margin = '0 auto';
document.body.append(div);

//Generate chess desk
for ( rows = 0, counter = 0; rows < 8; rows++){

    for ( columns = 0; columns < 8 ; columns++){
        var square = document.createElement("div");

        square.style.minHeight = '120px';
        square.style.minWidth = '120px';
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
            creator('1 / 2',rows + 2,nTol (rows));
        }
        if (columns === 7){
            creator('10 / 11',rows + 2,nTol (rows),true);
        }
        if (rows === 0){
            creator((columns + 2) + '/' + (columns + 3),1,columns+1,true);
        }
        if (rows === 7){
            creator ((columns + 2) + '/' + (columns + 3),10,columns+1);
        }


        document.querySelector('.chess').append(square);
    }
}
creator ('10 / 11',1,'');
creator ('1 / 2',1,'');


//Creator for named or numbers divs
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


// 2. Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру,
// например К – король,
// Ф – ферзь и т.п., причем все фигуры должны стоять на своих местах и быть соответственно черными и белыми.

//Switcher to name all blocks like A1, H1, D8.. + added data attribute for each div
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

//Convert from number to liter
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

//Rotator for chess desk
function rotate() {
   var el = document.querySelector('.chess');

   el.style.transform += 'rotate(90deg)';
}

// 3. *Заменить буквы, обозначающие фигуры картинками.

//Insert images into the chess desk
function insertImage(selector,bColor,icon,rotate) {
    var el = document.querySelectorAll('[data="'+selector+'"]');

    el[0].innerHTML = icon;
    el[0].style.fontSize = '64px';
    el[0].style.textAlign = 'center';
    if(rotate ===  true){
        el[0].style.transform = 'rotate(90deg)';
    }else{
        el[0].style.transform = 'rotate(-90deg)';
    }
    if(bColor === 'black'){
        el[0].style.color = '#000';
    }else if(bColor === 'white'){
        el[0].style.color = '#fff';
    }else{
        console.log('At this moment there are two available colors: white and black')
    }
}

insertImage('D1','white','&#x2654;',true);
insertImage('A1','black','&#x2656;',true);
insertImage('H1','white','&#x2656;',true);
insertImage('G1','black','&#x2658;',true);
insertImage('F1','white','&#x2657;',true);
insertImage('E1','black','&#x265B;',true);
insertImage('C1','black','&#x2657;',true);
insertImage('B1','white','&#x2658;',true);
insertImage('D2','black','&#x2659;',true);
insertImage('A2','white','&#x2659;',true);
insertImage('H2','black','&#x2659;',true);
insertImage('G2','white','&#x2659;',true);
insertImage('F2','black','&#x2659;',true);
insertImage('E2','white','&#x2659;',true);
insertImage('C2','white','&#x2659;',true);
insertImage('B2','black','&#x2659;',true);
insertImage('D8','black','&#x2654;');
insertImage('H8','black','&#x2656;');
insertImage('A8','white','&#x2656;');
insertImage('B8','black','&#x2658;');
insertImage('C8','white','&#x2657;');
insertImage('E8','white','&#x265B;');
insertImage('F8','black','&#x2657;');
insertImage('G8','white','&#x2658;');
insertImage('D7','white','&#x2659;',);
insertImage('A7','black','&#x2659;');
insertImage('H7','white','&#x2659;');
insertImage('G7','black','&#x2659;');
insertImage('F7','white','&#x2659;');
insertImage('E7','black','&#x2659;');
insertImage('C7','black','&#x2659;');
insertImage('B7','white','&#x2659;');

