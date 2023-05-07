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
      n000: '../../assets/n000.png',
      n100: '../../assets/n100.png',
      n200: '../../assets/n200.png',
      n300: '../../assets/n300.png',
      n400: '../../assets/n400.png',
      n500: '../../assets/n500.png',
      n600: '../../assets/n600.png',
      n210: '../../assets/n210.png',
      n310: '../../assets/n310.png',
      n410: '../../assets/n410.png',
      n220: '../../assets/n220.png',
      n320: '../../assets/n320.png',
      n420: '../../assets/n420.png',
      n430: '../../assets/n430.png',
      n240: '../../assets/n240.png',
      n340: '../../assets/n340.png',
      n440: '../../assets/n440.png',
      n211: '../../assets/n211.png',
      n311: '../../assets/n311.png',
      n411: '../../assets/n411.png',
      n221: '../../assets/n221.png',
      n321: '../../assets/n321.png',
      n421: '../../assets/n421.png',
      n431: '../../assets/n431.png',
      n212: '../../assets/n212.png',
      n312: '../../assets/n312.png',
      n412: '../../assets/n412.png',
      n222: '../../assets/n222.png',
      n322: '../../assets/n322.png',
      n422: '../../assets/n422.png',
      n432: '../../assets/n432.png',
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
    return html`
      <div class="main">
        <h1>Previsões do Tempo</h1>
        <ul>
          ${this.previsoesArray.map(
            previsaoItem => html`
              <li>
                <p>Data: ${previsaoItem.date}</p>
                <p>Mínima: ${previsaoItem.minTemp}ºC</p>
                <p>Máxima: ${previsaoItem.maxTemp}ºC</p>
                <p>Velocidade Máxima do Vento: ${previsaoItem.maxWindSpeed}</p>
                <p>Acumulação de Precipitação: ${previsaoItem.precipAccum}</p>
                <p>
                  symbol:
                  <img
                    src="${this.symbols[0][previsaoItem.symbol]}"
                    alt="Weather Symbol"
                  />
                </p>
              </li>
            `
          )}
        </ul>
      </div>
    `;
  }
}
