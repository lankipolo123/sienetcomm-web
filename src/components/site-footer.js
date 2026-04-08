import { LitElement, html } from 'lit'

class SiteFooter extends LitElement {
  createRenderRoot() { return this; }

  render() {
    return html`
      <footer>

        <div class="grid grid-cols-3 gap-10 px-10 py-14" style="background: #F5F5F5;">

          <div>
            <p class="text-xs uppercase tracking-widest mb-4 text-gray-400">Talk to Us</p>
            <p class="text-sm text-gray-700 leading-relaxed">
              +63 2 7527 1448<br>
              +63 2 8524 6084<br>
              +63 917 324 7630
            </p>
          </div>

          <div>
            <p class="text-xs uppercase tracking-widest mb-4 text-gray-400">Email</p>
            <a href="mailto:sales@sienetcomm.com" class="text-sm text-gray-700 block mb-1">sales@sienetcomm.com</a>
            <a href="mailto:techsupport@sienetcomm.com" class="text-sm text-gray-700 block">techsupport@sienetcomm.com</a>
          </div>

          <div>
            <p class="text-xs uppercase tracking-widest mb-4 text-gray-400">Our Office</p>
            <p class="text-sm text-gray-700 leading-relaxed">
              Unit 3D Julita C. Pascual Bldg.<br>
              No. 2 Kadalagahan St.<br>
              Dolores, Taytay, Rizal 1920
            </p>
            <a href="https://www.sienetcomm.com" target="_blank" class="text-sm mt-3 block" style="color: #1A6B2A;">
              www.sienetcomm.com
            </a>
          </div>

        </div>

        <div class="px-10 py-4 flex items-center justify-between" style="background: #E85D00;">
          <p class="text-xs text-white">© 2024 SIENETCOMM INC. All rights reserved.</p>
          <p class="text-xs text-white">TIN 648-143-823-00000</p>
        </div>

      </footer>
    `
  }
}

customElements.define('site-footer', SiteFooter)