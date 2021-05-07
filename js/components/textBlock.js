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
    
    :host {
      text-align: center;
    }
     
    :host-context(.text-block-center) p {
      margin: auto;
    }
        
    :host-context(.tab--text-block-left) {
      text-align: left;
    }
    
    :host-context(.text-block-default) {
      text-align: left;
    }
    
    :host-context(.text-block-default) p {
      margin: 0;
    }
    
   :host-context(.text-block-right) {
      text-align: right;
    }
    
   :host-context(.text-block-right) h2 {
      color: #5368df;
    }
    
   :host-context(.text-block-right) p {
      color: #5368df;
    }
    
    @media (max-width: 900px) {
      :host-context(.tab--text-block-left) {
        text-align: center;
      }
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
