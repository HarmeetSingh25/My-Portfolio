import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const serviceId = "service_gnj0l1e";      // update if different
const templateId = "template_fsx23aj";    // update if different
const publicKey = "kwx5u2mKJxhd7398d";    // your public key

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState(null); // { type: 'success' | 'error', message }
  const [touched, setTouched] = useState({});

  // simple validation
  const errors = {
    name: !form.name ? "Name is required" : "",
    email:
      !form.email
        ? "Email is required"
        : !/^\S+@\S+\.\S+$/.test(form.email)
        ? "Enter a valid email"
        : "",
    message: !form.message ? "Message is required" : "",
  };

  const isValid = !errors.name && !errors.email && !errors.message;

  const handleChange = (e) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleBlur = (e) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });

    if (!isValid) {
      setNotice({ type: "error", message: "Please fix the validation errors." });
      return;
    }

    setLoading(true);
    setNotice(null);

    // Map to template params configuration used in your EmailJS template
    const templateParams = {
      name: form.name,
      email: form.email,
      message: form.message,
      // you can add more fields here such as subject, phone, etc.
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setNotice({ type: "success", message: "Message sent — thanks! I'll reply soon." });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Email send error:", err);
      setNotice({
        type: "error",
        message:
          "Failed to send message. Please try again later, or email me directly at harmeetsingh6p@gmail.com",
      });
    } finally {
      setLoading(false);
      // auto dismiss notifications after a while
      setTimeout(() => setNotice(null), 6000);
    }
  };

  return (
    <section id="contact" className="px-6 md:px-16 py-16 bg-[#0b0b16] text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Let&apos;s work together</h2>
        <p className="text-center text-gray-300 mb-8">
          Send me a message — I usually reply within 24–48 hours.
        </p>

        {/* Notice */}
        {notice && (
          <div
            role="status"
            className={`mb-6 rounded-lg px-4 py-3 text-sm ${
              notice.type === "success"
                ? "bg-green-800/60 text-green-200"
                : "bg-red-800/60 text-red-200"
            }`}
          >
            {notice.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <label className="block">
              <span className="text-sm text-gray-300">Name</span>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mt-1 w-full rounded-lg border px-3 py-2 bg-[#0f0f14] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  touched.name && errors.name ? "border-red-500" : "border-transparent"
                }`}
                placeholder="Your name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {touched.name && errors.name && (
                <p id="name-error" className="mt-1 text-xs text-red-400">
                  {errors.name}
                </p>
              )}
            </label>

            {/* Email */}
            <label className="block">
              <span className="text-sm text-gray-300">Email</span>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mt-1 w-full rounded-lg border px-3 py-2 bg-[#0f0f14] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  touched.email && errors.email ? "border-red-500" : "border-transparent"
                }`}
                placeholder="you@domain.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {touched.email && errors.email && (
                <p id="email-error" className="mt-1 text-xs text-red-400">
                  {errors.email}
                </p>
              )}
            </label>
          </div>

          {/* Message */}
          <label className="block">
            <span className="text-sm text-gray-300">Message</span>
            <textarea
              name="message"
              rows={6}
              value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`mt-1 w-full rounded-lg border px-3 py-2 bg-[#0f0f14] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                touched.message && errors.message ? "border-red-500" : "border-transparent"
              }`}
              placeholder="Tell me about the project or role..."
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {touched.message && errors.message && (
              <p id="message-error" className="mt-1 text-xs text-red-400">
                {errors.message}
              </p>
            )}
          </label>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 text-white font-semibold shadow hover:scale-[1.01] transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                "Send message"
              )}
            </button>

            <button
              type="button"
              onClick={() => {
                setForm({ name: "", email: "", message: "" });
                setTouched({});
                setNotice(null);
              }}
              className="rounded-full px-4 py-2 border border-white/10 text-gray-300 hover:bg-white/5"
            >
              Reset
            </button>
          </div>
        </form>

        <p className="mt-6 text-sm text-gray-500">
          Or email directly at{" "}
          <a
            className="text-indigo-400 underline"
            href="mailto:harmeetsingh6p@gmail.com"
          >
            harmeetsingh6p@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
