
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog';

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookiesAccepted');
    if (!hasAccepted) {
      // Show the cookie banner after a short delay
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowConsent(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem('cookiesAccepted', 'necessary');
    setShowConsent(false);
  };

  return (
    <>
      {/* Full-width cookie banner */}
      {showConsent && (
        <div className="fixed bottom-0 left-0 w-full bg-background border-t border-border shadow-lg z-50 animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-medium">Cookie Consent</h3>
              <p className="text-sm text-muted-foreground mt-1">
                We use cookies to enhance your browsing experience and analyze our traffic.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="ghost" size="sm" onClick={() => setShowDetails(true)}>
                Privacy Policy
              </Button>
              <Button variant="outline" size="sm" onClick={acceptNecessary}>
                Necessary Only
              </Button>
              <Button size="sm" onClick={acceptAll}>
                Accept All
              </Button>
              <Button variant="ghost" size="sm" className="p-1" onClick={acceptNecessary}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Cookie details dialog */}
      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Cookie Policy</DialogTitle>
            <DialogDescription>
              Detailed information about how we use cookies on our website
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium">Necessary Cookies</h4>
              <p className="text-sm text-muted-foreground">
                These cookies are required for the website to function properly and cannot be disabled.
              </p>
            </div>
            <div>
              <h4 className="font-medium">Analytics Cookies</h4>
              <p className="text-sm text-muted-foreground">
                These cookies help us understand how visitors interact with our website by collecting anonymous information.
              </p>
            </div>
            <div>
              <h4 className="font-medium">Marketing Cookies</h4>
              <p className="text-sm text-muted-foreground">
                These cookies are used to track visitors across websites to display relevant advertisements.
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDetails(false)}>Close</Button>
            <Button onClick={acceptAll}>Accept All</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
