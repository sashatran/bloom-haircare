import {
  Heart,
  Palette,
  Droplets,
  Flower,
  Sparkles,
  ArrowRight,
  Star,
  Leaf,
  ShoppingCart,
  Truck,
  RotateCcw,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import { MobileNav } from "./components/mobile-nav";
import { resolveImage } from "./lib/resolve-image";

/* ───────────── HEADER ───────────── */
function Header() {
  return (
    <header className="relative flex items-center justify-between px-5 py-4 md:px-10 md:py-5 lg:px-20 bg-bg-white">
      <div className="flex items-center gap-2 md:gap-2.5">
        <div className="h-[30px] w-[30px] md:h-9 md:w-9 rounded-full bg-gradient-to-br from-accent-pink to-accent-lavender" />
        <span className="font-heading text-[22px] md:text-[28px] font-bold text-text-dark">
          bloom
        </span>
      </div>
      {/* Full nav — desktop only */}
      <nav className="hidden items-center gap-9 lg:flex">
        <a href="#" className="text-[15px] font-medium text-text-medium hover:text-text-dark transition-colors">Products</a>
        <a href="#" className="text-[15px] font-medium text-text-medium hover:text-text-dark transition-colors">Ingredients</a>
        <a href="#" className="text-[15px] font-medium text-text-medium hover:text-text-dark transition-colors">About Us</a>
        <a href="#" className="text-[15px] font-medium text-text-medium hover:text-text-dark transition-colors">Reviews</a>
        <a
          href="#"
          className="rounded-full bg-accent-pink px-7 py-3 text-[15px] font-semibold text-white hover:opacity-90 transition-opacity"
        >
          Shop Now
        </a>
      </nav>
      {/* Tablet + Mobile nav */}
      <MobileNav />
    </header>
  );
}

/* ───────────── HERO ───────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFAF7] via-bg-pink to-bg-lavender">
      {/* Mobile + Tablet: vertical flow */}
      <div className="flex flex-col items-center gap-8 px-6 py-10 pb-12 md:gap-10 md:px-10 md:py-[60px] lg:hidden">
        {/* Mobile: image first, then text. Tablet: text first, then image */}
        <div className="h-[260px] w-[260px] overflow-hidden rounded-full md:hidden">
          <Image
            src={resolveImage("/images/hero")}
            alt="Beautiful hair"
            width={260}
            height={260}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        <div className="flex flex-col items-center gap-5 md:gap-6 text-center">
          <span className="inline-flex w-fit items-center gap-1.5 md:gap-2 rounded-full bg-bg-pink px-3.5 md:px-[18px] py-1.5 md:py-2 text-[13px] font-semibold text-accent-pink">
            <Sparkles size={16} />
            100% Clean Beauty
          </span>
          <h1 className="font-heading text-4xl md:text-[48px] font-extrabold leading-[1.15] md:leading-[1.1] text-text-dark">
            Hair That Feels Like a Daydream
          </h1>
          <p className="text-[15px] md:text-[17px] leading-relaxed text-text-medium md:max-w-[500px]">
            Pastel-powered formulas that nourish, protect, and make your hair
            impossibly soft. No nasties, just pure bloom.
          </p>
          <div className="flex flex-col w-full items-center gap-3 md:flex-row md:w-auto md:gap-4">
            <a
              href="#"
              className="inline-flex w-full md:w-auto items-center justify-center gap-2.5 rounded-full bg-accent-pink px-8 py-4 md:px-8 md:py-4 text-[15px] md:text-base font-semibold text-white hover:opacity-90 transition-opacity"
            >
              Discover Your Routine
              <ArrowRight size={18} />
            </a>
            <a
              href="#"
              className="inline-flex w-full md:w-auto items-center justify-center rounded-full border-2 border-accent-lavender bg-white px-8 py-4 md:px-8 md:py-4 text-[15px] md:text-base font-semibold text-accent-lavender hover:bg-bg-lavender transition-colors"
            >
              Watch Our Story
            </a>
          </div>
        </div>

        {/* Tablet: image after text */}
        <div className="hidden md:block h-[380px] w-[380px] overflow-hidden rounded-full">
          <Image
            src={resolveImage("/images/hero")}
            alt="Beautiful hair"
            width={380}
            height={380}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        {/* Tablet: inline floating badges */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 rounded-full bg-white px-[18px] py-2.5 shadow-[0_8px_24px_rgba(255,133,162,0.13)]">
            <Leaf size={16} className="text-accent-mint" />
            <span className="text-xs font-semibold text-text-dark">Vegan &amp; Cruelty-Free</span>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-white px-[18px] py-2.5 shadow-[0_8px_24px_rgba(179,157,219,0.13)]">
            <Droplets size={16} className="text-accent-lavender" />
            <span className="text-xs font-semibold text-text-dark">Sulfate-Free</span>
          </div>
        </div>
      </div>

      {/* Desktop: absolute positioned layout */}
      <div className="hidden lg:block relative h-[700px] px-20">
        <div className="relative z-10 flex flex-col gap-7 pt-20 max-w-[580px]">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-bg-pink px-[18px] py-2 text-[13px] font-semibold text-accent-pink">
            <Sparkles size={16} />
            100% Clean Beauty
          </span>
          <h1 className="font-heading text-[62px] font-extrabold leading-[1.1] text-text-dark">
            Hair That Feels Like a Daydream
          </h1>
          <p className="max-w-[480px] text-lg leading-relaxed text-text-medium">
            Pastel-powered formulas that nourish, protect, and make your hair
            impossibly soft. No nasties, just pure bloom.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2.5 rounded-full bg-accent-pink px-9 py-[18px] text-base font-semibold text-white hover:opacity-90 transition-opacity"
            >
              Discover Your Routine
              <ArrowRight size={18} />
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-full border-2 border-accent-lavender bg-white px-9 py-[18px] text-base font-semibold text-accent-lavender hover:bg-bg-lavender transition-colors"
            >
              Watch Our Story
            </a>
          </div>
        </div>

        {/* Hero image + floating badges anchored together */}
        <div className="absolute right-20 top-[70px] w-[clamp(340px,36vw,520px)] aspect-square">
          <div className="h-full w-full overflow-hidden rounded-full">
            <Image
              src={resolveImage("/images/hero")}
              alt="Beautiful hair"
              width={520}
              height={520}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="absolute top-[6%] right-[-12%] flex items-center gap-2 rounded-full bg-white px-[18px] py-2.5 shadow-[0_8px_24px_rgba(255,133,162,0.13)] z-10">
            <Leaf size={16} className="text-accent-mint" />
            <span className="text-xs font-semibold text-text-dark">Vegan &amp; Cruelty-Free</span>
          </div>
          <div className="absolute bottom-[7%] left-[4%] flex items-center gap-2 rounded-full bg-white px-[18px] py-2.5 shadow-[0_8px_24px_rgba(179,157,219,0.13)] z-10">
            <Droplets size={16} className="text-accent-lavender" />
            <span className="text-xs font-semibold text-text-dark">Sulfate-Free</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────── BENEFITS ───────────── */
const benefits = [
  {
    icon: Heart,
    title: "Clean Formulas",
    desc: "No parabens, sulfates, or silicones. Just plant-powered goodness your hair will thank you for.",
    bg: "bg-bg-pink",
    iconBg: "bg-accent-pink",
  },
  {
    icon: Palette,
    title: "Color Safe",
    desc: "Keep your color vibrant wash after wash. Our gentle formulas lock in hue without stripping.",
    bg: "bg-bg-lavender",
    iconBg: "bg-accent-lavender",
  },
  {
    icon: Droplets,
    title: "Deep Hydration",
    desc: "Botanical hyaluronic acid and aloe vera drench every strand from root to tip for all-day moisture.",
    bg: "bg-bg-mint",
    iconBg: "bg-accent-mint",
  },
  {
    icon: Flower,
    title: "Heavenly Scents",
    desc: "Jasmine, peony, vanilla, and citrus blends that turn your shower into a spa moment every day.",
    bg: "bg-bg-peach",
    iconBg: "bg-accent-peach",
  },
];

function Benefits() {
  return (
    <section className="bg-white px-6 py-12 md:px-10 md:py-[60px] lg:px-20 lg:py-20">
      <div className="flex flex-col items-center gap-8 md:gap-10 lg:gap-12">
        <div className="flex flex-col items-center gap-3 md:gap-4 text-center">
          <span className="text-xs md:text-[13px] font-bold tracking-[3px] text-accent-pink">
            WHY BLOOM?
          </span>
          <h2 className="font-heading text-[28px] md:text-4xl lg:text-[44px] font-bold text-text-dark">
            Haircare That Actually Cares
          </h2>
          <p className="max-w-[480px] lg:max-w-[520px] text-sm md:text-base lg:text-[17px] leading-relaxed text-text-medium">
            We obsessed over every ingredient so you can obsess over your hair
            instead.
          </p>
        </div>
        <div className="grid w-full grid-cols-2 gap-3.5 md:gap-5 lg:grid-cols-4 lg:gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className={`flex flex-col items-center gap-3.5 md:gap-4 lg:gap-5 rounded-[20px] md:rounded-3xl ${b.bg} p-5 md:p-7 lg:p-8 text-center`}
            >
              <div
                className={`flex h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 items-center justify-center rounded-full md:rounded-[28px] lg:rounded-[32px] ${b.iconBg}`}
              >
                <b.icon className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-white" />
              </div>
              <h3 className="font-heading text-base md:text-lg lg:text-xl font-bold text-text-dark">
                {b.title}
              </h3>
              <p className="text-xs md:text-[13px] lg:text-sm leading-relaxed text-text-medium">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── PRODUCTS ───────────── */
const products = [
  {
    name: "Petal Soft Shampoo",
    desc: "Rose water & silk proteins",
    tag: "Hydrating",
    price: "$28",
    tagColor: "text-accent-pink",
    tagBg: "bg-bg-pink",
    priceColor: "text-accent-pink",
    cartBg: "bg-accent-pink",
    img: "/images/products/shampoo",
    shadow: "shadow-[0_12px_40px_rgba(255,133,162,0.07)]",
  },
  {
    name: "Cloud Nine Conditioner",
    desc: "Lavender oil & shea butter",
    tag: "Smoothing",
    price: "$32",
    tagColor: "text-accent-lavender",
    tagBg: "bg-bg-lavender",
    priceColor: "text-accent-lavender",
    cartBg: "bg-accent-lavender",
    img: "/images/products/conditioner",
    shadow: "shadow-[0_12px_40px_rgba(179,157,219,0.07)]",
  },
  {
    name: "Miracle Repair Mask",
    desc: "Matcha & avocado oil",
    tag: "Repairing",
    price: "$36",
    tagColor: "text-accent-mint",
    tagBg: "bg-bg-mint",
    priceColor: "text-accent-mint",
    cartBg: "bg-accent-mint",
    img: "/images/products/mask",
    shadow: "shadow-[0_12px_40px_rgba(129,201,149,0.07)]",
  },
  {
    name: "Golden Hour Serum",
    desc: "Argan oil & vitamin E",
    tag: "Shine",
    price: "$24",
    tagColor: "text-accent-peach",
    tagBg: "bg-bg-peach",
    priceColor: "text-accent-peach",
    cartBg: "bg-accent-peach",
    img: "/images/products/serum",
    shadow: "shadow-[0_12px_40px_rgba(255,171,118,0.07)]",
  },
];

function Products() {
  return (
    <section className="bg-gradient-to-b from-white via-bg-pink to-bg-lavender px-6 py-12 md:px-10 md:py-[60px] lg:px-20 lg:py-20">
      <div className="flex flex-col items-center gap-7 md:gap-10 lg:gap-12">
        <div className="flex flex-col items-center gap-2.5 md:gap-4 text-center">
          <span className="text-xs md:text-[13px] font-bold tracking-[3px] text-accent-lavender">
            BESTSELLERS
          </span>
          <h2 className="font-heading text-[28px] md:text-4xl lg:text-[44px] font-bold text-text-dark">
            Meet the Collection
          </h2>
          <p className="text-sm md:text-base lg:text-[17px] text-text-medium">
            Four pastel powerhouses. One dreamy routine.
          </p>
        </div>
        <div className="grid w-full grid-cols-2 gap-3.5 md:gap-5 lg:grid-cols-4 lg:gap-7">
          {products.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col overflow-hidden rounded-[20px] md:rounded-3xl bg-white ${p.shadow}`}
            >
              <div className="relative h-[180px] w-full overflow-hidden sm:h-[240px] md:h-[280px] lg:h-[320px]">
                <Image
                  src={resolveImage(p.img)}
                  alt={p.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="flex flex-col gap-2 md:gap-3 p-4 md:p-5 lg:p-6">
                <span
                  className={`w-fit rounded-full ${p.tagBg} px-3 md:px-3.5 py-1 md:py-1.5 text-[10px] md:text-[11px] font-semibold ${p.tagColor}`}
                >
                  {p.tag}
                </span>
                <h3 className="font-heading text-[15px] md:text-base lg:text-lg font-bold text-text-dark">
                  {p.name}
                </h3>
                <p className="text-xs md:text-sm text-text-medium">{p.desc}</p>
                <div className="flex items-center justify-between">
                  <span
                    className={`font-heading text-lg md:text-xl lg:text-[22px] font-bold ${p.priceColor}`}
                  >
                    {p.price}
                  </span>
                  <button
                    className={`flex h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10 items-center justify-center rounded-full ${p.cartBg} text-white hover:opacity-90 transition-opacity`}
                  >
                    <ShoppingCart className="h-3.5 w-3.5 md:h-4 md:w-4 lg:h-[18px] lg:w-[18px]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── TESTIMONIALS ───────────── */
const testimonials = [
  {
    quote:
      "\u201cMy curls have never been this defined and soft. I literally get compliments every single day now. Bloom changed everything.\u201d",
    name: "Maya Chen",
    role: "Curly Hair Queen",
    bg: "bg-bg-pink",
    avatar: "/images/avatars/maya",
  },
  {
    quote:
      "\u201cI\u2019ve tried every brand. EVERY brand. Bloom is the only one that makes my color-treated hair actually feel healthy again.\u201d",
    name: "Sophia Rivera",
    role: "Color Addict",
    bg: "bg-bg-lavender",
    avatar: "/images/avatars/sophia",
  },
  {
    quote:
      "\u201cThe Golden Hour Serum is liquid gold. My frizzy hair is now silky smooth and it smells like a tropical vacation.\u201d",
    name: "Priya Patel",
    role: "Frizz Fighter",
    bg: "bg-bg-mint",
    avatar: "/images/avatars/priya",
  },
];

function Testimonials() {
  return (
    <section className="bg-white px-6 py-12 md:px-10 md:py-[60px] lg:px-20 lg:py-20">
      <div className="flex flex-col items-center gap-6 md:gap-10 lg:gap-12">
        <div className="flex flex-col items-center gap-3 md:gap-4 text-center">
          <span className="text-xs md:text-[13px] font-bold tracking-[3px] text-accent-coral">
            HAPPY HAIR CLUB
          </span>
          <h2 className="font-heading text-[28px] md:text-4xl lg:text-[44px] font-bold text-text-dark">
            Real People, Real Results
          </h2>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={20}
                className="fill-accent-lemon text-accent-lemon"
              />
            ))}
            <span className="ml-1 text-[15px] font-medium text-text-medium">
              4.9 from 2,847 reviews
            </span>
          </div>
        </div>
        <div className="flex w-full flex-col gap-3.5 md:gap-5 lg:flex-row lg:gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`flex flex-col gap-4 md:gap-5 rounded-[20px] md:rounded-3xl ${t.bg} p-6 md:p-7 lg:p-8`}
            >
              <p className="text-[15px] italic leading-[1.7] text-text-dark">
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src={resolveImage(t.avatar)}
                  alt={t.name}
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-text-dark">
                    {t.name}
                  </p>
                  <p className="text-xs text-text-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── CTA ───────────── */
function CTA() {
  return (
    <section className="flex flex-col items-center gap-6 md:gap-7 lg:gap-8 bg-gradient-to-br from-bg-pink via-bg-lavender via-[70%] to-bg-peach px-6 py-14 md:px-10 md:py-20 lg:px-20 lg:py-[100px] text-center">
      <h2 className="font-heading text-[28px] md:text-[38px] lg:text-[48px] font-bold leading-[1.2] text-text-dark">
        Your hair is about to have its main character moment.
      </h2>
      <p className="max-w-[500px] text-[15px] md:text-[17px] lg:text-lg leading-relaxed text-text-medium">
        Join 50,000+ bloom babes who&apos;ve already made the switch to clean,
        colorful haircare.
      </p>
      <a
        href="#"
        className="inline-flex w-full md:w-auto items-center justify-center gap-2 md:gap-2.5 rounded-full bg-accent-pink px-9 py-[18px] md:px-10 md:py-[18px] lg:px-11 lg:py-5 text-base md:text-base lg:text-[17px] font-semibold text-white shadow-[0_8px_32px_rgba(255,133,162,0.25)] hover:opacity-90 transition-opacity"
      >
        Start Your Bloom Journey
        <Sparkles size={20} />
      </a>
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5 lg:gap-6">
        <span className="flex items-center gap-1 md:gap-1.5 text-[13px] font-medium text-text-medium">
          <Truck size={16} className="text-accent-mint" />
          Free Shipping
        </span>
        <span className="flex items-center gap-1 md:gap-1.5 text-[13px] font-medium text-text-medium">
          <RotateCcw size={16} className="text-accent-lavender" />
          30-Day Returns
        </span>
        <span className="flex items-center gap-1 md:gap-1.5 text-[13px] font-medium text-text-medium">
          <Leaf size={16} className="text-accent-peach" />
          100% Clean
        </span>
      </div>
    </section>
  );
}

/* ───────────── FOOTER ───────────── */
const footerLinks = {
  Shop: ["All Products", "Bundles", "Gift Sets", "Hair Quiz"],
  Learn: ["Ingredients", "Hair Care Tips", "Our Story", "Blog"],
  Company: ["About Us", "Sustainability", "Careers", "Contact"],
};

function Footer() {
  return (
    <footer className="bg-text-dark px-6 py-10 pb-8 md:px-10 md:pt-12 md:pb-8 lg:px-20 lg:pt-[60px] lg:pb-10">
      <div className="flex flex-col gap-8 md:gap-10 lg:gap-12">
        {/* Top */}
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-3 md:gap-4">
            <div className="flex items-center gap-2 md:gap-2.5">
              <div className="h-7 w-7 md:h-8 md:w-8 rounded-full bg-gradient-to-br from-accent-pink to-accent-lavender" />
              <span className="font-heading text-xl md:text-2xl font-bold text-white">
                bloom
              </span>
            </div>
            <p className="text-[13px] md:text-sm leading-relaxed text-text-light max-w-[280px] lg:max-w-[300px]">
              Pastel-powered haircare for humans who want soft, happy, gorgeous
              hair without the guilt.
            </p>
          </div>

          {/* Link columns + Socials */}
          <div className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-0 lg:gap-16">
            <div className="grid grid-cols-3 gap-8 md:gap-12 lg:gap-16">
              {Object.entries(footerLinks).map(([title, links]) => (
                <div key={title} className="flex flex-col gap-2.5 md:gap-3.5">
                  <h4 className="text-sm font-semibold text-white">{title}</h4>
                  {links.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="text-[13px] text-text-light hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-3.5">
              <h4 className="text-sm font-semibold text-white hidden md:block">Follow Us</h4>
              <div className="flex gap-3">
                {[Instagram, Twitter, Youtube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3D3D50] text-text-light hover:text-white transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#3D3D50]" />

        {/* Bottom */}
        <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between md:gap-4">
          <p className="text-[11px] md:text-[13px] text-[#6B7280]">
            2026 Bloom Haircare. All rights reserved.
          </p>
          <div className="flex gap-4 md:gap-6">
            <a href="#" className="text-[13px] text-[#6B7280] hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[13px] text-[#6B7280] hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ───────────── PAGE ───────────── */
export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Benefits />
      <Products />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
