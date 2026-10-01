import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionLabel } from '@/components/ui/SectionLabel';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <section className="bg-dzone-soft-white py-20 lg:py-24">
        <div className="max-w-container mx-auto px-5 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-lg mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-dzone-yellow mb-6">
                <CheckCircle className="w-8 h-8 text-dzone-black" strokeWidth={1.75} />
              </div>
              <h2 className="font-display font-extrabold text-3xl text-dzone-black">
                Enquiry sent.
              </h2>
              <p className="mt-4 font-body text-[16px] text-dzone-text-muted">
                Thanks for reaching out. We'll get back to you as soon as possible.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: '', email: '', phone: '', message: '' });
                }}
                className="mt-6 font-body text-[14px] font-semibold text-dzone-black underline underline-offset-4 hover:text-dzone-black/60 transition-colors"
              >
                Send another message
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-dzone-soft-white py-20 lg:py-24">
      <div className="max-w-container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <ScrollReveal>
              <SectionLabel>General Enquiry</SectionLabel>
              <h2 className="mt-5 font-display font-extrabold text-display-m text-dzone-black">
                Send a
                <br />
                message.
              </h2>
              <p className="mt-4 font-body text-[15px] text-dzone-text-muted leading-relaxed">
                This is a general enquiry form, not a booking system. For reservations, please book on Turo.
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-8">
            <ScrollReveal delay={80}>
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-6 lg:p-8 border border-dzone-black/8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-body text-[11px] font-semibold uppercase tracking-[0.15em] text-dzone-black/50 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className="w-full h-12 px-4 rounded-lg border border-dzone-black/15 bg-dzone-soft-white font-body text-[15px] text-dzone-black placeholder:text-dzone-black/30 focus:outline-none focus:border-dzone-yellow focus:bg-white transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-body text-[11px] font-semibold uppercase tracking-[0.15em] text-dzone-black/50 mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="w-full h-12 px-4 rounded-lg border border-dzone-black/15 bg-dzone-soft-white font-body text-[15px] text-dzone-black placeholder:text-dzone-black/30 focus:outline-none focus:border-dzone-yellow focus:bg-white transition-colors"
                      placeholder="jane@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block font-body text-[11px] font-semibold uppercase tracking-[0.15em] text-dzone-black/50 mb-2"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className="w-full h-12 px-4 rounded-lg border border-dzone-black/15 bg-dzone-soft-white font-body text-[15px] text-dzone-black placeholder:text-dzone-black/30 focus:outline-none focus:border-dzone-yellow focus:bg-white transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block font-body text-[11px] font-semibold uppercase tracking-[0.15em] text-dzone-black/50 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-dzone-black/15 bg-dzone-soft-white font-body text-[15px] text-dzone-black placeholder:text-dzone-black/30 focus:outline-none focus:border-dzone-yellow focus:bg-white transition-colors resize-none"
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 bg-dzone-black text-white font-body font-semibold text-[14px] uppercase tracking-wide px-8 h-14 rounded-xl transition-all hover:bg-dzone-black/85 hover:-translate-y-0.5"
                >
                  Send Enquiry
                  <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
