import { useEffect, useState } from 'react';
import { Users, Heart, MessageCircle, Zap } from 'lucide-react';

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function Counter({ end, suffix = '', duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

export default function StatisticsSection() {
  const stats = [
    {
      icon: Users,
      value: 15000,
      suffix: '+',
      label: 'Lives Touched',
      description: 'Individuals reached through our mental health programs and initiatives',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Heart,
      value: 850,
      suffix: '+',
      label: 'Support Sessions',
      description: 'One-on-one counseling and group therapy sessions provided',
      color: 'from-green-600 to-green-700'
    },
    {
      icon: MessageCircle,
      value: 12,
      suffix: '',
      label: 'Communities',
      description: 'Local communities where we have established support networks',
      color: 'from-pink-600 to-pink-700'
    },
    {
      icon: Zap,
      value: 95,
      suffix: '%',
      label: 'Success Rate',
      description: 'Participants who report improved mental wellbeing',
      color: 'from-purple-600 to-purple-700'
    }
  ];

  return (
    <section id="statistics" className="py-20 bg-gradient-to-r from-gray-50 to-blue-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Every number represents a life transformed, a story of hope, and a step towards a mentally healthier community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 group"
              data-testid={`stat-card-${index}`}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2" data-testid={`stat-value-${index}`}>
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                {stat.label}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-base sm:text-lg text-muted-foreground mb-6">
            These achievements are just the beginning of our journey to break mental health stigma.
          </p>
          <div className="flex justify-center">
            <div className="bg-white rounded-full px-6 py-3 shadow-md">
              <span className="text-sm font-medium text-muted-foreground">
                Updated: September 2024
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}