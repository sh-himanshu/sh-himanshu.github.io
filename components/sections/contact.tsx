"use client";

import { Check, Mail, MapPin, Phone, Send } from "lucide-react";
import { type FormEvent, useRef, useState } from "react";

import { Tile } from "@/components/ui/tile";
import { SITE_CONFIG } from "@/lib/data";

function decode(encoded: string): string {
    return atob(encoded);
}

const FIELD_CLASS_NAME =
    "w-full rounded-xl border border-white/[0.1] bg-white/[0.05] px-4 py-3 text-sm text-zinc-100 transition-all duration-200 placeholder:text-zinc-500 focus:border-[var(--accent)]/50 focus:bg-white/[0.07] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]/30";

interface FeedbackState {
    tone: "idle" | "error" | "success";
    message: string;
}

function validateContactForm(formData: FormData): FeedbackState | null {
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !message) {
        return {
            tone: "error",
            message: "Please fill in your name, email, and message.",
        };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return {
            tone: "error",
            message: "Please enter a valid email address.",
        };
    }

    if (message.length < 10) {
        return {
            tone: "error",
            message: "Message is too short. Please write at least a few words.",
        };
    }

    return null;
}

export function ContactSection() {
    const formRef = useRef<HTMLFormElement>(null);
    const [feedback, setFeedback] = useState<FeedbackState>({
        tone: "idle",
        message: "",
    });

    const phone = decode(SITE_CONFIG.phone);
    const email = decode(SITE_CONFIG.email);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const error = validateContactForm(formData);
        if (error) {
            setFeedback(error);
            return;
        }

        // TODO: Replace with your preferred service (Formspree, Web3Forms, Resend, etc.)
        // For now, show success and reset.
        formRef.current?.reset();
        setFeedback({
            tone: "success",
            message: "Message received! I\u2019ll get back to you soon.",
        });
    };

    return (
        <>
            <Tile size="2x1" color="blue" className="lg:row-span-2">
                <div className="flex h-full flex-col">
                    <h3 className="lg:mb-2 hidden lg:flex text-base font-semibold tracking-tight text-stone-300">
                        Available for new opportunities and collaborations.
                    </h3>

                    <div className="mt-auto space-y-5">
                        <a
                            href={`mailto:${email}`}
                            className="-mx-2 flex min-w-0 items-center gap-3 rounded-lg p-2 text-[14px] font-medium text-zinc-100 transition-colors wrap-break-word hover:bg-white/[0.06] hover:text-white sm:break-normal"
                        >
                            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-blue-400/20">
                                <Mail size={16} className="text-blue-300" />
                            </div>
                            <div className="min-w-0">
                                <span className="block text-[10px] font-semibold tracking-widest text-blue-300/60 uppercase">
                                    Email
                                </span>
                                <span className="block truncate">{email}</span>
                            </div>
                        </a>
                        <a
                            href={`tel:${phone.replace(/\s/g, "")}`}
                            className="-mx-2 flex items-center gap-3 rounded-lg p-2 text-[14px] font-medium text-zinc-100 transition-colors hover:bg-white/[0.06] hover:text-white"
                        >
                            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-blue-400/20">
                                <Phone size={16} className="text-blue-300" />
                            </div>
                            <div>
                                <span className="block text-[10px] font-semibold tracking-widest text-blue-300/60 uppercase">
                                    Phone
                                </span>
                                <span className="block">{phone}</span>
                            </div>
                        </a>
                        <div className="-mx-2 flex items-center gap-3 rounded-lg p-2 text-[14px] font-medium text-zinc-100">
                            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-blue-400/20">
                                <MapPin size={16} className="text-blue-300" />
                            </div>
                            <div>
                                <span className="block text-[10px] font-semibold tracking-widest text-blue-300/60 uppercase">
                                    Location
                                </span>
                                <span className="block">
                                    {SITE_CONFIG.location}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Tile>

            <Tile size="4x2" className="row-span-3 md:row-span-2">
                <div className="flex h-full flex-col">
                    <div className="mb-5">
                        <h3 className="mb-1.5 text-lg font-semibold tracking-tight text-white sm:text-xl">
                            Send a Message
                        </h3>
                        <p className="text-sm text-zinc-400">
                            Whether it&apos;s a project inquiry or just a hello,
                            I&apos;d love to hear from you.
                        </p>
                    </div>

                    <form
                        ref={formRef}
                        className="mt-auto flex flex-col gap-3.5"
                        onSubmit={handleSubmit}
                    >
                        <div className="grid gap-3.5 sm:grid-cols-2">
                            <label className="flex flex-col gap-1.5 text-[13px] font-medium text-zinc-300">
                                <span>Name</span>
                                <input
                                    autoComplete="name"
                                    className={FIELD_CLASS_NAME}
                                    name="name"
                                    placeholder="Your name"
                                    required
                                    type="text"
                                />
                            </label>
                            <label className="flex flex-col gap-1.5 text-[13px] font-medium text-zinc-300">
                                <span>Email</span>
                                <input
                                    autoComplete="email"
                                    className={FIELD_CLASS_NAME}
                                    name="email"
                                    placeholder="you@company.com"
                                    required
                                    type="email"
                                />
                            </label>
                        </div>

                        <label className="flex flex-col gap-1.5 text-[13px] font-medium text-zinc-300">
                            <span>Message</span>
                            <textarea
                                className={`${FIELD_CLASS_NAME} min-h-28 resize-y`}
                                name="message"
                                placeholder="Tell me about your project, role, or just say hello."
                                required
                            />
                        </label>

                        <div className="flex flex-col gap-2.5 pt-1 sm:flex-row sm:items-center sm:justify-between">
                            <button
                                type="submit"
                                disabled={feedback.tone === "success"}
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-7 py-3 text-[14px] font-semibold text-white shadow-[0_0_14px_rgba(37,99,235,0.1)] transition-all duration-200 hover:bg-[var(--accent-muted)] hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] focus-visible:ring-2 focus-visible:ring-[var(--accent-muted)]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060608] focus-visible:outline-none active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60"
                            >
                                {feedback.tone === "success" ? (
                                    <>
                                        <Check size={15} strokeWidth={2.5} />{" "}
                                        Sent
                                    </>
                                ) : (
                                    <>
                                        <Send size={15} strokeWidth={2.25} />{" "}
                                        Send Message
                                    </>
                                )}
                            </button>

                            <p
                                id="contact-feedback"
                                aria-live="polite"
                                className={
                                    feedback.tone === "error"
                                        ? "text-xs text-rose-400"
                                        : feedback.tone === "success"
                                          ? "text-xs text-emerald-400"
                                          : "text-xs text-zinc-500"
                                }
                            >
                                {feedback.message}
                            </p>
                        </div>
                    </form>
                </div>
            </Tile>
        </>
    );
}
