"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";
import { type FormEvent, useState } from "react";

import { Tile } from "@/components/ui/tile";
import { SITE_CONFIG } from "@/lib/data";
import { haptic } from "@/lib/haptic/haptic";

function decode(encoded: string): string {
    return atob(encoded);
}

const FIELD_CLASS_NAME =
    "w-full rounded-2xl border border-white/10 bg-zinc-950/70 px-4 py-3.5 text-sm text-zinc-100 shadow-inner shadow-black/10 transition-colors placeholder:text-zinc-500 focus:border-[#0078d4]/60 focus:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#0078d4]/40";

interface FeedbackState {
    tone: "idle" | "error" | "success";
    message: string;
}

export function ContactSection() {
    const [feedback, setFeedback] = useState<FeedbackState>({
        tone: "idle",
        message: "",
    });

    const phone = decode(SITE_CONFIG.phone);
    const email = decode(SITE_CONFIG.email);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const name = String(formData.get("name") ?? "").trim();
        const senderEmail = String(formData.get("email") ?? "").trim();
        const company = String(formData.get("company") ?? "").trim();
        const message = String(formData.get("message") ?? "").trim();

        if (!name || !senderEmail || !message) {
            setFeedback({
                tone: "error",
                message:
                    "Add your name, email, and a short message so I can respond properly.",
            });
            return;
        }

        const subject = `Portfolio inquiry from ${name}`;
        const body = [
            `Hi ${SITE_CONFIG.name},`,
            "",
            message,
            "",
            `Name: ${name}`,
            `Email: ${senderEmail}`,
            company ? `Company: ${company}` : undefined,
        ]
            .filter(Boolean)
            .join("\n");

        haptic(24);
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        event.currentTarget.reset();
        setFeedback({
            tone: "success",
            message:
                "Your mail app should open with a drafted message. If it does not, use the email link in the contact tile.",
        });
    };

    return (
        <>
            <Tile size="2x2" color="blue">
                <div className="flex h-full flex-col justify-between">
                    <h3 className="text-xl font-bold tracking-tight text-white">
                        Get in touch
                    </h3>

                    <div className="mt-auto space-y-8">
                        <div>
                            <span className="mb-2 block text-xs font-bold tracking-widest text-blue-200/60 uppercase">
                                Email
                            </span>
                            <a
                                href={`mailto:${email}`}
                                className="flex min-w-0 items-center gap-3 text-[15px] font-semibold wrap-break-word text-zinc-100 transition-colors hover:text-white sm:break-normal"
                            >
                                <Mail size={18} className="text-[#0078d4]" />
                                {email}
                            </a>
                        </div>
                        <div>
                            <span className="mb-2 block text-xs font-bold tracking-widest text-blue-200/60 uppercase">
                                Phone
                            </span>
                            <a
                                href={`tel:${phone.replace(/\s/g, "")}`}
                                className="flex items-center gap-3 text-[15px] font-semibold text-zinc-100 transition-colors hover:text-white"
                            >
                                <Phone size={18} className="text-[#0078d4]" />
                                {phone}
                            </a>
                        </div>
                        <div>
                            <span className="mb-2 block text-xs font-bold tracking-widest text-blue-200/60 uppercase">
                                Location
                            </span>
                            <div className="flex items-center gap-3 text-[15px] font-semibold text-zinc-100">
                                <MapPin size={18} className="text-[#0078d4]" />
                                {SITE_CONFIG.location}
                            </div>
                        </div>
                    </div>
                </div>
            </Tile>

            <Tile size="4x2" className="row-span-3 md:row-span-2">
                <div className="flex h-full flex-col justify-between">
                    <div className="mb-6">
                        <h3 className="mb-2 text-xl font-bold tracking-tight text-white drop-shadow-sm sm:text-3xl">
                            Send a transmission
                        </h3>
                        <p className="text-sm text-zinc-400 sm:text-base">
                            Whether it&apos;s a project inquiry or just a hello,
                            I&apos;d love to hear from you.
                        </p>
                    </div>

                    <form
                        className="mt-auto flex flex-col gap-4"
                        onSubmit={handleSubmit}
                    >
                        <div className="grid gap-4 sm:grid-cols-2">
                            <label className="flex flex-col gap-2 text-sm font-medium text-zinc-300">
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
                            <label className="flex flex-col gap-2 text-sm font-medium text-zinc-300">
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

                        <label className="flex flex-col gap-2 text-sm font-medium text-zinc-300">
                            <span>Company or team</span>
                            <input
                                autoComplete="organization"
                                className={FIELD_CLASS_NAME}
                                name="company"
                                placeholder="Optional"
                                type="text"
                            />
                        </label>

                        <label className="flex flex-col gap-2 text-sm font-medium text-zinc-300">
                            <span>Message</span>
                            <textarea
                                className={`${FIELD_CLASS_NAME} min-h-36 resize-y`}
                                name="message"
                                placeholder="Tell me about the product, the users, and the constraint that matters most."
                                required
                            />
                        </label>

                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0078d4] px-8 py-3.5 font-bold text-white shadow-[0_4px_14px_rgba(0,120,212,0.3)] transition-colors hover:bg-[#0078d4]/85 focus-visible:ring-2 focus-visible:ring-[#68c7ff]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] focus-visible:outline-none"
                            >
                                <Send size={18} strokeWidth={2.5} /> Draft email
                            </button>

                            <p
                                id="contact-feedback"
                                aria-live="polite"
                                className={
                                    feedback.tone === "error"
                                        ? "text-sm text-rose-400"
                                        : "text-sm text-zinc-300"
                                }
                            >
                                {feedback.message ||
                                    "This form opens your mail client with a prefilled draft so it works in a static export."}
                            </p>
                        </div>
                    </form>
                </div>
            </Tile>
        </>
    );
}
