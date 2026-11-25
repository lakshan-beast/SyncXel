import { Link } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";

export default function FooterNavLinks() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
      {/* 1. Products / Library */}
      <div className="flex flex-col space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-white">
          Products / Library
        </h4>
        <ul className="space-y-2.5 text-xs text-slate-400 flex flex-col">
          <li>
            <Link
              to="/components"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 group">
              <FaCaretRight className="text-cyan-400 transition-transform group-hover:translate-x-0.5 shrink-0" />
              UI Components
            </Link>
          </li>
          <li>
            <a
              href="/#templates"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 group">
              <FaCaretRight className="text-cyan-400 transition-transform group-hover:translate-x-0.5 shrink-0" />
              Templates & Themes
            </a>
          </li>
          <li>
            <a
              href="/#pricing"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 group">
              <FaCaretRight className="text-cyan-400 transition-transform group-hover:translate-x-0.5 shrink-0" />
              Pro Access / Pricing
            </a>
          </li>
          <li>
            <Link
              to="/docs"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 group">
              <FaCaretRight className="text-cyan-400 transition-transform group-hover:translate-x-0.5 shrink-0" />
              Changelog
            </Link>
          </li>
        </ul>
      </div>

      {/* 2. Services / Hire */}
      <div className="flex flex-col space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-white">
          Services / Hire
        </h4>
        <ul className="space-y-2.5 text-xs text-slate-400 flex flex-col">
          <li>
            <a
              href="/#services"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 group">
              <FaCaretRight className="text-cyan-400 transition-transform group-hover:translate-x-0.5 shrink-0" />
              Custom Web Design
            </a>
          </li>
          <li>
            <a
              href="/#how-it-works"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 group">
              <FaCaretRight className="text-cyan-400 transition-transform group-hover:translate-x-0.5 shrink-0" />
              Our Workflow
            </a>
          </li>
          <li>
            <a
              href="/#hire"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 group">
              <FaCaretRight className="text-cyan-400 transition-transform group-hover:translate-x-0.5 shrink-0" />
              Project Inquiry / Hire Us
            </a>
          </li>
        </ul>
      </div>

      {/* 3. Developers / Docs */}
      <div className="flex flex-col space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-white">
          Developers / Docs
        </h4>
        <ul className="space-y-2.5 text-xs text-slate-400 flex flex-col">
          <li>
            <Link
              to="/docs"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 group">
              <FaCaretRight className="text-cyan-400 transition-transform group-hover:translate-x-0.5 shrink-0" />
              Documentation
            </Link>
          </li>
          <li>
            <Link
              to="/docs"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 group">
              <FaCaretRight className="text-cyan-400 transition-transform group-hover:translate-x-0.5 shrink-0" />
              Getting Started
            </Link>
          </li>
          <li>
            <Link
              to="/docs"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 group">
              <FaCaretRight className="text-cyan-400 transition-transform group-hover:translate-x-0.5 shrink-0" />
              API / Guides
            </Link>
          </li>
        </ul>
      </div>

      {/* 4. Company & Legal */}
      <div className="flex flex-col space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-white">
          Company & Legal
        </h4>
        <ul className="space-y-2.5 text-xs text-slate-400 flex flex-col">
          <li>
            <Link
              to="/legal"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 group">
              <FaCaretRight className="text-cyan-400 transition-transform group-hover:translate-x-0.5 shrink-0" />
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              to="/legal"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 group">
              <FaCaretRight className="text-cyan-400 transition-transform group-hover:translate-x-0.5 shrink-0" />
              Terms of Service
            </Link>
          </li>
          <li>
            <a
              href="/#faq"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 group">
              <FaCaretRight className="text-cyan-400 transition-transform group-hover:translate-x-0.5 shrink-0" />
              FAQ / Help Center
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
