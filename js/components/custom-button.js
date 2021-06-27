const BUTTON_TEMPLATE = document.createElement('template');
BUTTON_TEMPLATE.innerHTML = `
  <style>
    :host(.red-background) .btn {
      background-color: #fa5757;
      font-weight: 500;
      border: 2px solid transparent;
    }
    
    :host(.red-background) .btn:hover,
    :host(.red-background) .btn:active,
    :host(.red-background) .btn:focus  {
      background-color: #fff;
      border: 2px solid #fa5757;
      color: #fa5757;
    }
    
    :host(.header__button) .btn__text { 
      text-transform: uppercase;
      padding: 7px 17px;
    }
    
    :host(.light-background) .btn {
      background-color: #f7f7f7;
      color: #252b46;
    }

    :host(.light-background) .btn:hover,
    :host(.light-background) .btn:active,
    :host(.light-background) .btn:focus,
    :host(.custom-button-2) .btn:hover,
    :host(.custom-button-2) .btn:active,
    :host(.custom-button-2) .btn:focus {
      background-color: #fff;
      border: 2px solid #252b46;
      color: #252b46;
      transition: all .3s;
    }

    :host(.custom-button-1) .btn {
      background-color: #fa5757;
      color: #252b46;
      border-radius: unset;
      -webkit-box-shadow: 0 5px 5px -4px rgba(37,43,70,0.5); 
      box-shadow: 06px 6px 6px 0 rgba(37,43,70,0.5);
    }
    
    :host(.custom-button-2) .btn {
      background-color: #252b46;
      box-shadow: none;
    }
    
    :host(.custom-button-2) .btn__text {
      padding: 7px 10px;
      font-weight: 700;
    }
    
    .btn {
      color: #fff;
      background-color: hsl(231, 69%, 60%);
      border: 2px solid transparent;
      border-radius: 5px;
      cursor: pointer;
      -webkit-box-shadow: 0 5px 5px -4px rgba(37,43,70,0.5); 
      box-shadow: 0 5px 5px -4px rgba(37,43,70,0.5);
      transition: background-color .3s;
    }
    
    .btn:hover,
    .btn:active,
    .btn:focus {
      background-color: #fff;
      color: #5368df;
      border: 2px solid #5368df;
    }
    
    .btn__text {
      white-space: nowrap;
      padding: 15px 20px;
    }
    
  </style>
  
  <button class="btn">
    <div class="btn__text"></div>
  </button>
`;

class Button extends HTMLElement {
  // initialize object
  constructor() {
    // "super" keyword for overriding (extend) a parent class method
    super();

    // Create a shadow root
    this.attachShadow({mode: 'open'}); // sets and returns 'this.shadowRoot'
    // attach the created elements to the shadow DOM
    this.shadowRoot.appendChild(BUTTON_TEMPLATE.content.cloneNode(true));

    this.shadowRoot.querySelector('.btn__text').innerText = this.getAttribute('text');
  }
}

// register the element
window.customElements.define('custom-button', Button );
