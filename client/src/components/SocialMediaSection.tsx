import { Facebook, PlayCircle, Heart, MessageCircle, Share2, ExternalLink, Brain, Users, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

export default function SocialMediaSection() {
  const { toast } = useToast();
  
  // TODO: remove mock functionality - replace with real social media feeds
  const mockFacebookPosts = [
    {
      id: 1,
      content: "Mental health awareness week reminder: Your feelings are valid, your struggles are real, and seeking help is a sign of courage, not weakness. #MentalHealthMatters #BreakTheStigma",
      likes: 156,
      comments: 23,
      shares: 45,
      timestamp: "2 hours ago"
    },
    {
      id: 2, 
      content: "Grateful for our volunteers who showed up today to support our community workshop on stress management. Together, we're building a stronger, more understanding community.",
      likes: 89,
      comments: 12,
      shares: 28,
      timestamp: "1 day ago"
    }
  ];

  const mockTikTokVideos = [
    {
      id: 1,
      title: "5 Signs It's Time to Seek Mental Health Support",
      views: "12.3K",
      likes: "1.2K",
      thumbnail: <Brain className="w-8 h-8 text-blue-600" />
    },
    {
      id: 2,
      title: "Breathing Exercises for Anxiety Relief",
      views: "8.7K", 
      likes: "890",
      thumbnail: <Heart className="w-8 h-8 text-green-600" />
    },
    {
      id: 3,
      title: "Breaking Mental Health Myths",
      views: "15.1K",
      likes: "2.1K", 
      thumbnail: <Shield className="w-8 h-8 text-pink-600" />
    }
  ];

  const handleSocialClick = (platform: string, action: string) => {
    console.log(`${platform} ${action} clicked`);
    
    // Handle different actions with toast feedback
    switch (action) {
      case 'follow':
        toast({
          title: `Following ${platform}!`,
          description: "Thank you for joining our community.",
          variant: "default"
        });
        break;
      case 'like':
        toast({
          title: "Thank you for your support!",
          description: "Your engagement helps spread mental health awareness.",
          variant: "default"
        });
        break;
      case 'share':
        toast({
          title: "Thank you for sharing!",
          description: "You're helping us break mental health stigma.",
          variant: "default"
        });
        break;
      case 'comment':
        toast({
          title: "Join the conversation",
          description: "Visit our social media to share your thoughts.",
          variant: "default"
        });
        break;
      case 'watch':
        toast({
          title: "Opening video",
          description: "Watch on our TikTok for mental health tips.",
          variant: "default"
        });
        break;
      case 'visit':
        toast({
          title: `Opening ${platform}`,
          description: "Follow us for daily inspiration and support.",
          variant: "default"
        });
        break;
    }
    
    // TODO: Implement real social media integration
    // For now, just provide feedback to the user
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Join Our Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Follow us on social media for daily inspiration, mental health tips, and updates on our community initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Facebook Section */}
          <Card className="bg-white shadow-xl border-0 overflow-hidden">
            <CardContent className="p-0">
              {/* Facebook Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Facebook className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Joyful Healing Hub</h3>
                      <p className="text-blue-100 text-sm">@joyfulhealinghub</p>
                    </div>
                  </div>
                  <Button
                    onClick={() => handleSocialClick('Facebook', 'follow')}
                    variant="secondary"
                    size="sm"
                    className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                    data-testid="button-facebook-follow"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Follow
                  </Button>
                </div>
              </div>

              {/* Facebook Posts */}
              <div className="p-6 space-y-6">
                {mockFacebookPosts.map((post) => (
                  <div key={post.id} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
                    <p className="text-foreground mb-4 leading-relaxed">
                      {post.content}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{post.timestamp}</span>
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => handleSocialClick('Facebook', 'like')}
                          className="flex items-center space-x-1 hover:text-blue-600 transition-colors"
                          data-testid={`button-facebook-like-${post.id}`}
                        >
                          <Heart className="w-4 h-4" />
                          <span>{post.likes}</span>
                        </button>
                        <button
                          onClick={() => handleSocialClick('Facebook', 'comment')}
                          className="flex items-center space-x-1 hover:text-blue-600 transition-colors"
                          data-testid={`button-facebook-comment-${post.id}`}
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>{post.comments}</span>
                        </button>
                        <button
                          onClick={() => handleSocialClick('Facebook', 'share')}
                          className="flex items-center space-x-1 hover:text-blue-600 transition-colors"
                          data-testid={`button-facebook-share-${post.id}`}
                        >
                          <Share2 className="w-4 h-4" />
                          <span>{post.shares}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* TikTok Section */}
          <Card className="bg-black shadow-xl border-0 overflow-hidden">
            <CardContent className="p-0">
              {/* TikTok Header */}
              <div className="bg-gradient-to-r from-pink-600 to-pink-700 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <PlayCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">@joyfulhealinghub</h3>
                      <p className="text-pink-100 text-sm">Mental Health Advocacy</p>
                    </div>
                  </div>
                  <Button
                    onClick={() => handleSocialClick('TikTok', 'follow')}
                    variant="secondary"
                    size="sm"
                    className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                    data-testid="button-tiktok-follow"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Follow
                  </Button>
                </div>
              </div>

              {/* TikTok Videos */}
              <div className="p-6 space-y-4">
                {mockTikTokVideos.map((video, index) => (
                  <div
                    key={video.id}
                    className="bg-gray-900 rounded-2xl p-4 hover:bg-gray-800 transition-colors cursor-pointer group"
                    onClick={() => handleSocialClick('TikTok', 'watch')}
                    data-testid={`tiktok-video-${video.id}`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                        {video.thumbnail}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-medium mb-2 group-hover:text-pink-300 transition-colors">
                          {video.title}
                        </h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span className="flex items-center space-x-1">
                            <PlayCircle className="w-4 h-4" />
                            <span>{video.views}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Heart className="w-4 h-4" />
                            <span>{video.likes}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Social Media CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Be Part of the Movement
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Every like, share, and comment helps spread mental health awareness. Join thousands of others in our mission to break the stigma.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              onClick={() => handleSocialClick('Facebook', 'visit')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4"
              data-testid="button-visit-facebook"
            >
              <Facebook className="w-5 h-5 mr-2" />
              Visit Facebook Page
            </Button>
            <Button
              onClick={() => handleSocialClick('TikTok', 'visit')}
              className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4"
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