"use client"
import { FormEvent, useState } from "react";

export default function Newsletter() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log("Subscribing:", email);
        setEmail("");
        alert("Thanks for subscribing!");
    };

    return (
        <section className="py-16 px-20 flex items-center justify-center">
            <div className="relative w-full max-w-4xl bg-teal-950 bg-opacity-40 border border-gray-500 rounded-xl p-8 text-center overflow-hidden">
                {/* Black overlay */}
                <div className="absolute inset-0 bg-black/40 pointer-events-none z-0" />

                {/* All your “real” content sits above the overlay */}
                <div className="relative z-10 space-y-6">
                    <h2 className="text-3xl font-semibold text-white">
                        Stay Updated with Brilliant AI
                    </h2>
                    <p className="text-gray-300 max-w-xl mx-auto">
                        Subscribe to our newsletter for the latest AI insights, product updates, and industry news delivered straight to your inbox.
                    </p>

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col sm:flex-row items-center justify-center gap-0"
                    >
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="
                w-full sm:w-80
                px-4 py-3
                bg-transparent
                border border-gray-600 border-r-0
                rounded-l-lg sm:rounded-r-none
                text-white placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent
                transition
              "
                        />
                        <button
                            type="submit"
                            className="
                w-full sm:w-auto
                mt-4 sm:mt-0
                px-6 py-3
                bg-teal-900
                border border-gray-600 border-l-0
                rounded-r-lg sm:rounded-l-none
                text-white font-medium
                hover:opacity-90
                transition
              "
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
