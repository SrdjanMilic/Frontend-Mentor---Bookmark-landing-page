const TEXT_BLOCK_TEMPLATE = document.createElement('template');
TEXT_BLOCK_TEMPLATE.innerHTML = `
  <style>
    :host {
      text-align: center;
    }
    
    :host h2 {
      font-size: 1.9em;
      font-weight: 500;
    }
    
    :host p {
      max-width: 530px;
      margin: auto;
      color: hsl(229, 8%, 60%);
    }
    
    :host(.align-left) {
      text-align: left;
    }
    
    :host(.align-right) {
      text-align: right;
    }
     
    :host(.block-center) p {
      margin: auto;
    }
    
    :host(.block-left) p {
      margin: 0;
    }
    
   :host(.heading-blue) h2 {
      color: #5368df;
    }
    
   :host(.paragraph-blue) p {
      color: #5368df;
    }
    
    :host(.tabs--text) h2 {
      margin-top: 0;
    }
    
    @media (max-width: 900px) {
      :host(.tabs--text) {
        text-align: center;
      }
    }
  </style>
  
  <h2></h2>
  <p></p>
`;

class TextBlock extends HTMLElement {
  // initialize object
  constructor() {
    // "super" keyword for overriding (extend) a parent class method
    super();

    // Create a shadow root
    this.attachShadow({mode: 'open'}); // sets and returns 'this.shadowRoot'
    // attach the created elements to the shadow DOM
    this.shadowRoot.appendChild(TEXT_BLOCK_TEMPLATE.content.cloneNode(true));

    this.shadowRoot.querySelector('h2').innerText = this.getAttribute('heading');
    this.shadowRoot.querySelector('p').innerText = this.getAttribute('paragraph');
  }
}

// register the element
window.customElements.define('text-block', TextBlock );
