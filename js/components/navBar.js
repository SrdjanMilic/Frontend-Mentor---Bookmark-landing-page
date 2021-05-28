const NAV_BAR_TEMPLATE = document.createElement('template');
NAV_BAR_TEMPLATE.innerHTML = `
  <style>
    a {
      text-decoration: none;
    }
    
    :host {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    :host a {
      text-decoration: none;
      color: #252b46;
      transition: color .3s;
    }
    
    :host a:hover,
    :host a:focus,
    :host a:active {
      color: #fa5757;
    }
    
    :host(.white-fonts) a {
      color: #fff;
    }
    
    :host(.white-fonts) a:hover,
    :host(.white-fonts) a:active,
    :host(.white-fonts) a:focus {
      color: #fa5757;
    }
    
    :host(.justify-left) {
      justify-content: left;
    }
    
    :host(.justify-center) {
      justify-content: center;
    }
    
    :host(.justify-unset) {
      justify-content: unset;
    }
    
    :host(.white-fonts) a {
      color: #fff;
    }

    :host(.dark-background) {
      background-color: #252b46;
    }
    
    :host(.light-background) {
      background-color: aliceblue;
    }
        
    :host(.custom-logo) .nav-bar__logo {
      width: 220px;
      height: auto;
      margin-left: 20px;
    }
    
    .nav-bar__logo {
      width: 148px;
      height: auto;
      display: block;
    }
    
    .nav-bar__item {
      display: inline-block;
      margin-right: 2.7rem;
    }
       
    @media (max-width: 900px) {
      :host(.header--nav-bar) .nav-bar__list {
        display: none;
      }

      :host(.footer--nav-bar) {
        display: block;
        justify-content: unset;
        align-items: unset;
      }
      
      :host(.footer--nav-bar) .nav-bar__list {
        margin-left: 0;
        padding: 10px 0;
      }
      
      .nav-bar__item {
        display: block;
        margin: 1.6rem 0;
      }
    }
  </style>

  <a href="index.html">
    <img class="nav-bar__logo" />
  </a>
  
  <ul class="nav-bar__list">
    <li class="nav-bar__item">
      <a href="components.html">Components</a>
    </li>
    <li class="nav-bar__item">
      <a href="#">Features</a>
    </li>
    <li class="nav-bar__item">
      <a href="#">Pricing</a>
    </li>
    <li class="nav-bar__item">
      <a href="#">Contact</a>
    </li>
  </ul>
`;

class NavBar extends HTMLUListElement {
  // initialize object
  constructor() {
    // "super" keyword for overriding (extend) a parent class method
    super();

    // Create a shadow root
    this.attachShadow({mode: 'open'}); // sets and returns 'this.shadowRoot'
    // attach the created elements to the shadow DOM
    this.shadowRoot.appendChild(NAV_BAR_TEMPLATE.content.cloneNode(true));

    this.shadowRoot.querySelector('.nav-bar__logo').src = this.getAttribute('logo');
  }
}

// register the element (define a new custom element)
window.customElements.define('nav-bar', NavBar, { extends: 'ul' });
