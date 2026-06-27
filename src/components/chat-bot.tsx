'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { findBestMatch, greetingSuggestions } from '@/data/faq';

interface Message {
  role: 'user' | 'bot';
  text: string;
  isTyping?: boolean;
}

function getGreeting(): Message[] {
  return [
    { role: 'bot', text: "Hey! 👋 I'm Jerrison's portfolio assistant — part FAQ machine, part hype person. Ask me anything about his career, skills, projects, or how to hire him!" },
    { role: 'bot', text: 'Try asking:\n• Tell me about yourself\n• What is the JARVIS Dashboard?\n• How do you use AI?\n• Are you open to freelance?' },
  ];
}

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(getGreeting);
  const [input, setInput] = useState('');
  const [isBotTyping, setIsBotTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (open) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [open, scrollToBottom]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const simulateTyping = async (fullText: string, msgIndex: number) => {
    setIsBotTyping(true);
    setMessages(prev => {
      const updated = [...prev];
      updated[msgIndex] = { ...updated[msgIndex], isTyping: true, text: '' };
      return updated;
    });

    const chars = fullText.split('');
    let currentText = '';

    for (let i = 0; i < chars.length; i++) {
      // Speed varies: faster for long messages, slower for short ones
      const delay = chars.length > 200 ? 8 + Math.random() * 12 : 15 + Math.random() * 25;
      await new Promise(r => setTimeout(r, delay));
      currentText += chars[i];
      setMessages(prev => {
        const updated = [...prev];
        updated[msgIndex] = { ...updated[msgIndex], text: currentText, isTyping: true };
        return updated;
      });
    }

    setMessages(prev => {
      const updated = [...prev];
      updated[msgIndex] = { role: 'bot', text: fullText, isTyping: false };
      return updated;
    });
    setIsBotTyping(false);
  };

  const handleSend = useCallback(async (text?: string) => {
    const messageText = (text || input).trim();
    if (!messageText || isBotTyping) return;

    const userMsg: Message = { role: 'user', text: messageText };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    const match = findBestMatch(messageText);

    const botResponse = match
      ? match.a
      : `Hmm, I don't have a specific answer for that yet — but I'm learning! 🧠\n\nTry asking about:\n• Jerrison's career & experience\n• VBA automation & JARVIS Dashboard\n• His tech stack & AI tools\n• Side projects & portfolio\n• Freelance & hiring\n\nOr email him directly: jerrisonchai@gmail.com\n\n(And don't worry — your question has been logged. Jerrison might add it to the FAQ!)`;

    const botIdx = messages.length + 1;
    setMessages(prev => [...prev, { role: 'bot', text: '', isTyping: false }]);

    await new Promise(r => setTimeout(r, 300 + Math.random() * 400));
    await simulateTyping(botResponse, botIdx);
  }, [input, isBotTyping, messages.length]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const resetChat = () => {
    setMessages(getGreeting());
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-24 md:bottom-6 right-4 z-50 w-14 h-14 rounded-full bg-accent hover:bg-[#2563EB] text-white shadow-lg shadow-accent/30 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-40 md:bottom-24 right-4 z-50 w-[calc(100vw-2rem)] max-w-sm transition-all duration-300 origin-bottom-right ${
          open
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-95 translate-y-2 pointer-events-none'
        }`}
      >
        <div className="card overflow-hidden flex flex-col" style={{ height: 'min(520px, calc(100vh - 220px))' }}>
          {/* Header */}
          <div className="px-4 py-3 border-b border-[#262626] flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-sm">
                🤖
              </div>
              <div>
                <h3 className="text-white text-sm font-semibold leading-tight">Portfolio Assistant</h3>
                <p className="text-[10px] text-zinc-500 font-mono">Powered by 37 trained FAQs</p>
              </div>
            </div>
            <button
              onClick={resetChat}
              className="text-zinc-600 hover:text-zinc-400 p-1.5 rounded-md hover:bg-[#1A1A1A] transition-colors"
              title="Reset chat"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="1 4 1 10 7 10" />
                <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div ref={chatContainerRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3" style={{ scrollBehavior: 'smooth' }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] px-3.5 py-2.5 rounded-xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-accent text-white rounded-br-md'
                      : 'bg-[#1A1A1A] border border-[#262626] text-zinc-300 rounded-bl-md'
                  }`}
                >
                  {msg.isTyping ? (
                    <span>
                      {msg.text}
                      <span className="inline-block w-1.5 h-4 bg-accent ml-0.5 animate-pulse align-middle" />
                    </span>
                  ) : (
                    <span className="whitespace-pre-wrap">{msg.text}</span>
                  )}
                </div>
              </div>
            ))}

            {messages.length <= 2 && !isBotTyping && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {greetingSuggestions.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(s)}
                    className="text-[11px] px-2.5 py-1.5 rounded-full border border-[#262626] text-zinc-400 hover:text-white hover:text-accent hover:border-accent hover:bg-accent/10 transition-colors text-left"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="px-4 py-3 border-t border-[#262626] shrink-0">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about my portfolio…"
                disabled={isBotTyping}
                className="flex-1 bg-[#121212] border border-[#262626] rounded-lg px-3 py-2 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-accent transition-colors disabled:opacity-50"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim() || isBotTyping}
                className="w-10 h-10 rounded-lg bg-accent hover:bg-[#2563EB] text-white disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center shrink-0 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
