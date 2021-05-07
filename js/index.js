const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {

  tab.addEventListener('click', () => {
    const contentTarget = document.querySelector(tab.dataset.tabTarget);

    tabs.forEach(tab => {
      tab.classList.remove('tabs__item--active');
    })

    tabContents.forEach(content => {
      content.classList.remove('active');
    })

    contentTarget.classList.add('active');
    tab.classList.add('tabs__item--active');
  });
})

const accordions = document.querySelectorAll('[data-accordion-target]');
const accordionContent = document.querySelectorAll('[data-accordion-content]');

accordions.forEach(accordion => {

  accordion.addEventListener('click', () => {
    const contentTarget = document.querySelector(accordion.dataset.accordionTarget);
    const iconTarget = document.querySelector( '.accordion__arrow-icon');

    accordions.forEach(accordion => {
      accordion.classList.remove('accordion__item--active');
    })

    accordionContent.forEach(content => {
      content.classList.remove('active');
    })

    contentTarget.classList.add('active');
    accordion.classList.add('accordion__item--active');
    iconTarget.classList.add('arrow-active');
  });
})
