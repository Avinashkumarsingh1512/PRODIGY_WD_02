
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Settings as SettingsIcon, Palette, Volume2, Bell } from 'lucide-react';

const Settings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <SettingsIcon className="h-12 w-12 text-purple-600" />
            <h1 className="text-4xl font-bold text-foreground">Settings</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Customize your experience
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          <Card className="backdrop-blur-sm bg-white/80 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-purple-600" />
                Appearance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Theme</span>
                <Button variant="outline">Light</Button>
              </div>
              <div className="flex items-center justify-between">
                <span>Color Scheme</span>
                <Button variant="outline">Blue</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-white/80 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Volume2 className="h-5 w-5 text-purple-600" />
                Sound
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Button Sounds</span>
                <Button variant="outline">Enabled</Button>
              </div>
              <div className="flex items-center justify-between">
                <span>Lap Sound</span>
                <Button variant="outline">Enabled</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-white/80 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-purple-600" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Desktop Notifications</span>
                <Button variant="outline">Enabled</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
