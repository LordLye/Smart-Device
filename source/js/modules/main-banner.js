const bannerText = document.querySelector('.intro__button');
const maxText = 'Получить бесплатную консультацию';
const minText = 'Бесплатная консультация';

const bannerTextSwap = () => {
  window.addEventListener('load', () => {
    if (innerWidth < 768) {
      bannerText.textContent = minText;
    } else {
      bannerText.textContent = maxText;
    }
  });

  window.addEventListener('resize', () => {
    if (innerWidth < 768) {
      bannerText.textContent = minText;
    } else {
      bannerText.textContent = maxText;
    }
  });
};

export {bannerTextSwap};
