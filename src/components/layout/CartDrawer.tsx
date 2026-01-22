import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

export const CartDrawer = () => {
  const { 
    items, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity, 
    totalPrice,
    totalItems 
  } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-EG', {
      style: 'decimal',
      minimumFractionDigits: 0,
    }).format(price) + ' EGP';
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-serif text-2xl">
            Your Selection ({totalItems})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
            <p className="text-muted-foreground mb-6">Your cart is empty</p>
            <Button 
              onClick={() => setIsCartOpen(false)}
              asChild
              variant="outline"
            >
              <Link to="/collection">Browse Collection</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-6 space-y-6">
              {items.map((item) => (
                <div 
                  key={`${item.product.id}-${item.variant.size}-${item.variant.framed}`}
                  className="flex gap-4"
                >
                  <div className="w-20 h-24 bg-gallery-cream overflow-hidden flex-shrink-0">
                    <img 
                      src={item.product.image} 
                      alt={item.product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-sm truncate">{item.product.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      {item.variant.size} cm · {item.variant.framed ? 'Framed' : 'Unframed'}
                    </p>
                    <p className="text-sm mt-2">{formatPrice(item.variant.price)}</p>
                    
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(
                          item.product.id, 
                          item.variant.size, 
                          item.variant.framed, 
                          item.quantity - 1
                        )}
                        className="p-1 hover:bg-secondary rounded-sm transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(
                          item.product.id, 
                          item.variant.size, 
                          item.variant.framed, 
                          item.quantity + 1
                        )}
                        className="p-1 hover:bg-secondary rounded-sm transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeFromCart(
                          item.product.id, 
                          item.variant.size, 
                          item.variant.framed
                        )}
                        className="ml-auto p-1 hover:bg-secondary rounded-sm transition-colors text-muted-foreground hover:text-foreground"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-serif text-lg">{formatPrice(totalPrice)}</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Shipping calculated at checkout. Free delivery within Greater Cairo.
              </p>
              
              <Button className="w-full btn-gallery-primary" size="lg">
                Proceed to Checkout
              </Button>
              
              <a
                href={`https://wa.me/+201234567890?text=${encodeURIComponent(
                  `Hi, I'd like to complete my order:\n\n${items.map(item => 
                    `• ${item.product.title} (${item.variant.size}, ${item.variant.framed ? 'Framed' : 'Unframed'}) x${item.quantity}`
                  ).join('\n')}\n\nTotal: ${formatPrice(totalPrice)}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-gallery-outline flex items-center justify-center"
              >
                Complete via WhatsApp
              </a>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};
