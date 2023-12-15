const button = document.getElementById('buttonSort');
const numberSortedHtml = document.getElementById('numberSorted');
const numbersSorted = document.getElementById('numbersSorted');
let i = 0;
let numbersBingo = [];
let j = 0;
//shuffle the numbers
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


//function to generate numbers
function generateNumbers() {
    const numbers = [];
    for (let i = 1; i <= 75; i++) {
        numbers.push(i);
    }
    return shuffle(numbers);
}

//function to sort the numbers
function sortNumbers() {
    if (i >= numbersBingo.length) {
        return null
    }

    const numberSorted = numbersBingo[i];
    return numberSorted;
}


button.addEventListener('click', () => {
    if (i === 0) {
        numbersBingo = generateNumbers();
        shuffle(numbersBingo);
    }

    const numberSorted = sortNumbers();

    if(numberSorted === null){
        numbersSorted.innerHTML = 'Todos os números já foram sorteados';
        return;
    }

    numberSortedHtml.innerHTML = numberSorted;
    numbersSorted.innerHTML += numberSorted + ', ';

    i += 1;
    
    j += 1;
    if(j > 30){
        numbersSorted.innerHTML = '';
        j = 0;
    }

})

