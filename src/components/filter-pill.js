import { LitElement, html } from 'lit'

class FilterPill extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    label:  { type: String },
    active: { type: Boolean },
  }

  constructor() {
    super()
    this.label  = ''
    this.active = false
  }

  _enter(e) {
    if (this.active) {
      e.currentTarget.style.background = '#22863a'
    } else {
      e.currentTarget.style.background = '#f0faf3'
      e.currentTarget.style.color = '#1A6B2A'
      e.currentTarget.style.borderColor = '#86efac'
    }
  }

  _leave(e) {
    if (this.active) {
      e.currentTarget.style.background = '#1A6B2A'
    } else {
      e.currentTarget.style.background = 'white'
      e.currentTarget.style.color = '#6b7280'
      e.currentTarget.style.borderColor = '#e5e7eb'
    }
  }

  render() {
    return html`
      <button
        @click=${() => this.dispatchEvent(new CustomEvent('pill-select', { bubbles: true }))}
        @mouseenter=${this._enter}
        @mouseleave=${this._leave}
        style="
          padding: 5px 12px;
          font-size: 0.72rem;
          font-weight: ${this.active ? '600' : '400'};
          color: ${this.active ? 'white' : '#6b7280'};
          background: ${this.active ? '#1A6B2A' : 'white'};
          border: 1px solid ${this.active ? '#1A6B2A' : '#e5e7eb'};
          border-radius: 99px;
          cursor: pointer;
          transition: background 0.15s, color 0.15s, border-color 0.15s;
          word-break: break-word;
        "
      >${this.label}</button>
    `
  }
}

customElements.define('filter-pill', FilterPill)
