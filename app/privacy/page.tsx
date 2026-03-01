import { ArrowLeft, Mail, MapPin, Shield, Calendar } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — GenPlatform",
  description:
    "Privacy Policy for GenPlatform.io and its subsidiary products GenSchool, GenNote, and GenGuard. Generation Tech Enterprise, Kintampo, Ghana.",
};

export default function PrivacyPage() {
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
            <Shield className="w-3.5 h-3.5 text-brand-school" />
            <span className="text-xs font-medium text-text-secondary">
              Legal Document
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-3">
            Privacy Policy
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
          <div className="w-full h-px bg-gradient-to-r from-brand-school/30 via-border to-transparent mt-8" />
        </div>

        {/* Body */}
        <div className="space-y-10 text-[15px] leading-relaxed text-slate-300">
          {/* 1 */}
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              1. Introduction
            </h2>
            <p>
              This Privacy Policy describes how Generation Tech Enterprise,
              operating as <strong className="text-text-primary">GenPlatform</strong>{" "}
              (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), collects, uses, stores, and
              protects your personal information when you access or use our
              platform and subsidiary products, including:
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-guard flex-shrink-0" />
                <span>
                  <strong className="text-text-primary">GenGuard</strong> — an
                  AI-powered security bot that processes phone numbers and
                  transaction receipts for fraud detection and risk analysis.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-note flex-shrink-0" />
                <span>
                  <strong className="text-text-primary">GenNote</strong> — an AI
                  productivity tool that records audio and transcribes voice
                  notes, meeting recordings, and dictations.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-school flex-shrink-0" />
                <span>
                  <strong className="text-text-primary">GenSchool</strong> — an
                  institutional management system that handles student academic
                  records, attendance, fee management, and parent communication.
                </span>
              </li>
            </ul>
            <p className="mt-4">
              By using any GenPlatform service, you acknowledge that you have
              read, understood, and agree to this Privacy Policy. If you do not
              agree, please discontinue use of our services immediately.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              2. Jurisdiction and Legal Compliance
            </h2>
            <p>
              Generation Tech Enterprise is incorporated and operates from{" "}
              <strong className="text-text-primary">Kintampo, Ghana</strong>. This
              Privacy Policy is governed by and construed in accordance with the
              laws of the Republic of Ghana, including but not limited to:
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-tertiary flex-shrink-0" />
                <span>
                  The{" "}
                  <strong className="text-text-primary">
                    Data Protection Act, 2012 (Act 843)
                  </strong>{" "}
                  of Ghana, which regulates the processing of personal data and
                  establishes the Data Protection Commission as the supervisory
                  authority.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-tertiary flex-shrink-0" />
                <span>
                  The Electronic Transactions Act, 2008 (Act 772) of Ghana.
                </span>
              </li>
            </ul>
            <p className="mt-4">
              Where our services are used by individuals or institutions outside
              Ghana, we also endeavor to comply with applicable international
              data protection standards, including the principles outlined in
              the General Data Protection Regulation (GDPR) where users are
              located in the European Economic Area, and the African Union
              Convention on Cyber Security and Personal Data Protection
              (Malabo Convention).
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              3. Data We Collect
            </h2>
            <p className="mb-4">
              We collect different categories of data depending on which
              GenPlatform product you use. Below is a comprehensive breakdown:
            </p>

            <h3 className="text-base font-semibold text-text-primary mt-6 mb-3">
              3.1 Account Information (All Products)
            </h3>
            <p>
              When you register for any GenPlatform product, we collect your
              name, email address, phone number, organization name (where
              applicable), and account credentials. This data is necessary for
              account creation, authentication, and communication.
            </p>

            <h3 className="text-base font-semibold text-text-primary mt-6 mb-3">
              3.2 Voice Data (GenNote)
            </h3>
            <p>
              GenNote collects and processes audio recordings that you
              voluntarily create using our recording features. This includes raw
              audio files, AI-generated transcriptions, meeting summaries, and
              any metadata associated with the recording such as duration,
              timestamp, and device information. Voice data is processed by
              artificial intelligence models for the sole purpose of providing
              transcription and summarization services. Audio files are encrypted
              at rest and in transit using AES-256 encryption. You may delete
              your voice recordings at any time through the GenNote application,
              and deletion is permanent and irreversible.
            </p>

            <h3 className="text-base font-semibold text-text-primary mt-6 mb-3">
              3.3 Institutional Data (GenSchool)
            </h3>
            <p>
              GenSchool collects and processes data provided by educational
              institutions, including but not limited to: student personal
              information (names, dates of birth, guardian contact details),
              academic records (grades, report cards, assessment scores),
              attendance records, financial data (fee payments, outstanding
              balances, payment histories), and staff employment records. This
              data is collected on behalf of the educational institution, which
              acts as the Data Controller under the Data Protection Act, 2012
              (Act 843). GenPlatform acts as the Data Processor. Institutional
              data is stored in isolated, tenant-specific databases with strict
              access controls.
            </p>

            <h3 className="text-base font-semibold text-text-primary mt-6 mb-3">
              3.4 Transaction Metadata (GenGuard)
            </h3>
            <p>
              GenGuard collects and processes phone numbers, carrier information,
              VoIP detection results, risk scores, community fraud flags, and
              transaction receipt data submitted by users for verification
              purposes. GenGuard does not collect or store call content, SMS
              content, or personal communications. The data processed is limited
              to metadata necessary for fraud detection and risk analysis. Phone
              numbers submitted for verification are hashed and compared against
              community-reported fraud databases. We retain verification results
              for a period of ninety (90) days for audit purposes, after which
              they are automatically purged.
            </p>

            <h3 className="text-base font-semibold text-text-primary mt-6 mb-3">
              3.5 Usage and Technical Data (All Products)
            </h3>
            <p>
              We automatically collect technical information when you use our
              services, including IP addresses, browser type, operating system,
              device identifiers, pages visited, features used, timestamps, and
              error logs. This data is collected through server logs and, where
              applicable, first-party analytics tools. We do not use third-party
              tracking pixels or advertising cookies.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              4. How We Use Your Data
            </h2>
            <p className="mb-4">
              We use the data we collect for the following purposes:
            </p>
            <ul className="space-y-2">
              {[
                "To provide, operate, and maintain our services, including transcription, fraud detection, and institutional management features.",
                "To authenticate users and manage account security, including two-factor authentication where enabled.",
                "To process payments and generate invoices through our third-party payment processor, Paystack.",
                "To improve and optimize our AI models and service quality. Where data is used for model improvement, it is anonymized and aggregated. Individual voice recordings, academic records, or personal data are never used to train AI models without explicit, opt-in consent.",
                "To communicate with you regarding service updates, security alerts, and transactional notifications.",
                "To comply with legal obligations under the Data Protection Act, 2012 (Act 843) and respond to lawful requests from regulatory authorities.",
                "To detect, prevent, and investigate security incidents, fraud, or violations of our Terms of Service.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-school/60 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              5. Artificial Intelligence and Automated Processing
            </h2>
            <p>
              Several GenPlatform products use artificial intelligence and
              machine learning models to deliver core functionality:
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-note flex-shrink-0" />
                <span>
                  <strong className="text-text-primary">GenNote</strong> uses AI
                  models to convert audio recordings into text transcriptions,
                  generate meeting summaries, and extract key action items.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-guard flex-shrink-0" />
                <span>
                  <strong className="text-text-primary">GenGuard</strong> uses AI
                  models to analyze phone number metadata, detect VoIP usage
                  patterns, calculate risk scores, and cross-reference community
                  fraud databases.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-school flex-shrink-0" />
                <span>
                  <strong className="text-text-primary">GenSchool</strong> may
                  use automated processing to generate academic analytics,
                  attendance summaries, and financial reports for institutional
                  administrators.
                </span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-surface border border-border rounded-lg">
              <p className="text-sm text-text-primary font-semibold mb-2">
                Our Commitment on AI and Data
              </p>
              <p className="text-sm text-slate-400">
                We do not sell, license, or share user data with third parties
                for advertising, marketing, or any commercial purpose unrelated
                to the direct provision of our services. Your voice recordings,
                academic records, and transaction data are never sold to data
                brokers, ad networks, or any external entity. AI processing is
                performed solely to deliver the features you have requested.
              </p>
            </div>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              6. Data Sharing and Third Parties
            </h2>
            <p className="mb-4">
              We may share your data only in the following limited
              circumstances:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-tertiary flex-shrink-0" />
                <span>
                  <strong className="text-text-primary">
                    Payment Processing:
                  </strong>{" "}
                  We share necessary billing information with Paystack, our
                  authorized payment processor, for the purpose of processing
                  subscription payments and fees. Paystack&apos;s handling of your
                  data is governed by their own privacy policy.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-tertiary flex-shrink-0" />
                <span>
                  <strong className="text-text-primary">
                    Cloud Infrastructure:
                  </strong>{" "}
                  Your data is stored on secure cloud infrastructure providers
                  who act as sub-processors. These providers are contractually
                  bound to maintain the confidentiality and security of your
                  data.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-tertiary flex-shrink-0" />
                <span>
                  <strong className="text-text-primary">
                    Legal Obligations:
                  </strong>{" "}
                  We may disclose data when required by law, court order, or
                  regulatory direction from the Data Protection Commission of
                  Ghana or other competent authority.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-tertiary flex-shrink-0" />
                <span>
                  <strong className="text-text-primary">
                    With Your Consent:
                  </strong>{" "}
                  We may share data with third parties when you have provided
                  explicit, informed consent for a specific purpose.
                </span>
              </li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              7. Data Retention
            </h2>
            <p>
              We retain personal data only for as long as necessary to fulfill
              the purposes described in this policy, or as required by law:
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 text-text-primary font-semibold">
                      Data Type
                    </th>
                    <th className="text-left py-3 pr-4 text-text-primary font-semibold">
                      Retention Period
                    </th>
                  </tr>
                </thead>
                <tbody className="text-slate-400">
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Account Information</td>
                    <td className="py-3 pr-4">
                      Duration of account + 12 months
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Voice Recordings (GenNote)</td>
                    <td className="py-3 pr-4">
                      Until deleted by user; auto-purge after 24 months of
                      inactivity
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Academic Records (GenSchool)</td>
                    <td className="py-3 pr-4">
                      Duration of institutional subscription + 36 months
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">
                      Verification Results (GenGuard)
                    </td>
                    <td className="py-3 pr-4">90 days from verification date</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Payment Records</td>
                    <td className="py-3 pr-4">7 years (statutory requirement)</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Server Logs</td>
                    <td className="py-3 pr-4">30 days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              8. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal data against unauthorized access, alteration,
              disclosure, or destruction. These measures include:
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "AES-256 encryption for data at rest and TLS 1.3 encryption for data in transit.",
                "Tenant-isolated database architecture for GenSchool institutional data.",
                "Role-based access controls (RBAC) limiting internal access to data on a strict need-to-know basis.",
                "Regular security audits and penetration testing.",
                "Automated threat monitoring and incident response procedures.",
                "Secure backup and disaster recovery systems with geographically distributed redundancy.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-guard/60 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              While we strive to use commercially acceptable means to protect
              your personal data, no method of transmission over the Internet or
              method of electronic storage is 100% secure. We cannot guarantee
              absolute security.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              9. Your Rights
            </h2>
            <p>
              Under the Data Protection Act, 2012 (Act 843) of Ghana and
              applicable international frameworks, you have the following rights
              regarding your personal data:
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "Right of Access: You may request a copy of the personal data we hold about you.",
                "Right to Rectification: You may request correction of inaccurate or incomplete personal data.",
                "Right to Erasure: You may request deletion of your personal data, subject to legal retention requirements.",
                "Right to Restrict Processing: You may request that we limit the processing of your data under certain circumstances.",
                "Right to Data Portability: You may request your data in a structured, commonly used, machine-readable format.",
                "Right to Object: You may object to the processing of your personal data for certain purposes, including automated decision-making.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-note/60 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us at{" "}
              <a
                href="mailto:admin@genplatform.io"
                className="text-brand-school hover:underline"
              >
                admin@genplatform.io
              </a>
              . We will respond to your request within thirty (30) days.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              10. Children&apos;s Privacy
            </h2>
            <p>
              GenNote and GenGuard are not directed at children under the age of
              18. We do not knowingly collect personal data from children through
              these products. If we discover that we have inadvertently collected
              data from a child without proper parental or guardian consent, we
              will delete it immediately.
            </p>
            <p className="mt-4">
              GenSchool, by nature of its function as a school management system,
              processes data of minors on behalf of educational institutions. In
              such cases, the educational institution is responsible for
              obtaining all necessary consents from parents or guardians in
              accordance with the Data Protection Act, 2012 (Act 843).
              GenPlatform processes this data solely as a Data Processor acting
              on the instructions of the institutional Data Controller.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              11. Cookies and Tracking
            </h2>
            <p>
              GenPlatform uses only strictly necessary cookies for
              authentication, session management, and security. We do not use
              advertising cookies, tracking pixels, or third-party analytics
              services that profile users for marketing purposes. You may
              configure your browser to reject cookies, but doing so may limit
              your ability to use certain features of our services.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              12. Changes to This Policy
            </h2>
            <p>
              We reserve the right to update this Privacy Policy at any time.
              When we make material changes, we will notify you via email or
              through a prominent notice within our services at least fourteen
              (14) days before the changes take effect. Your continued use of our
              services after the effective date constitutes acceptance of the
              updated policy.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              13. Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our data practices, please contact us:
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
            <p className="mt-4 text-sm text-text-tertiary">
              You may also file a complaint with the Data Protection Commission
              of Ghana if you believe your data protection rights have been
              violated.
            </p>
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
            href="/terms"
            className="text-sm text-text-tertiary hover:text-text-secondary transition-colors"
          >
            Terms of Service →
          </Link>
        </div>
      </main>
    </div>
  );
}