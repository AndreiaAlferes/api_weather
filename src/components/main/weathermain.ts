import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { style } from '../../style.js';

@customElement('main-element')
export class WeatherMain extends LitElement {
  static styles = style;

  @property()
  temperature: number = 0;

  @property()
  weatherDescription: string = '';

  @property()
  weatherIconUrl: string = '';

  @property()
  date: number = 0;

  //   async connectedCallback(): Promise<void> {
  //     // eslint-disable-next-line wc/guard-super-call
  //     super.connectedCallback();

  //         const options = {
  //         method: 'GET',
  //         headers: {
  //             'X-RapidAPI-Key': 'b4d1bb0b53msh96f2192eac136cdp124aadjsnf2f312ca4fdb',
  //             'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com',
  //         },
  //         };
  //         fetch(
  //         'https://foreca-weather.p.rapidapi.com/current/102643743?alt=0&tempunit=C&windunit=MS&tz=Europe%2FPortugal&lang=en',
  //         options
  //         )
  //         .then(response => response.json())
  //         .then(response => console.log(response))
  //         .catch(err => {
  //             console.error(err);
  //             console.log('Erro ao fazer a chamada à API');
  //         });

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
      await fetch(
        'https://foreca-weather.p.rapidapi.com/forecast/daily/102643743?alt=0&tempunit=C&windunit=MS&periods=8&dataset=standard',
        options
      );
    } catch (err) {
      console.log(err);
      console.log('erro ao fazer a chamada à API');
    }

    // const currentDate = new Date();
    // const tomorrowDate = new Date(
    //   currentDate.setDate(currentDate.getDate() + 1)
    // );
    // const dayAfterTomorrowDate = new Date(
    //   currentDate.setDate(currentDate.getDate() + 2)
    // );

    // data.array.forEach(item => {
    //   const itemDate = new Date(item.date);
    //   if (itemDate.toDateString() === currentDate.toDateString()) {
    //     // this.temperature=item.temp;
    //     // this.weatherDescription=item.weatherDescription;
    //     // this.weatherIconUrl=item.weatherIconUrl;
    //     // this.date=item.date;
    //     console.log(`Data atual: ${item.date}`);
    //   } else if (itemDate.toDateString() === tomorrowDate.toDateString()) {
    //     // Item corresponde à data de amanhã
    //     console.log(`Data de amanhã: ${item.date}`);
    //   } else if (
    //     itemDate.toDateString() === dayAfterTomorrowDate.toDateString()
    //   ) {
    //     // Item corresponde à data após amanhã
    //     console.log(`Data após amanhã: ${item.date}`);
    //   }
    // });
  }

  render() {
    return html`
      console.log('Renderizando o componente');
      <h1>Hello World</h1>
      <h1>Temperatura: ${this.temperature} graus Celsius</h1>
      <p>Weather description: ${this.weatherDescription}</p>
      <p>time: ${this.date}</p>
      <p>
        Weather icon:
        <img src="${this.weatherIconUrl}" alt="${this.weatherDescription}" />
      </p>
    `;
  }
}
