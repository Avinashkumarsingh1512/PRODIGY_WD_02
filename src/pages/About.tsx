
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Info, Clock, Code, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Info className="h-12 w-12 text-green-600" />
            <h1 className="text-4xl font-bold text-foreground">About</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn more about this precision timing application
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="backdrop-blur-sm bg-white/80 border-0 shadow-lg mb-8">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Clock className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4">TimeTracker Elite</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A professional-grade stopwatch application built with modern web technologies. 
                  Designed for precision, reliability, and ease of use, perfect for athletes, 
                  researchers, and anyone who needs accurate time measurement.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="text-center">
                  <Code className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Built With</h3>
                  <p className="text-sm text-muted-foreground">
                    React, TypeScript, Tailwind CSS, and modern web standards
                  </p>
                </div>

                <div className="text-center">
                  <Heart className="h-8 w-8 text-red-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Made With Care</h3>
                  <p className="text-sm text-muted-foreground">
                    Crafted with attention to detail and user experience
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="backdrop-blur-sm bg-white/80 border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Precision</h3>
                <p className="text-sm text-muted-foreground">
                  Accurate to 10 milliseconds for professional timing needs
                </p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-white/80 border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Responsive</h3>
                <p className="text-sm text-muted-foreground">
                  Works seamlessly across all devices and screen sizes
                </p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-white/80 border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Fast</h3>
                <p className="text-sm text-muted-foreground">
                  Optimized performance for instant response times
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
