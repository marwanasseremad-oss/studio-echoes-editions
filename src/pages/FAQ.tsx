import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqData = {
  en: {
    title: 'Frequently Asked Questions',
    categories: [
      {
        name: 'Orders',
        questions: [
          {
            question: 'When will my order arrive?',
            answer: 'Orders within Egypt typically arrive within 5-7 business days. International orders to the Gulf region take 7-14 business days, while orders to Europe and North America may take 14-21 business days. You will receive a tracking number once your order has shipped.',
          },
          {
            question: 'How can I track my order?',
            answer: 'Once your order has shipped, you will receive an email with your tracking number and a link to track your package. You can also log into your account on our website to view the status of your order at any time.',
          },
          {
            question: 'Am I able to change or cancel my order?',
            answer: 'You may change or cancel your order within 24 hours of placing it by contacting our customer service team at hello@olivestudios.com. After this window, orders enter production and cannot be modified or cancelled.',
          },
          {
            question: 'My print arrived damaged. What should I do?',
            answer: 'We take great care in packaging our prints, but if your order arrives damaged, please contact us within 48 hours of delivery with photos of the damage. We will arrange a replacement or full refund at no additional cost to you.',
          },
          {
            question: 'Do you offer expedited shipping?',
            answer: 'Yes, we offer express shipping options at checkout. Express delivery within Egypt takes 2-3 business days, while international express shipping takes 5-7 business days to most destinations.',
          },
          {
            question: 'What forms of payment do you accept?',
            answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for orders within Egypt. All transactions are processed securely through our encrypted payment gateway.',
          },
          {
            question: 'Is my payment secure?',
            answer: 'Absolutely. We use industry-standard SSL encryption to protect your personal and payment information. We never store your full credit card details on our servers, and all transactions are processed through PCI-compliant payment processors.',
          },
          {
            question: 'Is sales tax or VAT added to my order?',
            answer: 'For orders within Egypt, VAT is included in the displayed prices. International orders may be subject to import duties and taxes imposed by your country\'s customs authority, which are the responsibility of the buyer.',
          },
        ],
      },
    ],
  },
  ar: {
    title: 'الأسئلة الشائعة',
    categories: [
      {
        name: 'الطلبات',
        questions: [
          {
            question: 'متى سيصل طلبي؟',
            answer: 'تصل الطلبات داخل مصر عادةً خلال 5-7 أيام عمل. تستغرق الطلبات الدولية إلى منطقة الخليج 7-14 يوم عمل، بينما قد تستغرق الطلبات إلى أوروبا وأمريكا الشمالية 14-21 يوم عمل. ستتلقى رقم تتبع بمجرد شحن طلبك.',
          },
          {
            question: 'كيف يمكنني تتبع طلبي؟',
            answer: 'بمجرد شحن طلبك، ستتلقى بريدًا إلكترونيًا يحتوي على رقم التتبع ورابط لتتبع طردك. يمكنك أيضًا تسجيل الدخول إلى حسابك على موقعنا لعرض حالة طلبك في أي وقت.',
          },
          {
            question: 'هل يمكنني تغيير أو إلغاء طلبي؟',
            answer: 'يمكنك تغيير أو إلغاء طلبك خلال 24 ساعة من تقديمه عن طريق الاتصال بفريق خدمة العملاء على hello@olivestudios.com. بعد هذه الفترة، تدخل الطلبات مرحلة الإنتاج ولا يمكن تعديلها أو إلغاؤها.',
          },
          {
            question: 'وصلت لوحتي تالفة. ماذا أفعل؟',
            answer: 'نحرص بشدة على تغليف لوحاتنا، ولكن إذا وصل طلبك تالفًا، يرجى الاتصال بنا خلال 48 ساعة من التسليم مع صور للضرر. سنرتب بديلاً أو استردادًا كاملاً دون أي تكلفة إضافية عليك.',
          },
          {
            question: 'هل تقدمون شحن سريع؟',
            answer: 'نعم، نقدم خيارات الشحن السريع عند الدفع. يستغرق التوصيل السريع داخل مصر 2-3 أيام عمل، بينما يستغرق الشحن الدولي السريع 5-7 أيام عمل لمعظم الوجهات.',
          },
          {
            question: 'ما هي طرق الدفع المقبولة؟',
            answer: 'نقبل جميع بطاقات الائتمان الرئيسية (فيزا، ماستركارد، أمريكان إكسبريس)، وباي بال، والتحويلات البنكية للطلبات داخل مصر. تتم معالجة جميع المعاملات بشكل آمن من خلال بوابة الدفع المشفرة لدينا.',
          },
          {
            question: 'هل دفعتي آمنة؟',
            answer: 'بالتأكيد. نستخدم تشفير SSL القياسي في الصناعة لحماية معلوماتك الشخصية ومعلومات الدفع. لا نخزن تفاصيل بطاقة الائتمان الكاملة على خوادمنا، وتتم معالجة جميع المعاملات من خلال معالجات دفع متوافقة مع PCI.',
          },
          {
            question: 'هل يتم إضافة ضريبة مبيعات أو ضريبة القيمة المضافة إلى طلبي؟',
            answer: 'للطلبات داخل مصر، تشمل الأسعار المعروضة ضريبة القيمة المضافة. قد تخضع الطلبات الدولية لرسوم الاستيراد والضرائب التي تفرضها سلطات الجمارك في بلدك، والتي تقع على عاتق المشتري.',
          },
        ],
      },
    ],
  },
};

const FAQ = () => {
  const { language } = useLanguage();
  const content = faqData[language];

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="section-padding bg-card">
        <div className="gallery-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-5xl tracking-wide mb-6">
              {content.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding">
        <div className="gallery-container max-w-3xl mx-auto">
          {content.categories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl tracking-wide mb-6 text-accent">
                {category.name}
              </h2>
              
              <Accordion type="single" collapsible className="space-y-0">
                {category.questions.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${categoryIndex}-${index}`}
                    className="border-0 border-b border-border px-0 data-[state=open]:bg-transparent"
                  >
                    <AccordionTrigger className="text-left font-display text-lg tracking-wide hover:no-underline py-5">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQ;
