import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://mkmjzgnnrsiswsxdfnfa.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rbWp6Z25ucnNpc3dzeGRmbmZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU1NDEwNzAsImV4cCI6MjA0MTExNzA3MH0.Otpn7AVZ_zXCJIYbqPXrS1lKnUHqqDP35uRwGhlDPP8';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
