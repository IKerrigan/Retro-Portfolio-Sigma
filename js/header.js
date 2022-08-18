window.onbeforeunload = function () {
  window.scrollTo(0,0);
};

document.addEventListener('DOMContentLoaded', function () {
  /* Initial Animation */
  const body = document.querySelector('body');
  const loader = document.querySelector('.loader');
  const header = document.querySelector('header');
  const main = document.querySelector('main');

  setTimeout(() => {
    loader.classList.toggle('active')

    setTimeout(() => {
      loader.style.display = 'none';

      body.style['overflow-y'] = '';
      header.style.visibility = 'visible';
      main.style.visibility = 'visible';
    }, 1000);
  }, 5000);

  header.style.visibility = 'hidden';
  main.style.visibility = 'hidden';
  body.style['overflow-y'] = 'hidden';

  /* Progress Bar */
  const progressBarContainer = document.querySelector('.progress-bar__container');
  const progressBarSection = document.querySelector('.progress-bar__section');
  const progressBar = document.querySelector('.progress-bar');

  let time = 0;
  let endState = 100;

  function getPositionXY(element) {
    var rect = element.getBoundingClientRect();
  }

  function calculateDifference(currHeight) {
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    return (currHeight / height) * 100
  }

  function getScrollPercent() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    return calculateDifference(winScroll);
  }

  function updateProgressBar() {
    const state = getScrollPercent();
    const x = `${state}%`

    if (state == endState) {
      gsap.to(progressBar, {
        x,
        backgroundColor: '#868B94',
        onComplete: () => {
          progressBarContainer.style.boxShadow = '0 0 5px #868B94';
        }
      });
    } else {
      gsap.to(progressBar, {
        x
      });
    }
  }

  let ticking = false;

  const { y } = progressBarSection.getBoundingClientRect();
  const edge = calculateDifference(y);

  window.addEventListener('scroll', function () {
    const percent = getScrollPercent();

    if (percent >= edge) {
      progressBarSection.style.position = 'fixed';
      progressBarSection.style.top = 0;
      progressBarSection.style.padding = "0.5rem 0 0 0";
    } else {
      progressBarSection.style.position = 'absolute';
      progressBarSection.style.top = "";
      progressBarSection.style.padding = "2.2rem 0 0 0";
    }

    if (!ticking) {
      window.requestAnimationFrame(function () {
        updateProgressBar();
        ticking = false;
      });

      ticking = true;
    }
  });
});

