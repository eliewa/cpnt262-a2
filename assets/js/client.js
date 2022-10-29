// TODO: Ideally I would like to add a "roll" animation in the future, I think it would definetly look pretty cool.
let form = document.querySelector('form');
let output = document.querySelector('.output');
let dice = document.querySelector('span');
let button = document.querySelector('.btn-create')

const diceSides = function(event) {
  event.preventDefault();
  let diceType = form.type.value;
  if (diceType === 't2') {
    dice.classList.remove('dice');
    dice.classList.remove('twenty-dice');
    dice.classList.add('twelve-dice');
  } else if (diceType=== 't3') {
    dice.classList.remove('dice');
    dice.classList.remove('twelve-dice');
    dice.classList.add('twenty-dice');
  } else {
    dice.classList.remove('eight-dice');
    dice.classList.remove('twenty-dice');
    dice.classList.remove('twelve-dice');
    dice.classList.add('dice');
  }
}

const diceColor = function(event) {
  event.preventDefault();
  let colorType = form.color.value;
  if (colorType === 'red') {
    dice.style.color = 'red';
  } else if (colorType === 'green') {
    dice.style.color = 'green';
  } else {
    dice.style.color = 'blue';
  }
}

const rollDice = function(event) {
  event.preventDefault();
  let diceType = form.type.value;
  let randNum = Math.random();
  let num;
  if (diceType === 't1') {
    num = Math.floor(randNum * 6) + 1;
  } else if (diceType === 't2') {
    num = Math.floor(randNum * 11) + 2;
  } else {
    num = Math.floor(randNum * 20)
  }
  output.innerText = `You rolled ${num}` ;
}


button.addEventListener('click', diceSides);
button.addEventListener('click', diceColor);
form.addEventListener('submit', rollDice);