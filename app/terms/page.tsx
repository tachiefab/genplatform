import { ArrowLeft, Mail, MapPin, FileText, Calendar } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service — GenPlatform",
  description:
    "Terms of Service for GenPlatform.io and its subsidiary products GenSchool, GenNote, and GenGuard. Generation Tech Enterprise, Kintampo, Ghana.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      {/* Header */}
      <header className="border-b border-border/50 bg-surface/30">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-text-tertiary hover:text-text-secondary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        {/* Title Block */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-3 py-1 mb-6">
            <FileText className="w-3.5 h-3.5 text-brand-note" />
            <span className="text-xs font-medium text-text-secondary">
              Legal Document
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-3">
            Terms of Service
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-text-tertiary">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              Effective Date: January 1, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              Last Updated: March 1, 2026
            </span>
          </div>
          <div className="w-full h-px bg-gradient-to-r from-brand-note/30 via-border to-transparent mt-8" />
        </div>

        {/* Body */}
        <div className="space-y-10 text-[15px] leading-relaxed text-slate-300">
          {/* 1 */}
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              These Terms of Service (&quot;Terms&quot;) constitute a legally binding
              agreement between you (&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;) and
              Generation Tech Enterprise, operating as{" "}
              <strong className="text-text-primary">GenPlatform</strong>{" "}
              (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), with its principal
              place of business in Kintampo, Ghana.
            </p>
            <p className="mt-4">
              By creating an account, accessing, or using GenPlatform or any of
              its subsidiary applications — including{" "}
              <strong className="text-text-primary">GenGuard</strong>,{" "}
              <strong className="text-text-primary">GenNote</strong>, and{" "}
              <strong className="text-text-primary">GenSchool</strong> — whether
              through a web browser, mobile application, API integration, or
              WhatsApp bot interface, you acknowledge that you have read,
              understood, and agree to be bound by these Terms and our{" "}
              <Link href="/privacy" className="text-brand-school hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
            <p className="mt-4">
              If you are accepting these Terms on behalf of an organization,
              educational institution, or other legal entity, you represent and
              warrant that you have the authority to bind that entity to these
              Terms.
            </p>
            <p className="mt-4">
              If you do not agree to these Terms, you must immediately
              discontinue all use of our services.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              2. Description of Services
            </h2>
            <p className="mb-4">
              GenPlatform provides a suite of software-as-a-service (SaaS)
              products designed for institutional management, productivity, and
              security:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-guard flex-shrink-0" />
                <span>
                  <strong className="text-text-primary">
                    GenGuard (Public Beta):
                  </strong>{" "}
                  A headless, AI-powered WhatsApp security bot that enables users
                  to submit phone numbers and transaction receipts for real-time
                  fraud detection, risk scoring, carrier analysis, and community
                  intelligence reporting.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-note flex-shrink-0" />
                <span>
                  <strong className="text-text-primary">
                    GenNote (Private Beta):
                  </strong>{" "}
                  An AI productivity application that records audio, generates
                  text transcriptions, produces meeting summaries, and organizes
                  voice notes into a searchable library.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-school flex-shrink-0" />
                <span>
                  <strong className="text-text-primary">
                    GenSchool (Early Access):
                  </strong>{" "}
                  A comprehensive institutional management platform for schools
                  that automates report card generation, fee tracking and
                  collection, attendance management, and parent-teacher
                  communication.
                </span>
              </li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              3. Account Registration and Security
            </h2>
            <p>
              To access our services, you must register for an account by
              providing accurate, current, and complete information. You are
              responsible for:
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "Maintaining the confidentiality of your account credentials, including passwords and API keys.",
                "All activities that occur under your account, whether authorized by you or not.",
                "Immediately notifying us at admin@genplatform.io of any unauthorized access or security breach involving your account.",
                "Ensuring that your account information remains accurate and up to date.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-tertiary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              We reserve the right to suspend or terminate accounts that we
              reasonably believe have been compromised, are inactive for more
              than twelve (12) consecutive months, or are in violation of these
              Terms.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              4. Acceptable Use and User Conduct
            </h2>
            <p>
              You agree to use GenPlatform services only for lawful purposes and
              in accordance with these Terms. The following activities are
              strictly prohibited:
            </p>

            <h3 className="text-base font-semibold text-text-primary mt-6 mb-3">
              4.1 General Prohibitions
            </h3>
            <ul className="space-y-2">
              {[
                "Using any GenPlatform service to violate any applicable local, national, or international law or regulation.",
                "Attempting to gain unauthorized access to any part of the platform, other user accounts, or connected systems.",
                "Reverse engineering, decompiling, disassembling, or otherwise attempting to derive the source code of any GenPlatform software.",
                "Using automated tools, bots (other than our provided interfaces), or scripts to access the services in a manner that exceeds reasonable use or places undue burden on our infrastructure.",
                "Uploading, transmitting, or distributing malware, viruses, or any other malicious code through our platforms.",
                "Impersonating any person or entity, or misrepresenting your affiliation with any person or entity.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400/60 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-base font-semibold text-text-primary mt-6 mb-3">
              4.2 GenGuard-Specific Prohibitions
            </h3>
            <div className="p-4 bg-surface border border-red-500/20 rounded-lg">
              <p className="text-sm text-slate-300">
                You are expressly prohibited from using GenGuard for{" "}
                <strong className="text-text-primary">
                  illegal surveillance, stalking, harassment, or any form of
                  unlawful monitoring
                </strong>{" "}
                of individuals. GenGuard is designed exclusively for legitimate
                fraud detection and transaction verification purposes. Using the
                service to track, profile, or monitor individuals without their
                knowledge or consent, or in violation of applicable privacy laws,
                constitutes a material breach of these Terms and may result in
                immediate account termination and referral to law enforcement
                authorities.
              </p>
            </div>

            <h3 className="text-base font-semibold text-text-primary mt-6 mb-3">
              4.3 GenSchool-Specific Prohibitions
            </h3>
            <div className="p-4 bg-surface border border-red-500/20 rounded-lg">
              <p className="text-sm text-slate-300">
                You are expressly prohibited from using GenSchool to{" "}
                <strong className="text-text-primary">
                  falsify, fabricate, or fraudulently alter academic records
                </strong>
                , including but not limited to student grades, report cards,
                assessment scores, attendance records, or fee payment records.
                Educational institutions using GenSchool are responsible for the
                accuracy and integrity of all data entered into the system.
                Falsification of academic records constitutes a material breach
                of these Terms, may violate the laws of Ghana and other
                applicable jurisdictions, and will result in immediate account
                termination and potential legal action.
              </p>
            </div>

            <h3 className="text-base font-semibold text-text-primary mt-6 mb-3">
              4.4 GenNote-Specific Prohibitions
            </h3>
            <div className="p-4 bg-surface border border-amber-500/20 rounded-lg">
              <p className="text-sm text-slate-300">
                You are prohibited from using GenNote to record conversations
                without the consent of all parties where required by applicable
                law. You must comply with all local and national laws regarding
                audio recording and consent in your jurisdiction. GenPlatform
                bears no responsibility for recordings made in violation of
                applicable wiretapping, eavesdropping, or consent laws.
              </p>
            </div>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              5. Beta Services
            </h2>
            <div className="p-4 bg-surface border border-amber-500/20 rounded-lg mb-4">
              <p className="text-sm text-amber-400 font-semibold mb-2">
                ⚠ Important: Beta Disclaimer
              </p>
              <p className="text-sm text-slate-300">
                Certain GenPlatform products are currently offered in beta
                (Public Beta, Private Beta, or Early Access). By using beta
                services, you acknowledge and accept the following additional
                terms.
              </p>
            </div>
            <ul className="space-y-2">
              {[
                `Beta services are provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.`,
                "Beta services may contain bugs, errors, and instabilities that could cause system failures, data corruption, or data loss. We strongly recommend that you maintain independent backups of all critical data.",
                "We do not guarantee the availability, continuity, or performance of beta services. Features may be added, modified, or removed at any time without prior notice.",
                "We shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages arising from or related to your use of beta services, including but not limited to data loss, business interruption, or loss of profits.",
                "Beta services may be subject to usage limits, rate limits, or storage limits that differ from those of generally available services.",
                "We reserve the right to discontinue any beta service at any time, with or without notice, and without liability to you.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400/60 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              Your participation in beta testing may include providing feedback,
              bug reports, and suggestions. You grant GenPlatform a
              non-exclusive, royalty-free, worldwide license to use, modify, and
              incorporate such feedback into our products without obligation to
              you.
            </p>
          </section>

          
                    {/* 6 */}
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              6. Subscription, Payments, and Billing
            </h2>

            <h3 className="text-base font-semibold text-text-primary mt-4 mb-3">
              6.1 Overview
            </h3>
            <p>
              Access to GenPlatform services may require payment. Each product
              uses a different payment model and processor suited to its
              platform and use case. By using any paid feature, you agree to the
              applicable payment terms below.
            </p>

            <h3 className="text-base font-semibold text-text-primary mt-6 mb-3">
              6.2 GenNote — Mobile App Purchases
            </h3>
            <p>
              GenNote is a mobile application available on Android. All
              purchases, subscriptions, and in-app transactions for GenNote are
              processed exclusively through{" "}
              <strong className="text-text-primary">
                Google Play In-App Purchases
              </strong>
              . By purchasing a subscription or any in-app feature, you agree to
              be bound by Google Play&apos;s Terms of Service and payment policies.
              GenPlatform does not directly process, store, or have access to
              your payment card or mobile money details for GenNote
              transactions. All billing inquiries, subscription management,
              cancellations, and refund requests for GenNote must be handled
              through the Google Play Store. Google Play&apos;s refund policies
              apply. GenPlatform has no ability to issue refunds for
              transactions processed through Google Play.
            </p>

            <h3 className="text-base font-semibold text-text-primary mt-6 mb-3">
              6.3 GenSchool — Institutional Payments via Paystack
            </h3>
            <p>
              GenSchool facilitates the collection of school fees, levies, and
              other institutional charges from parents and guardians on behalf
              of educational institutions. All payments within GenSchool —
              including school fee payments, subscription fees for the
              institution, and any other financial transactions — are processed
              through{" "}
              <strong className="text-text-primary">Paystack</strong>, a
              third-party payment processor. By making a payment through
              GenSchool, you authorize Paystack to charge the applicable amount
              to your designated payment method (credit card, debit card, mobile
              money, or bank transfer). GenPlatform does not directly store your
              full payment credentials. All payment data is handled in
              accordance with Paystack&apos;s security standards and PCI DSS
              compliance requirements. Institutional subscription fees are
              billed on a recurring basis (monthly or annually). School fee
              payments are processed as one-time transactions on behalf of the
              institution.
            </p>

            <h3 className="text-base font-semibold text-text-primary mt-6 mb-3">
              6.4 GenGuard — Micro-Transaction Model
            </h3>
            <p>
              GenGuard operates on a pay-per-use micro-transaction model. Users
              are charged for the following services:
            </p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-guard flex-shrink-0" />
                <span>
                  <strong className="text-text-primary">
                    KYC Name Verification:
                  </strong>{" "}
                  When a user submits a phone number for verification and
                  chooses to compare the registered name against the name of a
                  person they intend to transact with, a micro-transaction fee
                  is charged for the KYC lookup.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-guard flex-shrink-0" />
                <span>
                  <strong className="text-text-primary">
                    Receipt Fraud Scanning:
                  </strong>{" "}
                  When a user submits a transaction receipt for AI-powered fraud
                  analysis and authenticity verification, a micro-transaction
                  fee is charged per receipt scanned.
                </span>
              </li>
            </ul>
            <p className="mt-4">
              GenGuard micro-transaction fees are deducted from a prepaid wallet
              balance or charged directly per transaction via Paystack. Pricing
              for each service is displayed within the GenGuard interface before
              confirmation. By confirming a transaction, you authorize the
              applicable charge. Micro-transaction fees are non-refundable once
              the verification or scan has been processed and results have been
              delivered.
            </p>

            <h3 className="text-base font-semibold text-text-primary mt-6 mb-3">
              6.5 General Billing Terms
            </h3>
            <ul className="space-y-2">
              {[
                "All prices are quoted in the currency displayed at the point of purchase and are inclusive of applicable taxes unless otherwise stated.",
                "We reserve the right to change pricing at any time. For recurring subscriptions, we will provide at least thirty (30) days' advance notice of any price increases to existing subscribers.",
                "If a recurring payment fails, we will attempt to process the charge up to three (3) additional times over a period of ten (10) days. If payment remains unsuccessful, your account may be downgraded or suspended until the outstanding balance is resolved.",
                "For GenSchool and GenGuard transactions processed via Paystack, refund requests are handled on a case-by-case basis. Contact admin@genplatform.io within fourteen (14) days of the charge.",
                "For GenNote transactions processed via Google Play, all refund requests must be submitted through the Google Play Store in accordance with Google's refund policies.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-tertiary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              7. Intellectual Property
            </h2>
            <p>
              All intellectual property rights in and to the GenPlatform
              services, including but not limited to software, source code,
              algorithms, AI models, user interface designs, trademarks, logos,
              documentation, and content, are and shall remain the exclusive
              property of Generation Tech Enterprise.
            </p>
            <p className="mt-4">
              We grant you a limited, non-exclusive, non-transferable, revocable
              license to access and use our services solely for their intended
              purpose and in accordance with these Terms. This license does not
              include the right to sublicense, resell, distribute, or create
              derivative works from our services.
            </p>
            <p className="mt-4">
              You retain all ownership rights to the data and content you upload,
              create, or generate through our services. By using our services,
              you grant GenPlatform a limited license to process, store, and
              display your data solely for the purpose of providing the services
              you have requested.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              8. Service Availability and Modifications
            </h2>
            <p>
              We strive to maintain 99.9% uptime for our services but do not
              guarantee uninterrupted access. Services may be temporarily
              unavailable due to scheduled maintenance, system upgrades,
              emergency patches, or circumstances beyond our reasonable control
              (including force majeure events).
            </p>
            <p className="mt-4">
              We reserve the right to modify, update, or discontinue any feature
              or service at any time. For material changes that negatively affect
              your use of the service, we will provide at least fourteen (14)
              days&apos; advance notice.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              9. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by the laws of the Republic of
              Ghana:
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "GenPlatform shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, business opportunities, or goodwill, arising from or related to your use or inability to use our services.",
                "Our total aggregate liability for any claims arising under these Terms shall not exceed the amount you have paid to GenPlatform in the twelve (12) months immediately preceding the event giving rise to the claim.",
                "We shall not be liable for any loss of data, damage, or harm arising from third-party services, including but not limited to payment processors, cloud infrastructure providers, or AI model providers.",
                "We shall not be liable for any decisions made or actions taken by you in reliance on the output of our AI-powered features, including GenGuard risk scores, GenNote transcriptions, or GenSchool analytics.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-tertiary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              10. Indemnification
            </h2>
            <p>
              You agree to indemnify, defend, and hold harmless Generation Tech
              Enterprise, its directors, officers, employees, agents, and
              affiliates from and against any and all claims, liabilities,
              damages, losses, costs, and expenses (including reasonable
              attorneys&apos; fees) arising from or related to:
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "Your use or misuse of our services.",
                "Your violation of these Terms or any applicable law.",
                "Your violation of any third-party rights, including intellectual property or privacy rights.",
                "Content or data you submit, upload, or transmit through our services.",
                "Unauthorized use of GenGuard for surveillance or GenSchool for records falsification.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-tertiary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              11. Termination
            </h2>
            <p>
              Either party may terminate this agreement at any time:
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-tertiary flex-shrink-0" />
                <span>
                  <strong className="text-text-primary">By You:</strong> You may
                  cancel your account at any time through your account settings
                  or by contacting us at admin@genplatform.io. Upon
                  cancellation, your access to paid features will continue until
                  the end of your current billing period.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-tertiary flex-shrink-0" />
                <span>
                  <strong className="text-text-primary">By Us:</strong> We
                  reserve the right to suspend or terminate your account
                  immediately, without prior notice, if we determine that you
                  have violated these Terms, engaged in fraudulent activity, or
                  posed a security risk to our platform or other users.
                </span>
              </li>
            </ul>
            <p className="mt-4">
              Upon termination, your right to use the services ceases
              immediately. We will retain your data in accordance with the
              retention periods outlined in our Privacy Policy. You may request
              an export of your data prior to termination.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              12. Governing Law and Dispute Resolution
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of the Republic of Ghana, without regard to conflict of
              law principles.
            </p>
            <p className="mt-4">
              Any dispute, controversy, or claim arising out of or relating to
              these Terms shall first be attempted to be resolved through good
              faith negotiation between the parties. If the dispute cannot be
              resolved through negotiation within thirty (30) days, it shall be
              submitted to mediation under the rules of the Ghana Alternative
              Dispute Resolution Centre in Kintampo.
            </p>
            <p className="mt-4">
              If mediation is unsuccessful, either party may submit the dispute
              to the exclusive jurisdiction of the courts of the Republic of
              Ghana sitting in Kintampo.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              13. Severability
            </h2>
            <p>
              If any provision of these Terms is found to be unenforceable or
              invalid by a court of competent jurisdiction, that provision shall
              be limited or eliminated to the minimum extent necessary, and the
              remaining provisions shall continue in full force and effect.
            </p>
          </section>

          {/* 14 */}
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              14. Entire Agreement
            </h2>
            <p>
              These Terms, together with our{" "}
              <Link href="/privacy" className="text-brand-school hover:underline">
                Privacy Policy
              </Link>
              , constitute the entire agreement between you and Generation Tech
              Enterprise regarding your use of GenPlatform services. These Terms
              supersede all prior agreements, representations, and
              understandings, whether written or oral, relating to the subject
              matter herein.
            </p>
          </section>

          {/* 15 */}
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              15. Changes to These Terms
            </h2>
            <p>
              We reserve the right to modify these Terms at any time. When we
              make material changes, we will update the &quot;Last Updated&quot; date at
              the top of this page and notify you via email or through a
              prominent notice within our services at least fourteen (14) days
              before the changes take effect. Your continued use of our services
              after the effective date of the revised Terms constitutes your
              acceptance of the updated Terms.
            </p>
          </section>

          {/* 16 */}
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              16. Contact Information
            </h2>
            <p className="mb-4">
              For any questions, concerns, or notices regarding these Terms of
              Service, please contact us:
            </p>
            <div className="p-4 bg-surface border border-border rounded-lg space-y-2">
              <p className="text-sm text-text-primary font-semibold">
                Generation Tech Enterprise
              </p>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-text-tertiary flex-shrink-0" />
                Kintampo, Ghana
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Mail className="w-3.5 h-3.5 text-text-tertiary flex-shrink-0" />
                <a
                  href="mailto:admin@genplatform.io"
                  className="text-brand-school hover:underline"
                >
                  admin@genplatform.io
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Bottom nav */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/"
            className="text-sm text-text-tertiary hover:text-text-secondary transition-colors flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>
          <Link
            href="/privacy"
            className="text-sm text-text-tertiary hover:text-text-secondary transition-colors"
          >
            Privacy Policy →
          </Link>
        </div>
      </main>
    </div>
  );
}