"use client";
import React, { useState } from "react";
import { Send, Mail, MapPin } from "lucide-react"; // Added Linkedin and Github
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

import { motion } from "framer-motion";

const socialTextVariants = {
  // State when not hovered
  collapsed: {
    width: 0,
    opacity: 0,
    marginLeft: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  // State when hovered
  expanded: {
    width: "auto", // Use auto or a specific value if 'auto' doesn't work perfectly
    opacity: 1,
    marginLeft: 12, // Equivalent to Tailwind's 'mx-3' (12px) if no padding is used, or a value that looks good
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay: 0.1, // Optional: slight delay after icon appears
    },
  },
};

// Define your social media links here
const SOCIAL_LINKS = [
  {
    icon: BsWhatsapp,
    href: "https://wa.me/+917999517181?text=Hi%20Mohnish,%20I%20saw%20your%20portfolio...",
    title: "WhatsApp",
    color: "text-green-500",
  },
  {
    icon: BsLinkedin,
    href: "https://www.linkedin.com/in/mohnish-gorana-804374340/",
    title: "LinkedIn",
    color: "text-blue-600",
  },
  {
    icon: BsGithub,
    href: "https://github.com/mohnishgorana1",
    title: "GitHub",
    color: "text-zinc-900 dark:text-zinc-50",
  },
];

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setStatus(""); // Basic form validation

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill out all fields.");
      setLoading(false);
      return;
    }

    // --- Simulated Success for this example ---
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus(
      "Thank you! Your message has been sent successfully. (Simulated)"
    );
    setFormData({ name: "", email: "", message: "" });
    setLoading(false); // ----------------------------------------
  };

  return (
    <section id="contact" className="">
      <h2 className="text-3xl font-bold md:text-5xl text-center mb-4 text-zinc-900 dark:text-zinc-50">
        Get in Touch
      </h2>
      <p className="text-center mb-12 text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
        Have a project idea, a job offer, or just want to say hi? Send me a
        message!
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Info (Side Panel) */}
        <div className="lg:col-span-1 gap-y-6 flex flex-col">
          <ContactDetail
            icon={Mail}
            title="Email Me"
            content="mohnishgorana1@gmail.com"
            link="mailto:mohnishgorana1@gmail.com"
          />
          <ContactDetail
            icon={MapPin}
            title="Location"
            content="Neemuch, MP, India"
          />
          {/* CONNECT SECTION (UPDATED) */}
          <div className="flex-1 p-6 rounded-xl border border-zinc-200 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800/50">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              Connect
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
              Find me on professional platforms for quicker response.
            </p>
            <div className="flex items-start gap-2">
              {/* Social Media Links with Collapse/Expand */}
              {SOCIAL_LINKS.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.title}
                  whileHover="expanded"
                  initial="collapsed"
                  className={`${social.color} group flex items-center p-3 transition-colors bg-zinc-100 dark:bg-zinc-700/50 shadow-md hover:shadow-lg shadow-zinc-400 dark:shadow-zinc-900 overflow-hidden rounded-full duration-500 ease-linear `}
                >
                  <social.icon className="w-6 h-6 flex-shrink-0" />

                  <motion.span
                    variants={socialTextVariants}
                    className={`whitespace-nowrap font-semibold text-base`}
                  >
                    {social.title}
                  </motion.span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <form
            onSubmit={handleSubmit}
            className="p-8 rounded-2xl shadow-xl border border-zinc-200 bg-white/70 
           dark:border-zinc-800 dark:bg-zinc-900/70 backdrop-blur-md"
          >
            <div className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500 
             bg-white text-zinc-900 border-zinc-300
             dark:bg-zinc-800 dark:text-zinc-50 dark:border-zinc-700 dark:placeholder-zinc-500"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500
             bg-white text-zinc-900 border-zinc-300
             dark:bg-zinc-800 dark:text-zinc-50 dark:border-zinc-700 dark:placeholder-zinc-500"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message (max 500 characters)"
                rows={5}
                maxLength={500}
                className="w-full p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500
             bg-white text-zinc-900 border-zinc-300
             dark:bg-zinc-800 dark:text-zinc-50 dark:border-zinc-700 dark:placeholder-zinc-500"
                required
              />
            </div>
            {status && (
              <p
                className={`mt-4 text-center ${
                  status.includes("successfully")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {status}
              </p>
            )}
            <button
              type="submit"
              disabled={loading}
              className={`mt-6 w-full inline-flex items-center justify-center gap-x-2 px-6 py-3 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 
        ${
          loading
            ? "bg-blue-300 dark:bg-blue-700/50 text-white cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 text-white"
        }`}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message <Send className="w-5 h-5 ml-1" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// Helper component for contact details
const ContactDetail = ({
  icon: Icon,
  title,
  content,
  link,
}: {
  icon: any;
  title: string;
  content: string;
  link?: string;
}) => (
  <div className="flex items-center space-x-4 p-4 rounded-xl border border-zinc-200 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800/50">
    <div className="p-3 rounded-full bg-blue-500/10 dark:bg-blue-500/20">
      <Icon className="w-6 h-6 text-blue-500" />
    </div>
    <div>
      <h3 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
        {title}
      </h3>
      {link ? (
        <a
          href={link}
          className="text-base font-semibold text-zinc-900 dark:text-zinc-50 hover:text-blue-500 transition-colors"
        >
          {content}
        </a>
      ) : (
        <p className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
          {content}
        </p>
      )}
    </div>
  </div>
);

export default ContactMe;
