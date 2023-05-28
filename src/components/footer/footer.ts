/* eslint-disable lit/attribute-value-entities */
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { style } from '../footer/stylefooter.js';

@customElement('footer-element')
export class AppFooter extends LitElement {
  static styles = style;

  render() {
    return html`
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200&display=swap"
        rel="stylesheet"
      />
      <footer class="footer">
        <div class="container">
          <p>My First Weather APP Made with</p>
          <img src="../../assets/heart.png" alt="heart icon" />
        </div>
      </footer>
    `;
  }
}
