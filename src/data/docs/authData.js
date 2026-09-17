
export const authData = {
  title: "Authentication & Security Patterns",
  subtitle:
    "Secure your client-side routes, automate token attachments, and manage user sessions seamlessly.",
  description:
    "Production-ready security patterns for React Router, Axios, and backend auth providers like Supabase.",
  snippets: [
    {
      id: "protected-route",
      title: "1. React Router Protected Route Guard Component",
      desc: "Restricts access to authenticated users only. Redirects unauthenticated users to the login route while preserving the intended target URL.",
      code: `import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute = ({ children, isAuthenticated }) => {
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

// Usage inside App.jsx:
// <Route path="/dashboard" element={<ProtectedRoute isAuthenticated={isLoggedIn}><Dashboard /></ProtectedRoute>} />`,
      explanation:
        "Captures the user's current attempted URL path using `useLocation()` and passes it via router state so that once the user successfully logs in, they can be redirected right back to where they wanted to go.",
      proTip:
        "Always pass `replace` inside `<Navigate />` to prevent the login page from cluttering the browser's back button history stack.",
    },
    {
      id: "axios-interceptor",
      title: "2. Axios Authorization Interceptor",
      desc: "Automatically attaches the JWT bearer token from storage to every outgoing API request header.",
      code: `import axios from "axios";

const api = axios.create({
  baseURL: "https://api.yourdomain.com",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = \`Bearer \${token}\`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;`,
      explanation:
        "Intercepts every HTTP request globally before it leaves the client browser, injecting the authorization header dynamically so you don't have to manually attach tokens inside every single fetch call.",
      proTip:
        "Pair this request interceptor with a response interceptor to automatically catch `401 Unauthorized` errors and force a user logout or token refresh.",
    },
    {
      id: "supabase-setup",
      title: "3. Supabase Client Setup & Auth Helper",
      desc: "Quick initialization snippet for Supabase Authentication in React applications.",
      code: `import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const signUpWithEmail = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;
  return data;
};`,
      explanation:
        "Initializes the secure Supabase client connection using environment variables and exports clean async helper wrappers for user registration and session management.",
      proTip:
        "Always keep your Supabase `service_role` key strictly private on the backend server; only expose the `anon` public key on the frontend client side.",
    },
  ],
};
