const i = 10;
const j = 5;
let selected = 0;

let matriz = [] //0 available, -1 disabled, 1 disabled selected
let arrayCell = [] // 1, 2, 3 ... (i*j)

let matrizElement = document.getElementById('matriz');

let count = 1
for (let indexi = 0; indexi < i; indexi++) {
    matriz.push([]);
    let trElement = document.createElement('tr');
    for (let indexj = 0; indexj < j; indexj++) {
        let tdElement = document.createElement('td');
        matriz[indexi].push(0);
        arrayCell.push(count)
        tdElement.id = count++;
        tdElement.onclick = selection;
        trElement.appendChild(tdElement);
    }
    matrizElement.appendChild(trElement);
}

function random() {
    const numRandomElement = document.getElementById('numberRandom');
    const min = 1;
    const max = arrayCell.length;
    const numRandom = Math.floor(Math.random() * (max - min + 1) + min);
    numRandomElement.innerText = arrayCell[numRandom];
    disabled(arrayCell[numRandom]);
}

function selection(e) {
    let tdSelected = e.target;
    let num = parseInt(tdSelected.id);
    if (isDisabled(num)) {
        toastr.info("Esta celda esta desabilidatada")
        // alert('Esta celda esta desabilidatada');
        return;
    }
    disabled(num)
}

function isDisabled(count) {
    return arrayCell.indexOf(count) === -1;
}

function disabled(count) {
    if (selected >= 5) {
        toastr.info("You Only Can Select 5 Points")
        return
    }
    let num = 1
    let disabledi;
    let disabledj;
    matriz.forEach((row, indexi) => {
        row.forEach((element, indexj) => {
            if (num === count) {
                disabledi = indexi;
                disabledj = indexj;
                
            }
            num++;
        });
    });

    matriz[disabledi][disabledj] = 1;
    // for i++
    for (let indexi = disabledi+1; indexi < i; indexi++) {
        matriz[indexi][disabledj] = -1;
    }

    // for i--
    for (let indexi = disabledi-1; indexi >= 0; indexi--) {
        matriz[indexi][disabledj] = -1;
    }

    //for j++
    for (let indexj = disabledj+1; indexj < j; indexj++) {
        matriz[disabledi][indexj] = -1      
    }

    //for j--
    for (let indexj = disabledj-1; indexj >= 0; indexj--) {
        matriz[disabledi][indexj] = -1
    }
    selected++
    printMatriz(count)
}

function printMatriz(count) {
    let num = 1;
    matriz.forEach(row => {
        row.forEach(element => {
            if (element !== 0 && !isDisabled(num)) {
                let tdElement = document.getElementById(`${num}`)
                if (num === count) {
                    tdElement.className = 'disabledSelected'
                    tdElement.innerText = 'X'
                } else {
                    tdElement.className = 'disabled'
                }
                arrayCell.splice(arrayCell.indexOf(num),1);
            }
            num++;
        });
    });
}

function resetAll() {
    window.location.reload();
}