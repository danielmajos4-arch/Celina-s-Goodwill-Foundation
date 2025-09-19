import { Mail, Phone, MapPin, Clock, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { ShareButton } from '@/components/InteractiveElements';

export default function ContactSection() {

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      primary: 'celinasgoodwillfoundation@gmail.com',
      secondary: 'celinasgoodwillfoundation@gmail.com',
      description: 'Get in touch for general inquiries or partnership opportunities'
    },
    {
      icon: Phone,
      title: 'Call Us',
      primary: '+2349110221031',
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
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to join our mission or need support? We're here to listen, help, and work together towards better mental health for all.
          </p>
        </div>

        {/* Contact Information */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
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
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-orange-800 mb-2">
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

        {/* Share Section */}
        <div className="mt-16 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
            Help Us Spread Awareness
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Share our mission with your network. Every share helps break the stigma and reaches someone who might need support.
          </p>
          <div className="flex justify-center">
            <ShareButton />
          </div>
        </div>

      </div>
    </section>
  );
}