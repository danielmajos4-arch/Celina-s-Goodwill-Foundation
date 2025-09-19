import { ShareButton } from '@/components/InteractiveElements';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Share Section */}
        <div className="text-center">
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