import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '@/stores/cartStore';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, CreditCard, Banknote, ExternalLink, Loader2, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

interface ShippingForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  area: string;
  notes: string;
}

const Checkout = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { items, totalPrice, totalItems, getCheckoutUrl, clearCart, isLoading } = useCartStore();
  
  const [paymentMethod, setPaymentMethod] = useState<'shopify' | 'cod'>('cod');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState<ShippingForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: 'Cairo',
    area: '',
    notes: '',
  });

  const translations = {
    en: {
      title: 'Checkout',
      backToCart: 'Back to Cart',
      shippingDetails: 'Shipping Details',
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      phone: 'Phone Number',
      address: 'Street Address',
      city: 'City',
      area: 'Area / District',
      notes: 'Delivery Notes (Optional)',
      notesPlaceholder: 'Any special instructions for delivery...',
      paymentMethod: 'Payment Method',
      shopifyPayment: 'Pay Online',
      shopifyPaymentDesc: 'Credit/Debit Card via Secure Checkout',
      cod: 'Cash on Delivery',
      codDesc: 'Pay when you receive your order',
      orderSummary: 'Order Summary',
      subtotal: 'Subtotal',
      shipping: 'Shipping',
      freeShipping: 'Free (Greater Cairo)',
      total: 'Total',
      placeOrder: 'Place Order',
      proceedToPayment: 'Proceed to Payment',
      emptyCart: 'Your cart is empty',
      browseCollection: 'Browse Collection',
      orderSuccess: 'Order Placed Successfully!',
      orderSuccessMessage: 'Thank you for your order. We will contact you shortly to confirm delivery details.',
      continueShopping: 'Continue Shopping',
      required: 'This field is required',
      invalidEmail: 'Please enter a valid email',
      invalidPhone: 'Please enter a valid phone number',
    },
    ar: {
      title: 'إتمام الطلب',
      backToCart: 'العودة للسلة',
      shippingDetails: 'تفاصيل الشحن',
      firstName: 'الاسم الأول',
      lastName: 'اسم العائلة',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      address: 'العنوان',
      city: 'المدينة',
      area: 'المنطقة',
      notes: 'ملاحظات التوصيل (اختياري)',
      notesPlaceholder: 'أي تعليمات خاصة للتوصيل...',
      paymentMethod: 'طريقة الدفع',
      shopifyPayment: 'الدفع أونلاين',
      shopifyPaymentDesc: 'بطاقة ائتمان / خصم عبر الدفع الآمن',
      cod: 'الدفع عند الاستلام',
      codDesc: 'ادفع عند استلام طلبك',
      orderSummary: 'ملخص الطلب',
      subtotal: 'المجموع الفرعي',
      shipping: 'الشحن',
      freeShipping: 'مجاني (القاهرة الكبرى)',
      total: 'الإجمالي',
      placeOrder: 'تأكيد الطلب',
      proceedToPayment: 'متابعة الدفع',
      emptyCart: 'سلتك فارغة',
      browseCollection: 'تصفح المجموعة',
      orderSuccess: 'تم تأكيد الطلب بنجاح!',
      orderSuccessMessage: 'شكراً لطلبك. سنتواصل معك قريباً لتأكيد تفاصيل التوصيل.',
      continueShopping: 'مواصلة التسوق',
      required: 'هذا الحقل مطلوب',
      invalidEmail: 'يرجى إدخال بريد إلكتروني صحيح',
      invalidPhone: 'يرجى إدخال رقم هاتف صحيح',
    }
  };

  const t = translations[language];
  const isRTL = language === 'ar';

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-EG', {
      style: 'decimal',
      minimumFractionDigits: 0,
    }).format(price) + ' EGP';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      toast.error(t.required);
      return false;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error(t.invalidEmail);
      return false;
    }
    if (!formData.phone.trim() || !/^[\d\s\-+()]{10,}$/.test(formData.phone)) {
      toast.error(t.invalidPhone);
      return false;
    }
    if (!formData.address.trim() || !formData.area.trim()) {
      toast.error(t.required);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    if (paymentMethod === 'shopify') {
      const checkoutUrl = getCheckoutUrl();
      if (checkoutUrl) {
        window.open(checkoutUrl, '_blank');
      }
      return;
    }

    // Cash on Delivery flow
    setIsSubmitting(true);
    
    // Simulate order submission (in production, this would send to your backend)
    const orderData = {
      customer: formData,
      items: items.map(item => ({
        title: item.product.node.title,
        variant: item.selectedOptions.map(o => o.value).join(' / '),
        quantity: item.quantity,
        price: item.price.amount,
      })),
      total: totalPrice(),
      paymentMethod: 'cod',
    };

    // Send order via WhatsApp for COD orders
    const whatsappMessage = `🛒 New COD Order\n\n` +
      `👤 Customer: ${formData.firstName} ${formData.lastName}\n` +
      `📧 Email: ${formData.email}\n` +
      `📱 Phone: ${formData.phone}\n` +
      `📍 Address: ${formData.address}, ${formData.area}, ${formData.city}\n` +
      `📝 Notes: ${formData.notes || 'None'}\n\n` +
      `📦 Items:\n${items.map(item => 
        `• ${item.product.node.title} (${item.selectedOptions.map(o => o.value).join(', ')}) x${item.quantity} - ${item.price.amount} EGP`
      ).join('\n')}\n\n` +
      `💰 Total: ${formatPrice(totalPrice())}\n` +
      `💳 Payment: Cash on Delivery`;

    // Open WhatsApp with order details (for merchant notification)
    window.open(`https://wa.me/+201234567890?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    
    setTimeout(() => {
      setIsSubmitting(false);
      setOrderPlaced(true);
      clearCart();
    }, 1000);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="font-display text-2xl md:text-3xl mb-4">{t.orderSuccess}</h1>
          <p className="text-muted-foreground mb-8">{t.orderSuccessMessage}</p>
          <Button onClick={() => navigate('/collection')} size="lg">
            {t.continueShopping}
          </Button>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="font-display text-2xl mb-4">{t.emptyCart}</h1>
          <Button onClick={() => navigate('/collection')} variant="outline">
            {t.browseCollection}
          </Button>
        </div>
      </div>
    );
  }

  const total = totalPrice();

  return (
    <div className={`min-h-screen bg-background py-8 md:py-12 ${isRTL ? 'rtl' : ''}`}>
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.backToCart}
          </button>
          <h1 className="font-display text-3xl md:text-4xl tracking-wide">{t.title}</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Shipping & Payment */}
            <div className="lg:col-span-2 space-y-8">
              {/* Shipping Details */}
              <div className="bg-card rounded-lg p-6 border border-border">
                <h2 className="font-display text-xl mb-6">{t.shippingDetails}</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">{t.firstName} *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">{t.lastName} *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t.email} *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t.phone} *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="address">{t.address} *</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">{t.city}</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="area">{t.area} *</Label>
                    <Select
                      value={formData.area}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, area: value }))}
                    >
                      <SelectTrigger id="area">
                        <SelectValue placeholder={language === 'ar' ? 'اختر المنطقة' : 'Select area'} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cairo">{language === 'ar' ? 'القاهرة' : 'Cairo'}</SelectItem>
                        <SelectItem value="giza">{language === 'ar' ? 'الجيزة' : 'Giza'}</SelectItem>
                        <SelectItem value="alexandria">{language === 'ar' ? 'الإسكندرية' : 'Alexandria'}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="notes">{t.notes}</Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder={t.notesPlaceholder}
                      rows={3}
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-card rounded-lg p-6 border border-border">
                <h2 className="font-display text-xl mb-6">{t.paymentMethod}</h2>
                
                <RadioGroup value={paymentMethod} onValueChange={(val) => setPaymentMethod(val as 'shopify' | 'cod')}>
                  <div className="space-y-4">
                    <label 
                      className={`flex items-start gap-4 p-4 rounded-lg border cursor-pointer transition-colors ${
                        paymentMethod === 'cod' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <RadioGroupItem value="cod" id="cod" className="mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Banknote className="w-5 h-5" />
                          <span className="font-medium">{t.cod}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{t.codDesc}</p>
                      </div>
                    </label>
                    
                    <label 
                      className={`flex items-start gap-4 p-4 rounded-lg border cursor-pointer transition-colors ${
                        paymentMethod === 'shopify' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <RadioGroupItem value="shopify" id="shopify" className="mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <CreditCard className="w-5 h-5" />
                          <span className="font-medium">{t.shopifyPayment}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{t.shopifyPaymentDesc}</p>
                      </div>
                    </label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-lg p-6 border border-border sticky top-24">
                <h2 className="font-display text-xl mb-6">{t.orderSummary}</h2>
                
                {/* Cart Items */}
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.variantId} className="flex gap-3">
                      <div className="w-16 h-20 bg-muted rounded overflow-hidden flex-shrink-0">
                        {item.product.node.images?.edges?.[0]?.node && (
                          <img 
                            src={item.product.node.images.edges[0].node.url} 
                            alt={item.product.node.title}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium truncate">{item.product.node.title}</h4>
                        <p className="text-xs text-muted-foreground">
                          {item.selectedOptions.map(o => o.value).join(' · ')}
                        </p>
                        <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                        <p className="text-sm mt-1">{formatPrice(parseFloat(item.price.amount) * item.quantity)}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{t.subtotal}</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{t.shipping}</span>
                    <span className="text-primary">{t.freeShipping}</span>
                  </div>
                  <div className="flex justify-between font-display text-lg pt-3 border-t border-border">
                    <span>{t.total}</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>

                <Button 
                  type="submit"
                  className="w-full mt-6" 
                  size="lg"
                  disabled={isLoading || isSubmitting}
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : paymentMethod === 'shopify' ? (
                    <>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t.proceedToPayment}
                    </>
                  ) : (
                    t.placeOrder
                  )}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
