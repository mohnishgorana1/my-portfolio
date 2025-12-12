"use client";
import React, { useState } from "react";
import { Send, Mail, MapPin, Check, Loader2 } from "lucide-react"; // Import Check and Loader2
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

// ... (Social Text Variants and Constants same as before) ...
const socialTextVariants = {
  collapsed: {
    width: 0,
    opacity: 0,
    marginLeft: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  expanded: {
    width: "auto",
    opacity: 1,
    marginLeft: 12,
    transition: { duration: 0.5, ease: "easeInOut", delay: 0.1 },
  },
};

const SOCIAL_LINKS = [
  {
    icon: BsWhatsapp,
    href: "https://wa.me/+917999517181",
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

const ACCESS_KEY = String(
  process.env.NEXT_PUBLIC_WEB3FORM_PORTFOLIO_CONTACT_ME_ACCESS_KEY
);

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false); // New state for success animation

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    setIsSuccess(false);

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill out all fields.");
      setLoading(false);
      return;
    }

    const data = new FormData();
    data.append("access_key", ACCESS_KEY!);
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);
    data.append("subject", `New Message from Portfolio by ${formData.name}`);

    console.log("Submitting form data:", formData);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const json = await response.json();

      console.log("Response from Web3Forms:", json);

      if (json.success) {
        setIsSuccess(true);
        setStatus("Thank you! Your message has been sent successfully.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setIsSuccess(false);
        console.error(json.message);
        setStatus(`Submission failed: ${json.message || "Please try again."}`);
      }
    } catch (error) {
      console.error(error);
      setStatus("There was a network error. Please try again later.");
    } finally {
      setLoading(false);
    }

    // // --- SIMULATION LOGIC ---
    // try {
    //   // Simulate network delay
    //   await new Promise((resolve) => setTimeout(resolve, 2000));

    //   // Success Case
    //   setIsSuccess(true);
    //   setStatus("Thank you! Your message has been sent successfully.");
    //   setFormData({ name: "", email: "", message: "" });

    //   // Reset button after 3 seconds so user can send another if needed
    //   setTimeout(() => {
    //     setIsSuccess(false);
    //     setStatus("");
    //   }, 4000);
    // } catch (error) {
    //   setStatus("Something went wrong. Please try again.");
    // } finally {
    //   setLoading(false);
    // }
    // // ------------------------
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
        {/* Contact Info (Side Panel) - KEPT SAME */}
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

          <div className="flex-1 p-6 rounded-xl border border-zinc-200 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800/50">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              Connect
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
              Find me on professional platforms.
            </p>
            <div className="flex items-start gap-2">
              {SOCIAL_LINKS.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover="expanded"
                  initial="collapsed"
                  className={`${social.color} group flex items-center p-3 transition-colors bg-zinc-100 dark:bg-zinc-700/50 shadow-md hover:shadow-lg rounded-full`}
                >
                  <social.icon className="w-6 h-6 flex-shrink-0" />
                  <motion.span
                    variants={socialTextVariants}
                    className="whitespace-nowrap font-semibold text-base"
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
            className="p-8 rounded-2xl shadow-xl border border-zinc-200 bg-white/70 dark:border-zinc-800 dark:bg-zinc-900/70 backdrop-blur-md"
          >
            <div className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg bg-white text-zinc-900 border-zinc-300 dark:bg-zinc-800 dark:text-zinc-50 dark:border-zinc-700"
                required
                disabled={loading || isSuccess}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg bg-white text-zinc-900 border-zinc-300 dark:bg-zinc-800 dark:text-zinc-50 dark:border-zinc-700"
                required
                disabled={loading || isSuccess}
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                maxLength={500}
                className="w-full p-3 border rounded-lg bg-white text-zinc-900 border-zinc-300 dark:bg-zinc-800 dark:text-zinc-50 dark:border-zinc-700"
                required
                disabled={loading || isSuccess}
              />
            </div>

            {/* Error Message Only (Success logic moved to button) */}
            {status && !isSuccess && (
              <p className="mt-4 text-center text-red-500">{status}</p>
            )}

            {/* ANIMATED SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={loading || isSuccess}
              className={`mt-6 w-full inline-flex items-center justify-center px-6 py-3 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 overflow-hidden
                ${
                  isSuccess
                    ? "bg-green-500 hover:bg-green-600 text-white" // Success Color
                    : "bg-blue-600 hover:bg-blue-700 text-white" // Normal Color
                }
                ${loading ? "cursor-not-allowed opacity-80" : ""}
              `}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isSuccess ? (
                  // SUCCESS STATE
                  <motion.div
                    key="success"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-2"
                  >
                    <Check className="w-6 h-6" />
                    <span>Message Sent!</span>
                  </motion.div>
                ) : loading ? (
                  // LOADING STATE
                  <motion.div
                    key="loading"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-2"
                  >
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </motion.div>
                ) : (
                  // IDLE STATE
                  <motion.div
                    key="idle"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5 ml-1" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// Helper component ... (Same as before)
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
