
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Home as HomeIcon, Clock, Star, Zap } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <HomeIcon className="h-12 w-12 text-blue-600" />
            <h1 className="text-4xl font-bold text-foreground">Welcome Home</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your central hub for time tracking and productivity tools
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="backdrop-blur-sm bg-white/80 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-6 text-center">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Stopwatch</h3>
              <p className="text-muted-foreground">Precise time tracking with lap functionality</p>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-white/80 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-6 text-center">
              <Star className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Features</h3>
              <p className="text-muted-foreground">Professional timing tools at your fingertips</p>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-white/80 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-6 text-center">
              <Zap className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Performance</h3>
              <p className="text-muted-foreground">Lightning fast and accurate measurements</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
