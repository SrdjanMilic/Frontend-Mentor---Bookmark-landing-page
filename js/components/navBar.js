const NAV_BAR_TEMPLATE = document.createElement('template');
NAV_BAR_TEMPLATE.innerHTML = `
  <style>
    a,
    a:-webkit-any-link {
      text-decoration: none;
    }
    
    :host {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    :host .nav-bar__item a {
      color: #5368df;
      text-decoration: none;
    }
    
    :host-context(.header) a {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    :host-context(.header) .nav-bar__item a {
      color: #252b46;
    }
    
    :host-context(.nav-bar-components) .nav-bar__item a {
      color: #252b46;
    }
    
    :host-context(.nav-bar-custom-1) {
      justify-content: unset;
    }
    
    :host-context(.nav-bar-custom-1) .nav-bar__item a {
      color: #fff;
    }
    
    :host-context(.nav-bar-custom-2) {
      background-color: aliceblue;
      justify-content: center;
    }
    
    :host-context(.nav-bar-custom-2) .nav-bar__logo {
      margin-left: 15px;
    }
    
    :host-context(.footer) {
      justify-content: left;
    }
    
    :host-context(.footer) a {
      color: #fff;
    }
    
    :host-context(.footer__nav-bar-component) .nav-bar__list {
      margin-left: 2.7rem;
      padding: 0;
    }
    
    :host-context(.nav-bar-custom-1) .nav-bar__logo {
      width: 220px;
      height: auto;
      margin-left: 20px;
    }

    :host-context(.nav-bar-custom-1) {
      background-color: #252b46;
    }

    .nav-bar__logo {
      width: 148px;
      height: 25px;
    }
    
    .nav-bar__item {
      display: inline-block;
      margin-right: 2.7rem;
    }
       
    @media (max-width: 900px) {
      :host-context(.header) .nav-bar__list {
        display: none;
      }

      :host-context(.footer) {
        display: block;
        justify-content: unset;
        align-items: unset;
      }
      
      :host-context(.footer__nav-bar-component) .nav-bar__list {
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

class NavBar extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(NAV_BAR_TEMPLATE.content.cloneNode(true));

    this.shadowRoot.querySelector('.nav-bar__logo').src = this.getAttribute('logo');
  }
}

window.customElements.define('nav-bar', NavBar);
