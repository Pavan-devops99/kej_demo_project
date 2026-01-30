import { LucideIcon } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  color: 'cyan' | 'blue' | 'green' | 'red' | 'orange' | 'purple';
}

const colorClasses = {
  cyan: {
    bg: 'from-neon-cyan/20 to-dark-800',
    border: 'border-neon-cyan/30',
    icon: 'text-neon-cyan',
    shadow: 'shadow-neon-cyan',
  },
  blue: {
    bg: 'from-neon-blue/20 to-dark-800',
    border: 'border-neon-blue/30',
    icon: 'text-neon-blue',
    shadow: 'shadow-neon-blue',
  },
  green: {
    bg: 'from-neon-green/20 to-dark-800',
    border: 'border-neon-green/30',
    icon: 'text-neon-green',
    shadow: 'shadow-neon-green',
  },
  red: {
    bg: 'from-neon-red/20 to-dark-800',
    border: 'border-neon-red/30',
    icon: 'text-neon-red',
    shadow: 'shadow-neon-red',
  },
  orange: {
    bg: 'from-neon-orange/20 to-dark-800',
    border: 'border-neon-orange/30',
    icon: 'text-neon-orange',
    shadow: 'shadow-[0_0_10px_#ff8800]',
  },
  purple: {
    bg: 'from-neon-purple/20 to-dark-800',
    border: 'border-neon-purple/30',
    icon: 'text-neon-purple',
    shadow: 'shadow-neon-purple',
  },
};

export default function KPICard({ title, value, icon: Icon, trend, trendValue, color }: KPICardProps) {
  const colors = colorClasses[color];

  return (
    <div className={`bg-gradient-to-br ${colors.bg} border ${colors.border} rounded-lg p-6 hover:${colors.shadow} transition-all`}>
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg bg-dark-700 border ${colors.border}`}>
          <Icon className={`w-6 h-6 ${colors.icon}`} />
        </div>
        {trend && trendValue && (
          <div className={`text-sm font-medium ${
            trend === 'up' ? 'text-neon-green' : trend === 'down' ? 'text-neon-red' : 'text-gray-400'
          }`}>
            {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→'} {trendValue}
          </div>
        )}
      </div>
      <h3 className="text-gray-400 text-sm font-medium mb-1">{title}</h3>
      <p className="text-white text-3xl font-bold">{value}</p>
    </div>
  );
}
