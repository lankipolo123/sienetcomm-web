import { LitElement, html } from 'lit'
import { SERVICES } from '@/constants/services.js'


class SiteServices extends LitElement {
    createRenderRoot() { return this; }

    static properties = {
        showFilters: { type: Boolean },
        activeFilter: { type: String }
    }

    constructor() {
        super()
        this.showFilters = false
        this.activeFilter = 'All'
    }

    render() {
        return html`
      <section data-section="services" class="px-10 py-16 border-b border-gray-100">

        <p class="text-xs uppercase tracking-widest text-gray-400 mb-2">What we do</p>
        <h2 class="text-3xl font-semibold mb-3" style="color: #1A6B2A;">Our Services</h2>
        <p class="text-sm text-gray-500 leading-relaxed max-w-xl mb-10">
          SIENETCOMM delivers end-to-end ICT and civil works solutions. 
          Our expertise spans network infrastructure, fiber optics, civil construction, 
          and tower engineering across the Philippines.
        </p>

        <div class="grid grid-cols-2 gap-4">
          ${SERVICES.map(s => html`
            <div class="bg-gray-50 border border-gray-100 rounded-xl p-5">
              <div class="text-2xl mb-3">${s.icon}</div>
              <h3 class="text-sm font-semibold mb-2">${s.title}</h3>
              <p class="text-xs text-gray-500 leading-relaxed">${s.desc}</p>
            </div>
          `)}
        </div>

      </section>
    `
    }
}

customElements.define('site-services', SiteServices)