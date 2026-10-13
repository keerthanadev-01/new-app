
"use client";

import { useState } from "react";

export default function SayHelloButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to send message.");
      }

      setStatus("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setIsOpen(true);
          setStatus("");
        }}
        className="inline-block px-6 py-3 rounded-lg bg-white text-slate-900 font-semibold hover:bg-white/90 transition"
      >
        Say Hello
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="hello-title"
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-6 text-slate-900 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close form"
              className="absolute right-4 top-3 text-3xl text-slate-500 hover:text-black"
            >
              &times;
            </button>

            <h2 id="hello-title" className="text-2xl font-bold mb-2">
              Let's Talk!
            </h2>

            <p className="text-slate-600 mb-6">
              Have a project or opportunity in mind? Send me a message.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="hello-name" className="block mb-1 font-medium">
                  Your Name
                </label>
                <input
                  id="hello-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  maxLength={100}
                  className="w-full rounded-lg border border-slate-300 p-3 focus:border-indigo-500 outline-none"
                />
              </div>

              <div>
                <label htmlFor="hello-email" className="block mb-1 font-medium">
                  Email Address
                </label>
                <input
                  id="hello-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  maxLength={254}
                  className="w-full rounded-lg border border-slate-300 p-3 focus:border-indigo-500 outline-none"
                />
              </div>

              <div>
                <label htmlFor="hello-subject" className="block mb-1 font-medium">
                  Subject
                </label>
                <input
                  id="hello-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project enquiry, job opportunity..."
                  required
                  maxLength={150}
                  className="w-full rounded-lg border border-slate-300 p-3 focus:border-indigo-500 outline-none"
                />
              </div>

              <div>
                <label htmlFor="hello-message" className="block mb-1 font-medium">
                  Your Message
                </label>
                <textarea
                  id="hello-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows={4}
                  required
                  maxLength={5000}
                  className="w-full rounded-lg border border-slate-300 p-3 focus:border-indigo-500 outline-none"
                />
              </div>

              {status && (
                <p role="status" aria-live="polite" className="text-sm">
                  {status}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700 disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
