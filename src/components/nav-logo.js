import { LitElement, html } from 'lit'

class NavLogo extends LitElement {
  createRenderRoot() { return this; }

  render() {
    return html`
      <div class="flex items-center gap-3">
        <img 
          src="/src/assets/siennet_logo.png" 
          alt="Sienetcomm logo"
          class="w-12 h-12 object-contain"
        />
        <span class="text-2xl font-bold tracking-wide" style="color: #1A6B2A; font-family: 'Barlow Condensed', sans-serif;">
          SIENETCOMM INC.
        </span>
      </div>
    `
  }
}

customElements.define('nav-logo', NavLogo)