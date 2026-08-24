export const integrationsData = {
  formspree: {
    name: "Formspree",
    title: "Connect Contact Forms with Formspree in 2 Minutes",
    description:
      "Handle form submissions directly without creating a backend server.",
    steps: [
      "Create a free account at Formspree.io and create a new form endpoint.",
      "Copy your Form ID (e.g. `xeqyxxxx`).",
      "Paste the code below into your React form component and update your Endpoint ID.",
    ],
    code: `import React, { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      setStatus('SUCCESS');
      form.reset();
    } else {
      setStatus('ERROR');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md bg-slate-900 p-6 rounded-xl border border-white/10">
      <input 
        type="email" 
        name="email" 
        placeholder="Your Email" 
        required 
        className="w-full px-4 py-2 bg-slate-950 text-white rounded-lg border border-white/10 focus:border-cyan-500 outline-none"
      />
      <textarea 
        name="message" 
        placeholder="Your Message" 
        required 
        className="w-full px-4 py-2 bg-slate-950 text-white rounded-lg border border-white/10 focus:border-cyan-500 outline-none"
      />
      <button type="submit" className="w-full py-2 bg-cyan-500 text-slate-950 font-bold rounded-lg hover:bg-cyan-400 transition-all">
        Send Message
      </button>
      {status === 'SUCCESS' && <p className="text-emerald-400 text-sm">Thanks for your submission!</p>}
      {status === 'ERROR' && <p className="text-rose-400 text-sm">Oops! Something went wrong.</p>}
    </form>
  );
}`,
  },
  emailjs: {
    name: "EmailJS",
    title: "Send Client Emails Directly from Frontend via EmailJS",
    description:
      "No backend required. Send emails directly to your inbox straight from React.",
    steps: [
      "Run `npm install @emailjs/browser` in your project terminal.",
      "Sign up on EmailJS and get your Service ID, Template ID, and Public Key.",
      "Use the custom React snippet below.",
    ],
    code: `import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function EmailJsForm() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(() => {
          setSent(true);
          e.target.reset();
      }, (error) => {
          console.error(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-4 max-w-md bg-slate-900 p-6 rounded-xl border border-white/10">
      <input type="text" name="user_name" placeholder="Name" required className="w-full px-4 py-2 bg-slate-950 text-white rounded-lg border border-white/10" />
      <input type="email" name="user_email" placeholder="Email" required className="w-full px-4 py-2 bg-slate-950 text-white rounded-lg border border-white/10" />
      <textarea name="message" placeholder="Message" required className="w-full px-4 py-2 bg-slate-950 text-white rounded-lg border border-white/10" />
      <button type="submit" className="w-full py-2 bg-cyan-500 text-slate-950 font-bold rounded-lg hover:bg-cyan-400">
        {sent ? 'Sent Successfully!' : 'Send Email'}
      </button>
    </form>
  );
}`,
  },
  resend: {
    name: "Resend",
    title: "Modern Transactional Emails with Resend API",
    description:
      "Next-gen email API built for developers using Next.js / React server actions.",
    steps: [
      "Install Resend: `npm install resend`.",
      "Get your API key from resend.com dashboard.",
      "Create a simple Serverless / API function or Next.js API route as shown.",
    ],
    code: `// api/send/route.js (Next.js App Router API Example)
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { email, message } = await request.json();
    const data = await resend.emails.send({
      from: 'Syncxel Form <onboarding@resend.dev>',
      to: ['your-email@domain.com'],
      subject: 'New Syncxel Contact Form Submission',
      html: \`<p>Email: \${email}</p><p>Message: \${message}</p>\`,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}`,
  },
  supabase: {
    name: "Supabase",
    title: "Store Form Submissions & Auth with Supabase Database",
    description:
      "Open-source Firebase alternative for instant database storage and authentication.",
    steps: [
      "Install SDK: `npm install @supabase/supabase-js`.",
      "Initialize your Supabase client with your Project URL and Anon Key.",
      "Insert data directly into your database table from React.",
    ],
    code: `import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://xyzcompany.supabase.co', 'YOUR_ANON_KEY');

export default function SupabaseSubscriber() {
  const handleSubscribe = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    const { data, error } = await supabase
      .from('subscribers')
      .insert([{ email }]);

    if (error) alert(error.message);
    else alert('Subscribed successfully!');
  };

  return (
    <form onSubmit={handleSubscribe} className="flex gap-2">
      <input type="email" name="email" placeholder="Enter email" required className="px-4 py-2 bg-slate-950 text-white rounded-lg border border-white/10" />
      <button type="submit" className="px-6 py-2 bg-cyan-500 text-slate-950 font-bold rounded-lg">Subscribe</button>
    </form>
  );
}`,
  },
};
