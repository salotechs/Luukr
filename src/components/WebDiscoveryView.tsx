import React, { useState } from 'react';
import { DiscoveryItem, Category, ChatMessage } from '../types';
import { mockDiscoveryItems } from '../data/discoveryData';
import { 
  X, Heart, RotateCcw, MessageCircle, MapPin, Send, 
  CheckCircle2, ShieldCheck, SlidersHorizontal, Home, Briefcase, 
  Car, Zap, ChevronLeft, ChevronRight, ArrowUp, Layers, 
  Sparkles, Compass, User, Calendar, Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

interface WebDiscoveryViewProps {
  initialCategory?: string;
  onClose: () => void;
}

export const WebDiscoveryView: React.FC<WebDiscoveryViewProps> = ({
  initialCategory = 'all',
  onClose,
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'discover' | 'explore' | 'saved' | 'chats' | 'profile'>('discover');
  const [showChatDrawer, setShowChatDrawer] = useState<boolean>(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      sender: 'other',
      text: 'Hey there! Thanks for viewing my listing on Luukr. Would you like to book a private viewing or ask any questions?',
      timestamp: '10:42 AM',
    },
  ]);
  const [newMessage, setNewMessage] = useState<string>('');
  const [likedItems, setLikedItems] = useState<string[]>([]);
  const [bookedViewings, setBookedViewings] = useState<string[]>([]);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);

  const filteredItems = selectedCategory === 'all'
    ? mockDiscoveryItems
    : mockDiscoveryItems.filter((i) => i.category === selectedCategory);

  const currentItem = filteredItems.length > 0 
    ? filteredItems[currentIndex % filteredItems.length]
    : null;

  const handleSwipe = (direction: 'left' | 'right') => {
    setSwipeDirection(direction);
    if (direction === 'right' && currentItem) {
      setLikedItems((prev) => Array.from(new Set([...prev, currentItem.id])));
    }

    setTimeout(() => {
      setSwipeDirection(null);
      setCurrentIndex((prev) => prev + 1);
    }, 220);
  };

  const handleBookViewing = () => {
    if (!currentItem) return;
    if (!bookedViewings.includes(currentItem.id)) {
      setBookedViewings((prev) => [...prev, currentItem.id]);
      setShowChatDrawer(true);
      setChatMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          sender: 'user',
          text: `Hi ${currentItem.owner.name}! I would like to book a viewing for "${currentItem.title}".`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setChatMessages((prev) => [...prev, userMsg]);
    setNewMessage('');

    setTimeout(() => {
      const replyMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'other',
        text: `Awesome! I've reserved a slot for you. Let's arrange the location and timing details.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setChatMessages((prev) => [...prev, replyMsg]);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-hidden">
      <div className={`rounded-3xl w-full max-w-md md:max-w-xl lg:max-w-3xl h-[94vh] max-h-[860px] flex flex-col overflow-hidden shadow-2xl relative border transition-colors duration-200 ${
        isDark ? 'bg-[#0B0F19] border-slate-800/80 text-white' : 'bg-[#F8FAFC] border-slate-200 text-slate-900'
      }`}>
        
        {/* Top Header Bar with Filter & Category Pills */}
        <div className={`px-4 pt-3 pb-2 border-b flex items-center gap-2 overflow-x-auto scrollbar-none z-20 shrink-0 ${
          isDark ? 'bg-[#0B0F19]/90 border-slate-800/80' : 'bg-white border-slate-200/80'
        }`}>
          {/* Sliders filter icon */}
          <button 
            type="button" 
            className={`p-2 rounded-full border shrink-0 transition-colors cursor-pointer ${
              isDark ? 'bg-slate-800/80 border-slate-700/80 text-slate-300 hover:text-white' : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
            }`}
            title="Filter Preferences"
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>

          {/* Category Pill Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1 mask-fade-wide">
            <button
              onClick={() => { setSelectedCategory('homes'); setCurrentIndex(0); }}
              className={`px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 border transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === 'homes' || selectedCategory === 'all'
                  ? 'bg-[#182032] border-slate-700 text-white shadow-xs'
                  : 'bg-slate-900/80 border-slate-800/80 text-slate-300 hover:text-white'
              }`}
            >
              <Home className="w-3.5 h-3.5 text-sky-400" />
              <span>Homes</span>
            </button>

            <button
              onClick={() => { setSelectedCategory('jobs'); setCurrentIndex(0); }}
              className={`px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 border transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === 'jobs'
                  ? 'bg-[#182032] border-slate-700 text-white shadow-xs'
                  : 'bg-slate-900/80 border-slate-800/80 text-slate-300 hover:text-white'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
              <span>Jobs</span>
            </button>

            <button
              onClick={() => { setSelectedCategory('cars'); setCurrentIndex(0); }}
              className={`px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 border transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === 'cars'
                  ? 'bg-[#182032] border-slate-700 text-white shadow-xs'
                  : 'bg-slate-900/80 border-slate-800/80 text-slate-300 hover:text-white'
              }`}
            >
              <Car className="w-3.5 h-3.5 text-emerald-400" />
              <span>Cars</span>
            </button>

            <button
              onClick={() => { setSelectedCategory('gadgets'); setCurrentIndex(0); }}
              className={`px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 border transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === 'gadgets'
                  ? 'bg-[#182032] border-slate-700 text-white shadow-xs'
                  : 'bg-slate-900/80 border-slate-800/80 text-slate-300 hover:text-white'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Gadgets</span>
            </button>
          </div>

          <div className="ml-auto flex items-center gap-2">
            <button 
              onClick={() => setSelectedCategory('all')} 
              className="p-2 rounded-full text-amber-400 hover:bg-amber-400/10 cursor-pointer"
              title="Hot Listings"
            >
              <Zap className="w-4 h-4 fill-current" />
            </button>
            <button
              onClick={onClose}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer crisp-btn ${
                isDark ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
            >
              <X className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Main Swipeable Screen View */}
        <div className="flex-1 relative overflow-hidden flex flex-col justify-between p-3 sm:p-5">
          {currentItem ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentItem.id + currentIndex}
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  x: swipeDirection === 'right' ? 220 : swipeDirection === 'left' ? -220 : 0,
                  rotate: swipeDirection === 'right' ? 10 : swipeDirection === 'left' ? -10 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="w-full flex-1 rounded-3xl overflow-hidden relative shadow-2xl flex flex-col justify-end bg-slate-950 border border-slate-800/80"
              >
                {/* Background Image */}
                <img
                  src={currentItem.image}
                  alt={currentItem.title}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />

                {/* Side Carousel Navigation Arrows */}
                <button
                  onClick={() => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1))}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer border border-white/20"
                >
                  <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
                </button>

                <button
                  onClick={() => setCurrentIndex((prev) => (prev + 1) % filteredItems.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer border border-white/20"
                >
                  <ChevronRight className="w-6 h-6 stroke-[2.5]" />
                </button>

                {/* Card Content Overlay */}
                <div className="relative z-10 p-4 sm:p-6 text-left space-y-3.5">
                  {/* Top Owner Info Pill & Book Viewing CTA Button (Matching Screenshot) */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    {/* Owner Pill */}
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 backdrop-blur-md text-white shadow-md">
                      <img
                        src={currentItem.owner.avatar}
                        alt={currentItem.owner.name}
                        className="w-6 h-6 rounded-full object-cover ring-2 ring-pink-500"
                      />
                      <span className="text-xs font-bold tracking-tight">{currentItem.owner.name}</span>
                      {currentItem.owner.verified && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 fill-sky-400/20" />
                      )}
                    </div>

                    {/* Book Viewing CTA Button */}
                    <button
                      onClick={handleBookViewing}
                      className="px-5 py-2 rounded-full pink-gradient-glow text-white text-xs font-extrabold flex items-center gap-1.5 transition-all cursor-pointer active:scale-95 shadow-lg shadow-pink-500/40"
                    >
                      {bookedViewings.includes(currentItem.id) ? (
                        <>
                          <Check className="w-4 h-4 stroke-[3]" />
                          <span>Viewing Requested</span>
                        </>
                      ) : (
                        <>
                          <Calendar className="w-4 h-4" />
                          <span>Book Viewing</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Title & Up Arrow Circle Button */}
                  <div className="flex items-start justify-between gap-3 pt-1">
                    <div className="space-y-1">
                      <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                        {currentItem.title}
                      </h2>
                      {/* Subtitle / Location in vibrant hot pink */}
                      <p className="text-xs sm:text-sm font-bold text-[#FF31AC] flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span>{currentItem.subtitle}</span>
                      </p>
                    </div>

                    <button
                      onClick={() => setShowChatDrawer(true)}
                      className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 text-white flex items-center justify-center backdrop-blur-md hover:bg-slate-700 cursor-pointer shrink-0"
                      title="Expand details"
                    >
                      <ArrowUp className="w-5 h-5 stroke-[2.5]" />
                    </button>
                  </div>

                  {/* Spec Capsules (Capacity, Condition, Warranty - Matching Screenshot) */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {currentItem.specs ? (
                      currentItem.specs.map((spec) => (
                        <div
                          key={spec.label}
                          className="px-3.5 py-1.5 rounded-xl bg-[#13192B]/90 border border-slate-700/80 backdrop-blur-md text-slate-100 text-xs font-bold shadow-xs"
                        >
                          <span className="text-slate-400 font-semibold">{spec.label}: </span>
                          <span className="text-white">{spec.value}</span>
                        </div>
                      ))
                    ) : (
                      currentItem.tags.map((tag) => (
                        <div
                          key={tag}
                          className="px-3 py-1 rounded-xl bg-[#13192B]/90 border border-slate-700/80 text-white text-xs font-bold"
                        >
                          #{tag}
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          ) : (
            <div className={`w-full flex-1 rounded-3xl overflow-hidden relative shadow-xl flex flex-col items-center justify-center p-8 text-center border ${
              isDark ? 'bg-slate-900/60 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700'
            }`}>
              <Compass className="w-12 h-12 text-pink-500 mb-3 animate-pulse" />
              <h3 className="text-xl font-bold mb-1">No items in discovery</h3>
              <p className="text-xs text-slate-400 max-w-xs">There are currently no discovery items to show. Check back soon for new listings!</p>
            </div>
          )}

          {/* Action Button Controls Bar (Undo, X, Stack, Heart, Send - Matching Screenshot) */}
          <div className="flex items-center justify-center gap-3 sm:gap-5 py-3 shrink-0">
            {/* Rewind / Undo Button */}
            <button
              onClick={() => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0))}
              className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all cursor-pointer crisp-btn active:scale-90 ${
                isDark 
                  ? 'bg-[#13192B] border border-slate-800 text-slate-300 hover:text-white shadow-lg' 
                  : 'bg-white border border-slate-200 shadow-md text-slate-700 hover:bg-slate-50'
              }`}
              title="Undo"
            >
              <RotateCcw className="w-5 h-5 stroke-[2.2]" />
            </button>

            {/* Pass (X) Button */}
            <button
              onClick={() => handleSwipe('left')}
              className={`w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all cursor-pointer crisp-btn active:scale-90 ${
                isDark
                  ? 'bg-[#13192B] border border-slate-800 text-rose-400 hover:bg-rose-500/10 shadow-lg'
                  : 'bg-white border border-slate-200 text-rose-500 hover:bg-rose-50 shadow-md'
              }`}
              title="Pass"
            >
              <X className="w-7 h-7 stroke-[2.8]" />
            </button>

            {/* Stacks / Layers Button */}
            <button
              onClick={() => setCurrentIndex((prev) => prev + 1)}
              className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all cursor-pointer crisp-btn active:scale-90 ${
                isDark 
                  ? 'bg-[#13192B] border border-slate-800 text-slate-300 hover:text-white shadow-lg' 
                  : 'bg-white border border-slate-200 shadow-md text-slate-700 hover:bg-slate-50'
              }`}
              title="Next Item"
            >
              <Layers className="w-5 h-5 stroke-[2.2]" />
            </button>

            {/* Heart / Like Button (Glowing Vibrant Pink - Matching Screenshot) */}
            <button
              onClick={() => handleSwipe('right')}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full pink-gradient-glow text-white flex items-center justify-center transition-all cursor-pointer crisp-btn active:scale-90 scale-105 shadow-xl shadow-pink-500/40"
              title="Like / Match"
            >
              <Heart className="w-8 h-8 fill-current text-white" />
            </button>

            {/* Send Message Button */}
            <button
              onClick={() => {
                handleSwipe('right');
                setShowChatDrawer(true);
              }}
              className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all cursor-pointer crisp-btn active:scale-90 ${
                isDark 
                  ? 'bg-[#13192B] border border-slate-800 text-pink-500 hover:bg-pink-500/10 shadow-lg' 
                  : 'bg-white border border-slate-200 shadow-md text-pink-500 hover:bg-pink-50'
              }`}
              title="Direct Message"
            >
              <Send className="w-5 h-5 stroke-[2.2]" />
            </button>
          </div>
        </div>

        {/* Bottom Navigation Tab Bar (Discover, Explore, Saved, Chats, Profile) */}
        <div className={`px-4 py-2 border-t flex items-center justify-around z-20 shrink-0 ${
          isDark ? 'bg-[#080C16] border-slate-800/80' : 'bg-white border-slate-200/80'
        }`}>
          {/* Discover Tab */}
          <button
            onClick={() => setActiveTab('discover')}
            className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${
              activeTab === 'discover' ? 'text-pink-500 font-extrabold' : isDark ? 'text-slate-400 hover:text-slate-200' : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-5 h-5" />
            <span className="text-[10px]">Discover</span>
          </button>

          {/* Explore Tab */}
          <button
            onClick={() => setActiveTab('explore')}
            className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${
              activeTab === 'explore' ? 'text-pink-500 font-extrabold' : isDark ? 'text-slate-400 hover:text-slate-200' : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <Compass className="w-5 h-5" />
            <span className="text-[10px]">Explore</span>
          </button>

          {/* Saved Tab with Badge */}
          <button
            onClick={() => setActiveTab('saved')}
            className={`flex flex-col items-center gap-1 relative cursor-pointer transition-colors ${
              activeTab === 'saved' ? 'text-pink-500 font-extrabold' : isDark ? 'text-slate-400 hover:text-slate-200' : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <div className="relative">
              <Heart className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-2 bg-pink-500 text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                {likedItems.length > 0 ? likedItems.length : 3}
              </span>
            </div>
            <span className="text-[10px]">Saved</span>
          </button>

          {/* Chats Tab with Badge */}
          <button
            onClick={() => {
              setActiveTab('chats');
              setShowChatDrawer(true);
            }}
            className={`flex flex-col items-center gap-1 relative cursor-pointer transition-colors ${
              activeTab === 'chats' || showChatDrawer ? 'text-pink-500 font-extrabold' : isDark ? 'text-slate-400 hover:text-slate-200' : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <div className="relative">
              <MessageCircle className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-2 bg-pink-500 text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                1
              </span>
            </div>
            <span className="text-[10px]">Chats</span>
          </button>

          {/* Profile Tab */}
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${
              activeTab === 'profile' ? 'text-pink-500 font-extrabold' : isDark ? 'text-slate-400 hover:text-slate-200' : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <User className="w-5 h-5" />
            <span className="text-[10px]">Profile</span>
          </button>
        </div>

        {/* Realtime Chat Overlay / Drawer */}
        {showChatDrawer && (
          <div className={`absolute inset-0 z-40 flex flex-col transition-colors duration-200 ${
            isDark ? 'bg-[#0B0F19] text-white' : 'bg-white text-slate-900'
          }`}>
            <div className={`p-4 border-b flex items-center justify-between ${
              isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex items-center gap-3 text-left">
                <img
                  src={currentItem?.owner.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb'}
                  alt="Avatar"
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-pink-500"
                />
                <div>
                  <h4 className="text-sm font-black">{currentItem?.owner.name}</h4>
                  <p className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Verified Live Connection
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowChatDrawer(false)}
                className={`p-2 rounded-full transition-colors cursor-pointer ${
                  isDark ? 'bg-slate-800 text-slate-300 hover:text-white' : 'bg-slate-200 text-slate-700 hover:text-slate-900'
                }`}
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            {/* Chat message body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {chatMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-3 rounded-2xl text-xs font-medium text-left ${
                      msg.sender === 'user'
                        ? 'pink-gradient text-white rounded-br-xs shadow-md'
                        : isDark
                          ? 'bg-slate-800 border border-slate-700 text-slate-100 rounded-bl-xs'
                          : 'bg-slate-100 border border-slate-200 text-slate-800 rounded-bl-xs'
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 px-1">{msg.timestamp}</span>
                </div>
              ))}
            </div>

            {/* Chat Input form */}
            <form onSubmit={handleSendMessage} className={`p-3 border-t flex gap-2 ${
              isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className={`flex-1 border rounded-full px-4 py-2.5 text-xs font-medium focus:outline-none focus:border-pink-500 ${
                  isDark ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-400' : 'bg-white border-slate-200 text-slate-900'
                }`}
              />
              <button
                type="submit"
                className="w-10 h-10 pink-gradient text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

