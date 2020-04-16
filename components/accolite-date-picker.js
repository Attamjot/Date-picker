// Template
const template = document.createElement("template");
template.innerHTML = `
    <style>
        @import './components/accolite-date-picker-styles.css';
    </style>

    <div class="accolite-date-picker-container">
        <h2>Choose Date: </h2>
        <input type="date" id="date-picker"/> 
        <span id="date-output"></span>
    </div>

`;

// Class 
class AccoliteDatePicker extends HTMLElement {
  constructor() {
      super();
      
      // Create a Shadow Root
      this._root = this.attachShadow({ mode: "open" });

      // Private variables
      this._datePicker = null;
      this._dateOutput = null;
      this._value = null;
      this._min = this.getAttribute("min");
      this.max = this.getAttribute("max");
  }

  // Web Component LifeCycle Method 
  connectedCallback() {
    const cloneTemplate = document.importNode(template.content, true);
    this._root.appendChild(cloneTemplate);  
    this._datePicker = this._root.querySelector("#date-picker");
    this._dateOutput = this._root.querySelector("#date-output");
    this._initializeEvents();
    this._render();
  }

  // Private method
  _initializeEvents() {
     this._datePicker.addEventListener("change", (event) => {
        this._value = event.target.value;
        this._render();
     });
  }

  // Private method
  _render() {
    if(this._datePicker !== null) {
      this._datePicker.value = this._value;
      this._dateOutput.innerHTML = this._getDate(this._value) || "Please choose a date.";
    }
  }
  // Private method
  _getDate(date) {
     if (date) {
       let selectedDate = new Date(date);
       const monthMapper = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
       var days = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
       return `${days[selectedDate.getDay()]}, ${selectedDate.getDate()}-${monthMapper[selectedDate.getMonth()].substring(0,3)}-${selectedDate.getFullYear()}`;
     }
  }

  // Observe attribute changes
  static get observedAttributes() {
    return ["value", "min", "max"];
  }

  // React to attribute changes( If you change the attribute over Elements tab, then lifecycle will fire )
  attributeChangedCallback(name, oldValue, newValue) {
    if (this._value === newValue) return;
    this._value = newValue;
    this._render();
  }

  // Setters and getters to create an API for your component
  set value(data) {
    if (this._value === data) return;
    this._value = data;
    this._render();
  }
  get value() {
    return this._value;
  }

  set min(data) {
    if (this._min === data) return;
    this._min = data;
    this._render();
  }
  get min() {
    return this._min;
  }
  
  set max(data) {
    if (this._max === data) return;
    this._max = data;
    this._render();
  }
  get max() {
    return this._max;
  }  

  disConnectedCallback() {
    this._datePicker.removeEventListener("change");
  }
}

// Use unique but descriptive element and class names
window.customElements.define("accolite-date-picker", AccoliteDatePicker);