
import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Square, RotateCcw, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface LapTime {
  id: number;
  time: number;
  lapDuration: number;
}

const Index = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [lapTimes, setLapTimes] = useState<LapTime[]>([]);
  const [lapCounter, setLapCounter] = useState(1);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);
  const pausedTimeRef = useRef<number>(0);

  useEffect(() => {
    if (isRunning && !isPaused) {
      intervalRef.current = setInterval(() => {
        const now = Date.now();
        setTime(pausedTimeRef.current + (now - startTimeRef.current));
      }, 10);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, isPaused]);

  const formatTime = (milliseconds: number) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const ms = Math.floor((milliseconds % 1000) / 10);
    
    return {
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0'),
      milliseconds: ms.toString().padStart(2, '0')
    };
  };

  const handleStart = () => {
    if (!isRunning) {
      startTimeRef.current = Date.now();
      pausedTimeRef.current = time;
      setIsRunning(true);
      setIsPaused(false);
    } else if (isPaused) {
      startTimeRef.current = Date.now();
      setIsPaused(false);
    }
  };

  const handlePause = () => {
    if (isRunning && !isPaused) {
      pausedTimeRef.current = time;
      setIsPaused(true);
    }
  };

  const handleStop = () => {
    setIsRunning(false);
    setIsPaused(false);
    pausedTimeRef.current = time;
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
    setIsPaused(false);
    setLapTimes([]);
    setLapCounter(1);
    pausedTimeRef.current = 0;
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleLap = () => {
    if (isRunning && !isPaused) {
      const currentTime = time;
      const lastLapTime = lapTimes.length > 0 ? lapTimes[lapTimes.length - 1].time : 0;
      const lapDuration = currentTime - lastLapTime;
      
      setLapTimes(prev => [...prev, {
        id: lapCounter,
        time: currentTime,
        lapDuration: lapDuration
      }]);
      setLapCounter(prev => prev + 1);
    }
  };

  const timeDisplay = formatTime(time);
  const isActive = isRunning && !isPaused;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Clock className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-foreground">Stopwatch</h1>
          </div>
          <p className="text-muted-foreground">Precision timing at your fingertips</p>
        </div>

        {/* Main Timer Display */}
        <Card className="backdrop-blur-sm bg-white/80 border-0 shadow-xl">
          <CardContent className="p-8">
            <div className="text-center space-y-4">
              <div className={`font-mono text-6xl font-bold transition-all duration-300 ${
                isActive ? 'text-blue-600 scale-105' : 'text-foreground'
              }`}>
                {timeDisplay.minutes}:{timeDisplay.seconds}
              </div>
              <div className={`font-mono text-2xl transition-all duration-300 ${
                isActive ? 'text-blue-500' : 'text-muted-foreground'
              }`}>
                .{timeDisplay.milliseconds}
              </div>
              
              {/* Status Indicator */}
              <div className="flex items-center justify-center gap-2">
                <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  isActive ? 'bg-green-500 animate-pulse' : 
                  isPaused ? 'bg-yellow-500' : 'bg-gray-300'
                }`} />
                <span className="text-sm text-muted-foreground">
                  {isActive ? 'Running' : isPaused ? 'Paused' : 'Stopped'}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Control Buttons */}
        <div className="grid grid-cols-2 gap-3">
          {!isRunning || isPaused ? (
            <Button
              onClick={handleStart}
              className="h-14 text-lg font-semibold bg-green-600 hover:bg-green-700 transition-all duration-200 hover:scale-105"
            >
              <Play className="h-5 w-5 mr-2" />
              {!isRunning ? 'Start' : 'Resume'}
            </Button>
          ) : (
            <Button
              onClick={handlePause}
              variant="outline"
              className="h-14 text-lg font-semibold border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-50 transition-all duration-200 hover:scale-105"
            >
              <Pause className="h-5 w-5 mr-2" />
              Pause
            </Button>
          )}
          
          <Button
            onClick={handleReset}
            variant="outline"
            className="h-14 text-lg font-semibold border-2 border-red-500 text-red-600 hover:bg-red-50 transition-all duration-200 hover:scale-105"
          >
            <RotateCcw className="h-5 w-5 mr-2" />
            Reset
          </Button>
        </div>

        {/* Lap and Stop Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <Button
            onClick={handleLap}
            disabled={!isActive}
            variant="outline"
            className="h-12 font-semibold disabled:opacity-50 border-2 border-blue-500 text-blue-600 hover:bg-blue-50 transition-all duration-200 hover:scale-105 disabled:hover:scale-100"
          >
            Lap
          </Button>
          
          <Button
            onClick={handleStop}
            disabled={!isRunning}
            variant="outline"
            className="h-12 font-semibold disabled:opacity-50 border-2 border-gray-500 text-gray-600 hover:bg-gray-50 transition-all duration-200 hover:scale-105 disabled:hover:scale-100"
          >
            <Square className="h-4 w-4 mr-2" />
            Stop
          </Button>
        </div>

        {/* Lap Times */}
        {lapTimes.length > 0 && (
          <Card className="backdrop-blur-sm bg-white/80 border-0 shadow-lg">
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-3 text-center">Lap Times</h3>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {lapTimes.map((lap, index) => (
                  <div
                    key={lap.id}
                    className="flex justify-between items-center p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 animate-fade-in"
                  >
                    <span className="font-medium text-blue-800">
                      Lap {lap.id}
                    </span>
                    <div className="text-right">
                      <div className="font-mono text-sm font-bold text-foreground">
                        {formatTime(lap.lapDuration).minutes}:{formatTime(lap.lapDuration).seconds}.{formatTime(lap.lapDuration).milliseconds}
                      </div>
                      <div className="font-mono text-xs text-muted-foreground">
                        Total: {formatTime(lap.time).minutes}:{formatTime(lap.time).seconds}.{formatTime(lap.time).milliseconds}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Index;
