/* =====================================================================
 *  DOCTOR SITE CONFIG  —  EDIT THIS FILE FOR EACH NEW CLIENT
 * ---------------------------------------------------------------------
 *  Everything on the website (text, images, services, stats, contact,
 *  social links, etc.) is driven by this single file. To build a site
 *  for a new doctor:
 *    1. Replace the values below with the new doctor's info.
 *    2. Drop their images in the /public folder and update the paths.
 *    3. Done — the layout, design and animations stay identical.
 * ===================================================================== */

import type { LucideIcon } from "lucide-react"
import {
  Stethoscope,
  HeartPulse,
  Activity,
  Syringe,
  Brain,
  Baby,
  ShieldCheck,
  Microscope,
} from "lucide-react"

export type Service = {
  icon: LucideIcon
  title: string
  description: string
}

export type Stat = {
  value: number
  suffix?: string
  label: string
}

export type TimelineItem = {
  period: string
  title: string
  place: string
  description: string
}

export type Testimonial = {
  quote: string
  name: string
  detail: string
  avatar: string
}

export const siteConfig = {
  /* ---------- BRAND / META ---------- */
  doctorName: "Dr. Sarah Mitchell",
  credentials: "MD, FACC",
  specialty: "Cardiologist",
  tagline: "Compassionate, evidence-based heart care for every stage of life.",
  logoInitials: "SM",

  /* ---------- NAV / CONTACT BAR ---------- */
  phone: "+1 (555) 123-4567",
  email: "appointments@drmitchell.com",

  /* ---------- HERO ---------- */
  hero: {
    eyebrow: "Board-Certified Cardiologist",
    heading: "Expert Heart Care You Can Trust",
    subheading:
      "Over 15 years helping patients live longer, healthier lives through personalized cardiovascular care and the latest medical advances.",
    image: "/doctor-portrait.png",
    primaryCta: { label: "Book an Appointment", href: "#contact" },
    secondaryCta: { label: "View Services", href: "#services" },
  },

  /* ---------- ABOUT ---------- */
  about: {
    heading: "About Dr. Mitchell",
    paragraphs: [
      "Dr. Sarah Mitchell is a board-certified cardiologist dedicated to providing comprehensive, patient-centered care. She believes in treating not just the condition, but the whole person.",
      "After completing her training at Johns Hopkins, she has spent her career advancing cardiovascular medicine while building lasting relationships with her patients and their families.",
    ],
    highlights: [
      "Board-Certified by the American Board of Internal Medicine",
      "Fellow of the American College of Cardiology",
      "Published researcher in preventive cardiology",
    ],
    image: "/clinic-interior.png",
  },

  /* ---------- STATS ---------- */
  stats: [
    { value: 15, suffix: "+", label: "Years of Experience" },
    { value: 8000, suffix: "+", label: "Patients Treated" },
    { value: 25, suffix: "+", label: "Awards & Honors" },
    { value: 98, suffix: "%", label: "Patient Satisfaction" },
  ] as Stat[],

  /* ---------- SERVICES ---------- */
  services: {
    heading: "Services & Specialties",
    subheading: "Comprehensive care tailored to your individual health needs.",
    items: [
      {
        icon: HeartPulse,
        title: "Cardiac Consultation",
        description:
          "Thorough evaluation of your heart health with personalized treatment plans.",
      },
      {
        icon: Activity,
        title: "ECG & Stress Testing",
        description:
          "Advanced diagnostic testing to monitor and assess cardiovascular function.",
      },
      {
        icon: ShieldCheck,
        title: "Preventive Cardiology",
        description:
          "Proactive strategies to reduce your risk of heart disease and stroke.",
      },
      {
        icon: Stethoscope,
        title: "Hypertension Management",
        description:
          "Ongoing care and medication management for healthy blood pressure.",
      },
      {
        icon: Microscope,
        title: "Cholesterol Care",
        description:
          "Targeted plans to manage cholesterol and protect long-term heart health.",
      },
      {
        icon: HeartPulse,
        title: "Heart Failure Care",
        description:
          "Specialized, compassionate treatment for chronic heart conditions.",
      },
    ] as Service[],
  },

  /* ---------- EXPERIENCE / EDUCATION TIMELINE ---------- */
  timeline: {
    heading: "Education & Experience",
    subheading: "A career built on dedication, learning, and patient outcomes.",
    items: [
      {
        period: "2009 — Present",
        title: "Senior Cardiologist",
        place: "Riverside Medical Center",
        description:
          "Leading the cardiovascular department and mentoring the next generation of physicians.",
      },
      {
        period: "2006 — 2009",
        title: "Cardiology Fellowship",
        place: "Johns Hopkins Hospital",
        description:
          "Specialized training in interventional and preventive cardiology.",
      },
      {
        period: "2003 — 2006",
        title: "Internal Medicine Residency",
        place: "Massachusetts General Hospital",
        description:
          "Comprehensive residency with a focus on internal and cardiovascular medicine.",
      },
      {
        period: "1999 — 2003",
        title: "Doctor of Medicine (MD)",
        place: "Stanford University School of Medicine",
        description:
          "Graduated with honors, recipient of the Dean's Research Award.",
      },
    ] as TimelineItem[],
  },

  /* ---------- TESTIMONIALS ---------- */
  testimonials: {
    heading: "What Patients Say",
    subheading: "Real stories from the people we care for.",
    items: [
      {
        quote:
          "Dr. Mitchell took the time to truly understand my condition. I've never felt more cared for by a physician.",
        name: "Jennifer R.",
        detail: "Patient since 2018",
        avatar: "/patient-1.png",
      },
      {
        quote:
          "Professional, warm, and incredibly knowledgeable. She explained everything clearly and put my mind at ease.",
        name: "Robert T.",
        detail: "Patient since 2020",
        avatar: "/patient-2.png",
      },
      {
        quote:
          "The entire experience was seamless. I always feel like I'm in the best possible hands here.",
        name: "Amanda K.",
        detail: "Patient since 2021",
        avatar: "/patient-3.png",
      },
    ] as Testimonial[],
  },

  /* ---------- CONTACT (info display only) ---------- */
  contact: {
    heading: "Visit Our Practice",
    subheading:
      "We're here to help. Reach out or stop by during our office hours.",
    address: "1234 Wellness Avenue, Suite 200, Riverside, CA 92501",
    phone: "+1 (555) 123-4567",
    email: "appointments@drmitchell.com",
    hours: [
      { day: "Monday — Friday", time: "8:00 AM — 5:00 PM" },
      { day: "Saturday", time: "9:00 AM — 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps?q=Riverside,CA&output=embed",
  },

  /* ---------- FOOTER ---------- */
  footer: {
    note: "Providing trusted, compassionate care to our community.",
  },
} as const

export type SiteConfig = typeof siteConfig
