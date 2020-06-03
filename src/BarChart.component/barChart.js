import barChartStyles from './../BarChart.component/barChart.styles'
import barChartTemplate from './../BarChart.component/barChart.template'
const template = document.createElement('template');

template.innerHTML = `
  <style>
    ${barChartStyles}
  </style>
  <section>
    ${barChartTemplate}
  </section> 
`;

class BarChart extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this.$container = this._shadowRoot.querySelector('.chart-container');
    this.$chartContainer =  this._shadowRoot.querySelector(".chart-content");
    this.$chartLegend =  this._shadowRoot.querySelector(".chart-legend");
  }
  //lifecycle
  connectedCallback() {
    console.log('Custom chart element inserted to new page.');
  }

  disconnectedCallback() {
    console.log('Custom chart element removed from page.');
  }

  adoptedCallback() {
    console.log('Custom chart element moved to new page.');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('Custom chart element attributes changed.');
  }

  get data() {
    return this.getAttribute('data');
  }

  set data(value) {
    this.setAttribute('data', value);
  }
  get label() {
    return this.getAttribute('label');
  }

  set label(value) {
    this.setAttribute('label', value);
  }
  get width() {
    return this.getAttribute('width');
  }
  set width(value) {
    this.setAttribute('width', value);
  }
  get height() {
    return this.getAttribute('height');
  }
  set height(value) {
    this.setAttribute('height', value);
  }
  static get observedAttributes() {
    return ['data'];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this.render();
  }

  render() {
    this.$chartContainer.innerHTML = '';
    this.$chartLegend.innerHTML = '';
    
    const padding = 70; 
    const labelHeight = 50;
    const cw = this.width - padding * 2;
    const ch = this.height - (padding + labelHeight + 25);
    console.log(ch);
    const chartData = JSON.parse(this.data);
    const maxValue = Math.max(...chartData.map((el)=> el.value));

    this.$container.querySelector(".chart-label").innerHTML = this.label;
    this.$container.style.width = `${this.width}px`;
    this.$container.style.height = `${parseFloat(this.height)}px`;
    this.$chartContainer.style.height = `${ch}px`;
    this.$chartLegend.style.width = `${this.width - padding - 30}px`;
    this.$chartLegend.style.height = (this.$chartContainer.style.height + 1);

    for (let index = 0; index < 6; index++) {
        const line = document.createElement('div');
        const vLegend = document.createElement('span');

        vLegend.innerHTML = (maxValue / (index+1)).toFixed(1);
        vLegend.className = 'legend-label';

        line.className = 'legend-line';
        line.style.height = `${ch / 6}px`;

        this.$chartLegend.appendChild(line).cloneNode(true);
        line.appendChild(vLegend).cloneNode(true);
    }
    chartData.forEach(element => {

        const bar = document.createElement('div');
        const value = document.createElement('span');
        const hLegend = document.createElement('span');

        value.innerHTML = element.value;
        value.className = 'bar-value';

        hLegend.innerHTML = element.label;
        hLegend.className = 'bar-label';

        bar.className = 'bar';
        bar.style.width = `${(cw / chartData.length) - (chartData.length-1)}px`;
        bar.style.marginRight = `${chartData.length}px`;
        bar.style.height = `${element.value * 100 / maxValue}%`;

        this.$chartContainer.appendChild(bar).cloneNode(true);
        bar.appendChild(value).cloneNode(true);
        bar.appendChild(hLegend).cloneNode(true);
    });
  }
}

window.customElements.define('bar-chart', BarChart);