// accordion-item.js
import { LitElement, html } from 'lit'

class AccordionItem extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    label: { type: String },
    open: { type: Boolean },
    content: { type: Object }
  }

  constructor() {
    super()
    this.open = false
  }

  _toggle() {
    this.open = !this.open
    this.requestUpdate()
  }

  render() {
    return html`
    <div class="bg-white rounded-lg mb-2 h-full flex flex-col">
      <button
        @click=${this._toggle}
        class="w-full flex items-center justify-between px-4 py-3 text-left cursor-pointer bg-transparent border-none rounded-lg"
        style="${this.open ? 'background: #f0f9f4;' : ''}"
      >
        <span class="text-sm font-medium text-gray-700">${this.label}</span>
        <span class="text-gray-400 text-xs">${this.open ? '∧' : '∨'}</span>
      </button>
      <div
        class="px-4 pb-4 pt-1 border-t border-gray-100 ${this.open ? 'block' : 'hidden'}"
      >
        ${this.content}
      </div>
    </div>
  `
  }
}

customElements.define('accordion-item', AccordionItem)