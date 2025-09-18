import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, AlertCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: remove mock functionality - implement real form submission
    console.log('Form submitted:', formData);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      inquiryType: 'general'
    });
    
    setIsSubmitting(false);
    alert('Thank you for your message! We will get back to you within 24 hours.');
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      primary: 'info@celinasgoodwill.org',
      secondary: 'partnerships@celinasgoodwill.org',
      description: 'Get in touch for general inquiries or partnership opportunities'
    },
    {
      icon: Phone,
      title: 'Call Us',
      primary: '+234 (0) 123 456 7890',
      secondary: '+234 (0) 098 765 4321',
      description: 'Available Monday to Friday, 9:00 AM - 5:00 PM WAT'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      primary: '123 Mental Health Avenue',
      secondary: 'Victoria Island, Lagos, Nigeria',
      description: 'Our office is open for scheduled appointments'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      primary: 'Monday - Friday: 9:00 AM - 5:00 PM',
      secondary: 'Saturday: 10:00 AM - 2:00 PM',
      description: 'Emergency support available 24/7 through our hotline'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to join our mission or need support? We're here to listen, help, and work together towards better mental health for all.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white shadow-xl border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inquiry Type */}
                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-semibold text-foreground mb-2">
                    Type of Inquiry
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    data-testid="select-inquiry-type"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="partnership">Partnership & Collaboration</option>
                    <option value="support">Mental Health Support</option>
                    <option value="donation">Donation Information</option>
                  </select>
                </div>

                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Your full name"
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                      data-testid="input-email"
                    />
                  </div>
                </div>

                {/* Phone and Subject */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="+234 (0) 123 456 7890"
                      data-testid="input-phone"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Brief subject line"
                      data-testid="input-subject"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-vertical"
                    placeholder="Tell us how we can help or how you'd like to get involved..."
                    data-testid="textarea-message"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  data-testid="button-submit-contact"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {info.title}
                      </h4>
                      <p className="text-foreground font-medium mb-1">
                        {info.primary}
                      </p>
                      <p className="text-muted-foreground mb-2">
                        {info.secondary}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Donation Notice */}
            <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-orange-400 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-orange-800 mb-2">
                      Donation Information
                    </h4>
                    <p className="text-orange-700 leading-relaxed">
                      <strong>Official donation account details coming soon.</strong> We are currently setting up secure donation channels to ensure transparency and accountability. Follow our social media for updates on how you can financially support our mental health initiatives.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Support Notice */}
        <div className="mt-16 text-center bg-gradient-to-r from-red-600 to-pink-600 rounded-3xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Need Immediate Support?</h3>
          <p className="text-lg mb-4">
            If you're experiencing a mental health crisis or need immediate support, please reach out to these resources:
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm">
            <p><strong>National Suicide Prevention:</strong> 988</p>
            <p><strong>Crisis Text Line:</strong> Text HOME to 741741</p>
            <p><strong>Emergency Services:</strong> 911</p>
          </div>
        </div>
      </div>
    </section>
  );
}