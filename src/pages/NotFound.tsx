import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="section-padding min-h-[60vh] flex items-center justify-center">
      <div className="gallery-container text-center">
        <span className="font-serif text-8xl text-gallery-gold-muted block">404</span>
        <h1 className="font-serif text-3xl mt-6 mb-4">Page Not Found</h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="btn-gallery-primary">
          <Link to="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;