import { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy | Regent Group",
  description: "Privacy Policy and GDPR compliance for Regent Group.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#0F172A] text-white min-h-screen py-20 selection:bg-[#D4AF37] selection:text-[#0F172A]">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        
        {/* Breadcrumb */}
        <div className="mb-8 opacity-70 hover:opacity-100 transition-opacity [&_nav]:text-slate-300 [&_a:hover]:text-[#D4AF37] [&_span[aria-current]]:text-white">
          <Breadcrumb items={[{ label: "Privacy Policy" }]} />
        </div>

        {/* Header Section */}
        <div className="border-b border-[#D4AF37]/30 pb-10 mb-12 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-normal text-[#D4AF37] tracking-wide mb-4">
            PRIVACY POLICY
          </h1>
          <p className="text-slate-300 text-sm md:text-base uppercase tracking-widest">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-16">
          
          {/* Standard Privacy Policy */}
          <section className="space-y-6">
            <h2 className="text-[#D4AF37] text-2xl md:text-3xl font-heading font-normal tracking-wide border-l-4 border-[#D4AF37] pl-4">
              General Privacy Policy
            </h2>
            <div className="text-slate-300 space-y-4 text-justify leading-relaxed">
              <p>
                At Regent Group, we are committed to protecting and respecting your privacy. This General Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with our dealerships.
              </p>
              <h3 className="text-white text-lg font-semibold mt-6 mb-2">1. Information We Collect</h3>
              <p>
                We may collect personal information that you provide to us directly, such as your name, email address, phone number, and postal address when you fill out forms, request information, or schedule a service appointment. We also automatically collect certain information about your device and usage of our website through cookies and similar technologies.
              </p>
              <h3 className="text-white text-lg font-semibold mt-6 mb-2">2. How We Use Your Information</h3>
              <p>
                We use the collected information to provide, maintain, and improve our services, communicate with you, process transactions, and send you promotional materials (if you have opted in). We may also use the information for analytics, research, and legal compliance.
              </p>
              <h3 className="text-white text-lg font-semibold mt-6 mb-2">3. Sharing of Information</h3>
              <p>
                We do not sell your personal information to third parties. We may share your information with our affiliated dealerships, service providers, and partners who assist us in operating our business. We may also disclose information if required by law or to protect our rights and safety.
              </p>
            </div>
          </section>

          {/* Divider */}
          <div className="border-t border-white/10"></div>

          {/* GDPR Policy */}
          <section className="space-y-6">
            <h2 className="text-[#D4AF37] text-2xl md:text-3xl font-heading font-normal tracking-wide border-l-4 border-[#D4AF37] pl-4">
              GDPR Privacy Notice
            </h2>
            <div className="text-slate-300 space-y-4 text-justify leading-relaxed">
              <p>
                For individuals residing in the European Economic Area (EEA) and the United Kingdom, this section provides additional information regarding your rights under the General Data Protection Regulation (GDPR).
              </p>
              <h3 className="text-white text-lg font-semibold mt-6 mb-2">1. Legal Basis for Processing</h3>
              <p>
                We process your personal data based on your consent, for the performance of a contract, to comply with legal obligations, or for our legitimate interests (such as improving our services and marketing), provided these interests do not override your fundamental rights.
              </p>
              <h3 className="text-white text-lg font-semibold mt-6 mb-2">2. Your Data Protection Rights</h3>
              <p>
                Under the GDPR, you have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access your personal data.</li>
                <li>Request rectification of inaccurate or incomplete data.</li>
                <li>Request erasure of your personal data (&quot;right to be forgotten&quot;).</li>
                <li>Object to the processing of your data.</li>
                <li>Request the restriction of processing your data.</li>
                <li>Request data portability.</li>
                <li>Withdraw consent at any time (without affecting the lawfulness of processing based on consent before withdrawal).</li>
              </ul>
              <h3 className="text-white text-lg font-semibold mt-6 mb-2">3. Exercising Your Rights</h3>
              <p>
                To exercise any of these rights, please contact us at <a href="mailto:info@regentgrouporg.com" className="text-[#D4AF37] hover:underline">info@regentgrouporg.com</a>. We will respond to your request within the timeframe required by applicable law. You also have the right to lodge a complaint with a supervisory authority.
              </p>
            </div>
          </section>

        </div>
        
        {/* Footer Contact */}
        <div className="mt-20 pt-8 border-t border-[#D4AF37]/30 text-center">
          <p className="text-slate-500 text-sm">
            If you have any questions about this Privacy Policy, please contact us at <br/>
            <a href="mailto:info@regentgrouporg.com" className="text-slate-300 hover:text-[#D4AF37] transition-colors mt-2 inline-block">
              info@regentgrouporg.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
