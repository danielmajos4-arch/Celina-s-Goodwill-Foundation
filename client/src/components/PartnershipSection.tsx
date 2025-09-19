import { useState } from 'react';
import { HandHeart, Users, Mail, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function PartnershipSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.type || !formData.message) {
      setStatus('error');
      setMessage('Please fill in all fields.');
      return;
    }

    setStatus('loading');
    
    try {
      // TODO: Replace with actual form submission
      console.log('Partnership form submission:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStatus('success');
      setMessage('Thank you for your interest! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', type: '', message: '' });
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }

    // Reset status after 5 seconds
    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 5000);
  };

  return (
    <section id="partnership" className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
              <HandHeart className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Partnerships & Volunteers Are{' '}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Highly Welcome
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Together, we can break mental health stigma and create lasting change. Whether you're an individual, 
            organization, or professional, there's a meaningful way for you to contribute.
          </p>
        </div>

        {/* Contact Form */}
        <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
          <CardContent className="p-6 sm:p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              
              {/* Form Section */}
              <div>
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Get in Touch</h3>
                    <p className="text-muted-foreground">Tell us how you'd like to contribute</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="partner-name" className="text-sm font-medium text-foreground">
                      Full Name *
                    </Label>
                    <div className="mt-2 relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="partner-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        className="pl-10"
                        data-testid="input-partner-name"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="partner-email" className="text-sm font-medium text-foreground">
                      Email Address *
                    </Label>
                    <div className="mt-2 relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="partner-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter your email address"
                        className="pl-10"
                        data-testid="input-partner-email"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="partner-type" className="text-sm font-medium text-foreground">
                      Interest Type *
                    </Label>
                    <div className="mt-2">
                      <Select value={formData.type} onValueChange={(value) => handleInputChange('type', value)}>
                        <SelectTrigger data-testid="select-partner-type">
                          <SelectValue placeholder="Select your interest" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="volunteer">I want to volunteer</SelectItem>
                          <SelectItem value="partner">I want to partner with you</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="partner-message" className="text-sm font-medium text-foreground">
                      Message *
                    </Label>
                    <div className="mt-2 relative">
                      <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                      <Textarea
                        id="partner-message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us about your interest, skills, or how you'd like to contribute..."
                        rows={4}
                        className="pl-10 resize-none"
                        data-testid="textarea-partner-message"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-4 text-lg font-semibold disabled:opacity-50"
                    data-testid="button-partner-submit"
                  >
                    {status === 'loading' ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3" />
                        Sending...
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </form>

                {message && (
                  <div 
                    className={`mt-6 p-4 rounded-lg text-center ${
                      status === 'success' 
                        ? 'bg-green-100 border border-green-200 text-green-700'
                        : 'bg-red-100 border border-red-200 text-red-700'
                    }`}
                    role="status"
                    aria-live="polite"
                  >
                    {message}
                  </div>
                )}
              </div>

              {/* Info Section */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8">
                <div className="flex flex-col lg:flex-row items-center gap-6">
                  {/* Text Content */}
                  <div className="flex-1">
                    <div className="text-center lg:text-left mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-foreground mb-3">
                        Join Our Community
                      </h4>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        Create positive change in mental health advocacy.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">
                          <strong>Volunteers:</strong> Join events & advocacy
                        </span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">
                          <strong>Partners:</strong> Collaborate on initiatives
                        </span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">
                          <strong>Flexible:</strong> All schedules welcome
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="flex-shrink-0">
                    <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-2xl overflow-hidden shadow-lg">
                      <img 
                        src={mentalHealthMattersImage} 
                        alt="Mental Health Matters" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}