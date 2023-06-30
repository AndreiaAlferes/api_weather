/* eslint-disable class-methods-use-this */
import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { style } from '../main/stylemain.js';
import { previsao } from '../../model/previsao.js';
import {
  calculateAvgTemp,
  calculateAvgTempFar,
  calculateExtenssDate,
  calculateFahrenheitMax,
  calculateFahrenheitMin,
} from '../main/Auxiliars.js';

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

  @state()
  showFahrenheit = false;

  @state()
  showAvarageFar = false;

  @state()
  searchQuery = '';

  @state()
  searchResult = '';

  @state()
  error = '';

  handleInputChange(event: Event) {
    const inputEvent = event.target as HTMLInputElement;
    this.searchQuery = inputEvent.value;
  }

  uvIndexClass(uvIndex: number): string {
    if (uvIndex <= 2) {
      return 'low-uv';
    }
    if (uvIndex <= 5) {
      return 'moderate-uv';
    }
    if (uvIndex <= 7) {
      return 'high-uv';
    }
    if (uvIndex <= 10) {
      return 'very-high-uv';
    }
    return 'extreme-uv';
  }

  async searchLocation(location: any) {
    const url = `https://foreca-weather.p.rapidapi.com/location/search/${location}?lang=en`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b4d1bb0b53msh96f2192eac136cdp124aadjsnf2f312ca4fdb',
        'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(Object.keys(result).length);
      if (Object.keys(result).length >= 1) {
        this.error = 'Search not found';
      } else {
        this.searchWeather(result.locations[0].id);
      }
      console.log(this.searchWeather(result.locations[0].id));
    } catch (e) {
      console.log(e);
    }
  }

  async searchWeather(idLocation: number) {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b4d1bb0b53msh96f2192eac136cdp124aadjsnf2f312ca4fdb',
        'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com',
      },
    };
    try {
      console.log(this.searchQuery);
      const response = await fetch(
        `https://foreca-weather.p.rapidapi.com/forecast/daily/${idLocation}?alt=0&tempunit=C&windunit=MS&periods=8&dataset=full`,
        options
      );

      const data = await response.json();
      this.previsoesArray = data.forecast;
      console.log(data.forecast);
      console.log(this.previsoesArray);
    } catch (e) {
      console.log(e);
      console.log('erro ao fazer a chamada à API');
    }
    this.searchResult = this.searchQuery;
    this.searchQuery = '';
  }

  render() {
    return html`
      <div class="main">
        <h1 class="title">Temperature for ${this.searchResult}</h1>
        <div>
          <input
            type="text"
            placeholder="Search for a city..."
            .value=${this.searchQuery}
            @input=${this.handleInputChange}
          />
          <button @click=${() => this.searchLocation(this.searchQuery)}>
            Search
          </button>
        </div>
        <div>
          <p class="message ${this.error ? 'error-message' : ''}">
            ${this.error ? html`${this.error}` : ''}
          </p>
        </div>

        <div class="list-container">
          <ul>
            ${this.previsoesArray.map(
              (previsaoItem, index) => html`
                <div
                  class="list-item ${
                    index === 0 ? 'highlight' : 'align-inline'
                  }"
                >
                  <p class="date">${calculateExtenssDate(previsaoItem)}</p>
                  
                  <p class="index">${
                    previsaoItem.uvIndex !== undefined
                      ? html`<p
                          class=${this.uvIndexClass(previsaoItem.uvIndex)}
                        >
                          UV Index:${previsaoItem.uvIndex}
                        </p>`
                      : ''
                  }</p>
                  
                  <p>
                    <img
                      src="${this.symbols[0][previsaoItem.symbol]}"
                      alt="Weather Symbol"
                    />
                  </p>
                 
                  <p>
                  <div class="avarage-conversion">
                    <button @click =${() => this.toggleAvgTemp()}>${
                this.showAvarageFar
                  ? `Fahrenheit Average: ${calculateAvgTempFar(
                      previsaoItem
                    ).toFixed(1)}ºF`
                  : `Celsius Average: ${calculateAvgTemp(previsaoItem).toFixed(
                      1
                    )}ºC`
              }</button>
                  
                </div>
              </p>
                  <p>
                  <div class="temperature-conversion">
                    <button @click=${() => this.toggleTempetature()}>  ${
                this.showFahrenheit
                  ? `Fahrenheit: ${calculateFahrenheitMin(previsaoItem).toFixed(
                      1
                    )}ºF - ${calculateFahrenheitMax(previsaoItem).toFixed(1)}ºF`
                  : `Celsius: ${previsaoItem.minTemp.toFixed(
                      1
                    )}ºC - ${previsaoItem.maxTemp.toFixed(1)}ºC`
              }</button>
                    </div>
                    </p>

                </div>
              `
            )}
          </ul>
        </div>
      </div>
    `;
  }

  private toggleTempetature() {
    this.showFahrenheit = !this.showFahrenheit;
  }

  private toggleAvgTemp() {
    this.showAvarageFar = !this.showAvarageFar;
  }
}
