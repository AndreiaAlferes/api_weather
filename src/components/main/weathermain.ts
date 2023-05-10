/* eslint-disable no-shadow */
import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { style } from '../main/stylemain.js';
import { previsao } from '../../model/previsao.js';

@customElement('main-element')
export class WeatherMain extends LitElement {
  static styles = style;

  @property()
  previsoesArray: previsao[] = [];

  @state()
  symbols: { [key: string]: string }[] = [
    {
      d000: '../../assets/d000.png',
      d100: '../../assets/d100.png',
      d200: '../../assets/d200.png',
      d300: '../../assets/d300.png',
      d400: '../../assets/d400.png',
      d500: '../../assets/d500.png',
      d600: '../../assets/d600.png',
      d210: '../../assets/d210.png',
      d310: '../../assets/d310.png',
      d410: '../../assets/d410.png',
      d220: '../../assets/d220.png',
      d320: '../../assets/d320.png',
      d420: '../../assets/d420.png',
      d430: '../../assets/d430.png',
      d240: '../../assets/d240.png',
      d340: '../../assets/d340.png',
      d440: '../../assets/d440.png',
      d211: '../../assets/d211.png',
      d311: '../../assets/d311.png',
      d411: '../../assets/d411.png',
      d221: '../../assets/d221.png',
      d321: '../../assets/d321.png',
      d421: '../../assets/d421.png',
      d431: '../../assets/d431.png',
      d212: '../../assets/d212.png',
      d312: '../../assets/d312.png',
      d412: '../../assets/d412.png',
      d222: '../../assets/d222.png',
      d322: '../../assets/d322.png',
      d422: '../../assets/d422.png',
      d432: '../../assets/d432.png',
    },
  ];

  async connectedCallback(): Promise<void> {
    // eslint-disable-next-line wc/guard-super-call
    super.connectedCallback();

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b4d1bb0b53msh96f2192eac136cdp124aadjsnf2f312ca4fdb',
        'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com',
      },
    };
    try {
      const response = await fetch(
        'https://foreca-weather.p.rapidapi.com/forecast/daily/102643743?alt=0&tempunit=C&windunit=MS&periods=8&dataset=standard',
        options
      );

      const data = await response.json();
      this.previsoesArray = data.forecast;
      console.log(this.previsoesArray);
    } catch (err) {
      console.log(err);
      console.log('erro ao fazer a chamada à API');
    }
  }

  render() {
    // eslint-disable-next-line arrow-body-style
    const calculateAvgTemp = (previsaoItem: previsao): number => {
      return (previsaoItem.minTemp + previsaoItem.maxTemp) / 2;
    };
    return html`
      <div class="main">
        <h1>TEMPERATURA EM LISBOA</h1>
        <div class="list-container">
          <ul>
            ${this.previsoesArray.map(
              (previsaoItem, index) => html`
                <div
                  class="list-item ${index === 0 ? 'highlight' : ''} ${index > 0
                    ? 'align-inline'
                    : ''}"
                >
                  <p>${previsaoItem.date}</p>
                  <p>
                    <img
                      src="${this.symbols[0][previsaoItem.symbol]}"
                      alt="Weather Symbol"
                    />
                  </p>
                  <p>
                    Average Temp: ${calculateAvgTemp(previsaoItem).toFixed(1)}ºC
                  </p>
                  <p>
                    Temp: ${previsaoItem.minTemp}ºC - ${previsaoItem.maxTemp}ºC
                  </p>
                </div>
              `
            )}
          </ul>
        </div>
      </div>
    `;
  }
}
