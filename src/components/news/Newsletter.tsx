"use client"
import { FormEvent, useState } from "react";

export default function Newsletter() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // TODO: replace with your actual subscription logic
        console.log("Subscribing:", email);
        setEmail("");
        alert("Thanks for subscribing!");
    };

    return (
        <section className=" py-16">
            <div className="max-w-3xl mx-auto  bg-opacity-50 border rounded-xl p-8 text-center">
                <h2 className="text-3xl font-semibold text-white mb-4">
                    Stay Updated with Brilliant AI
                </h2>
                <p className="text-gray-300 mb-6">
                    Subscribe to our newsletter for the latest AI insights, product updates, and industry news delivered straight to your inbox.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center gap-4">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="w-full sm:flex-1 px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
                    />
                    <button
                        type="submit"
                        className="px-6 py-2 rounded-lg bg-gradient-to-r from-green-400 via-teal-400 to-green-500 text-white font-medium hover:from-green-500 hover:to-teal-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
}
