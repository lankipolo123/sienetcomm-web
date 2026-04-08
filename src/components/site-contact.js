import { LitElement, html } from 'lit'

class SiteContact extends LitElement {
    createRenderRoot() { return this; }

    render() {
        return html`
      <section data-section="contact" class="px-10 py-16 border-b border-gray-100">

        <p class="text-xs uppercase tracking-widest text-gray-400 mb-2">Get in touch</p>
        <h2 class="text-3xl font-semibold mb-2" style="color: #1A6B2A;">Contact Us</h2>
        <p class="text-sm text-gray-500 mb-8">Reach us through any of the channels below.</p>

        <div class="grid grid-cols-2 gap-4">
          <div class="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <div class="text-xs text-gray-400 uppercase tracking-wide mb-2">Phone</div>
            <div class="text-sm text-gray-600 leading-relaxed">
              +63 2 7527 1448<br>
              +63 2 8524 6084<br>
              +63 917 324 7630
            </div>
          </div>
          <div class="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <div class="text-xs text-gray-400 uppercase tracking-wide mb-2">Email</div>
            <div class="text-sm leading-relaxed">
              <a href="mailto:sales@sienetcomm.com" class="text-green-700 block">sales@sienetcomm.com</a>
              <a href="mailto:techsupport@sienetcomm.com" class="text-green-700 block">techsupport@sienetcomm.com</a>
            </div>
          </div>
          <div class="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <div class="text-xs text-gray-400 uppercase tracking-wide mb-2">Address</div>
            <div class="text-sm text-gray-600 leading-relaxed">
              Unit 3D Julita C. Pascual Bldg.<br>
              No. 2 Kadalagahan St.<br>
              Dolores, Taytay, Rizal 1920
            </div>
          </div>
          <div class="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <div class="text-xs text-gray-400 uppercase tracking-wide mb-2">Website</div>
            <a href="https://www.sienetcomm.com" target="_blank" class="text-sm text-green-700">
              www.sienetcomm.com
            </a>
          </div>
        </div>

      </section>
    `
    }
}

customElements.define('site-contact', SiteContact)