function handleCostKeydown(event) {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}

let inputElement = document.querySelector('.js-cost-input');

function calculateTotal() {
  let cost = Number(inputElement.value);

  if (cost < 0) {
    document.querySelector('.js-total-cost').innerHTML =
      `Error: cost can't be less than $0`;
    document.querySelector('.js-total-cost').style.color = 'red';
  } else {
    if (cost < 40) {
      cost = cost + 10;
    }

    document.querySelector('.js-total-cost').innerHTML = `$${cost}`;
  }
}
