let buttons = document.querySelectorAll('button');

function addClass(event) {
  const clickedButton = event.target;

  if (clickedButton.classList.contains('grey-button')) {
    clickedButton.classList.remove('grey-button');
  } else {
    buttons.forEach((button) => {
      button.classList.remove('grey-button');
    });

    clickedButton.classList.add('grey-button');
  }
}
