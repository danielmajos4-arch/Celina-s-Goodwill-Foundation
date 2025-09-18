import { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface NewsletterSignupProps {
  variant?: 'compact' | 'full';
}

export default function NewsletterSignup({ variant = 'full' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    try {
      // TODO: replace mock functionality with real newsletter service integration
      console.log('Newsletter signup:', email);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock success response
      if (email.includes('@')) {
        setStatus('success');
        setMessage('Welcome to our community! Check your email for confirmation.');
        setEmail('');
      } else {
        throw new Error('Invalid email');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
    }

    // Reset status after 5 seconds
    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 5000);
  };

  if (variant === 'compact') {
    return (
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <div className="flex-1 relative">
            <label htmlFor="newsletter-email-compact" className="sr-only">
              Email address for newsletter subscription
            </label>
            <input
              id="newsletter-email-compact"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              disabled={status === 'loading'}
              data-testid="input-newsletter-email-compact"
            />
            {status === 'success' && (
              <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-500" />
            )}
          </div>
          <Button
            type="submit"
            disabled={status === 'loading' || !email}
            className="bg-gradient-to-r from-blue-600 to-green-600"
            data-testid="button-newsletter-signup-compact"
          >
            {status === 'loading' ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <Mail className="w-5 h-5" />
            )}
          </Button>
        </form>
        
        {message && (
          <div 
            className={`mt-3 text-sm text-center ${
              status === 'success' ? 'text-green-600' : 'text-red-600'
            }`}
            role="status"
            aria-live="polite"
          >
            {message}
          </div>
        )}
      </div>
    );
  }

  return (
    <Card className="bg-gradient-to-br from-blue-50 to-green-50 border-0 shadow-lg">
      <CardContent className="p-8">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Stay Connected
          </h3>
          <p className="text-muted-foreground">
            Get mental health tips, community updates, and inspiring stories delivered to your inbox
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address for newsletter subscription
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-center"
              disabled={status === 'loading'}
              data-testid="input-newsletter-email-full"
            />
            {status === 'success' && (
              <CheckCircle className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-green-500" />
            )}
            {status === 'error' && (
              <AlertCircle className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-red-500" />
            )}
          </div>
          
          <Button
            type="submit"
            disabled={status === 'loading' || !email}
            className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-4 text-lg font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            data-testid="button-newsletter-signup-full"
          >
            {status === 'loading' ? (
              <div className="flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-3" />
                Subscribing...
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <Mail className="w-6 h-6 mr-3" />
                Subscribe to Updates
              </div>
            )}
          </Button>
        </form>

        {message && (
          <div 
            className={`mt-4 p-4 rounded-lg text-center ${
              status === 'success' 
                ? 'bg-green-100 border border-green-200 text-green-700'
                : 'bg-red-100 border border-red-200 text-red-700'
            }`}
            role="status"
            aria-live="polite"
          >
            <div className="flex items-center justify-center">
              {status === 'success' ? (
                <CheckCircle className="w-5 h-5 mr-2" />
              ) : (
                <AlertCircle className="w-5 h-5 mr-2" />
              )}
              {message}
            </div>
          </div>
        )}

        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}