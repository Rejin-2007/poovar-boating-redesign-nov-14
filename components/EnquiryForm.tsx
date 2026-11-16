"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaUser,
  FaPhoneAlt,
  FaCalendarAlt,
  FaShip,
  FaCommentDots,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { pushConversionEvent } from "@/lib/analytics";
import { gsap, useGSAP } from "@/lib/gsap-client";

const packages = [
  
  "Silver Cruise",
  "Golden Cruise",
  "Platinum Cruise",
  "Sunrise Cruise",
  "Lunch Cruise",
  "Sunset Cruise"
];

export default function EnquiryForm({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  const router = useRouter();
  const root = useRef<HTMLElement>(null);
  const Heading = headingLevel;

  useGSAP(() => {
    if (!root.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.fromTo("form", { autoAlpha: 0, y: 20 }, {
      autoAlpha: 1,
      y: 0,
      duration: 0.7,
      ease: "power3.out",
      clearProps: "all",
      scrollTrigger: { trigger: "form", start: "top 90%", once: true },
    });
  }, { scope: root });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    packageName: packages[0],
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic phone validation
    if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\s+/g, ""))) {
      toast.error("Please enter a valid Indian phone number");
      return;
    }

    setLoading(true);

    const now = new Date();
    const formattedTime = now.toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "medium",
      timeZone: "Asia/Kolkata",
    });

    const templateParams = {
      name: formData.name,
      time: formattedTime,
      message: `Phone: ${formData.phone}
Date: ${formData.date}
Package: ${formData.packageName}
Details: ${formData.message}

This Message From Poovar Boating Website`,
    };

    try {
      await emailjs.send(
        "service_smh1c0p",
        "template_22f9sbp",
        templateParams,
        "M40cSVMnA_AywFy2-"
      );

      pushConversionEvent({ event: "enquiry_form_success" });
      toast.success("Thanks — your enquiry has been sent.");

      setFormData({
        name: "",
        phone: "",
        date: "",
        packageName: packages[0],
        message: "",
      });

      router.push("/success");

    } catch {
      toast.error("Failed to send enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full mt-2 px-4 py-3 rounded-xl bg-[#F3EEE8] text-[#17645F] border border-[#17645F]/25 focus:outline-none focus:ring-2 focus:ring-[#17645F]/40 transition";

  return (
    <section
      ref={root}
      aria-labelledby="enquiry-heading"
      className="py-10 px-4"
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg mx-auto bg-[#F3EEE8] border border-[#17645F]/15 rounded-3xl p-6 sm:p-8 shadow-xl"
      >
        {/* Heading */}
        <Heading
          id="enquiry-heading"
          className="text-2xl sm:text-3xl font-semibold text-center mb-2 text-[#17645F]"
        >
          Plan a Poovar boat ride
        </Heading>

        <p className="text-center text-sm text-[#17645F] mb-8">
          Tell us your date and which cruise you’re considering. We’ll get back to you to confirm the details.
        </p>

        {/* Name */}
        <label className="block mb-5 text-sm text-[#17645F]">
          <span className="flex items-center gap-2 font-medium">
            <FaUser /> Full Name
          </span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            className={inputClass}
            placeholder="Enter your full name"
          />
        </label>

        {/* Phone */}
        <label className="block mb-5 text-sm text-[#17645F]">
          <span className="flex items-center gap-2 font-medium">
            <FaPhoneAlt /> Phone Number
          </span>
          <input
            type="tel"
            name="phone"
            required
            inputMode="numeric"
            pattern="[0-9]{10}"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            className={inputClass}
            placeholder="10-digit mobile number"
          />
        </label>

        {/* Date */}
        <label className="block mb-5 text-sm text-[#17645F]">
          <span className="flex items-center gap-2 font-medium">
            <FaCalendarAlt /> Preferred Date
          </span>
          <input
            type="date"
            name="date"
            min={new Date().toISOString().split("T")[0]}
            value={formData.date}
            onChange={handleChange}
            className={inputClass}
          />
        </label>

        {/* Package */}
        <label className="block mb-5 text-sm text-[#17645F]">
          <span className="flex items-center gap-2 font-medium">
            <FaShip /> Select Package
          </span>
          <select
            name="packageName"
            value={formData.packageName}
            onChange={handleChange}
            className={inputClass}
          >
            {packages.map((pkg) => (
              <option key={pkg} value={pkg}>
                {pkg}
              </option>
            ))}
          </select>
        </label>

        {/* Message */}
        <label className="block mb-7 text-sm text-[#17645F]">
          <span className="flex items-center gap-2 font-medium">
            <FaCommentDots /> Enquiry Details
          </span>
          <textarea
            rows={4}
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            className={inputClass}
            placeholder="Group size, preferred time, or a stop you have in mind"
          />
        </label>

        {/* CTA */}
        <button
          disabled={loading}
          type="submit"
          className="button-coral w-full disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Sending…" : "Send enquiry"}
        </button>

        {/* Trust line */}
        <p className="text-center text-xs text-[#17645F] mt-5">
          We’ll follow up about your date and cruise.
        </p>
      </form>
    </section>
  );
}
