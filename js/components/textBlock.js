const TEXT_BLOCK_TEMPLATE = document.createElement('template');
TEXT_BLOCK_TEMPLATE.innerHTML = `
  <style>
    :host h2 {
      font-size: 1.9em;
      font-weight: 500;
    }
    
    :host p {
      max-width: 530px;
      margin: auto;
      color: hsl(229, 8%, 60%);
    }
    
    :host-context(.text-block-center) {
      text-align: center;
    }
        
    :host-context(.tab--text-block-left) {
      text-align: left;
    }

  </style>
  
  <h2></h2>
  <p></p>
`;

class TextBlock extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(TEXT_BLOCK_TEMPLATE.content.cloneNode(true));

    this.shadowRoot.querySelector('h2').innerText = this.getAttribute('heading');
    this.shadowRoot.querySelector('p').innerText = this.getAttribute('paragraph');
  }
}

window.customElements.define('text-block', TextBlock);
