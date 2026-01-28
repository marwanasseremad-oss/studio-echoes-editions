import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Bespoke = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
  });

  const content = {
    en: {
      title: 'Bespoke Inquiries',
      subtitle: 'Commission a unique piece tailored to your vision',
      description: 'Whether you\'re seeking a custom artwork for your private collection, a personalized gift, or a piece that captures a specific moment or place, our artists are ready to bring your vision to life.',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        projectType: 'Type of Project',
        projectTypePlaceholder: 'e.g., Custom portrait, Landscape commission, Abstract piece',
        budget: 'Budget Range',
        budgetPlaceholder: 'e.g., $500-$1000, $1000-$2500, $2500+',
        timeline: 'Desired Timeline',
        timelinePlaceholder: 'e.g., 2 months, 6 months, Flexible',
        description: 'Describe Your Vision',
        descriptionPlaceholder: 'Tell us about your idea, the space it\'s intended for, preferred style, colors, dimensions, or any reference images you have in mind...',
        submit: 'Submit Inquiry',
      },
      process: {
        title: 'Our Process',
        steps: [
          {
            number: '01',
            title: 'Consultation',
            description: 'We begin with a detailed conversation to understand your vision, preferences, and requirements.',
          },
          {
            number: '02',
            title: 'Artist Matching',
            description: 'Based on your brief, we connect you with the artist whose style best aligns with your vision.',
          },
          {
            number: '03',
            title: 'Concept Development',
            description: 'The artist creates preliminary sketches and concepts for your review and feedback.',
          },
          {
            number: '04',
            title: 'Creation & Delivery',
            description: 'Once approved, the final piece is created with care and delivered to your doorstep.',
          },
        ],
      },
    },
    ar: {
      title: 'طلبات مخصصة',
      subtitle: 'اطلب قطعة فريدة مصممة وفقاً لرؤيتك',
      description: 'سواء كنت تبحث عن عمل فني مخصص لمجموعتك الخاصة، أو هدية شخصية، أو قطعة تلتقط لحظة أو مكاناً معيناً، فإن فنانينا مستعدون لتحقيق رؤيتك.',
      form: {
        name: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف',
        projectType: 'نوع المشروع',
        projectTypePlaceholder: 'مثال: بورتريه مخصص، لوحة منظر طبيعي، قطعة تجريدية',
        budget: 'نطاق الميزانية',
        budgetPlaceholder: 'مثال: 500-1000$، 1000-2500$، 2500$+',
        timeline: 'الجدول الزمني المطلوب',
        timelinePlaceholder: 'مثال: شهرين، 6 أشهر، مرن',
        description: 'صف رؤيتك',
        descriptionPlaceholder: 'أخبرنا عن فكرتك، المساحة المخصصة لها، الأسلوب المفضل، الألوان، الأبعاد، أو أي صور مرجعية لديك...',
        submit: 'إرسال الطلب',
      },
      process: {
        title: 'عمليتنا',
        steps: [
          {
            number: '٠١',
            title: 'الاستشارة',
            description: 'نبدأ بمحادثة مفصلة لفهم رؤيتك وتفضيلاتك ومتطلباتك.',
          },
          {
            number: '٠٢',
            title: 'اختيار الفنان',
            description: 'بناءً على موجزك، نوصلك بالفنان الذي يتوافق أسلوبه مع رؤيتك.',
          },
          {
            number: '٠٣',
            title: 'تطوير المفهوم',
            description: 'يقوم الفنان بإنشاء رسومات أولية ومفاهيم لمراجعتك وملاحظاتك.',
          },
          {
            number: '٠٤',
            title: 'الإنشاء والتسليم',
            description: 'بمجرد الموافقة، يتم إنشاء القطعة النهائية بعناية وتسليمها إلى باب منزلك.',
          },
        ],
      },
    },
  };

  const t = content[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Bespoke Inquiry from ${formData.name}%0A%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AProject Type: ${formData.projectType}%0ABudget: ${formData.budget}%0ATimeline: ${formData.timeline}%0A%0ADescription:%0A${formData.description}`;
    
    window.open(`https://wa.me/201234567890?text=${message}`, '_blank');
    
    toast({
      title: language === 'en' ? 'Inquiry Submitted' : 'تم إرسال الطلب',
      description: language === 'en' 
        ? 'We\'ll be in touch within 48 hours.' 
        : 'سنتواصل معك خلال 48 ساعة.',
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      budget: '',
      timeline: '',
      description: '',
    });
  };

  return (
    <div className="min-h-screen bg-olive-black" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="gallery-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream mb-6">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl text-brass mb-4">
              {t.subtitle}
            </p>
            <p className="text-cream/70 text-lg leading-relaxed">
              {t.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 border-t border-cream/10">
        <div className="gallery-container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-2xl md:text-3xl text-cream text-center mb-12 md:mb-16"
          >
            {t.process.title}
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            {t.process.steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center md:text-left"
              >
                <span className="font-display text-4xl md:text-5xl text-brass/30 block mb-4">
                  {step.number}
                </span>
                <h3 className="font-display text-xl text-cream mb-2">
                  {step.title}
                </h3>
                <p className="text-cream/60 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24 border-t border-cream/10">
        <div className="gallery-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-cream/80">{t.form.name}</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-cream/5 border-cream/20 text-cream placeholder:text-cream/40 focus:border-brass"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-cream/80">{t.form.email}</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-cream/5 border-cream/20 text-cream placeholder:text-cream/40 focus:border-brass"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-cream/80">{t.form.phone}</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-cream/5 border-cream/20 text-cream placeholder:text-cream/40 focus:border-brass"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="projectType" className="text-cream/80">{t.form.projectType}</Label>
                  <Input
                    id="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    placeholder={t.form.projectTypePlaceholder}
                    required
                    className="bg-cream/5 border-cream/20 text-cream placeholder:text-cream/40 focus:border-brass"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="budget" className="text-cream/80">{t.form.budget}</Label>
                  <Input
                    id="budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    placeholder={t.form.budgetPlaceholder}
                    className="bg-cream/5 border-cream/20 text-cream placeholder:text-cream/40 focus:border-brass"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeline" className="text-cream/80">{t.form.timeline}</Label>
                  <Input
                    id="timeline"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    placeholder={t.form.timelinePlaceholder}
                    className="bg-cream/5 border-cream/20 text-cream placeholder:text-cream/40 focus:border-brass"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-cream/80">{t.form.description}</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder={t.form.descriptionPlaceholder}
                  required
                  rows={6}
                  className="bg-cream/5 border-cream/20 text-cream placeholder:text-cream/40 focus:border-brass resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-brass hover:bg-brass/90 text-olive-black font-display tracking-wide py-6"
              >
                {t.form.submit}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Bespoke;
