import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('ffa-input-text')
export class FfaInputTextComponent extends LitElement {
    static override styles = css`
        :host {
            display: block;
            width: fit-content;
            height: fit-content;

            & > input {
                width: 100%;
                height: 100%;
                padding: var(--ffa-size-padding-h, 2px)
                    var(--ffa-size-padding-w, 4px);
                border: solid 1px red;
                outline: none;
                color: var(--ffa-color-text, #000);
                background-color: var(--ffa-color-text-r, #fff);
                font-size: 1rem;

                &:focus-visible {
                    outline: solid 1px red;
                }
            }
        }
    `;

    @property() value = '';

    override render() {
        return html`<input type="text" value="${this.value}" />`;
    }
}
