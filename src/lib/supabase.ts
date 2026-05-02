import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
// TODO: Add your Supabase URL and anon key from https://supabase.com
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types
export interface ContactSubmission {
  id?: string;
  name: string;
  phone: string;
  challenge: string;
  magnet?: string;
  created_at?: string;
}

export interface BlogPost {
  id?: string;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  read_time: string;
  date: string;
  slug: string;
  image: string;
  featured: boolean;
  created_at?: string;
}

export interface Subscriber {
  id?: string;
  email: string;
  created_at?: string;
}

// Contact submission functions
export const saveContactSubmission = async (data: ContactSubmission) => {
  try {
    const { data: result, error } = await supabase
      .from('contacts')
      .insert([
        {
          name: data.name,
          phone: data.phone,
          challenge: data.challenge,
          magnet: data.magnet || null,
        },
      ])
      .select();

    if (error) throw error;
    return { success: true, data: result };
  } catch (error) {
    console.error('Error saving contact:', error);
    return { success: false, error };
  }
};

// Newsletter subscription functions
export const subscribeNewsletter = async (email: string) => {
  try {
    const { data: result, error } = await supabase
      .from('subscribers')
      .insert([{ email }])
      .select();

    if (error) throw error;
    return { success: true, data: result };
  } catch (error) {
    console.error('Error subscribing:', error);
    return { success: false, error };
  }
};

// Blog posts functions
export const fetchBlogPosts = async () => {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('date', { ascending: false });

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return { success: false, error };
  }
};

export const fetchBlogPostBySlug = async (slug: string) => {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error fetching post:', error);
    return { success: false, error };
  }
};

export const fetchFeaturedBlogPosts = async () => {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('featured', true)
      .order('date', { ascending: false });

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error fetching featured posts:', error);
    return { success: false, error };
  }
};
