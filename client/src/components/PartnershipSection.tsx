import { useState } from 'react';
import { HandHeart, Users, Calendar, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function PartnershipSection() {
  const [activeTab, setActiveTab] = useState('volunteer');

  const partnershipTypes = [
    {
      id: 'volunteer',
      title: 'Volunteer With Us',
      icon: HandHeart,
      description: 'Join our community of dedicated volunteers making a real difference in mental health advocacy',
      opportunities: [
        'Peer Support Counselor',
        'Community Workshop Facilitator', 
        'Event Coordinator',
        'Social Media Ambassador',
        'Administrative Support'
      ],
      commitment: 'Flexible scheduling from 4 hours/week',
      gradient: 'from-blue-600 to-blue-800'
    },
    {
      id: 'partner',
      title: 'Become a Partner',
      icon: Users,
      description: 'Collaborate with us to expand our reach and create sustainable mental health initiatives',
      opportunities: [
        'Corporate Sponsorship Programs',
        'Healthcare Provider Partnerships',
        'Educational Institution Collaborations',
        'Community Organization Alliances',
        'Media and Advocacy Partnerships'
      ],
      commitment: 'Customized partnership agreements',
      gradient: 'from-green-600 to-green-800'
    },
    {
      id: 'professional',
      title: 'Professional Services',
      icon: Calendar,
      description: 'Contribute your professional expertise to strengthen our mental health programs',
      opportunities: [
        'Licensed Mental Health Counselors',
        'Social Workers and Therapists',
        'Medical Professionals',
        'Legal Advisors',
        'Marketing and Communications Specialists'
      ],
      commitment: 'Pro-bono or reduced-rate services',
      gradient: 'from-pink-600 to-pink-800'
    }
  ];

  const handleContactClick = (type: string) => {
    console.log(`Contact form opened for: ${type}`);
    // TODO: Implement contact form modal
  };

  return (
    <section id="partnership" className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Partnership Types Tabs */}
        <div className="flex flex-col lg:flex-row justify-center mb-8 space-y-4 lg:space-y-0 lg:space-x-4">
          {partnershipTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setActiveTab(type.id)}
              className={`flex items-center justify-center space-x-3 px-4 sm:px-6 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                activeTab === type.id
                  ? `bg-gradient-to-r ${type.gradient} text-white shadow-lg transform scale-105`
                  : 'bg-white text-muted-foreground hover:bg-gray-50 border border-gray-200'
              }`}
              data-testid={`tab-${type.id}`}
            >
              <type.icon className="w-5 h-5" />
              <span>{type.title}</span>
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        {partnershipTypes.map((type) => (
          <div
            key={type.id}
            className={`transition-all duration-500 ${
              activeTab === type.id ? 'opacity-100 block' : 'opacity-0 hidden'
            }`}
          >
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardContent className="p-6 sm:p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Content */}
                  <div>
                    <div className={`w-20 h-20 bg-gradient-to-r ${type.gradient} rounded-full flex items-center justify-center mb-6`}>
                      <type.icon className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                      {type.title}
                    </h3>
                    
                    <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
                      {type.description}
                    </p>

                    <div className="mb-8">
                      <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-4">
                        Opportunities Available:
                      </h4>
                      <ul className="space-y-3">
                        {type.opportunities.map((opportunity, index) => (
                          <li key={index} className="flex items-start">
                            <div className={`w-2 h-2 bg-gradient-to-r ${type.gradient} rounded-full mt-2 mr-3 flex-shrink-0`} />
                            <span className="text-muted-foreground">{opportunity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-8">
                      <span className="text-sm font-medium text-muted-foreground">
                        Commitment Level: {type.commitment}
                      </span>
                    </div>

                    <Button
                      onClick={() => handleContactClick(type.id)}
                      className={`w-full sm:w-auto bg-gradient-to-r ${type.gradient} hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300`}
                      size="lg"
                      data-testid={`button-${type.id}-contact`}
                    >
                      Get Started Today
                    </Button>
                  </div>

                  {/* Visual Element */}
                  <div className="relative">
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${type.gradient} opacity-5`} />
                      <div className="relative z-10 text-center">
                        <type.icon className="w-24 h-24 text-gray-400 mx-auto mb-6" />
                        <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                          Ready to Make an Impact?
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Your contribution, no matter how big or small, creates ripple effects 
                          of positive change in mental health advocacy.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}

      </div>
    </section>
  );
}