import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // TODO: remove mock functionality - replace with real testimonials
  const testimonials = [
    {
      id: 1,
      name: "Dr. Adaora Okafor",
      role: "Licensed Clinical Psychologist",
      organization: "University of Lagos Teaching Hospital",
      content: "Celina's Goodwill Foundation is doing transformative work in mental health advocacy. Their approach to breaking stigma through community engagement and education is exactly what Nigeria needs. I'm proud to support their mission.",
      rating: 5,
      image: "A.O."
    },
    {
      id: 2,
      name: "Sarah Okoro",
      role: "Program Beneficiary",
      organization: "Community Support Group Member",
      content: "Before joining their support group, I felt so alone in my struggles with anxiety. The foundation created a safe space where I could share my story without judgment. They literally saved my life and gave me hope again.",
      rating: 5,
      image: "S.O."
    },
    {
      id: 3,
      name: "Chief Emmanuel Nwosu",
      role: "Community Leader",
      organization: "Enugu Traditional Council",
      content: "Mental health was a taboo topic in our community until this foundation came. They've educated our people with sensitivity to our cultural values while promoting mental wellness. Their work is truly commendable.",
      rating: 5,
      image: "E.N."
    },
    {
      id: 4,
      name: "Dr. Kemi Adelstein",
      role: "Psychiatrist & Mental Health Advocate",
      organization: "Lagos State Mental Health Initiative",
      content: "The foundation's holistic approach to mental health - combining professional support with community advocacy - is revolutionary. They're not just treating symptoms; they're changing mindsets and saving lives.",
      rating: 5,
      image: "K.A."
    },
    {
      id: 5,
      name: "Michael Eze",
      role: "Volunteer Coordinator",
      organization: "Corporate Partnership Program",
      content: "What impressed me most is their transparency and genuine care for every individual they serve. Volunteering with them has been one of the most rewarding experiences of my life. They're changing our society for the better.",
      rating: 5,
      image: "M.E."
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Voices of Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hear from the professionals, community members, and individuals whose lives have been touched by our mental health advocacy work.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative mb-12">
          <Card className="bg-white shadow-2xl border-0 max-w-4xl mx-auto overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                <div className="absolute top-6 left-6 w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                  <Quote className="w-8 h-8 text-white" />
                </div>
                
                <div className="pt-24 pb-12 px-8 md:px-12">
                  <div className="text-center mb-8">
                    {/* Rating Stars */}
                    <div className="flex justify-center space-x-1 mb-6">
                      {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    {/* Testimonial Content */}
                    <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 italic">
                      "{testimonials[currentIndex].content}"
                    </blockquote>
                  </div>

                  {/* Testimonial Author */}
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonials[currentIndex].image}
                    </div>
                    <div className="text-left">
                      <h4 className="text-xl font-bold text-foreground">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-muted-foreground font-medium">
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].organization}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 md:-left-6">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full bg-white shadow-lg border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50"
              data-testid="button-testimonial-prev"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 right-4 md:-right-6">
            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full bg-white shadow-lg border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50"
              data-testid="button-testimonial-next"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-blue-600 to-green-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              data-testid={`testimonial-indicator-${index}`}
            />
          ))}
        </div>

        {/* Testimonial Grid Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`bg-white border-0 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer ${
                index === currentIndex ? 'ring-2 ring-blue-300' : ''
              }`}
              onClick={() => goToTestimonial(index)}
              data-testid={`testimonial-preview-${index}`}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.image}
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </h5>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  "{testimonial.content}"
                </p>
                
                <div className="flex justify-center mt-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}