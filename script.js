let urlap = document.querySelector('.urlap');
let tablazat = document.querySelector('.table');

let dolgozok = [];

function hozzaad(event){
    event.preventDefault();     // nem engedi újratölteni az oldalt
    // console.log('OK');
    let dolgozo = {};   //üres objektum
    dolgozo.nev = document.querySelector('#nev').value;
    dolgozo.email = document.querySelector('#email').value;
    dolgozo.szuletesiDatum = document.querySelector('szuletesi-datum').value;
    dolgozo.neme = document.querySelector('input[name="name"]:checked').value;

    dolgozok.push(dolgozo); //.push() a végén bővíti a tömböt
}

function listazas(){
    let i = 1;
    tablazat.innerHTML='';
    dolgozok.forEach(egyDolgozo =>{
        let tr = document.createElement('tr');

        let td = document.createElement('td');
        td.textContent = i;
        tr.append(td);

        td = document.createElement('td');
        td.textContent = egyDolgozo.nev;
        tr.append(td);

        td = document.createElement('td');
        td.textContent = egyDolgozo.email;
        tr.append(td);

        td = document.createElement('td');
        td.textContent = egyDolgozo.szuletesiDatum;
        tr.append(td);

        td = document.createElement('td');
        td.textContent = egyDolgozo.neme;
        tr.append(td);

        tablazat.append(tr);
        i++;
    })
}

urlap.addEventListener('submit', hozzaad);