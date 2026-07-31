export type Category = 'all' | 'people' | 'homes' | 'jobs' | 'cars' | 'gadgets' | 'clothes' | 'watches';

export interface DiscoveryItem {
  id: string;
  category: Category;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  location?: string;
  price?: string;
  age?: number;
  specs?: { label: string; value: string }[];
  tags: string[];
  owner: {
    name: string;
    avatar: string;
    status: string;
    verified?: boolean;
  };
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'other';
  text: string;
  timestamp: string;
}

export type ThemeMode = 'dark' | 'light';

