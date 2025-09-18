import { Quote } from 'lucide-react';
import storyImage from '@assets/stock_images/african_woman_mother_04a31483.jpg';

export default function StorySection() {
  return (
    <section id="story" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">IMPACT STORY</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            In loving memory of Celina Mbgogo Okwuokei, whose journey inspired our mission to break the silence around mental health.
          </p>
        </div>

        {/* Split Screen Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          {/* Left Side - Image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src={storyImage}
                alt="African woman representing strength and resilience in mental health"
                className="w-full h-[500px] md:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-200/40 to-transparent rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-blue-200/40 to-transparent rounded-full blur-xl" />
          </div>

          {/* Right Side - Story Content */}
          <div className="space-y-6">
            {/* Quote Icon */}
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-pink-600 rounded-full flex items-center justify-center mb-8">
              <Quote className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              A Mother's Silent Struggle
            </h3>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                At Celina's Goodwill Foundation for Mental Health, our mission is simple yet personal: to break the silence around mental health, end stigma, and show that seeking help is courage, not weakness.
              </p>
              
              <p>
                Named in honor of my late mother, <strong className="text-foreground">Celina Mbgogo Okwuokei</strong>, whose absence shaped my life, the foundation was born from both loss and love. What began as grief has become a vision of healing and hope for others on similar paths.
              </p>
              
              <p>
                We understand how untreated struggles can weigh heavily, often in silence. That's why we educate, support, and empower young people and communities to prioritize mental well-being.
              </p>
              
              <p>
                Through advocacy and open conversations, we create safe spaces where every voice matters and every step toward healing is celebrated. At Celina's Goodwill Foundation, we believe no one should suffer in silence. Together, we can turn pain into purpose, stigma into understanding, and silence into hope.
              </p>
            </div>

            {/* Accent line */}
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-pink-600 mt-8"></div>
          </div>
        </div>

        {/* Mission Statement Cards */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-colors hover-elevate">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Break the Silence</h4>
              <p className="text-muted-foreground">
                Create safe spaces where mental health conversations can happen without judgment or fear.
              </p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-2xl hover:bg-green-100 transition-colors hover-elevate">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Provide Support</h4>
              <p className="text-muted-foreground">
                Offer accessible mental health resources, counseling, and community support networks.
              </p>
            </div>

            <div className="text-center p-6 bg-pink-50 rounded-2xl hover:bg-pink-100 transition-colors hover-elevate">
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