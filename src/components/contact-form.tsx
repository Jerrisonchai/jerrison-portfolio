'use client';

import { useState, useRef } from 'react';

const reasons = [
  'VBA Automation & Process Improvement',
  'Web Development (Next.js / React)',
  'Excel Templates & Training',
  'Business Analysis & Consulting',
  'General Inquiry',
  'Other',
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', reason: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Client-side validation
    if (form.name.trim().length < 2) {
      setErrorMsg('Name must be at least 2 characters.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!form.reason) {
      setErrorMsg('Please select a reason for contacting.');
      return;
    }
    if (form.message.trim().length < 10) {
      setErrorMsg('Message must be at least 10 characters.');
      return;
    }

    setStatus('submitting');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          reason: form.reason,
          message: form.message.trim(),
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', reason: '', message: '' });
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please check your connection and try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-white font-semibold text-lg mb-2">Message Sent!</h3>
        <p className="text-zinc-400 text-sm mb-6">Thanks for reaching out. I'll get back to you within 24 hours.</p>
        <button onClick={() => setStatus('idle')} className="btn-secondary text-xs">
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 text-left" noValidate>
      <div className="grid sm:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label htmlFor="contact-name" className="block text-xs text-zinc-400 mb-1.5 font-mono uppercase tracking-wider">
            Name *
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            minLength={2}
            maxLength={100}
            className="input-field"
            disabled={status === 'submitting'}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contact-email" className="block text-xs text-zinc-400 mb-1.5 font-mono uppercase tracking-wider">
            Email *
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
            maxLength={200}
            className="input-field"
            disabled={status === 'submitting'}
          />
        </div>
      </div>

      {/* Reason */}
      <div>
        <label htmlFor="contact-reason" className="block text-xs text-zinc-400 mb-1.5 font-mono uppercase tracking-wider">
          Reason *
        </label>
        <select
          id="contact-reason"
          name="reason"
          value={form.reason}
          onChange={handleChange}
          required
          className="input-field"
          disabled={status === 'submitting'}
        >
          <option value="">Select a reason…</option>
          {reasons.map(r => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block text-xs text-zinc-400 mb-1.5 font-mono uppercase tracking-wider">
          Message *
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about your project or opportunity…"
          required
          minLength={10}
          maxLength={2000}
          rows={4}
          className="input-field resize-y"
          disabled={status === 'submitting'}
        />
        <div className="flex justify-between mt-1">
          <span className="text-[10px] text-zinc-600">{form.message.length}/2000</span>
          <span className="text-[10px] text-zinc-600">* Required</span>
        </div>
      </div>

      {/* Error message */}
      {errorMsg && (
        <div className="text-red-400 text-xs bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
          {errorMsg}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary text-sm w-full justify-center"
      >
        {status === 'submitting' ? (
          <span className="flex items-center gap-2 justify-center">
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending…
          </span>
        ) : (
          'Send Message →'
        )}
      </button>

      {/* Fallback */}
      <p className="text-center text-xs text-zinc-600 mt-3">
        Or email directly: <a href="mailto:jerrisonchai@gmail.com" className="text-accent hover:underline">jerrisonchai@gmail.com</a>
      </p>
    </form>
  );
}
