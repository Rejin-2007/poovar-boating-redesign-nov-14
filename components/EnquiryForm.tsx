"use client";

import { useRef, useState, type ChangeEvent, type FocusEvent, type FormEvent } from "react";
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
  { value: "Base Cruise", label: "Base Cruise" },
  { value: "Standard Cruise", label: "Standard Cruise (Recommended)" },
  { value: "Classic Cruise", label: "Classic Cruise" },
  { value: "Custom Package", label: "Custom Package (Share your preferences)" },
  { value: "Sunrise Cruise", label: "Sunrise Cruise" },
  { value: "Lunch Cruise", label: "Lunch Cruise" },
  { value: "Sunset Cruise", label: "Sunset Cruise" },
];

type FormValues = {
  name: string;
  phone: string;
  date: string;
  packageName: string;
  message: string;
};

type FormField = keyof FormValues;
type FormErrors = Partial<Record<FormField, string>>;

const initialFormData: FormValues = {
  name: "",
  phone: "",
  date: "",
  packageName: "",
  message: "",
};

function getLocalDateInputValue() {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  return now.toISOString().slice(0, 10);
}

function normalizeIndianPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return digits.length === 12 && digits.startsWith("91") ? digits.slice(2) : digits;
}

function validateField(field: FormField, value: string) {
  if (field === "name" && value.trim().length < 2) {
    return "Enter your name so the team knows who to contact.";
  }

  if (field === "phone" && !/^[6-9]\d{9}$/.test(normalizeIndianPhone(value))) {
    return "Enter a valid 10-digit Indian mobile number.";
  }

  return "";
}

export default function EnquiryForm({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  const router = useRouter();
  const root = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState<FormValues>(initialFormData);
  const [touched, setTouched] = useState<Partial<Record<FormField, boolean>>>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitError, setSubmitError] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const Heading = headingLevel;

  useGSAP(() => {
    if (!root.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timeline = gsap.timeline({
      defaults: { ease: "power3.out" },
      scrollTrigger: {
        trigger: "form",
        start: "top 88%",
        once: true,
      },
    });

    timeline.fromTo("form", { autoAlpha: 0, y: 20 }, {
      autoAlpha: 1,
      y: 0,
      duration: 0.7,
      clearProps: "opacity,visibility,transform",
    });
    timeline.fromTo("[data-form-heading]", { autoAlpha: 0, y: 14 }, {
      autoAlpha: 1,
      y: 0,
      duration: 0.5,
      clearProps: "opacity,visibility,transform",
    }, "-=0.36");
    timeline.fromTo("[data-form-copy]", { autoAlpha: 0, y: 12 }, {
      autoAlpha: 1,
      y: 0,
      duration: 0.45,
      clearProps: "opacity,visibility,transform",
    }, "-=0.25");
    timeline.fromTo("[data-form-field]", { autoAlpha: 0, y: 12 }, {
      autoAlpha: 1,
      y: 0,
      duration: 0.42,
      stagger: 0.075,
      clearProps: "opacity,visibility,transform",
    }, "-=0.18");
    timeline.fromTo("[data-form-submit]", { autoAlpha: 0, y: 10 }, {
      autoAlpha: 1,
      y: 0,
      duration: 0.4,
      clearProps: "opacity,visibility,transform",
    }, "-=0.12");
  }, { scope: root });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const field = event.target.name as FormField;
    const value = event.target.value;
    setFormData((current) => ({ ...current, [field]: value }));
    setSubmitError("");

    if (touched[field] || submitted) {
      setErrors((current) => ({ ...current, [field]: validateField(field, value) }));
    }
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const field = event.target.name as FormField;
    setTouched((current) => ({ ...current, [field]: true }));
    setErrors((current) => ({
      ...current,
      [field]: validateField(field, formData[field]),
    }));
  };

  const visibleError = (field: FormField) => (touched[field] || submitted ? errors[field] : undefined);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loading) return;

    setSubmitted(true);
    const nextErrors: FormErrors = {
      name: validateField("name", formData.name),
      phone: validateField("phone", formData.phone),
    };
    setErrors(nextErrors);

    const firstInvalidField = (Object.keys(nextErrors) as FormField[]).find((field) => nextErrors[field]);
    if (firstInvalidField) {
      root.current?.querySelector<HTMLInputElement>(`[name="${firstInvalidField}"]`)?.focus();
      return;
    }

    setLoading(true);
    setSubmitError("");

    const now = new Date();
    const formattedTime = now.toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "medium",
      timeZone: "Asia/Kolkata",
    });

    const templateParams = {
      name: formData.name.trim(),
      time: formattedTime,
      message: `Phone: ${formData.phone.trim()}
Date: ${formData.date || "Not specified"}
Package: ${formData.packageName || "Not selected"}
Details: ${formData.message.trim() || "Not provided"}

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
      setFormData(initialFormData);
      setTouched({});
      setErrors({});
      setSubmitted(false);
      router.push("/success");
    } catch {
      const message = "We couldn’t send your enquiry just now. Please check your connection and try again.";
      setSubmitError(message);
      toast.error("Failed to send enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "enquiry-form-field mt-2 w-full rounded-xl border px-4 py-3 transition focus:outline-none focus:ring-2 focus:ring-[#fff0dc]/50";
  const errorClass = "border-[#fff0dc] focus:ring-[#fff0dc]/60";

  return (
    <section ref={root} aria-labelledby="enquiry-heading" className="px-4 py-10">
      <form
        onSubmit={handleSubmit}
        noValidate
        aria-busy={loading}
        className="mx-auto w-full max-w-lg rounded-3xl border border-[#fff0dc]/20 bg-[#65090f] p-6 shadow-[0_24px_70px_rgba(48,3,7,0.28)] sm:p-8"
      >
        <Heading
          id="enquiry-heading"
          data-form-heading
          className="mb-2 text-center text-2xl font-semibold text-[#fff0dc] sm:text-3xl"
        >
          Plan a Poovar boat ride
        </Heading>

        <p data-form-copy className="mb-5 text-center text-sm leading-6 text-[#fff0dc]">
          Tell us a little about your trip and we’ll get back to you to confirm the details.
        </p>
        <p data-form-copy className="mb-7 text-center text-xs text-[#fff0dc]/75">
          <span className="font-semibold">*</span> Required. Date, cruise, and trip details are optional.
        </p>

        <label data-form-field htmlFor="enquiry-name" className="mb-5 block text-sm text-[#fff0dc]">
          <span className="flex items-center gap-2 font-medium">
            <FaUser aria-hidden="true" /> Full Name <span aria-hidden="true">*</span>
          </span>
          <input
            id="enquiry-name"
            type="text"
            name="name"
            required
            minLength={2}
            maxLength={80}
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${inputClass} ${visibleError("name") ? errorClass : ""}`}
            placeholder="Enter your full name"
            aria-invalid={Boolean(visibleError("name"))}
            aria-describedby={visibleError("name") ? "enquiry-name-error" : "enquiry-name-help"}
          />
          <span id="enquiry-name-help" className="mt-1 block text-xs text-[#fff0dc]/70">Use at least two characters.</span>
          {visibleError("name") && <span id="enquiry-name-error" className="mt-1 block text-xs font-medium text-[#fff0dc]">{visibleError("name")}</span>}
        </label>

        <label data-form-field htmlFor="enquiry-phone" className="mb-5 block text-sm text-[#fff0dc]">
          <span className="flex items-center gap-2 font-medium">
            <FaPhoneAlt aria-hidden="true" /> Phone Number <span aria-hidden="true">*</span>
          </span>
          <input
            id="enquiry-phone"
            type="tel"
            name="phone"
            required
            inputMode="tel"
            autoComplete="tel"
            maxLength={18}
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${inputClass} ${visibleError("phone") ? errorClass : ""}`}
            placeholder="e.g. 98765 43210"
            aria-invalid={Boolean(visibleError("phone"))}
            aria-describedby={visibleError("phone") ? "enquiry-phone-error" : "enquiry-phone-help"}
          />
          <span id="enquiry-phone-help" className="mt-1 block text-xs text-[#fff0dc]/70">Spaces and a +91 country code are okay.</span>
          {visibleError("phone") && <span id="enquiry-phone-error" className="mt-1 block text-xs font-medium text-[#fff0dc]">{visibleError("phone")}</span>}
        </label>

        <label data-form-field htmlFor="enquiry-date" className="mb-5 block text-sm text-[#fff0dc]">
          <span className="flex items-center gap-2 font-medium">
            <FaCalendarAlt aria-hidden="true" /> Preferred Date <span className="text-xs font-normal text-[#fff0dc]/70">(optional)</span>
          </span>
          <input
            id="enquiry-date"
            type="date"
            name="date"
            min={getLocalDateInputValue()}
            value={formData.date}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputClass}
          />
        </label>

        <label data-form-field htmlFor="enquiry-package" className="mb-5 block text-sm text-[#fff0dc]">
          <span className="flex items-center gap-2 font-medium">
            <FaShip aria-hidden="true" /> Select Package <span className="text-xs font-normal text-[#fff0dc]/70">(optional)</span>
          </span>
          <select
            id="enquiry-package"
            name="packageName"
            value={formData.packageName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputClass}
          >
            <option value="">Choose a cruise package</option>
            {packages.map((pkg) => <option key={pkg.value} value={pkg.value}>{pkg.label}</option>)}
          </select>
        </label>

        <label data-form-field htmlFor="enquiry-message" className="mb-7 block text-sm text-[#fff0dc]">
          <span className="flex items-center gap-2 font-medium">
            <FaCommentDots aria-hidden="true" /> Enquiry Details <span className="text-xs font-normal text-[#fff0dc]/70">(optional)</span>
          </span>
          <textarea
            id="enquiry-message"
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputClass}
            placeholder="Group size, preferred time, or a stop you have in mind"
          />
        </label>

        <div data-form-submit>
          <button
            disabled={loading}
            type="submit"
            className="button-primary w-full gap-2 disabled:cursor-wait disabled:opacity-70"
          >
            {loading && <span aria-hidden="true" className="h-4 w-4 animate-spin rounded-full border-2 border-[#fff0dc]/30 border-t-[#790b13]" />}
            {loading ? "Sending your enquiry…" : "Send my enquiry"}
          </button>

          <p aria-live="polite" className="mt-3 min-h-5 text-center text-xs text-[#fff0dc]/75">
            {loading ? "Please keep this page open while we send your message." : "The team will follow up about your date and cruise."}
          </p>
          {submitError && <p role="alert" className="mt-3 rounded-xl border border-[#fff0dc]/30 bg-[#790b13] px-4 py-3 text-sm leading-6 text-[#fff0dc]">{submitError}</p>}
        </div>
      </form>
    </section>
  );
}
