export const authData = {
  title: "Authentication & Security Patterns",
  snippets: [
    {
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
    },
    {
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
    },
    {
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
    },
  ],
};
