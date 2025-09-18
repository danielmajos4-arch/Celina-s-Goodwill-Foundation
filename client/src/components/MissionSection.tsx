import { useState } from 'react';
import { Target, Eye, Heart, Users, Lightbulb, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function MissionSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const cards = [
    {
      type: 'mission',
      icon: Target,
      title: 'Our Mission',
      subtitle: 'Transforming Lives Through Mental Health Advocacy',
      description: 'To break down barriers and eliminate stigma surrounding mental health by providing comprehensive support, education, and advocacy services that empower individuals and communities to seek help and thrive.',
      points: [
        'Provide accessible mental health resources and support',
        'Create safe, judgment-free spaces for healing',
        'Educate communities about mental health awareness',
        'Advocate for policy changes that prioritize mental wellbeing'
      ],
      gradient: 'from-blue-600 to-blue-800'
    },
    {
      type: 'vision',
      icon: Eye,
      title: 'Our Vision',
      subtitle: 'A World Where Mental Health Matters',
      description: 'We envision a society where seeking mental health support is viewed as a sign of strength, where every individual has access to quality mental healthcare, and where communities actively support mental wellbeing for all.',
      points: [
        'Universal access to mental health care',
        'Complete elimination of mental health stigma',
        'Communities that prioritize mental wellbeing',
        'A world where every person can thrive mentally and emotionally'
      ],
      gradient: 'from-green-600 to-green-800'
    },
    {
      type: 'values',
      icon: Heart,
      title: 'Our Values',
      subtitle: 'Principles That Guide Our Work',
      description: 'Our work is grounded in compassion, integrity, and respect for every individual\'s journey. We believe in the power of community, the importance of professional expertise, and the transformative potential of hope.',
      points: [
        'Compassion and empathy in all our interactions',
        'Respect for individual dignity and privacy',
        'Cultural sensitivity and inclusivity',
        'Evidence-based approaches to mental health support'
      ],
      gradient: 'from-pink-600 to-pink-800'
    }
  ];

  const supportAreas = [
    { icon: Users, title: 'Community Support', description: 'Building networks of care and understanding' },
    { icon: Lightbulb, title: 'Education & Awareness', description: 'Spreading knowledge and breaking myths' },
    { icon: Shield, title: 'Advocacy & Protection', description: 'Fighting for mental health rights and resources' }
  ];

  return (
    <section id="mission" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Purpose & Promise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Guided by compassion and driven by purpose, we're building a future where mental health is prioritized, 
            supported, and celebrated.
          </p>
        </div>

        {/* Interactive Mission/Vision/Values Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {cards.map((card, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 ${
                activeCard === index ? 'ring-2 ring-primary/50 shadow-2xl scale-105' : ''
              }`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              data-testid={`card-${card.type}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-5`} />
              
              <CardContent className="relative p-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${card.gradient} rounded-full flex items-center justify-center mb-6 transition-transform duration-300 ${
                  activeCard === index ? 'scale-110' : ''
                }`}>
                  <card.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {card.title}
                </h3>
                
                <h4 className="text-lg font-semibold text-muted-foreground mb-4">
                  {card.subtitle}
                </h4>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {card.description}
                </p>
                
                <div className={`transition-all duration-500 ${
                  activeCard === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <ul className="space-y-3">
                    {card.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <div className={`w-2 h-2 bg-gradient-to-r ${card.gradient} rounded-full mt-2 mr-3 flex-shrink-0`} />
                        <span className="text-sm text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Support Areas */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            How We Make a Difference
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportAreas.map((area, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
                data-testid={`support-area-${index}`}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-blue-200 group-hover:to-green-200 transition-all duration-300">
                  <area.icon className="w-10 h-10 text-blue-600 group-hover:text-blue-700 transition-colors" />
                </div>
                
                <h4 className="text-xl font-semibold text-foreground mb-3 group-hover:text-blue-600 transition-colors">
                  {area.title}
                </h4>
                
                <p className="text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}