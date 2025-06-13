/* eslint-disable @typescript-eslint/no-explicit-any */
// components/ContactForm.tsx
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";
import BrilliantButton from "../widgets/BrilliantButtons";
import SubmissionModal from "../SubmissionModal";

const personalFields = [
    { id: "firstName", label: "First Name", placeholder: "Enter your First Name", type: "text" },
    { id: "lastName", label: "Last Name", placeholder: "Enter your Last Name", type: "text" },
];

const companyFields = [
    {
        id: "company",
        label: "Company Name",
        placeholder: "Enter your Company Name",
        type: "text",
    },
    {
        id: "email",
        label: "Business Email",
        placeholder: "Enter your Email",
        type: "email",
    },
];

const contactFields = [
    { id: "phone", label: "Phone Number", placeholder: "Enter your Contact Number", type: "text" },
];

const servicesList = [
    "AI Web Applications",
    "Machine learning",
    "Process automation",
    "AI system integration",
    "Conversational AI",
    "AI consulting",
    "Data preparation",
    "Other",
];

// Helper: convert bytes to megabytes
function bytesToMB(bytes: number) {
    return bytes / (1024 * 1024);
}

export function ContactForm() {
    // ─── Form‐field state ─────────────────────────────────────────────
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [preferredContact, setPreferredContact] = useState<"email" | "phone" | "both" | "">("");
    const [services, setServices] = useState<string[]>([]);
    const [message, setMessage] = useState("");
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [isSending, setIsSending] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    // ─── Toggle a service checkbox on/off ───────────────────────────
    function toggleService(service: string) {
        setServices((prev) =>
            prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
        );
    }

    // ─── Handle file selection (multiple), reject files > 5 MB ──────
    function handleFilesChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (!e.target.files) return;
        const filesArray = Array.from(e.target.files);

        const MAX_MB = 5;
        const oversized = filesArray.filter((f) => bytesToMB(f.size) > MAX_MB);

        if (oversized.length > 0) {
            alert(
                `The following file(s) exceed ${MAX_MB} MB and will not be attached:\n` +
                oversized
                    .map((f) => `${f.name} (${bytesToMB(f.size).toFixed(2)} MB)`)
                    .join("\n")
            );
        }

        const filtered = filesArray.filter((f) => bytesToMB(f.size) <= MAX_MB);
        setSelectedFiles(filtered);
    }

    // ─── Convert each File to base64 (for attachments) ─────────────
    async function filesToBase64Attachments(
        files: File[]
    ): Promise<{ filename: string; type: string; data: string }[]> {
        const attachments: { filename: string; type: string; data: string }[] = [];

        for (const file of files) {
            const base64 = await new Promise<string>((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => {
                    const result = reader.result as string; // "data:<mime>;base64,AAAA..."
                    const commaIdx = result.indexOf(",");
                    resolve(result.slice(commaIdx + 1)); // strip prefix
                };
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });

            attachments.push({
                filename: file.name,
                type: file.type,
                data: base64,
            });
        }
        return attachments;
    }

    // ─── On form submit: POST to our Next.js API route ───────────────
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setIsSending(true);

        try {
            // 1) Prepare attachments (if any)
            let attachments: Array<{ filename: string; type: string; data: string }> = [];
            if (selectedFiles.length) {
                attachments = await filesToBase64Attachments(selectedFiles);
            }

            // 2) Build the payload for /api/send-email
            const payload: Record<string, any> = {
                firstName,
                lastName,
                email,
                company,
                phone,
                preferredContact,
                services,
                message,
                attachments: attachments.length ? attachments : undefined,
            };

            // 3) Send to /api/send-email (same origin—no CORS issues)
            const res = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const result = await res.json();
            // If server responded with { success: false, error: "..." }, show that
            if (!res.ok || result.success === false) {
                const errMsg = result.error || "Failed to send email";
                throw new Error(errMsg);
            }

            // 4) Clear form on success
            setModalOpen(true);
            setFirstName("");
            setLastName("");
            setCompany("");
            setEmail("");
            setPhone("");
            setPreferredContact("");
            setServices([]);
            setMessage("");
            setSelectedFiles([]);
        
        } catch (err: any) {
            console.error("Error sending email:", err);
            alert("❌ Error sending email: " + (err.message || err));
        } finally {
            setIsSending(false);
        }
    }

    return (
        <section  className="px-6 py-16">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl md:font-bold font-light text-white mb-4">
                        Start The Conversation
                    </h2>
                    <p className="text-gray-300 text-lg">
                        Leave your details and we’ll take it from there. Whether you’re exploring ideas or ready to build,
                        we’ll guide you through the next steps.
                    </p>
                </div>

                {/* Glassmorphic Card */}
                <Card
                    className="
            relative
            bg-[radial-gradient(circle_at_center,rgba(35,213,213,0.6)_0%,rgba(35,213,213,0.1)_0%,rgba(35,213,213,0.04)_100%)]
            bg-opacity-10
            backdrop-blur-[30px]
            border-[1px]
            border-[linear-gradient(90deg,rgba(128,128,128,1)_0%,rgba(35,213,213,1)_50%,rgba(35,213,213,0.1)_60%,rgba(128,128,128,0.85)_100%)]
            rounded-2xl
            shadow-[inset_-20px_4px_120px_-80px_rgba(31,187,187,0.14)]
          "
                >
                    <CardContent className="p-8">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            {/* Personal Name Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {personalFields.map(({ id, label, placeholder, type }) => (
                                    <div key={id} className="space-y-2">
                                        <Label htmlFor={id} className="text-gray-300 text-sm font-medium">
                                            {label}
                                        </Label>
                                        <Input
                                            id={id}
                                            type={type}
                                            placeholder={placeholder}
                                            className="bg-transparent border-slate-600 backdrop-blur-lg text-white placeholder:text-gray-400 rounded-lg h-12"
                                            value={id === "firstName" ? firstName : lastName}
                                            onChange={(e) =>
                                                id === "firstName"
                                                    ? setFirstName(e.target.value)
                                                    : setLastName(e.target.value)
                                            }
                                            required
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Company & Email Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {companyFields.map(({ id, label, placeholder, type }) => (
                                    <div key={id} className="space-y-2">
                                        <Label htmlFor={id} className="text-gray-300 text-sm font-medium">
                                            {label}
                                        </Label>
                                        <Input
                                            id={id}
                                            type={type}
                                            placeholder={placeholder}
                                            className="bg-transparent border-slate-600 backdrop-blur-lg text-white placeholder:text-gray-400 rounded-lg h-12"
                                            value={id === "company" ? company : email}
                                            onChange={(e) =>
                                                id === "company" ? setCompany(e.target.value) : setEmail(e.target.value)
                                            }
                                            required={id === "email"}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Phone & Preferred Contact Method */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {contactFields.map(({ id, label, placeholder, type }) => (
                                    <div key={id} className="space-y-2">
                                        <Label htmlFor={id} className="text-gray-300 text-sm font-medium">
                                            {label}
                                        </Label>
                                        <Input
                                            id={id}
                                            type={type}
                                            placeholder={placeholder}
                                            className="bg-transparent border-slate-600 backdrop-blur-lg text-white placeholder:text-gray-400 rounded-lg h-12"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </div>
                                ))}

                                {/* Preferred Contact Method */}
                                <div className="space-y-2">
                                    <Label className="text-gray-300 text-sm font-medium">
                                        Preferred Contact Method
                                    </Label>
                                    <Select
                                        onValueChange={(val) =>
                                            setPreferredContact(val as "email" | "phone" | "both")
                                        }
                                        value={preferredContact}
                                    >
                                        <SelectTrigger className="bg-transparent w-full border-slate-600 backdrop-blur-lg text-white placeholder:text-gray-400 rounded-lg h-12 py-6 flex items-center">
                                            <SelectValue placeholder="Select an option..." className="text-gray-400" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-teal-900 border-slate-600">
                                            <SelectItem value="email" className="text-white hover:bg-teal-900">
                                                Email
                                            </SelectItem>
                                            <SelectItem value="phone" className="text-white hover:bg-slate-600">
                                                Phone
                                            </SelectItem>
                                            <SelectItem value="both" className="text-white hover:bg-teal-600">
                                                Both
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            {/* Services Interest */}
                            <div className="space-y-4">
                                <Label className="text-gray-300 text-sm font-medium">
                                    What AI services are you interested in?
                                </Label>
                                <div className="grid grid-cols-2 gap-4">
                                    {servicesList.map((service) => (
                                        <div key={service} className="flex items-center space-x-3">
                                            <Checkbox
                                                id={service}
                                                className="border-slate-500 data-[state=checked]:bg-cyan-400 data-[state=checked]:border-cyan-400 rounded"
                                                checked={services.includes(service)}
                                                onCheckedChange={() => toggleService(service)}
                                            />
                                            <Label htmlFor={service} className="text-gray-300 text-sm font-normal">
                                                {service}
                                            </Label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Attachments (only .pdf, .doc, .docx allowed) */}
                            <div className="space-y-2">
                                <Label className="text-gray-300 text-sm font-medium">Attachments</Label>
                                <input
                                    id="attachments"
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    multiple
                                    onChange={handleFilesChange}
                                    className="hidden"
                                />
                                <label htmlFor="attachments" className="w-full flex justify-center">
                                    <div className="w-full border-2 border-dashed border-slate-600 rounded-lg p-4 text-center bg-transparent flex justify-center items-center gap-2 cursor-pointer hover:border-cyan-400">
                                        <FileText className="w-5 h-5 text-white" />
                                        <p className="text-gray-400 text-sm">
                                            <span className="text-cyan-400 font-medium">Add PDF/Word files</span> or drop files here
                                        </p>
                                    </div>
                                </label>

                                {selectedFiles.length > 0 && (
                                    <div className="mt-4 space-y-2">
                                        {selectedFiles.map((file, idx) => {
                                            const key = `${file.name}-${idx}`;
                                            return (
                                                <div
                                                    key={key}
                                                    className="flex items-center space-x-3 bg-transparent border border-slate-600 rounded-lg p-2"
                                                >
                                                    <FileText className="w-6 h-6 text-cyan-400" />
                                                    <span className="text-gray-300 text-sm break-all">{file.name}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>

                            {/* Message */}
                            <div className="space-y-2">
                                <Label htmlFor="message" className="text-gray-300 text-sm font-medium">
                                    Message
                                </Label>
                                <Textarea
                                    id="message"
                                    placeholder="Leave us a message..."
                                    className="
                    bg-transparent border-slate-600 text-white placeholder:text-gray-400
                    min-h-[120px] rounded-lg resize-none backdrop-blur-lg
                  "
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <BrilliantButton
                                type="submit"
                                disabled={isSending}
                                className="w-full bg-gradient-to-r from-cyan-400 to-teal-500 text-white font-semibold py-4 rounded-lg text-base h-12"
                                variant="gradient"
                                hasArrow={false}
                                containerClassName="w-full"
                            >
                                {isSending ? "Sending..." : "Submit Now"}
                            </BrilliantButton>
                        </form>
                    </CardContent>
                </Card>
            </div>
            <SubmissionModal open={modalOpen} onClose={()=>setModalOpen(false)} />
        </section>
    );
}
