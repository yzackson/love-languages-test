var countA = 0;
var countB = 0;
var countC = 0;
var countD = 0;
var countE = 0;

function addItem(letter, item) {
    switch (letter) {
        case "A":
            countA = item.checked ? countA+1 : countA-1;
            break;
        case "B":
            countB = item.checked ? countB+1 : countB-1;
            break;
        case "C":
            countC = item.checked ? countC+1 : countC-1;
            break;
        case "D":
            countD = item.checked ? countD+1 : countD-1;
            break;
        case "E":
            countE = item.checked ? countE+1 : countE-1;
            break;
    
        default:
            break;
    }
}

function getResult() {
    document.getElementById("A").innerText = countA;
    document.getElementById("B").innerText = countB;
    document.getElementById("C").innerText = countC;
    document.getElementById("D").innerText = countD;
    document.getElementById("E").innerText = countE;
}

