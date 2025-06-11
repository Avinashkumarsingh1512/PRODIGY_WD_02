
import React, { useState, useEffect } from 'react';
import { Clock, Home, Settings, Info } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Stopwatch', icon: Clock },
    { path: '/home', label: 'Home', icon: Home },
    { path: '/settings', label: 'Settings', icon: Settings },
    { path: '/about', label: 'About', icon: Info },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Clock className={`h-8 w-8 transition-colors duration-300 ${
              isScrolled ? 'text-blue-600' : 'text-white'
            }`} />
            <span className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}>
              TimeTracker
            </span>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    relative flex items-center space-x-2 px-4 py-2 rounded-lg
                    transition-all duration-300 ease-in-out
                    group hover:scale-105
                    ${isActive 
                      ? (isScrolled 
                          ? 'bg-blue-100 text-blue-600' 
                          : 'bg-white/20 text-white'
                        )
                      : (isScrolled 
                          ? 'text-muted-foreground hover:text-foreground hover:bg-accent' 
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                        )
                    }
                  `}
                >
                  <Icon className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="font-medium">{item.label}</span>
                  
                  {/* Animated underline */}
                  <div className={`
                    absolute bottom-0 left-0 h-0.5 bg-current
                    transition-all duration-300 ease-out
                    ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
                  `} />
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
            isScrolled ? 'text-foreground hover:bg-accent' : 'text-white hover:bg-white/10'
          }`}>
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="h-0.5 bg-current transition-all duration-300"></div>
              <div className="h-0.5 bg-current transition-all duration-300"></div>
              <div className="h-0.5 bg-current transition-all duration-300"></div>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
