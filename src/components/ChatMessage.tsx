import React from 'react';
import { Droplet } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  loading?: boolean;
}

export function ChatMessage({ message, isUser, loading }: ChatMessageProps) {
  return (
    <div className={`flex items-start gap-4 ${isUser ? 'flex-row-reverse' : ''}`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-yoakum-blue/10 flex items-center justify-center flex-shrink-0">
          <Droplet className="text-yoakum-blue" size={16} />
        </div>
      )}
      <div 
        className={`px-4 py-3 rounded-2xl text-base max-w-[80%] ${
          isUser 
            ? 'bg-yoakum-blue text-white ml-auto' 
            : 'bg-gray-100 text-gray-900'
        } ${loading ? 'animate-pulse' : ''}`}
      >
        {message}
      </div>
    </div>
  );
}