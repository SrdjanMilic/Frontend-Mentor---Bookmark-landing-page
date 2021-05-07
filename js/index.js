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
    this.classList.toggle('arrow-active');
    this.classList.toggle('accordion__title-bold');
    const accordionContent = this.nextElementSibling;

    if (accordionContent.style.maxHeight) {
      accordionContent.style.maxHeight = null;
    } else {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
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
  hamburgerIcon.style.display = 'none';
});

closeSidebar.addEventListener('click', () => {
  toggleSideBar();
  hamburgerIcon.style.display = 'block';
});
