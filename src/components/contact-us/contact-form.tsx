// components/ContactForm.tsx
"use client";

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
import { Upload } from "lucide-react";
import BrilliantButton from "../widgets/BrilliantButtons";

// Static arrays to drive rendering
const personalFields = [
  {
    id: "firstName",
    label: "First Name",
    placeholder: "David",
    type: "text",
  },
  {
    id: "lastName",
    label: "Last Name",
    placeholder: "Johnson",
    type: "text",
  },
];

const companyFields = [
  {
    id: "company",
    label: "Company Name",
    placeholder: "Ex. StaticMania",
    type: "text",
  },
  {
    id: "email",
    label: "Business Email",
    placeholder: "example@email.com",
    type: "email",
  },
];

const contactFields = [
  {
    id: "phone",
    label: "Phone Number",
    placeholder: "Ex. +44 7911 123456",
    type: "text",
  },
  // The second column is the Select, so we’ll treat it specially below
];

const services = [
  "AI Web Applications",
  "Machine learning",
  "Process automation",
  "AI system integration",
  "Conversational AI",
  "AI consulting",
  "Data preparation",
  "Other",
];

export function ContactForm() {




  return (
    <section className="px-6 py-16">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl md:font-bold font-light text-white mb-4">
            Start The Conversation
          </h2>
          <p className="text-gray-300 text-lg">
            Leave your details and we&rsquo;ll take it from there. Whether
            you&rsquo;re exploring ideas or ready to build, we&rsquo;ll guide
            you through the next steps.
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
            <form className="space-y-6">
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
                    />
                  </div>
                ))}
              </div>

              {/* Phone & Preferred Contact Method */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone Field */}
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
                    />
                  </div>
                ))}

                {/* Preferred Contact Method Select */}
                <div className="space-y-2">
                  <Label className="text-gray-300 text-sm font-medium">
                    Preferred Contact Method
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-transparent w-full border-slate-600 backdrop-blur-lg text-white placeholder:text-gray-400 rounded-lg h-12 py-6 flex items-center">
                      <SelectValue
                        placeholder="Select an option..."
                        className="text-gray-400"
                      />
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
                  {services.map((service) => (
                    <div key={service} className="flex items-center space-x-3">
                      <Checkbox
                        id={service}
                        className="border-slate-500 data-[state=checked]:bg-cyan-400 data-[state=checked]:border-cyan-400 rounded"
                      />
                      <Label htmlFor={service} className="text-gray-300 text-sm font-normal">
                        {service}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Attachments */}
              <div className="space-y-2">
                <Label className="text-gray-300 text-sm font-medium">
                  Attachments
                </Label>
                <input
                  id="attachments"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                />
                <label htmlFor="attachments" className="w-full flex justify-center">
                  <div className="w-full border-2 border-dashed border-slate-600 rounded-lg p-4 text-center bg-transparent flex justify-center items-center gap-2 cursor-pointer">
                    <Upload className="w-5 h-5 text-white" />
                    <p className="text-gray-400 text-sm">
                      <span className="text-cyan-400 font-medium">Add file</span>{" "}
                      or drop files here
                    </p>
                  </div>
                </label>
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
                />
              </div>

              {/* Submit Button */}
              <BrilliantButton
                className="w-full bg-gradient-to-r from-cyan-400 to-teal-500 text-white font-semibold py-4 rounded-lg text-base h-12"
                variant="gradient"
                hasArrow={false}
                containerClassName="w-full"
              >
                Submit Now
              </BrilliantButton>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
