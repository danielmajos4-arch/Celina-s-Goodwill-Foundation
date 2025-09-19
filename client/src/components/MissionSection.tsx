import missionImage from '@assets/image_1758168726741.png';
import visionImage from '@assets/stock_images/diverse_community_so_70f4e47a.jpg';

export default function MissionSection() {
  return (
    <section id="mission" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Purpose & Promise
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Guided by compassion and driven by purpose, we're building a future where mental health is prioritized, 
            supported, and celebrated.
          </p>
        </div>

        {/* Mission and Vision Image Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Mission Statement Card */}
          <div 
            className="relative aspect-[4/3] sm:aspect-[16/9] rounded-3xl overflow-hidden group cursor-pointer hover-scale"
            data-testid="card-mission"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${missionImage})` }}
            />
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60" />
            
            {/* Content */}
            <div className="relative z-10 p-6 sm:p-8 md:p-10 h-full flex flex-col justify-end">
              <div className="transform transition-all duration-500 group-hover:translate-y-[-8px]">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  MISSION STATEMENT
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed font-medium">
                  To create global awareness/campaign on mental health management; Empowering individuals especially young minds for a healthier tomorrow.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Statement Card */}
          <div 
            className="relative aspect-[4/3] sm:aspect-[16/9] rounded-3xl overflow-hidden group cursor-pointer hover-scale"
            data-testid="card-vision"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${visionImage})` }}
            />
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60" />
            
            {/* Content */}
            <div className="relative z-10 p-6 sm:p-8 md:p-10 h-full flex flex-col justify-end">
              <div className="transform transition-all duration-500 group-hover:translate-y-[-8px]">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  VISION STATEMENT
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed font-medium">
                  To build a society where mental health is prioritized
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}