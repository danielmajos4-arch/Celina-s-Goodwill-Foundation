import { Facebook, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export default function SocialMediaSection() {
  const { toast } = useToast();

  const handleSocialClick = (platform: string, action: string) => {
    console.log(`${platform} ${action} clicked`);
    
    toast({
      title: `Opening ${platform}`,
      description: "Follow us for daily inspiration and support.",
      variant: "default"
    });
    
    // TODO: Implement real social media integration
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Social Media CTA */}
        <div className="text-center bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Be Part of the Movement
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Every like, share, and comment helps spread mental health awareness. Join thousands of others in our mission to break the stigma.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              onClick={() => handleSocialClick('Facebook', 'visit')}
              className="bg-blue-600 text-white px-8 py-4"
              data-testid="button-visit-facebook"
            >
              <Facebook className="w-5 h-5 mr-2" />
              Visit Facebook Page
            </Button>
            <Button
              onClick={() => handleSocialClick('TikTok', 'visit')}
              className="bg-pink-600 text-white px-8 py-4"
              data-testid="button-visit-tiktok"
            >
              <PlayCircle className="w-5 h-5 mr-2" />
              Follow on TikTok
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}