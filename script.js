console.log('Hello!');
const patterns = {
    cardName: /^([a-z]+\s){1}[a-z]+$/i,
    cardNum: /^([0-9]{4}\s{1}){3}[0-9]{4}$/,
    cardMonth: /^[0-9]{2}$/,
    cardYear: /^[0-9]{2}$/,
    cvc: /^[0-9]{3}$/
}

const formEl = document.querySelector('form');
const allInputs = document.querySelectorAll('input');
const cardIdEl = document.querySelector('.card-id');
const buttonEl = document.querySelector('button');
const userNameEl = document.querySelector('.user-name');
const cardNumEl = document.querySelector('.card-num');
const monthYearEl = document.querySelector('.month-year');
const cvcNumEl = document.querySelector('.cvc-num');
const farewellEl = document.querySelector('.farewell');

formEl.addEventListener('submit', function(event) {
    let validOutcomes = [];
    [...allInputs].forEach(item => {
            let sampleOutput = checkRegex(item.value, patterns[item.getAttribute('name')]);
            if(sampleOutput) {
                item.classList.add('valid');
                validOutcomes.push(true);
            } else {
                validOutcomes.push(false);
                item.classList.add('invalid');
                item.style.borderColor = 'red';
            }
    })

    if(validOutcomes.includes(false)) {
        event.preventDefault();
    } else {
        userNameEl.textContent = [...allInputs][0].value.toUpperCase();
        cardNumEl.textContent = [...allInputs][1].value;
        monthYearEl.textContent = `${[...allInputs][2].value}/${[...allInputs][3].value}`;
        cvcNumEl.textContent = [...allInputs][[...allInputs].length - 1].value;

        formEl.classList.add('disabled');
        farewellEl.classList.add('active');
    }
    
    console.log(validOutcomes);

   
})

function checkRegex(sample, regex) {
    return regex.test(sample);
}

// const regex = /^([a-z]+\s){1}[a-z]+$/i;
// let pin = 'Omotosho Oluwasina';
// let pin2 = 'Akanbi James202';
// console.log(regex.test(pin));
// console.log(regex.test(pin2));


