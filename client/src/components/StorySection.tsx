import { Quote } from 'lucide-react';

export default function StorySection() {
  return (
    <section id="story" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">IMPACT STORY</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-pink-600 mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              In loving memory of Celina Mbgogo Okwuokei, whose journey inspired our mission to break the silence around mental health.
            </p>
          </div>

          {/* Main Story Content */}
          <div className="bg-gradient-to-br from-blue-50 to-pink-50 rounded-3xl p-8 md:p-12 mb-12 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-200/30 to-transparent rounded-full" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-200/30 to-transparent rounded-full" />
            
            <div className="relative z-10">
              <div className="flex items-start mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                  <Quote className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    A Mother's Silent Struggle
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">At Celina’s Goodwill Foundation for Mental Health, our mission is simple yet personal: to break the silence around mental health, end stigma, and show that seeking help is courage, not weakness.

                  Named in honor of my late mother, Celina Mbgogo Okwuokei, whose absence shaped my life, the foundation was born from both loss and love. What began as grief has become a vision of healing and hope for others on similar paths.</p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Her story is not unique—it reflects the experiences of countless individuals who suffer in silence, unable to access the support they desperately need. It was her courage in vulnerability that inspired the creation of this foundation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Break the Silence</h4>
              <p className="text-muted-foreground">
                Create safe spaces where mental health conversations can happen without judgment or fear.
              </p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-2xl hover:bg-green-100 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Provide Support</h4>
              <p className="text-muted-foreground">
                Offer accessible mental health resources, counseling, and community support networks.
              </p>
            </div>

            <div className="text-center p-6 bg-pink-50 rounded-2xl hover:bg-pink-100 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-pink-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Advocate for Change</h4>
              <p className="text-muted-foreground">
                Work towards policy changes and societal shifts that prioritize mental health awareness.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Honor Her Memory Through Action
            </h3>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
              Every person we help, every conversation we start, and every barrier we break down is a tribute to Celina's legacy and all those who have walked this path in silence.
            </p>
            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 my-6"></div>
            <p className="text-lg text-gray-400 italic">
              "In memory of Celina Mbgogo Okwuokei - Your strength lives on in every life we touch."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}