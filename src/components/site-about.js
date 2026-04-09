// site-about.js
import { LitElement, html } from 'lit'
import '@/components/accordion-item.js'
import '@/components/registration-card.js'

class SiteAbout extends LitElement {
  createRenderRoot() { return this; }

  render() {
    return html`
      <section data-section="about" class="px-10 py-16" style="background: #145224;">

        <!-- centered hero block -->
        <div class="text-center mx-auto mb-12" style="max-width: 640px;">
          <p class="text-xs uppercase tracking-widest mb-2" style="color: #CC0000;">Who we are</p>
          <h2 class="text-3xl font-semibold mb-5 text-white">About SIENETCOMM</h2>
          <p class="text-sm leading-relaxed" style="color: rgba(255,255,255,0.75);">
            Originally founded as SieNet Communications Services, we incorporated as
            SIENETCOMM INC. to better serve large enterprise and civil works projects.
            We are committed to quality service and innovative delivery across the full
            ICT and construction spectrum. Our vision is to be the leading ICT Service
            Provider using professional customer-oriented services — making information
            and communication technology affordable through continuous innovations and
            total quality management.
          </p>
        </div>

        <!-- card row -->
        <div class="flex flex-row gap-3 flex-wrap justify-center items-stretch">

          <accordion-item
            class="flex-1 self-stretch"
            label="Headquarters"
            .content=${html`
              <p class="text-sm text-gray-600 mb-3">
                Unit 3D Julia C. Pascual Realty, No. 2 Kadalagahan St.<br>
                Dolores, Taytay, Rizal, 1920 Philippines
              </p>
              <iframe
                src="https://maps.google.com/maps?q=Kadalagahan+St+Dolores+Taytay+Rizal+Philippines&output=embed"
                width="100%" height="200"
                style="border: none; border-radius: 8px;"
                loading="lazy"
              ></iframe>
            `}
          ></accordion-item>

          <accordion-item
            class="flex-1 self-stretch"
            label="Coverage"
            .content=${html`
              <p class="text-sm text-gray-600 mb-3">Luzon, Visayas & Mindanao</p>
              <iframe
                src="https://maps.google.com/maps?q=Philippines&output=embed"
                width="100%" height="200"
                style="border: none; border-radius: 8px;"
                loading="lazy"
              ></iframe>
            `}
          ></accordion-item>

          <registration-card
            class="flex-1 self-stretch"
            secNo="2024040144132-00"
            tin="648-143-823-00000"
          ></registration-card>

        </div>

      </section>
    `
  }
}

customElements.define('site-about', SiteAbout)