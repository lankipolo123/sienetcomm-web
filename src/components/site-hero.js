import { LitElement, html } from 'lit'

class SiteHero extends LitElement {
  createRenderRoot() { return this; }

  render() {
    return html`
      <section data-section="hero" class="px-10 py-16 border-b border-gray-100">

        <span class="inline-block text-xs uppercase tracking-widest rounded-full px-3 py-1 mb-5 text-white" style="background: #CC0000;">
          ICT & Civil Works
        </span>

        <h1 class="text-4xl font-semibold leading-tight max-w-xl mb-4" style="color: #1A6B2A;">
          Building the networks that <span style="color: #CC0000;">connect</span> the Philippines.
        </h1>

        <p class="text-sm text-gray-500 leading-relaxed max-w-lg mb-8">
          From telecommunications infrastructure to civil construction, SIENETCOMM delivers
          end-to-end project management, installation, and maintenance services across
          Luzon, Visayas, and Mindanao.
        </p>

        <div class="flex gap-3 mb-12">
          <button class="text-sm text-white rounded-lg px-5 py-2.5 cursor-pointer border-none" style="background: #1A6B2A;">
            View services
          </button>
          <button class="text-sm bg-white rounded-lg px-5 py-2.5 cursor-pointer border border-gray-300" style="color: #CC0000;">
            Contact us
          </button>
        </div>

        <div class="flex gap-10 pt-8 border-t border-gray-100">
          <div>
            <div class="text-2xl font-semibold" style="color: #CC0000;">2024</div>
            <div class="text-xs text-gray-500 mt-1">SEC Incorporated</div>
          </div>
          <div>
            <div class="text-2xl font-semibold" style="color: #CC0000;">100+</div>
            <div class="text-xs text-gray-500 mt-1">Technical staff on standby</div>
          </div>
          <div>
            <div class="text-2xl font-semibold" style="color: #CC0000;">3</div>
            <div class="text-xs text-gray-500 mt-1">Core departments</div>
          </div>
        </div>

      </section>
    `
  }
}

customElements.define('site-hero', SiteHero)