import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { style } from '../footer/stylefooter.js';

@customElement('footer-element')
export class AppFooter extends LitElement {
  static styles = style;

  render() {
    return html`
      <footer class="footer">
        <div class="container">
          <p>My First Weather APP Made with</p>
          <img src="../../assets/heart.png" alt="heart icon" />
        </div>
      </footer>
    `;
  }
}
