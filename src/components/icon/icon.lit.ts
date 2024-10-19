import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('ffa-icon')
export class IconComponent extends LitElement {
    static override styles = css`
        p {
            display: block;
            color: blue;
            width: 250px;
            height: 250px;
        }
    `;

    @property() name = 'Somebody';

    override render() {
        return html`<p>Hello, ${this.name}!</p>`;
    }
}
