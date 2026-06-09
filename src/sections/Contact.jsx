import { motion } from 'framer-motion'
import { MapPin, Music2, Phone, Send } from 'lucide-react'

const services = ['Dance Classes', 'Wedding Choreography', 'Live Entertainment']
const whatsAppNumber = '918369776116'

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')?.toString().trim()
    const phone = formData.get('phone')?.toString().trim()
    const message = formData.get('message')?.toString().trim()

    const whatsAppMessage = `Hello 8 Royal Entertainment,

Name: ${name}

Phone: ${phone}

Message: ${message}`

    const whatsAppUrl = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(whatsAppMessage)}`

    window.open(whatsAppUrl, '_blank', 'noopener,noreferrer')
    event.currentTarget.reset()
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505] px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="absolute left-1/2 top-24 h-96 w-96 -translate-x-1/2 rounded-full bg-[#E11D48]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#EF4444]">
            Contact
          </p>
          <h2 className="text-4xl font-black uppercase leading-none tracking-[-0.06em] sm:text-5xl lg:text-7xl">
            Ready to train, perform, or choreograph your big moment?
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/64 sm:text-lg">
            Share your requirement and the 8 Royal team will help you choose the right
            program, wedding choreography plan, or event performance experience.
          </p>

          <div className="mt-10 grid gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#E11D48]/15 text-[#EF4444]">
                  <MapPin size={22} />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/45">
                    Location
                  </p>
                  <p className="mt-1 font-bold text-white">Nerul, Navi Mumbai</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-sm">
              <div className="mb-5 flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#E11D48]/15 text-[#EF4444]">
                  <Music2 size={22} />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/45">
                    Services
                  </p>
                  <p className="mt-1 font-bold text-white">Choose your performance path</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/70"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true, amount: 0.25 }}
          className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.4)] backdrop-blur-sm sm:p-7"
        >
          <div className="mb-7 flex items-center gap-4">
            <span className="grid h-13 w-13 place-items-center rounded-2xl bg-[#E11D48]/15 text-[#EF4444] shadow-[0_0_30px_rgba(225,29,72,0.16)]">
              <Phone size={23} />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#EF4444]">
                Enquiry Form
              </p>
            </div>
          </div>

          <div className="grid gap-5">
            <label className="grid gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/55">
                Name
              </span>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="rounded-2xl border border-white/10 bg-[#050505]/70 px-5 py-4 text-white outline-none transition placeholder:text-white/28 focus:border-[#E11D48]/70 focus:ring-4 focus:ring-[#E11D48]/10"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/55">
                Phone
              </span>
              <input
                type="tel"
                name="phone"
                required
                placeholder="Your phone number"
                className="rounded-2xl border border-white/10 bg-[#050505]/70 px-5 py-4 text-white outline-none transition placeholder:text-white/28 focus:border-[#E11D48]/70 focus:ring-4 focus:ring-[#E11D48]/10"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/55">
                Message
              </span>
              <textarea
                name="message"
                required
                rows="5"
                placeholder="Tell us what you are looking for"
                className="resize-none rounded-2xl border border-white/10 bg-[#050505]/70 px-5 py-4 text-white outline-none transition placeholder:text-white/28 focus:border-[#E11D48]/70 focus:ring-4 focus:ring-[#E11D48]/10"
              />
            </label>

            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#E11D48] px-7 py-4 text-sm font-extrabold uppercase tracking-[0.22em] text-white shadow-[0_18px_60px_rgba(225,29,72,0.34)] transition hover:-translate-y-0.5 hover:bg-[#EF4444]"
            >
              Submit Enquiry
              <Send size={18} className="transition group-hover:translate-x-1" />
            </button>

            <p className="text-center text-sm font-medium text-white/45">
              We'll respond on WhatsApp within 24 hours.
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
