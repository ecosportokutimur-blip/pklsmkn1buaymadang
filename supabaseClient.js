// supabaseClient.js

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ogzgrnzhqtmtvxjcmjpj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9nemdybnpocXRtdHZ4amNtanBqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ0ODYyMjQsImV4cCI6MjEwMDA2MjIyNH0.5Fw7vVYpFDNFt6Qu5fVvZWtHN_ytqShWzOYL2sz5Zpo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
