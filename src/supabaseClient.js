// supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bgolgpoqtimapvtmkize.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJnb2xncG9xdGltYXB2dG1raXplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM4NDc3NzUsImV4cCI6MjA1OTQyMzc3NX0.yzFditn0xPknDFUBR0hUMvUKTq9wxov7WJRZg4hos2Q'
export const supabase = createClient(supabaseUrl, supabaseKey)
