const buttonText = document.querySelector('.about__button');
const elementAccordion = document.querySelector('.about__container');
const close = 'Свернуть';
const open = 'Подробнее';

const textSwitch = () => {
  buttonText.addEventListener('click', () => {
    if (elementAccordion.classList.contains('is-active')) {
      buttonText.textContent = open;
    } else {
      buttonText.textContent = close;
    }
  });
};

export {textSwitch};
