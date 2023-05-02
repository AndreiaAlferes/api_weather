import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { style } from './style.js';

import './components/footer/footer.js';
import './components/main/main.js';

@customElement('app-weather')
export class Appweather extends LitElement {
  static styles = style;

  render() {
    return html`
      <footer-element></footer-element>
      <main-element></main-element>
    `;
  }
}
