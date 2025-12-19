
// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { Menu, X, ChevronDown } from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";

// const services = [
//   { title: "Conference & Event Management", href: "/services/conference-event-management" },
//   { title: "Research Publication & Academic Collaboration", href: "/services/research-publication" },
//   { title: "Corporate Event Management", href: "/services/corporate-event-management" },
//   { title: "Brand Promotion & Award Ceremonies", href: "/services/brand-promotion" },
//   { title: "Workshops & Training Programs", href: "/services/workshops-training" },
//   { title: "Digital Promotion & Event Support", href: "/services/digital-promotion" },
// ];

// const navLinks = [
//   { title: "About Us", href: "/about-us" },
//   { title: "Benefits", href: "/benefits" },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
//   const pathname = usePathname();

//   const isServicesActive = pathname.startsWith("/services");

//   const desktopBase =
//     "text-base font-medium text-muted-foreground transition-all duration-300 ease-in-out border-b-2 border-transparent";
//   const desktopActive = "text-primary font-semibold border-b-primary";
//   const dropdownItemBase =
//     "cursor-pointer px-4 py-3 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-secondary hover:text-primary hover:font-semibold hover:drop-shadow-sm focus:bg-secondary focus:text-primary focus:font-semibold focus:drop-shadow-sm";
//   const dropdownItemActive = "text-primary font-semibold bg-secondary/60";
//   const mobileLinkBase =
//     "rounded-md px-4 py-3 text-base font-medium text-muted-foreground transition-all duration-300 hover:bg-secondary hover:text-primary hover:font-semibold hover:drop-shadow-sm";
//   const mobileLinkActive = "text-primary font-semibold border-l-4 border-primary bg-secondary/50";

//   return (
//     <nav className="sticky top-0 z-50 w-full glass-effect border-b border-border">
//       <div className="container-custom flex h-16 items-center justify-between">
//         {/* Logo */}
//         <Link
//           href="/"
//           className="flex items-center space-x-2 transition-opacity duration-300 hover:opacity-80"
//         >
//           <Image
//             src="/Brainityx_Logo.png"
//             alt="Logo"
//             width={100}
//             height={100}
//             className="h-14 w-auto"
//             priority
//           />
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden items-center space-x-8 md:flex">
//           {/* Services Dropdown */}
//           <DropdownMenu>
//             <DropdownMenuTrigger
//               className={`group flex items-center space-x-1 ${desktopBase} hover:text-primary hover:drop-shadow-sm focus:text-primary focus:drop-shadow-sm ${
//                 isServicesActive ? desktopActive : ""
//               }`}
//             >
//               <span>Services</span>
//               <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
//             </DropdownMenuTrigger>
//             <DropdownMenuContent
//               align="start"
//               className="w-80 animate-in fade-in-0 zoom-in-95 slide-in-from-top-2"
//             >
//               {services.map((service) => {
//                 const active = pathname === service.href;
//                 return (
//                   <DropdownMenuItem
//                     key={service.href}
//                     className={`${dropdownItemBase} ${active ? dropdownItemActive : ""}`}
//                     asChild
//                   >
//                     <Link href={service.href}>{service.title}</Link>
//                   </DropdownMenuItem>
//                 );
//               })}
//             </DropdownMenuContent>
//           </DropdownMenu>

//           {/* Other Nav Links */}
//           {navLinks.map((link) => {
//             const active = pathname === link.href;
//             return (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className={`${desktopBase} hover:text-primary hover:font-semibold hover:drop-shadow-sm focus:text-primary focus:font-semibold focus:drop-shadow-sm ${
//                   active ? desktopActive : ""
//                 }`}
//               >
//                 {link.title}
//               </Link>
//             );
//           })}

//           {/* Get a Quote Button */}
//           <Link
//             href="/quote"
//             className="rounded-md border-2 border-border bg-transparent px-6 py-2 text-base font-semibold text-muted-foreground transition-colors duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
//           >
//             Get a Quote
//           </Link>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <Sheet open={isOpen} onOpenChange={setIsOpen}>
//           <SheetTrigger asChild className="md:hidden">
//             <button
//               className="rounded-md p-2 text-muted-foreground transition-colors duration-300 hover:bg-secondary hover:text-primary active:text-primary focus-visible:text-primary"
//               aria-label="Toggle menu"
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </SheetTrigger>
//           <SheetContent side="right" className="w-80 overflow-y-auto glass-effect">
//             <SheetHeader>
//               <SheetTitle className="text-left text-xl font-bold text-foreground">
//                 Menu
//               </SheetTitle>
//             </SheetHeader>

//             <div className="mt-6 flex flex-col space-y-4">
//               {/* Mobile Services Accordion */}
//               <div className="flex flex-col space-y-2">
//                 <button
//                   onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
//                   className={`flex items-center justify-between rounded-md px-4 py-3 text-base font-medium text-muted-foreground transition-all duration-300 hover:bg-secondary hover:text-primary hover:font-semibold hover:drop-shadow-sm ${
//                     isServicesActive ? "text-primary font-semibold" : ""
//                   }`}
//                 >
//                   <span>Services</span>
//                   <ChevronDown
//                     className={`h-5 w-5 transition-transform duration-300 ${
//                       isMobileServicesOpen ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>

//                 <div
//                   className={`overflow-hidden transition-all duration-300 ease-in-out ${
//                     isMobileServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//                   }`}
//                 >
//                   <div className="ml-4 flex flex-col space-y-1 border-l-2 border-border pl-4">
//                     {services.map((service) => {
//                       const active = pathname === service.href;
//                       return (
//                         <Link
//                           key={service.href}
//                           href={service.href}
//                           onClick={() => setIsOpen(false)}
//                           className={`rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-primary hover:font-semibold hover:drop-shadow-sm ${
//                             active ? "text-primary font-semibold" : ""
//                           }`}
//                         >
//                           {service.title}
//                         </Link>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>

//               {/* Other Mobile Links */}
//               {navLinks.map((link) => {
//                 const active = pathname === link.href;
//                 return (
//                   <Link
//                     key={link.href}
//                     href={link.href}
//                     onClick={() => setIsOpen(false)}
//                     className={`${mobileLinkBase} ${active ? mobileLinkActive : ""}`}
//                   >
//                     {link.title}
//                   </Link>
//                 );
//               })}

//               {/* Mobile Get a Quote Button */}
//               <Link
//                 href="/quote"
//                 onClick={() => setIsOpen(false)}
//                 className="mt-4 rounded-md border-2 px-6 py-3 text-center text-base font-semibold border-primary bg-primary text-primary-foreground"
//               >
//                 Get a Quote
//               </Link>
//             </div>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </nav>
//   );
// }

// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname,useRouter } from "next/navigation";
// import { Menu, X, ChevronDown } from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";

// const services = [
//   { title: "Conference & Event Management", href: "/services/conference-event-management" },
//   { title: "Research Publication & Academic Collaboration", href: "/services/research-publication" },
//   { title: "Corporate Event Management", href: "/services/corporate-event-management" },
//   { title: "Brand Promotion & Award Ceremonies", href: "/services/brand-promotion" },
//   { title: "Workshops & Training Programs", href: "/services/workshops-training" },
//   { title: "Digital Promotion & Event Support", href: "/services/digital-promotion" },
// ];

// const navLinks = [
//   { title: "About Us", href: "/about-us" },
//   { title: "Benefits", href: "/benefits" },
// ];


// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
//   const [isProcessing, setIsProcessing] = useState(false);
//   const pathname = usePathname();
//   const router = useRouter(); // router -> navigation

//   const isServicesActive = pathname.startsWith("/services");

//   const handlePayNowClick = () => {
//     if (isProcessing) return;
//     setIsProcessing(true);
//     // optional: show loader component on this page if you have one
//     router.push("/razorpay/add-amount");
//   };

//   const desktopBase =
//     "text-base font-medium text-muted-foreground transition-all duration-300 ease-in-out border-b-2 border-transparent";
//   const desktopActive = "text-primary font-semibold border-b-primary";
//   const dropdownItemBase =
//     "cursor-pointer px-4 py-3 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-secondary hover:text-primary hover:font-semibold hover:drop-shadow-sm focus:bg-secondary focus:text-primary focus:font-semibold focus:drop-shadow-sm";
//   const dropdownItemActive = "text-primary font-semibold bg-secondary/60";
//   const mobileLinkBase =
//     "rounded-md px-4 py-3 text-base font-medium text-muted-foreground transition-all duration-300 hover:bg-secondary hover:text-primary hover:font-semibold hover:drop-shadow-sm";
//   const mobileLinkActive = "text-primary font-semibold border-l-4 border-primary bg-secondary/50";

//   return (
//     <nav className="sticky top-0 z-50 w-full glass-effect border-b border-border">
//       <div className="container-custom flex h-16 items-center justify-between">
//         {/* Logo */}
//         <Link
//           href="/"
//           className="flex items-center space-x-2 transition-opacity duration-300 hover:opacity-80"
//         >
//           <Image
//             src="/Brainityx_Logo.png"
//             alt="Logo"
//             width={100}
//             height={100}
//             className="h-14 w-auto"
//             priority
//           />
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden items-center space-x-8 md:flex">
//           {/* Services Dropdown */}
//           <DropdownMenu>
//             <DropdownMenuTrigger
//               className={`group flex items-center space-x-1 ${desktopBase} hover:text-primary hover:drop-shadow-sm focus:text-primary focus:drop-shadow-sm ${
//                 isServicesActive ? desktopActive : ""
//               }`}
//             >
//               <span>Services</span>
//               <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
//             </DropdownMenuTrigger>
//             <DropdownMenuContent
//               align="start"
//               className="w-80 animate-in fade-in-0 zoom-in-95 slide-in-from-top-2"
//             >
//               {services.map((service) => {
//                 const active = pathname === service.href;
//                 return (
//                   <DropdownMenuItem
//                     key={service.href}
//                     className={`${dropdownItemBase} ${active ? dropdownItemActive : ""}`}
//                     asChild
//                   >
//                     <Link href={service.href}>{service.title}</Link>
//                   </DropdownMenuItem>
//                 );
//               })}
//             </DropdownMenuContent>
//           </DropdownMenu>

//           {/* Other Nav Links */}
//           {navLinks.map((link) => {
//             const active = pathname === link.href;
//             return (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className={`${desktopBase} hover:text-primary hover:font-semibold hover:drop-shadow-sm focus:text-primary focus:font-semibold focus:drop-shadow-sm ${
//                   active ? desktopActive : ""
//                 }`}
//               >
//                 {link.title}
//               </Link>
//             );
//           })}

//           {/* Get a Quote Button */}
//           <Link
//             href="/quote"
//             className="rounded-md border-2 border-border bg-transparent px-6 py-2 text-base font-semibold text-muted-foreground transition-colors duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
//           >
//             Get a Quote
//           </Link>

//           {/* Desktop Pay Now Button */}
//           <button
//             onClick={handlePayNowClick}
//             disabled={isProcessing}
//             className="rounded-md border-2 border-primary bg-primary px-6 py-2 text-base font-semibold text-primary-foreground transition-colors duration-300 hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             {isProcessing ? "Loading..." : "Pay Now"}
//           </button>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <Sheet open={isOpen} onOpenChange={setIsOpen}>
//           <SheetTrigger asChild className="md:hidden">
//             <button
//               className="rounded-md p-2 text-muted-foreground transition-colors duration-300 hover:bg-secondary hover:text-primary active:text-primary focus-visible:text-primary"
//               aria-label="Toggle menu"
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </SheetTrigger>
//           <SheetContent side="right" className="w-80 overflow-y-auto glass-effect">
//             <SheetHeader>
//               <SheetTitle className="text-left text-xl font-bold text-foreground">
//                 Menu
//               </SheetTitle>
//             </SheetHeader>

//             <div className="mt-6 flex flex-col space-y-4">
//               {/* Mobile Services Accordion */}
//               <div className="flex flex-col space-y-2">
//                 <button
//                   onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
//                   className={`flex items-center justify-between rounded-md px-4 py-3 text-base font-medium text-muted-foreground transition-all duration-300 hover:bg-secondary hover:text-primary hover:font-semibold hover:drop-shadow-sm ${
//                     isServicesActive ? "text-primary font-semibold" : ""
//                   }`}
//                 >
//                   <span>Services</span>
//                   <ChevronDown
//                     className={`h-5 w-5 transition-transform duration-300 ${
//                       isMobileServicesOpen ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>

//                 <div
//                   className={`overflow-hidden transition-all duration-300 ease-in-out ${
//                     isMobileServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//                   }`}
//                 >
//                   <div className="ml-4 flex flex-col space-y-1 border-l-2 border-border pl-4">
//                     {services.map((service) => {
//                       const active = pathname === service.href;
//                       return (
//                         <Link
//                           key={service.href}
//                           href={service.href}
//                           onClick={() => setIsOpen(false)}
//                           className={`rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-primary hover:font-semibold hover:drop-shadow-sm ${
//                             active ? "text-primary font-semibold" : ""
//                           }`}
//                         >
//                           {service.title}
//                         </Link>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>

//               {/* Other Mobile Links */}
//               {navLinks.map((link) => {
//                 const active = pathname === link.href;
//                 return (
//                   <Link
//                     key={link.href}
//                     href={link.href}
//                     onClick={() => setIsOpen(false)}
//                     className={`${mobileLinkBase} ${active ? mobileLinkActive : ""}`}
//                   >
//                     {link.title}
//                   </Link>
//                 );
//               })}

//               {/* Mobile Get a Quote Button */}
//               <Link
//                 href="/quote"
//                 onClick={() => setIsOpen(false)}
//                 className="mt-4 rounded-md border-2 px-6 py-3 text-center text-base font-semibold border-border bg-transparent text-muted-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground"
//               >
//                 Get a Quote
//               </Link>

//               {/* Mobile Pay Now Button */}
//               <button
//                 onClick={() => {
//                   setIsOpen(false);
//                   handlePayNowClick();
//                 }}
//                 disabled={isProcessing}
//                 className="rounded-md border-2 border-primary bg-primary px-6 py-3 text-center text-base font-semibold text-primary-foreground transition-colors duration-300 hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {isProcessing ? "Loading..." : "Pay Now"}
//               </button>
//             </div>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </nav>
//   );
// }
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const services = [
  { title: "Conference & Event Management", href: "/services/conference-event-management" },
  { title: "Research Publication & Academic Collaboration", href: "/services/research-publication" },
  { title: "Corporate Event Management", href: "/services/corporate-event-management" },
  { title: "Brand Promotion & Award Ceremonies", href: "/services/brand-promotion" },
  { title: "Workshops & Training Programs", href: "/services/workshops-training" },
  { title: "Digital Promotion & Event Support", href: "/services/digital-promotion" },
];

const navLinks = [
  { title: "About Us", href: "/about-us" },
  { title: "Benefits", href: "/benefits" },
];

// Client-safe env vars (must be NEXT_PUBLIC_*)
const IndianLink = process.env.NEXT_PUBLIC_RAZORPAY_INDIAN_LINK;
const InternationalLink = process.env.NEXT_PUBLIC_RAZORPAY_INTERNATIONAL_LINK;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  const isServicesActive = pathname.startsWith("/services");

  const desktopBase =
    "text-base font-medium text-muted-foreground transition-all duration-300 ease-in-out border-b-2 border-transparent";
  const desktopActive = "text-primary font-semibold border-b-primary";

  // ✅ This is the styling you already use in Services menu items
  const dropdownItemBase =
    "cursor-pointer px-4 py-3 text-sm font-medium text-muted-foreground transition-all duration-200 " +
    "hover:bg-secondary hover:text-primary hover:font-semibold hover:drop-shadow-sm " +
    "focus:bg-secondary focus:text-primary focus:font-semibold focus:drop-shadow-sm";
  const dropdownItemActive = "text-primary font-semibold bg-secondary/60";

  const mobileLinkBase =
    "rounded-md px-4 py-3 text-base font-medium text-muted-foreground transition-all duration-300 hover:bg-secondary hover:text-primary hover:font-semibold hover:drop-shadow-sm";
  const mobileLinkActive =
    "text-primary font-semibold border-l-4 border-primary bg-secondary/50";

  // ✅ Reuse same panel style as Services dropdown (shadow + border + bg)
  const dropdownPanelClass =
    "w-80 rounded-xl border border-border bg-popover p-2 shadow-[0_18px_40px_rgba(0,0,0,0.12)]";

  // PayNow dropdown links (fallback to "#" if env missing)
  const payNowLinks = [
    { title: "For National Author", href: IndianLink || "#" },
    { title: "For International Author", href: InternationalLink || "#" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full glass-effect border-b border-border">
      <div className="container-custom flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 transition-opacity duration-300 hover:opacity-80"
        >
          <Image
            src="/Brainityx_Logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="h-14 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-8 md:flex">
          {/* Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger
              className={`group flex items-center space-x-1 ${desktopBase} hover:text-primary hover:drop-shadow-sm focus:text-primary focus:drop-shadow-sm ${
                isServicesActive ? desktopActive : ""
              }`}
            >
              <span>Services</span>
              <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="start"
              className={`${dropdownPanelClass} animate-in fade-in-0 zoom-in-95 slide-in-from-top-2`}
            >
              {services.map((service) => {
                const active = pathname === service.href;
                return (
                  <DropdownMenuItem
                    key={service.href}
                    className={`${dropdownItemBase} ${active ? dropdownItemActive : ""}`}
                    asChild
                  >
                    <Link href={service.href}>{service.title}</Link>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Other Nav Links */}
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${desktopBase} hover:text-primary hover:font-semibold hover:drop-shadow-sm focus:text-primary focus:font-semibold focus:drop-shadow-sm ${
                  active ? desktopActive : ""
                }`}
              >
                {link.title}
              </Link>
            );
          })}

          {/* Get a Quote Button */}
          <Link
            href="/quote"
            className="rounded-md border-2 border-border bg-transparent px-6 py-2 text-base font-semibold text-muted-foreground transition-colors duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            Get a Quote
          </Link>

          {/* Pay Now Dropdown (same styling as Services dropdown) */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="group inline-flex items-center gap-2 rounded-md border-2 border-primary bg-primary px-6 py-2 text-base font-semibold text-primary-foreground transition-colors duration-300 hover:bg-primary/90">
                <span>Pay Now</span>
                <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className={`${dropdownPanelClass} w-72 animate-in fade-in-0 zoom-in-95 slide-in-from-top-2`}
            >
              {payNowLinks.map((item) => {
                const isDisabled = item.href === "#";
                const isActive = false; // keep false (external links), but you can customize later

                return (
                  <DropdownMenuItem
                    key={item.title}
                    className={`${dropdownItemBase} ${isActive ? dropdownItemActive : ""} ${
                      isDisabled ? "opacity-60 pointer-events-none" : ""
                    }`}
                    onSelect={(e) => {
                      if (isDisabled) e.preventDefault();
                    }}
                  >
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-between"
                    >
                      <span>{item.title}</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu Toggle */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button
              className="rounded-md p-2 text-muted-foreground transition-colors duration-300 hover:bg-secondary hover:text-primary active:text-primary focus-visible:text-primary"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </SheetTrigger>

          <SheetContent side="right" className="w-80 overflow-y-auto glass-effect">
            <SheetHeader>
              <SheetTitle className="text-left text-xl font-bold text-foreground">
                Menu
              </SheetTitle>
            </SheetHeader>

            <div className="mt-6 flex flex-col space-y-4">
              {/* Mobile Services Accordion */}
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className={`flex items-center justify-between rounded-md px-4 py-3 text-base font-medium text-muted-foreground transition-all duration-300 hover:bg-secondary hover:text-primary hover:font-semibold hover:drop-shadow-sm ${
                    isServicesActive ? "text-primary font-semibold" : ""
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${
                      isMobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isMobileServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="ml-4 flex flex-col space-y-1 border-l-2 border-border pl-4">
                    {services.map((service) => {
                      const active = pathname === service.href;
                      return (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setIsOpen(false)}
                          className={`rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-secondary hover:text-primary hover:font-semibold hover:drop-shadow-sm ${
                            active ? "text-primary font-semibold bg-secondary/60" : ""
                          }`}
                        >
                          {service.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Other Mobile Links */}
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`${mobileLinkBase} ${active ? mobileLinkActive : ""}`}
                  >
                    {link.title}
                  </Link>
                );
              })}

              {/* Mobile Get a Quote Button */}
              <Link
                href="/quote"
                onClick={() => setIsOpen(false)}
                className="mt-4 rounded-md border-2 px-6 py-3 text-center text-base font-semibold border-border bg-transparent text-muted-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                Get a Quote
              </Link>

              {/* Mobile Pay Now Dropdown (same styling as Services dropdown) */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="group inline-flex w-full items-center justify-center gap-2 rounded-md border-2 border-primary bg-primary px-6 py-3 text-center text-base font-semibold text-primary-foreground transition-colors duration-300 hover:bg-primary/90">
                    <span>Pay Now</span>
                    <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  align="end"
                  className={`${dropdownPanelClass} w-72 animate-in fade-in-0 zoom-in-95 slide-in-from-top-2`}
                >
                  {payNowLinks.map((item) => {
                    const isDisabled = item.href === "#";
                    return (
                      <DropdownMenuItem
                        key={item.title}
                        className={`${dropdownItemBase} ${isDisabled ? "opacity-60 pointer-events-none" : ""}`}
                        onSelect={(e) => {
                          if (isDisabled) e.preventDefault();
                          setIsOpen(false);
                        }}
                      >
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex w-full items-center justify-between"
                        >
                          <span>{item.title}</span>
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
