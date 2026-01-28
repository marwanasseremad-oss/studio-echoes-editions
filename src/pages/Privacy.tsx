import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const privacyContent = {
  en: {
    title: 'Privacy Policy',
    lastUpdated: 'Last Updated: January 2026',
    sections: [
      {
        title: 'Introduction',
        content: 'At Olive Studios, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or make a purchase.',
      },
      {
        title: 'Information We Collect',
        content: 'We collect information you provide directly to us, including: name, email address, shipping address, phone number, and payment information when you make a purchase. We also automatically collect certain information when you visit our website, including your IP address, browser type, and browsing behavior.',
      },
      {
        title: 'How We Use Your Information',
        content: 'We use the information we collect to: process and fulfill your orders, communicate with you about your purchases, send promotional emails (with your consent), improve our website and services, comply with legal obligations, and prevent fraud.',
      },
      {
        title: 'Information Sharing',
        content: 'We do not sell your personal information. We may share your information with: shipping carriers to deliver your orders, payment processors to complete transactions, service providers who assist our operations, and law enforcement when required by law.',
      },
      {
        title: 'Data Security',
        content: 'We implement appropriate security measures to protect your personal information. All payment transactions are encrypted using SSL technology. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.',
      },
      {
        title: 'Your Rights',
        content: 'You have the right to: access the personal data we hold about you, request correction of inaccurate data, request deletion of your data (subject to legal requirements), opt out of marketing communications at any time, and lodge a complaint with a supervisory authority.',
      },
      {
        title: 'Cookies',
        content: 'We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookie settings through your browser preferences.',
      },
      {
        title: 'Contact Us',
        content: 'If you have questions about this privacy policy or our data practices, please contact us at hello@olivestudios.com or via WhatsApp.',
      },
    ],
  },
  ar: {
    title: 'سياسة الخصوصية',
    lastUpdated: 'آخر تحديث: يناير ٢٠٢٦',
    sections: [
      {
        title: 'مقدمة',
        content: 'في أوليف ستوديوز، نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح سياسة الخصوصية هذه كيف نجمع ونستخدم ونحمي معلوماتك عند زيارة موقعنا أو إجراء عملية شراء.',
      },
      {
        title: 'المعلومات التي نجمعها',
        content: 'نجمع المعلومات التي تقدمها لنا مباشرة، بما في ذلك: الاسم، البريد الإلكتروني، عنوان الشحن، رقم الهاتف، ومعلومات الدفع عند إجراء عملية شراء. نجمع أيضاً بعض المعلومات تلقائياً عند زيارتك لموقعنا، بما في ذلك عنوان IP، نوع المتصفح، وسلوك التصفح.',
      },
      {
        title: 'كيف نستخدم معلوماتك',
        content: 'نستخدم المعلومات التي نجمعها لـ: معالجة وتنفيذ طلباتك، التواصل معك بشأن مشترياتك، إرسال رسائل ترويجية (بموافقتك)، تحسين موقعنا وخدماتنا، الامتثال للالتزامات القانونية، ومنع الاحتيال.',
      },
      {
        title: 'مشاركة المعلومات',
        content: 'نحن لا نبيع معلوماتك الشخصية. قد نشارك معلوماتك مع: شركات الشحن لتوصيل طلباتك، معالجي المدفوعات لإتمام المعاملات، مقدمي الخدمات الذين يساعدون في عملياتنا، وجهات إنفاذ القانون عند الطلب قانونياً.',
      },
      {
        title: 'أمن البيانات',
        content: 'نطبق تدابير أمنية مناسبة لحماية معلوماتك الشخصية. جميع معاملات الدفع مشفرة باستخدام تقنية SSL. ومع ذلك، لا توجد طريقة نقل عبر الإنترنت آمنة بنسبة ١٠٠٪، ولا يمكننا ضمان الأمان المطلق.',
      },
      {
        title: 'حقوقك',
        content: 'لديك الحق في: الوصول إلى البيانات الشخصية التي نحتفظ بها عنك، طلب تصحيح البيانات غير الدقيقة، طلب حذف بياناتك (وفقاً للمتطلبات القانونية)، إلغاء الاشتراك في الاتصالات التسويقية في أي وقت، وتقديم شكوى لسلطة إشرافية.',
      },
      {
        title: 'ملفات تعريف الارتباط',
        content: 'نستخدم ملفات تعريف الارتباط والتقنيات المماثلة لتحسين تجربة التصفح، تحليل حركة المرور على الموقع، وتخصيص المحتوى. يمكنك التحكم في إعدادات ملفات تعريف الارتباط من خلال تفضيلات متصفحك.',
      },
      {
        title: 'اتصل بنا',
        content: 'إذا كانت لديك أسئلة حول سياسة الخصوصية هذه أو ممارسات البيانات لدينا، يرجى الاتصال بنا على hello@olivestudios.com أو عبر واتساب.',
      },
    ],
  },
};

const Privacy = () => {
  const { language } = useLanguage();
  const content = privacyContent[language];

  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="gallery-container max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl md:text-5xl tracking-wide mb-4">
              {content.title}
            </h1>
            <p className="text-muted-foreground mb-12">{content.lastUpdated}</p>

            <div className="space-y-10">
              {content.sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <h2 className="font-display text-xl tracking-wide mb-3">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
