const NUMPOSITIVE = document.querySelector('.numPositive');
const NUMNEGATIVE = document.querySelector('.numNegative');
const NUMNULLING = document.querySelector('.numNulling');
const NUMOVNING = document.querySelector('.numOvning');
const NUMODDNING = document.querySelector('.numOddning');







const BUTTONRANDOM = document.getElementById('buttonRandom');
const BUTTONCLIEND = document.getElementById('buttonClient');




BUTTONRANDOM.onclick = function(){
    let mass = [];

    let numObj = {
        numNeg: 0,
        numPos: 0,
        numNull: 0,
        numOven: 0,
        numOdd: 0
    }

    for(let i = 0; i < 10; i++){
        // let input = +prompt(`Введите ${i} число: `, '');
        let input = Math.floor(Math.random() * 100);

        if(input === 0){
            numObj.numNull++;
        } else if (input % 2 === 0){
            numObj.numOven++;
            if(input > 0){
                numObj.numPos++;
            } else if(input < 0){
                numObj.numNeg++;
            }
        } else if(input % 2){
            numObj.numOdd++;
            if(input > 0){
                numObj.numPos++;
            } else if(input < 0){
                numObj.numNeg++;
            }
        } else {
            console.log('Неверно выбрано число!');
            input = +prompt(`Вы ввели неверно, принимаются только числа ${i + 1} число: `, '');
        }
        mass.push(input);
    }
    NUMNEGATIVE.innerHTML = numObj.numNeg;
    NUMPOSITIVE.innerHTML = numObj.numPos;
    NUMNULLING.innerHTML = numObj.numNull;
    NUMODDNING.innerHTML = numObj.numOdd;
    NUMOVNING.innerHTML = numObj.numOven;
    console.log(mass);
    console.log(numObj);

    const MASSIVE = document.querySelector('.massive');
    MASSIVE.innerHTML = mass.join(' ');

}



BUTTONCLIEND.onclick = function(){
    let mass = [];

    let numObj = {
        numNeg: 0,
        numPos: 0,
        numNull: 0,
        numOven: 0,
        numOdd: 0
    }

    for(let i = 0; i < 10; i++){
        let input = +prompt(`Введите ${i + 1} число: `, '');
        // let input = Math.floor(Math.random() * 100);

        if(input === 0){
            numObj.numNull++;
        } else if (input % 2 === 0){
            numObj.numOven++;
            if(input > 0){
                numObj.numPos++;
            } else if(input < 0){
                numObj.numNeg++;
            }
        } else if(input % 2){
            numObj.numOdd++;
            if(input > 0){
                numObj.numPos++;
            } else if(input < 0){
                numObj.numNeg++;
            }
        } else {
            console.log('Неверно выбрано число!');
            input = +prompt(`Вы ввели неверно, принимаются только числа ${i} число: `, '');
        }
        mass.push(input);
    }
    NUMNEGATIVE.innerHTML = numObj.numNeg;
    NUMPOSITIVE.innerHTML = numObj.numPos;
    NUMNULLING.innerHTML = numObj.numNull;
    NUMODDNING.innerHTML = numObj.numOdd;
    NUMOVNING.innerHTML = numObj.numOven;
    console.log(mass);
    console.log(numObj);

    const MASSIVE = document.querySelector('.massive');
    MASSIVE.innerHTML = mass.join(' ');

}
