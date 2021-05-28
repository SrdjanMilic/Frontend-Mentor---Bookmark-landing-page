// Tabs
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const contentTarget = document.querySelector(tab.dataset.tabTarget);

    tabs.forEach(tab => {
      tab.classList.remove('tabs__item--active');
    });

    tabContents.forEach(content => {
      content.classList.remove('active');
    });

    contentTarget.classList.add('active');
    tab.classList.add('tabs__item--active');
  });
});

// Accordion
const accordionTitle = document.getElementsByClassName('accordion__title');

for (let i = 0; i < accordionTitle.length; i++) {
  accordionTitle[i].addEventListener('click', function() {
    const accordionContent = this.nextElementSibling;

    this.classList.toggle('arrow-active');
    this.classList.toggle('accordion__title-bold');

    if (accordionContent.style.maxHeight === '') {
      /***
       The Element.scrollHeight read-only property is a measurement of the height of an element's content,
       including content not visible on the screen due to overflow.
       */
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    } else {
      accordionContent.style.maxHeight = null;
    }
  });
}

// Overlay menu
const hamburgerIcon = document.querySelector('.header__hamburger-icon');
const sideBar = document.querySelector('.header__sidebar');
const closeSidebar = document.querySelector('.header__sidebar-close');

function toggleSideBar() {
  sideBar.classList.toggle('active');
  closeSidebar.classList.toggle('animation');
  if (sideBar.classList.contains('active')) {
    hamburgerIcon.style.display = 'none';
  } else {
    hamburgerIcon.style.display = 'block';
  }
}

hamburgerIcon.addEventListener('click', () => {
  toggleSideBar();
});

closeSidebar.addEventListener('click', () => {
  toggleSideBar();
});
