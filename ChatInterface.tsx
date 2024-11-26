import React, { useState, useRef, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { ChatMessage } from './ChatMessage';

interface Message {
  text: string;
  isUser: boolean;
  loading?: boolean;
}

const chatConfig = {
  chatflowid: "f68a51a5-0efa-4082-88f2-d24652ad530b",
  apiHost: "https://flowise-production-9c63.up.railway.app"
};

async function sendMessage(message: string) {
  try {
    const response = await fetch(`${chatConfig.apiHost}/api/v1/prediction/${chatConfig.chatflowid}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        question: message,
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.text || data.answer || 'I apologize, but I encountered an error processing your request.';
  } catch (error) {
    console.error('Error:', error);
    return 'I apologize, but I encountered an error processing your request.';
  }
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Welcome to Yoakum Well Drilling & Pump Co! How can I assist you today with your well drilling or pump service needs?", isUser: false }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setIsLoading(true);

    setMessages(prev => [...prev, { text: userMessage, isUser: true }]);

    try {
      setMessages(prev => [...prev, { text: '...', isUser: false, loading: true }]);
      
      const response = await sendMessage(userMessage);
      
      setMessages(prev => [
        ...prev.slice(0, -1),
        { text: response, isUser: false }
      ]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [
        ...prev.slice(0, -1),
        { text: 'I apologize, but I encountered an error processing your request.', isUser: false }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl bg-transparent">
      <div className="h-[400px] flex flex-col">
        <div 
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto flex flex-col space-y-6 mb-6 scroll-smooth"
        >
          <div className="flex-1" />
          {messages.map((msg, idx) => (
            <ChatMessage 
              key={idx} 
              message={msg.text} 
              isUser={msg.isUser} 
              loading={msg.loading}
            />
          ))}
        </div>
        
        <div className="relative">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about our services..."
              disabled={isLoading}
              className="w-full px-6 py-4 pr-16 rounded-full focus:outline-none focus:ring-2 focus:ring-yoakum-blue/50 text-lg bg-gray-100 border border-gray-200 text-gray-900 placeholder-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-yoakum-blue text-white rounded-full flex items-center justify-center hover:bg-yoakum-blue/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowUp size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}