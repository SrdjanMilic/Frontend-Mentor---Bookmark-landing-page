const BUTTON_TEMPLATE = document.createElement('template');
BUTTON_TEMPLATE.innerHTML = `
  <style>
    .btn {
      color: #fff;
      background-color: hsl(231, 69%, 60%);
      border: 1px solid transparent;
      border-radius: 5px;
      cursor: pointer;
      -webkit-box-shadow: 0 5px 5px -4px rgba(37,43,70,0.5); 
      box-shadow: 0 5px 5px -4px rgba(37,43,70,0.5);
    }
    
    :host-context(.header__container) .btn {
      background-color: hsl(0, 94%, 66%);
    }
    
    .btn__text {
      white-space: nowrap;
      padding: 15px 20px;
    }
    
    :host-context(.header__container) .btn__text { 
      text-transform: uppercase;
      padding: 10px 20px;
    }
    
    :host-context(.hero-block__light-button) .btn {
      background-color: #f7f7f7;
      color: hsl(229, 31%, 21%);
    }
  </style>
  
  <button class="btn">
    <div class="btn__text"></div>
  </button>
`;

class Button extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(BUTTON_TEMPLATE.content.cloneNode(true));

    this.shadowRoot.querySelector('.btn__text').innerText = this.getAttribute('text');
  }
}

window.customElements.define('custom-button', Button);
