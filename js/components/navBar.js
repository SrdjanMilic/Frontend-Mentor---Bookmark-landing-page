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
    
    :host-context(.header) a {
      color: #252b46;
    }
    
    :host-context(.footer) {
      justify-content: left;
    }
    
    :host-context(.footer) a {
      color: #fff;
    }
    
    :host-context(.footer__nav-bar-component) .nav-bar__list {
      margin-left: 2.7rem;
    }
    
    .nav-bar__logo {
      width: 148px;
      height: 25px;
    }
    
    .nav-bar__item {
      display: inline-block;
      margin-right: 2.7rem;
    }
  </style>

  <img class="nav-bar__logo" />
  
  <ul class="nav-bar__list">
    <li class="nav-bar__item">
      <a href="#">Components</a>
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
