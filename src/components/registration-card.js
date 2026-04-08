import { LitElement, html } from 'lit'

class RegistrationCard extends LitElement {
    static properties = {
        secNo: { type: String },
        tin: { type: String },
    }

    createRenderRoot() { return this; }

    render() {
        return html`
      <div class="rounded-xl px-5 py-4 flex flex-col gap-3"
           style="background: rgba(255,255,255,0.08); border: 0.5px solid rgba(255,255,255,0.15);">
        <p class="text-xs uppercase tracking-widest" style="color: rgba(255,255,255,0.45);">Registration</p>

        <div class="flex flex-col gap-1">
          <p class="text-xs" style="color: rgba(255,255,255,0.4);">SEC Reg. No.</p>
          <p class="text-sm font-medium text-white font-mono">${this.secNo}</p>
        </div>

        <div class="flex flex-col gap-1" style="border-top: 0.5px solid rgba(255,255,255,0.12); padding-top: 10px;">
          <p class="text-xs" style="color: rgba(255,255,255,0.4);">TIN</p>
          <p class="text-sm font-medium text-white font-mono">${this.tin}</p>
        </div>
      </div>
    `
    }
}

customElements.define('registration-card', RegistrationCard)