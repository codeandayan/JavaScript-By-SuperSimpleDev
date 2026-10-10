function handleCostKeydown(event) {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}

function calculateTotal() {
  let inputElement = document.querySelector('js-cost-input');
  let cost = Number(inputElement.value);
  if (cost < 0) {
    document.querySelector('.js-total-cost').innerHTML =
      `Error: cost can't be less than $0`;
  } else if (cost < 40 && cost >= 0) {
    cost = cost + 10;
  } else document.querySelector('.js-total-cost').innerHTML = `$${cost}`;
}
