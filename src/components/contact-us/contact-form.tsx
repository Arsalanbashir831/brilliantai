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
		<section className="px-6 py-16 ">
			<div className="max-w-2xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
						Start The Conversation
					</h2>
					<p className="text-gray-300 text-lg">
						Leave your details and we&rsquo;ll take it from there. Whether
						you&rsquo;re exploring ideas or ready to build, we&rsquo;ll guide
						you through the next steps.
					</p>
				</div>

				<Card
					className="
  bg-slate-700/10      
  backdrop-blur-lg     
  border
  border-white/20      
  rounded-2xl
  shadow-lg           
">
					<CardContent className="p-8">
						<form className="space-y-6">
							{/* Name Fields */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div className="space-y-2">
									<Label
										htmlFor="firstName"
										className="text-gray-300 text-sm font-medium">
										First Name
									</Label>
									<Input
										id="firstName"
										placeholder="David"
										className="bg-slate-700/10   border-slate-600 backdrop-blur-lg text-white placeholder:text-gray-400 rounded-lg h-12"
									/>
								</div>
								<div className="space-y-2">
									<Label
										htmlFor="lastName"
										className="text-gray-300 text-sm font-medium">
										Last Name
									</Label>
									<Input
										id="lastName"
										placeholder="Johnson"
										className="bg-slate-700/10   border-slate-600 backdrop-blur-lg text-white placeholder:text-gray-400 rounded-lg h-12"
									/>
								</div>
							</div>

							{/* Company and Email */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div className="space-y-2">
									<Label
										htmlFor="company"
										className="text-gray-300 text-sm font-medium">
										Company Name
									</Label>
									<Input
										id="company"
										placeholder="Ex. StaticMania"
										className="bg-slate-700/10   border-slate-600 backdrop-blur-lg text-white placeholder:text-gray-400 rounded-lg h-12"
									/>
								</div>
								<div className="space-y-2">
									<Label
										htmlFor="email"
										className="text-gray-300 text-sm font-medium">
										Business Email
									</Label>
									<Input
										id="email"
										type="email"
										placeholder="example@email.com"
										className="bg-slate-700/10   border-slate-600 backdrop-blur-lg text-white placeholder:text-gray-400 rounded-lg h-12"
									/>
								</div>
							</div>

							{/* Phone and Contact Method */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div className="space-y-2">
									<Label
										htmlFor="phone"
										className="text-gray-300 text-sm font-medium">
										Phone Number
									</Label>
									<Input
										id="phone"
										placeholder="Ex. +44 7911 123456"
										className="bg-slate-700/10   border-slate-600 backdrop-blur-lg text-white placeholder:text-gray-400 rounded-lg h-12"
									/>
								</div>
								<div className="space-y-2">
									<Label className="text-gray-300 text-sm font-medium">
										Preferred Contact Method
									</Label>
									<Select>
										<SelectTrigger className="bg-slate-700/10 w-full  border-slate-600 backdrop-blur-lg text-white placeholder:text-gray-400 rounded-lg  py-6">
											<SelectValue
												placeholder="Select an option..."
												className="text-gray-400"
											/>
										</SelectTrigger>
										<SelectContent className="bg-slate-700 border-slate-600">
											<SelectItem
												value="email"
												className="text-white hover:bg-slate-600">
												Email
											</SelectItem>
											<SelectItem
												value="phone"
												className="text-white hover:bg-slate-600">
												Phone
											</SelectItem>
											<SelectItem
												value="both"
												className="text-white hover:bg-slate-600">
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
											<Label
												htmlFor={service}
												className="text-gray-300 text-sm font-normal">
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
								<div className="border-2 border-dashed border-slate-600 rounded-lg p-4 text-center bg-slate-700/30 flex justify-center items-center gap-2">
									<Upload className="w-5 h-5 text-white" />
									<p className="text-gray-400 text-sm">
										<span className="text-cyan-400 font-medium">Add file</span>{" "}
										or drop files here
									</p>
								</div>
							</div>

							{/* Message */}
							<div className="space-y-2">
								<Label
									htmlFor="message"
									className="text-gray-300 text-sm font-medium">
									Message
								</Label>
								<Textarea
									id="message"
									placeholder="Leave us a message..."
									className="bg-slate-700/10 border-slate-600 text-white placeholder:text-gray-400 min-h-[120px] rounded-lg resize-none"
								/>
							</div>

							{/* Submit Button */}
							{/* <Button className="w-full bg-cyan-400 hover:bg-cyan-500 text-black font-semibold py-4 rounded-lg text-base h-12">
								Submit Now
							</Button> */}
							<BrilliantButton
								className="w-full bg-cyan-400 hover:bg-cyan-500 font-semibold py-4 rounded-lg text-base h-12"
								variant="gradient"
								hasArrow={false}
								containerClassName="w-full">
								Submit Now
							</BrilliantButton>
						</form>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
