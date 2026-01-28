import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const termsContent = {
  en: {
    title: 'Terms of Service',
    lastUpdated: 'Last Updated: January 2026',
    sections: [
      {
        title: 'Agreement to Terms',
        content: 'By accessing or using the Olive Studios website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.',
      },
      {
        title: 'Products and Orders',
        content: 'All prints are produced to order using museum-grade materials. Prices are listed in Egyptian Pounds (EGP) and are subject to change without notice. We reserve the right to refuse or cancel any order for any reason, including but not limited to product availability, errors in pricing, or suspected fraud.',
      },
      {
        title: 'Limited Editions',
        content: 'Our prints are sold as limited editions. The edition size stated for each artwork is final. Once an edition is sold out, no additional prints will be produced. Each print is numbered and comes with a certificate of authenticity.',
      },
      {
        title: 'Payment',
        content: 'Payment is required at the time of order. We accept major credit cards, bank transfers, and cash on delivery for orders within Greater Cairo. All prices include applicable taxes unless otherwise stated.',
      },
      {
        title: 'Shipping and Delivery',
        content: 'Delivery times are estimates and not guaranteed. We are not responsible for delays caused by shipping carriers, customs, or circumstances beyond our control. Risk of loss transfers to you upon delivery to the carrier.',
      },
      {
        title: 'Returns and Refunds',
        content: 'Due to the made-to-order nature of our products, we do not accept returns for change of mind. If your print arrives damaged, please contact us within 48 hours with photographs. We will provide a replacement at no additional cost. Quality issues will be assessed on a case-by-case basis.',
      },
      {
        title: 'Intellectual Property',
        content: 'All images, content, and materials on this website are the property of Olive Studios or our artists and are protected by copyright. Purchasing a print grants you the right to display the artwork for personal use only. Commercial reproduction, resale of images, or unauthorized use is strictly prohibited.',
      },
      {
        title: 'Artist Rights',
        content: 'Artists retain full copyright to their work. The purchase of a print does not transfer any intellectual property rights to the buyer.',
      },
      {
        title: 'Limitation of Liability',
        content: 'Olive Studios shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services or products. Our total liability shall not exceed the amount paid for the specific product in question.',
      },
      {
        title: 'Governing Law',
        content: 'These terms shall be governed by and construed in accordance with the laws of the Arab Republic of Egypt. Any disputes shall be subject to the exclusive jurisdiction of the courts of Cairo.',
      },
      {
        title: 'Changes to Terms',
        content: 'We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services constitutes acceptance of any modified terms.',
      },
      {
        title: 'Contact',
        content: 'For questions about these Terms of Service, please contact us at hello@olivestudios.com.',
      },
    ],
  },
  ar: {
    title: 'شروط الخدمة',
    lastUpdated: 'آخر تحديث: يناير ٢٠٢٦',
    sections: [
      {
        title: 'الموافقة على الشروط',
        content: 'بالوصول إلى موقع أوليف ستوديوز وخدماته أو استخدامها، فإنك توافق على الالتزام بشروط الخدمة هذه. إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام خدماتنا.',
      },
      {
        title: 'المنتجات والطلبات',
        content: 'جميع الطبعات تُنتج حسب الطلب باستخدام مواد بجودة المتاحف. الأسعار مدرجة بالجنيه المصري وقابلة للتغيير دون إشعار مسبق. نحتفظ بالحق في رفض أو إلغاء أي طلب لأي سبب، بما في ذلك على سبيل المثال لا الحصر توفر المنتج أو أخطاء التسعير أو الاشتباه في الاحتيال.',
      },
      {
        title: 'الإصدارات المحدودة',
        content: 'تُباع طبعاتنا كإصدارات محدودة. حجم الإصدار المذكور لكل عمل فني نهائي. بمجرد نفاد الإصدار، لن يتم إنتاج طبعات إضافية. كل طبعة مرقمة وتأتي مع شهادة أصالة.',
      },
      {
        title: 'الدفع',
        content: 'الدفع مطلوب وقت الطلب. نقبل بطاقات الائتمان الرئيسية والتحويلات البنكية والدفع عند الاستلام للطلبات داخل القاهرة الكبرى. جميع الأسعار تشمل الضرائب المطبقة ما لم يُذكر خلاف ذلك.',
      },
      {
        title: 'الشحن والتوصيل',
        content: 'أوقات التوصيل تقديرية وغير مضمونة. نحن غير مسؤولين عن التأخيرات الناجمة عن شركات الشحن أو الجمارك أو ظروف خارجة عن سيطرتنا. ينتقل خطر الفقدان إليك عند التسليم للناقل.',
      },
      {
        title: 'الإرجاع والاسترداد',
        content: 'نظراً لطبيعة منتجاتنا المصنوعة حسب الطلب، لا نقبل الإرجاع لتغيير الرأي. إذا وصلت طبعتك تالفة، يرجى الاتصال بنا خلال ٤٨ ساعة مع صور. سنقدم بديلاً بدون تكلفة إضافية. سيتم تقييم مشاكل الجودة على أساس كل حالة على حدة.',
      },
      {
        title: 'الملكية الفكرية',
        content: 'جميع الصور والمحتوى والمواد على هذا الموقع ملك لأوليف ستوديوز أو فنانينا ومحمية بحقوق الطبع والنشر. شراء طبعة يمنحك الحق في عرض العمل الفني للاستخدام الشخصي فقط. الاستنساخ التجاري أو إعادة بيع الصور أو الاستخدام غير المصرح به ممنوع بشكل صارم.',
      },
      {
        title: 'حقوق الفنان',
        content: 'يحتفظ الفنانون بحقوق الطبع والنشر الكاملة لأعمالهم. شراء طبعة لا ينقل أي حقوق ملكية فكرية للمشتري.',
      },
      {
        title: 'تحديد المسؤولية',
        content: 'لن يكون أوليف ستوديوز مسؤولاً عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية ناشئة عن استخدامك لخدماتنا أو منتجاتنا. إجمالي مسؤوليتنا لن يتجاوز المبلغ المدفوع للمنتج المحدد المعني.',
      },
      {
        title: 'القانون الحاكم',
        content: 'تخضع هذه الشروط وتُفسر وفقاً لقوانين جمهورية مصر العربية. أي نزاعات تخضع للاختصاص الحصري لمحاكم القاهرة.',
      },
      {
        title: 'التغييرات على الشروط',
        content: 'نحتفظ بالحق في تعديل هذه الشروط في أي وقت. ستكون التغييرات سارية فوراً عند نشرها على موقعنا. استمرار استخدامك لخدماتنا يشكل قبولاً لأي شروط معدلة.',
      },
      {
        title: 'اتصل بنا',
        content: 'للأسئلة حول شروط الخدمة هذه، يرجى الاتصال بنا على hello@olivestudios.com.',
      },
    ],
  },
};

const Terms = () => {
  const { language } = useLanguage();
  const content = termsContent[language];

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

export default Terms;
