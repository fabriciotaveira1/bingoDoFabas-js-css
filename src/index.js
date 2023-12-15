
//shuffle the numbers
function shuffle(array) {
    for( let i = array.length -1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


//function to generate numbers
function generateNumbers(){
    const numbers = [];
    for (let i = 1; i <= 200; i++){
        numbers.push(i);
    }
    return shuffle(numbers);
}

//function to sort the numbers
function sortNumbers(numbers){
    if (numbers.length === 0 ){
        return console.log('Todos os números foram sorteados!');
    }

    const numberSorted = numbers.pop();
    return numberSorted;
}

const numbersBingo = generateNumbers();



const numberSorted = sortNumbers(numbersBingo);
console.log('O número sorteado foi ' + numberSorted);

