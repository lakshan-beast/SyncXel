
export const integrationsData = {
  formspree: {
    id: "formspree",
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
    explanation:
      "Submits standard HTML form data via native `fetch` straight to Formspree's cloud endpoints, allowing you to receive emails without managing custom mail servers.",
    proTip:
      "Enable spam filtering and Google reCAPTCHA inside your Formspree dashboard settings to prevent automated bot spam.",
  },
  emailjs: {
    id: "emailjs",
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
    explanation:
      "Uses EmailJS client SDK to connect your web forms directly with email service providers like Gmail or Outlook via pre-defined mail templates.",
    proTip:
      "Never expose private keys; use EmailJS public keys safely within client-side code as intended by their security guidelines.",
  },
  resend: {
    id: "resend",
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
    explanation:
      "Designed for modern full-stack frameworks, Resend allows developers to trigger clean, high-deliverability transactional emails using server-side API routes.",
    proTip:
      "Verify your custom domain inside Resend settings to send emails from your own brand domain instead of the default onboarding address.",
  },
  supabase: {
    id: "supabase",
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
    explanation:
      "Connects your React app directly to PostgreSQL databases hosted on Supabase, allowing instant table insertions and row-level security policies.",
    proTip:
      "Always configure Row Level Security (RLS) policies on your Supabase tables to protect sensitive user data from unauthorized public access.",
  },
  stripe: {
    id: "stripe",
    name: "Stripe Checkout",
    title: "Accept Credit Card Payments with Stripe",
    description:
      "Industry standard payment gateway integration for SaaS subscriptions and e-commerce.",
    steps: [
      "Install Stripe packages: `npm install @stripe/stripe-js`.",
      "Set up your Stripe dashboard and get your publishable API keys.",
      "Redirect users to secure hosted checkout sessions.",
    ],
    code: `import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_YOUR_STRIPE_KEY');

export default function CheckoutButton() {
  const handleCheckout = async () => {
    const stripe = await stripePromise;
    // Call your backend API to create a Checkout Session ID
    const response = await fetch('/api/create-checkout-session', { method: 'POST' });
    const session = await response.json();

    await stripe.redirectToCheckout({ sessionId: session.id });
  };

  return (
    <button onClick={handleCheckout} className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg">
      Subscribe / Pay Now
    </button>
  );
}`,
    explanation:
      "Offloads PCI-compliance security requirements to Stripe's hosted checkout infrastructure while allowing smooth client-side redirection from your React application.",
    proTip:
      "Always test your payment flows using Stripe's test-mode API keys and test credit card numbers before launching into production.",
  },
  posthog: {
    id: "posthog",
    name: "PostHog Analytics",
    title: "Track Product Usage & User Events with PostHog",
    description:
      "All-in-one product analytics, session replay, and feature flags for developers.",
    steps: [
      "Install PostHog package: `npm install posthog-js`.",
      "Initialize PostHog inside your root application entry file (`main.jsx` or `App.jsx`).",
      "Track custom user events easily across your components.",
    ],
    code: `import posthog from 'posthog-js';

// Initialize in main.jsx or App.jsx
posthog.init('phc_YOUR_PROJECT_API_KEY', {
  api_host: 'https://app.posthog.com',
  autocapture: true
});

// Track custom event inside component
export function trackButtonClick() {
  posthog.capture('upgrade_button_clicked', { plan: 'pro' });
};`,
    explanation:
      "Provides deep insights into user behavior, session recordings, and feature flags right out of the box with minimal setup overhead.",
    proTip:
      "Wrap initialization inside a conditional check for `import.meta.env.PROD` if you don't want local development testing events to pollute your production analytics.",
  },
  cloudinary: {
    id: "cloudinary",
    name: "Cloudinary Upload",
    title: "Seamless Image & Video Uploads with Cloudinary",
    description:
      "Cloud-based media management, automatic image optimization, and transformation pipelines.",
    steps: [
      "Create a free Cloudinary account and set up an upload preset.",
      "Use Cloudinary's upload widget or standard fetch endpoint.",
      "Store the returned secure image URL directly in your database.",
    ],
    code: `import React, { useState } from 'react';

export default function ImageUpload() {
  const [imageUrl, setImageUrl] = useState('');

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'YOUR_UPLOAD_PRESET');

    const res = await fetch('https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload', {
      method: 'POST',
      body: formData,
    });
    const data = await res.json();
    setImageUrl(data.secure_url);
  };

  return (
    <div className="space-y-4">
      <input type="file" onChange={uploadImage} className="text-sm text-slate-400" />
      {imageUrl && <img src={imageUrl} alt="Uploaded" className="w-32 h-32 object-cover rounded-xl" />}
    </div>
  );
}`,
    explanation:
      "Uploads heavy media files straight to Cloudinary cloud servers asynchronously, preventing server bandwidth bottlenecks on your own hosting provider.",
    proTip:
      "Use Cloudinary URL transformations (e.g., adding `/w_400,h_400,c_fill/`) to automatically resize and optimize images on the fly.",
  },
};
