import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const updated = '1 June 2026'

function Section({ title, children }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-extrabold text-brand-navy mb-4">{title}</h2>
      <div className="space-y-4 text-gray-600 leading-relaxed">{children}</div>
    </section>
  )
}

function LegalShell({ title, intro, children }) {
  return (
    <div className="font-sans antialiased bg-white min-h-screen">
      <Navbar variant="solid" />
      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <a href="/" className="inline-flex text-sm font-semibold text-brand-navy/70 hover:text-brand-navy mb-8">
            ← Back to Tragent
          </a>
          <p className="text-sm font-bold uppercase tracking-wide text-brand-navy/50 mb-3">Last updated {updated}</p>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-brand-navy mb-5">{title}</h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-12">{intro}</p>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export function PrivacyPolicy() {
  return (
    <LegalShell
      title="Privacy Policy"
      intro="This policy explains what Tragent collects, why we collect it, and how we protect it. Tragent is built for tradespeople who connect Gmail so the app can help organise enquiries, draft replies, and keep job conversations moving."
    >
      <Section title="Who we are">
        <p>Tragent is operated from the United Kingdom. For privacy questions, account deletion, or data requests, contact us at <a className="font-semibold text-brand-navy underline" href="mailto:hello@trytragent.com">hello@trytragent.com</a>.</p>
      </Section>

      <Section title="Information we collect">
        <p>When you use Tragent, we may collect your phone number, business profile details, app settings, connected Gmail address, customer/job information created from emails, and messages or attachments needed to provide the service.</p>
        <p>If you connect Gmail, Tragent requests access to read relevant email threads and send replies you choose to send. We store the Gmail tokens needed to keep your account connected until you disconnect Gmail or delete your account.</p>
      </Section>

      <Section title="How we use information">
        <p>We use your information to sign you in, connect your Gmail account, detect customer enquiries, create job records, draft replies, send replies when you approve them, show follow-up reminders, and provide account support.</p>
        <p>We do not sell your personal data. We do not use Gmail data for advertising.</p>
      </Section>

      <Section title="AI processing">
        <p>Tragent uses AI providers to help understand enquiry context and draft replies. Relevant message content may be sent to the AI provider only to provide the product features you request. AI output should be reviewed before sending.</p>
      </Section>

      <Section title="Crash and diagnostic data">
        <p>We use Sentry to collect crash reports, performance data, device information, app version, and diagnostic logs so we can find and fix bugs. This helps keep the app reliable during TestFlight and production use.</p>
      </Section>

      <Section title="Sharing and processors">
        <p>We use trusted service providers to run Tragent, including hosting, authentication, Gmail OAuth, AI processing, analytics/crash diagnostics, and messaging infrastructure. These providers process data only as needed to operate the service.</p>
      </Section>

      <Section title="Retention and deletion">
        <p>You can disconnect Gmail from the app to remove stored Gmail credentials while keeping your job history. You can delete your account from Settings; this removes your account, sessions, Gmail credentials, jobs, logs, profile, and automation settings from Tragent systems where practical.</p>
      </Section>

      <Section title="Your rights">
        <p>If you are in the UK or EEA, you may have rights to access, correct, delete, restrict, or export your personal data. Contact <a className="font-semibold text-brand-navy underline" href="mailto:hello@trytragent.com">hello@trytragent.com</a> and we will respond as required by applicable law.</p>
      </Section>
    </LegalShell>
  )
}

export function TermsOfService() {
  return (
    <LegalShell
      title="Terms of Service"
      intro="These terms explain the basic rules for using Tragent. They are intentionally plain-English and focused on the current product."
    >
      <Section title="Using Tragent">
        <p>You may use Tragent to manage trade enquiries, organise jobs, draft replies, and connect supported email accounts. You are responsible for the information you enter, the accounts you connect, and the messages you choose to send.</p>
      </Section>

      <Section title="AI-generated drafts">
        <p>Tragent may generate suggested replies or summaries using AI. These are drafts, not professional advice. You should review every draft before sending it to a customer.</p>
      </Section>

      <Section title="Connected accounts">
        <p>If you connect Gmail, you confirm you have permission to connect that account and process the customer enquiries inside it. You can disconnect Gmail from the app at any time.</p>
      </Section>

      <Section title="Acceptable use">
        <p>Do not use Tragent to send spam, unlawful content, abusive messages, or anything that infringes another person's rights. Do not attempt to access another user's account or misuse the service.</p>
      </Section>

      <Section title="Availability">
        <p>Tragent is still evolving. We aim to keep it reliable, but we cannot promise uninterrupted service. Features may change as we improve the product.</p>
      </Section>

      <Section title="Limitation of liability">
        <p>To the fullest extent permitted by law, Tragent is provided as-is. We are not liable for indirect losses, lost profits, missed jobs, or customer disputes arising from use of the service.</p>
      </Section>

      <Section title="Contact">
        <p>Questions about these terms can be sent to <a className="font-semibold text-brand-navy underline" href="mailto:hello@trytragent.com">hello@trytragent.com</a>.</p>
      </Section>
    </LegalShell>
  )
}
