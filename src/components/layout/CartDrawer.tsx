import { useEffect } from 'react';
import { X, Minus, Plus, Trash2, ExternalLink, Loader2 } from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

export const CartDrawer = () => {
  const { language } = useLanguage();
  const { 
    items, 
    isCartOpen, 
    setIsCartOpen, 
    removeItem, 
    updateQuantity, 
    totalPrice,
    totalItems,
    isLoading,
    isSyncing,
    getCheckoutUrl,
    syncCart
  } = useCartStore();

  // Sync cart when drawer opens
  useEffect(() => { 
    if (isCartOpen) syncCart(); 
  }, [isCartOpen, syncCart]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-EG', {
      style: 'decimal',
      minimumFractionDigits: 0,
    }).format(price) + ' EGP';
  };

  const handleCheckout = () => {
    const checkoutUrl = getCheckoutUrl();
    if (checkoutUrl) {
      window.open(checkoutUrl, '_blank');
      setIsCartOpen(false);
    }
  };

  const total = totalPrice();
  const count = totalItems();

  const translations = {
    en: {
      title: 'Your Selection',
      empty: 'Your cart is empty',
      browse: 'Browse Collection',
      subtotal: 'Subtotal',
      shipping: 'Shipping calculated at checkout. Free delivery within Greater Cairo.',
      checkout: 'Proceed to Checkout',
      whatsapp: 'Complete via WhatsApp'
    },
    ar: {
      title: 'اختياراتك',
      empty: 'سلتك فارغة',
      browse: 'تصفح المجموعة',
      subtotal: 'المجموع الفرعي',
      shipping: 'يتم حساب الشحن عند الدفع. توصيل مجاني داخل القاهرة الكبرى.',
      checkout: 'متابعة الدفع',
      whatsapp: 'إتمام عبر واتساب'
    }
  };

  const t = translations[language];

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col bg-olive-dark border-olive-dark/50">
        <SheetHeader>
          <SheetTitle className="font-display text-2xl tracking-wide text-cream">
            {t.title} ({count})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
            <p className="text-stone mb-6">{t.empty}</p>
            <Button 
              onClick={() => setIsCartOpen(false)}
              variant="outline"
              className="border-cream/30 text-cream hover:bg-cream/10"
            >
              {t.browse}
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-6 space-y-6">
              {items.map((item) => (
                <div 
                  key={item.variantId}
                  className="flex gap-4"
                >
                  <div className="w-20 h-24 bg-olive overflow-hidden flex-shrink-0">
                    {item.product.node.images?.edges?.[0]?.node && (
                      <img 
                        src={item.product.node.images.edges[0].node.url} 
                        alt={item.product.node.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display text-sm truncate text-cream">{item.product.node.title}</h4>
                    <p className="text-xs text-stone mt-1">
                      {item.selectedOptions.map(o => o.value).join(' · ')}
                    </p>
                    <p className="text-sm mt-2 text-cream">{item.price.currencyCode} {parseFloat(item.price.amount).toFixed(0)}</p>
                    
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                        disabled={isLoading}
                        className="p-1 hover:bg-cream/10 rounded-sm transition-colors text-cream disabled:opacity-50"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-6 text-center text-cream">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                        disabled={isLoading}
                        className="p-1 hover:bg-cream/10 rounded-sm transition-colors text-cream disabled:opacity-50"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.variantId)}
                        disabled={isLoading}
                        className="ml-auto p-1 hover:bg-cream/10 rounded-sm transition-colors text-stone hover:text-cream disabled:opacity-50"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-cream/20 pt-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-stone">{t.subtotal}</span>
                <span className="font-display text-lg text-cream">{formatPrice(total)}</span>
              </div>
              <p className="text-xs text-stone">
                {t.shipping}
              </p>
              
              <Button 
                onClick={handleCheckout}
                className="w-full bg-cream text-olive-black hover:bg-cream/90" 
                size="lg"
                disabled={isLoading || isSyncing}
              >
                {isLoading || isSyncing ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t.checkout}
                  </>
                )}
              </Button>
              
              <a
                href={`https://wa.me/+201234567890?text=${encodeURIComponent(
                  `Hi, I'd like to complete my order:\n\n${items.map(item => 
                    `• ${item.product.node.title} (${item.selectedOptions.map(o => o.value).join(', ')}) x${item.quantity}`
                  ).join('\n')}\n\nTotal: ${formatPrice(total)}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border border-cream/30 text-cream hover:bg-cream/10 flex items-center justify-center py-3 transition-colors"
              >
                {t.whatsapp}
              </a>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};
