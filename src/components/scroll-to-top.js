import { LitElement, html } from 'lit'

class ScrollToTop extends LitElement {
  createRenderRoot() { return this; }

  static properties = { visible: { type: Boolean } }

  render() {
    return html`
      <button
        @click=${() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        style="
          position: fixed;
          bottom: 32px;
          right: 32px;
          z-index: 999;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          background: #1A6B2A;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(0,0,0,0.25);
          opacity: ${this.visible ? '1' : '0'};
          transform: translateY(${this.visible ? '0' : '12px'});
          pointer-events: ${this.visible ? 'auto' : 'none'};
          transition: opacity 0.2s ease, transform 0.2s ease;
        "
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    `
  }
}

customElements.define('scroll-to-top', ScrollToTop)
