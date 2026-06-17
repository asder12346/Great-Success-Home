
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { PropertyCard, MortgageCalculator, FeatureIcon, LogoMarquee, PropertyModal, TestimonialCarousel, EventsCarousel } from './components/Diagrams';
import { Menu, X, Search, Phone, Mail, MapPin, ArrowRight, Home, Key, Users, Star, CheckCircle, Facebook, Instagram, Twitter, ChevronUp, ArrowUp, DollarSign, Percent, Target, BookOpen, Award, Shield, Send, Clock, Filter, Grid, List, ChevronRight, Mic, Volume2, MessageCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import img1 from './IMG-20251111-WA0045 (11).jpg';
import img2 from './IMG-20251111-WA0045 (12).jpg';
import img3 from './IMG-20251111-WA0045 (2).jpg';
import img4 from './IMG-20251111-WA0045 (3).jpg';
import img5 from './IMG-20251111-WA0045 (4).jpg';
import img6 from './IMG-20251111-WA0045 (6).jpg';
import img7 from './IMG-20251111-WA0045 (7).jpg';
import img8 from './IMG-20251111-WA0045 (8).jpg';
import img9 from './IMG-20251111-WA0045 (9).jpg';
import img10 from './IMG-20251111-WA0045.jpg';

import whatsAppImg1 from './WhatsApp-Image-2025-08-06-at-17.48.35_c5d1c179.jpg';
import whatsAppImg2 from './WhatsApp-Image-2025-08-06-at-17.48.36_215c0fe8.jpg';
import whatsAppImg3 from './WhatsApp-Image-2025-08-16-at-21.12.53_d33c1739.jpg';
import peculiarEstateImg1 from './WhatsApp Unknown 2026-05-15 at 4.17.39 PM/WhatsApp Image 2026-05-15 at 4.02.47 PM (1).jpeg';
import peculiarEstateImg2 from './WhatsApp Unknown 2026-05-15 at 4.17.39 PM/WhatsApp Image 2026-05-15 at 4.02.47 PM.jpeg';
import peculiarEstateImg3 from './WhatsApp Unknown 2026-05-15 at 4.17.39 PM/WhatsApp Image 2026-05-15 at 4.02.48 PM (1).jpeg';
import peculiarEstateImg4 from './WhatsApp Unknown 2026-05-15 at 4.17.39 PM/WhatsApp Image 2026-05-15 at 4.02.48 PM.jpeg';
import peculiarEstateImg5 from './WhatsApp Unknown 2026-05-15 at 4.17.39 PM/WhatsApp Image 2026-05-15 at 4.02.49 PM (1).jpeg';
import kubwaSemiDetachedVideo from './WhatsApp Video 2026-05-15 at 4.04.18 PM.mp4';
import lifecampDetachedBqVideo from './BQ.mp4';
import utakoTerraceVideo1 from './111.mp4';
import utakoTerraceVideo2 from './112.mp4';
import kubwaHouseVideo from './kubwahouse.mp4';
import semiDetachedVideo from './semi datached .mp4';
import ogaVideo from './ogavid.mp4';
import detachedDuplexImg from './detached duplex.jpeg';
import companyLogo from './GS HOME.png';
import eidMubarakImg from './eid mubarak.jpeg';
import meetingImg from './meeting.jpeg';
import siteInspectionImg from './site inspection.jpeg';
import launchingImg from './lauching.jpeg';
import officeLaunchWeekImg from './office lauch.jpeg';
import siteInspection1Img from './site inspection1.jpeg';
import galImg from './gal.jpeg';
import galllImg from './galll.jpeg';
import galllllImg from './galllll.jpeg';
import hutuInspectionImg1 from './33.jpeg';
import hutuInspectionImg2 from './34.jpeg';

const NAV_LINKS = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'properties', label: 'Properties' },
    { id: 'agents', label: 'Agents' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'events', label: 'Events' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
];

// Expanded Properties Data based on prompt
const PROPERTIES_LIST = [
    {
        id: 15,
        title: "Semi-Detached Terrace Duplex for Sale",
        location: "Apo Legislative Quarters by Faxx Supermarket, Abuja",
        price: "From ₦250,000,000 - ₦300,000,000 ONO",
        beds: "3-4",
        baths: null,
        sqft: null,
        category: "Semi-Detached Terrace Duplex",
        description: "New sale listing at Apo Legislative Quarters by Faxx Supermarket. Available units include 2 units of 4 bedroom duplexes with a one bedroom basement flat and a room BQ at ₦300m ONO each, plus 2 units of 3 bedroom duplexes with 1 room BQ at ₦250m ONO each. Prices are negotiable and 5% professional fee applies.",
        features: [
            "FCDA C of O title",
            "2 minutes to Garki",
            "Fully tarred road",
            "Tight security and serene estate",
            "4-6 car parking space for each unit",
            "Ample well secured external parking within the estate",
            "Total land size: 1,200sqm",
            "Prices are negotiable",
            "5% professional fee applies"
        ],
        video: semiDetachedVideo,
        images: []
    },
    {
        id: 14,
        title: "Kubwa House",
        location: "Kubwa, FCT Abuja Nigeria",
        price: "₦190,000,000",
        beds: null,
        baths: null,
        sqft: null,
        category: "House",
        description: "Kubwa house available for sale in Kubwa, FCT Abuja Nigeria.",
        video: kubwaHouseVideo,
        images: []
    },
    {
        id: 9,
        title: "Exquisitely Built 4 Bedroom Duplex",
        location: "Peculiar Estate, Lokogoma District, Abuja",
        price: "₦250,000,000 (Negotiable)",
        beds: 4,
        baths: 4,
        sqft: null,
        category: "Duplex",
        description: "Located in a serene and secure estate in Lokogoma District, Abuja, this exquisitely built four-bedroom duplex in Peculiar Estate offers generous living spaces, strong utilities, and practical access from Apo Mechanic, Sunny Vale Junction, and Lokogoma Junction.",
        features: [
            "Exquisitely built four-bedroom duplex",
            "Two rooms self-contained BQ",
            "Self-contained gatehouse",
            "Automatic change over switch",
            "Latest design stamped compound floor",
            "Independent water source (borehole)",
            "Family lounge",
            "Visitors' lounge",
            "Biodigester sewage system",
            "Expansive compound with space for 7 cars",
            "Four minutes drive to tarred road",
            "Thirteen minutes drive from Sunny Vale Junction",
            "Accessible from Apo Mechanic, Sunny Vale Junction, and Lokogoma Junction"
        ],
        images: [peculiarEstateImg1, peculiarEstateImg2, peculiarEstateImg3, peculiarEstateImg4, peculiarEstateImg5]
    },
    {
        id: 10,
        title: "Brand New 4 Bedroom Semi Detached Duplex",
        location: "F01, Kubwa, FCT Abuja",
        price: "₦180,000,000",
        beds: 4,
        baths: 4,
        sqft: null,
        category: "Semi Detached Duplex",
        description: "Brand new tastefully finished four-bedroom semi detached duplex available for outright sale in a well organized estate in F01, Kubwa, FCT Abuja. Perfect for investment and family comfort.",
        features: [
            "4 spacious en suite rooms",
            "Fully fitted modern kitchen",
            "Elegant POP ceiling finish",
            "Large compound with parking space",
            "Balcony and family lounge",
            "24-hour security post",
            "FCDA approved document",
            "Available for outright sale",
            "Visit Suite FT-10 Fourth Floor, Alibro Atrium Mall, 32 A E Ekukinam Street, Utako District, FCT, Abuja"
        ],
        video: kubwaSemiDetachedVideo,
        images: []
    },
    {
        id: 11,
        title: "Brand New Well Finished 4 Bedroom Semi Detached Duplex",
        location: "F01, Kubwa, FCT Abuja",
        price: "₦100,000,000 Net",
        beds: 4,
        baths: 4,
        sqft: null,
        category: "Semi Detached Duplex",
        description: "Brand new well finished four-bedroom semi detached duplex available for outright sale in F01 Kubwa, FCT Abuja. All rooms are en suite, with FCDA approved C of O certificate.",
        features: [
            "Brand new well finished semi detached duplex",
            "4 bedrooms",
            "All rooms en suite",
            "Available for outright sale",
            "FCDA approved C of O certificate",
            "Price is 100M net"
        ],
        images: [detachedDuplexImg]
    },
    {
        id: 12,
        title: "4 Bedroom Fully Detached Duplex with Attached BQ",
        location: "Lifecamp, Abuja",
        price: "₦230,000,000",
        beds: 4,
        baths: 4,
        sqft: null,
        category: "Fully Detached Duplex",
        description: "Tastefully finished four-bedroom fully detached duplex with attached BQ, located in Lifecamp, Abuja. The property comes with FCDA approved C of O certificate.",
        features: [
            "4 bedroom fully detached duplex",
            "Attached BQ",
            "Tastefully finished",
            "Located in Lifecamp",
            "FCDA approved C of O certificate",
            "Price is 230M"
        ],
        video: lifecampDetachedBqVideo,
        images: []
    },
    {
        id: 13,
        title: "Brand New 4 Bedroom Terrace Duplex with Attached BQ",
        location: "Utako District, FCT Abuja",
        price: "₦550,000,000 (Slightly Negotiable)",
        beds: 4,
        baths: 4,
        sqft: null,
        category: "Terrace Duplex",
        description: "Brand new four-bedroom terrace duplex with an attached BQ, available for outright sale in Utako District, FCT Abuja. All rooms are en suite and the property has FCDA approved C of O certificate.",
        features: [
            "Brand new 4 bedroom terrace duplex",
            "Attached BQ",
            "All rooms en suite",
            "Available for outright sale",
            "Located in Utako District, FCT Abuja",
            "FCDA approved C of O certificate",
            "Price is 550M, slightly negotiable"
        ],
        videos: [utakoTerraceVideo1, utakoTerraceVideo2],
        images: []
    },
    {
        id: 1,
        title: "5 bedroom fully detached duplex with a BQ",
        location: "Gwarimpa Main, Abuja",
        price: "₦650,000,000",
        beds: 5,
        baths: 5,
        sqft: 6000,
        category: "Luxury Home",
        description: "A masterpiece of modern architecture located in the heart of Gwarimpa Main. This 5-bedroom fully detached duplex comes with a Boys Quarters (BQ), swimming pool, smart home automation, and exquisite finishings.",
        images: [img1, img2, img3]
    },
    {
        id: 2,
        title: "4 Bedroom Terrace",
        location: "Life Camp FCT, Abuja",
        price: "₦280,000,000",
        beds: 4,
        baths: 4,
        sqft: 3200,
        category: "Terrace",
        description: "Elegant 4-bedroom terrace in the serene environment of Life Camp. Features spacious rooms, fitted kitchen, and 24/7 security.",
        images: [img4, img5]
    },
    {
        id: 3,
        title: "Brand New 4 Bedroom Terrace Duplex",
        location: "Life Camp FCT, Abuja",
        price: "₦230,000,000",
        beds: 4,
        baths: 4,
        sqft: 3000,
        category: "Terrace Duplex",
        description: "Newly built modern terrace duplex offering luxury at an affordable price point. Great for families looking for comfort and style.",
        images: [img6, img7]
    },
    {
        id: 4,
        title: "4 Bedroom duplex with Attached BQ",
        location: "F01, Kubwa, FCT, Abuja",
        price: "₦170,000,000",
        beds: 4,
        baths: 4,
        sqft: 3500,
        category: "Duplex",
        description: "Strategically located in Kubwa, this property offers great value with an attached BQ, ample parking space, and modern interiors.",
        images: [img8, img9]
    },
    {
        id: 5,
        title: "4 Bedroom luxury spacious stand alone",
        location: "Maitama, Abuja",
        price: "₦2,500,000,000",
        beds: 4,
        baths: 4,
        sqft: 8500,
        category: "Luxury Stand-alone",
        description: "The definition of opulence. This stand-alone mansion in Maitama features ultra-modern architecture, private cinema, gym, and lush gardens.",
        images: [img10, img1]
    },
    {
        id: 6,
        title: "Majestic Oak Manor with Views",
        location: "Guzape Main, FCT, Abuja",
        price: "₦580,000,000",
        beds: 5,
        baths: 5,
        sqft: 5000,
        category: "Manor",
        description: "Enjoy breathtaking views of Abuja from this Majestic Oak Manor in Guzape. A perfect blend of nature and luxury living.",
        images: [img2, img3]
    },
    {
        id: 7,
        title: "Luxurious 7-Bedroom Duplex",
        location: "Efab Metropolis Estate, Karsana, FCT",
        price: "₦520,000,000",
        beds: 7,
        baths: 7,
        sqft: 7000,
        category: "Mega Duplex",
        description: "Massive 7-bedroom duplex perfect for large families or corporate guest houses. Located in the secure Efab Metropolis Estate.",
        images: [img4, img5]
    },
    {
        id: 8,
        title: "Exclusively built 7 bedroom",
        location: "Karsana, Gwarinpa, FCT, Abuja",
        price: "₦470,000,000",
        beds: 7,
        baths: 7,
        sqft: 6800,
        category: "Luxury Home",
        description: "Exquisite finishing and attention to detail define this 7-bedroom property. A true gem in the Karsana district.",
        images: [img6, img7]
    }
];

// Combine properties to simulate a fuller list for the properties page
const FULL_PROPERTIES_LIST = [...PROPERTIES_LIST, ...PROPERTIES_LIST.filter((item) => ![9, 10, 11, 12, 13, 14, 15].includes(item.id))].map((item, index) => ({
    ...item,
    id: index + 100 // ensure unique IDs
}));

const ASSISTANT_STARTER_MESSAGE = "Hello, I am Great Success Homes' AI Voice Property Assistant. I can help with currently listed properties, prices, locations, inspections, documentation, and consultant contact details.";
const ASSISTANT_FALLBACK_MESSAGE = "I do not currently have that information on this website. I can connect you with a property consultant or help you book a site inspection.";

const TEAM_MEMBERS = [
    {
        name: "Akachukwu C.J Azubike Esq.",
        role: "Principal & Managing Solicitor",
        image: whatsAppImg1,
        description: "Akachukwu C.J Azubike Esq. is a seasoned Legal Practitioner with vast experience in Litigation, Property and Corporate Practice. He has represented governmental and corporate organizations as well as individuals, with a proven track record of success in well over a decade of active law practice."
    },
    {
        name: "Ifeanyichukwu A. Okoye",
        role: "Managing Director (MD)",
        image: whatsAppImg2,
        description: "Ifeanyichukwu A. Okoye brings a strategic approach to residential matching, ensuring every client finds a home that fits their lifestyle and budget perfectly."
    },
    {
        name: "Okoye K. N Ruth",
        role: "Business Development Executive (BDE)",
        image: whatsAppImg3,
        description: "Okoye K. N Ruth holds a B.Sc in Economics and serves as the Business Development Executive (BDE), driving growth and strategic business opportunities for Great Success Homes."
    }
];

const TESTIMONIALS = [
    {
        name: "James Wilson",
        role: "Property Investor",
        content: "Great Success Homes provided unmatched service. Their attention to detail and market knowledge helped me secure a fantastic investment property.",
        rating: 5
    },
    {
        name: "Elena Rodriguez",
        role: "Homeowner",
        content: "Finding our dream home was effortless. The team listened to our needs and showed us properties that perfectly matched our vision.",
        rating: 5
    },
    {
        name: "David Okafor",
        role: "First-time Buyer",
        content: "I was guided through every step of the process. The transparency and professionalism made me feel confident in my decision.",
        rating: 5
    },
    {
        name: "Fatima Sani",
        role: "Business Owner",
        content: "The team at Great Success Homes made the impossible possible. They found me a luxury villa in Maitama under tight deadlines.",
        rating: 5
    }
];

const EVENTS = [
    {
        title: "Hutu Exclusive Site Inspection",
        date: "May 15, 2026",
        location: "Project Site, Abuja",
        description: "A special site inspection session highlighting Hutu exclusive property opportunities and on-site project progress.",
        image: hutuInspectionImg1
    },
    {
        title: "Official Office Launching",
        date: "Jan 1, 2026",
        location: "Karsana Main Office, FCT",
        description: "The official grand opening of our modern headquarters. A significant milestone in the journey of Great Success Homes.",
        image: launchingImg
    },
    {
        title: "First Week in Office",
        date: "Jan 8, 2026",
        location: "Karsana Main Office, FCT",
        description: "Capturing the excitement and energy as our team settles into our new workspace. Building a future together.",
        image: officeLaunchWeekImg
    },
    {
        title: "Staff Strategy Meetings",
        date: "Jan 15, 2026",
        location: "Conference Room A",
        description: "Regular brainstorming and strategy sessions as we plan for the quarter. Collaboration at its finest.",
        image: meetingImg
    },
    {
        title: "Weekly Site Inspection",
        date: "Every Thursday",
        location: "Various Project Sites",
        description: "Join our engineering and marketing teams as we conduct our weekly progress assessment and quality control checks on all active construction sites.",
        image: siteInspectionImg
    },
    {
        title: "Eid Mubarak Celebration",
        date: "April 2026",
        location: "Community Hall, Abuja",
        description: "Join us as we celebrate the joy of Eid with our community. A festive gathering for all our staff, clients, and partners to share in the blessings.",
        image: eidMubarakImg
    }
];

const GALLERY = [
    {
        url: hutuInspectionImg1,
        title: "Hutu Exclusive Site Inspection",
        category: "Events"
    },
    {
        url: hutuInspectionImg2,
        title: "Hutu Exclusive Site Inspection",
        category: "Events"
    },
    {
        url: launchingImg,
        title: "Office Launching Ceremony",
        category: "Events"
    },
    {
        url: officeLaunchWeekImg,
        title: "First Week Highlights",
        category: "Workplace"
    },
    {
        url: eidMubarakImg,
        title: "Eid Mubarak Celebration",
        category: "Events"
    },
    {
        url: meetingImg,
        title: "Staff Strategy Session",
        category: "Corporate"
    },
    {
        url: siteInspectionImg,
        title: "On-Site View",
        category: "Operations"
    },
    {
        url: siteInspection1Img,
        title: "Site Progress",
        category: "Operations"
    },
    {
        url: galImg,
        title: "Office Environment",
        category: "Workplace"
    },
    {
        url: galllImg,
        title: "Team Collaboration",
        category: "Corporate"
    },
    {
        url: galllllImg,
        title: "Corporate Meeting",
        category: "Corporate"
    }
];

const App: React.FC = () => {
    const [view, setView] = useState('home'); // 'home' | 'properties'
    const [activeSection, setActiveSection] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [showWhatsAppPrompt, setShowWhatsAppPrompt] = useState(false);
    const [showAssistant, setShowAssistant] = useState(false);
    const [assistantQuestion, setAssistantQuestion] = useState('');
    const [assistantAnswer, setAssistantAnswer] = useState(ASSISTANT_STARTER_MESSAGE);
    const [assistantListening, setAssistantListening] = useState(false);
    const [assistantStatus, setAssistantStatus] = useState('Voice and text ready');
    const [selectedProperty, setSelectedProperty] = useState<any>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            setShowScrollTop(window.scrollY > 500);

            if (view === 'home') {
                const sections = NAV_LINKS.map(link => document.getElementById(link.id));
                const scrollPosition = window.scrollY + 150;

                for (let i = sections.length - 1; i >= 0; i--) {
                    const section = sections[i];
                    if (section && section.offsetTop <= scrollPosition) {
                        setActiveSection(NAV_LINKS[i].id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [view]);

    useEffect(() => {
        const timer = window.setTimeout(() => {
            setShowWhatsAppPrompt(true);
        }, 5 * 60 * 1000);

        return () => window.clearTimeout(timer);
    }, []);

    const handleNavClick = (id: string) => {
        setMenuOpen(false);

        if (id === 'properties') {
            setView('properties');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setActiveSection('properties');
            return;
        }

        if (view !== 'home') {
            setView('home');
            // Allow state to update before scrolling
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) {
                    const offset = 80;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = el.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
            }, 100);
        } else {
            const el = document.getElementById(id);
            if (el) {
                const offset = 80;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = el.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const speakAssistantAnswer = (text: string) => {
        if (!('speechSynthesis' in window)) {
            setAssistantStatus('Voice is unavailable on this browser. Showing text answer.');
            return;
        }

        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.94;
        utterance.pitch = 1;
        utterance.lang = 'en-US';
        utterance.onstart = () => setAssistantStatus('Speaking now');
        utterance.onend = () => setAssistantStatus('Voice and text ready');
        utterance.onerror = () => setAssistantStatus('Voice had an issue. Showing text answer.');
        window.speechSynthesis.speak(utterance);
    };

    const getAssistantAnswer = (question: string) => {
        const query = question.toLowerCase();
        const visibleProperties = PROPERTIES_LIST.map((property) => `${property.title} - ${property.location} - ${property.price}`).join('; ');
        const matchedProperty = PROPERTIES_LIST.find((property) => {
            const searchableText = `${property.title} ${property.location} ${property.category}`.toLowerCase();
            return searchableText.split(/[\s,()-]+/).filter((word) => word.length > 3).some((word) => query.includes(word));
        });

        if (query.includes('promotion') || query.includes('offer') || query.includes('discount')) {
            return "I do not currently see any promotion or special offer details listed on this website. Please contact a property consultant to confirm current offers.";
        }

        if (query.includes('investment') || query.includes('invest') || query.includes('land banking')) {
            return "Great Success Homes offers property investment opportunities and land banking. Specific investment terms are not listed here, so a consultant can guide you based on your budget and goals.";
        }

        if (query.includes('available') || query.includes('property') || query.includes('properties')) {
            return `These are the currently listed properties on this website: ${visibleProperties}. Would you like to book a site inspection or make an inquiry?`;
        }

        if (query.includes('price') || query.includes('cost') || query.includes('budget') || query.includes('how much')) {
            if (matchedProperty) {
                return `The current listed price for ${matchedProperty.title} in ${matchedProperty.location} is ${matchedProperty.price}. Prices may be updated, so would you like to schedule a site inspection or speak with a consultant?`;
            }

            return `Here are the prices currently displayed on this website: ${visibleProperties}. Which property would you like to inspect?`;
        }

        if (query.includes('location') || query.includes('where') || query.includes('area')) {
            if (matchedProperty) {
                return `${matchedProperty.title} is listed at ${matchedProperty.location}. Would you like to book a site inspection?`;
            }

            return "Currently listed locations include Apo Legislative Quarters, Kubwa, Lokogoma, Lifecamp, Utako, Gwarimpa, Maitama, Guzape, Karsana, and Efab Metropolis Estate. The office is at Suite FT-10, 4th Floor, Alibro Atrium, No. 32 A. E. Ekukinam Street, Utako District, Abuja.";
        }

        if (query.includes('payment') || query.includes('installment') || query.includes('plan') || query.includes('mortgage')) {
            return "I do not currently see payment plan details listed for these properties. A property consultant can confirm available payment options for the property you choose.";
        }

        if (query.includes('feature') || query.includes('amenities') || query.includes('bedroom') || query.includes('bathroom')) {
            if (matchedProperty) {
                const details = [
                    matchedProperty.beds ? `${matchedProperty.beds} bedrooms` : null,
                    matchedProperty.baths ? `${matchedProperty.baths} bathrooms` : null,
                    matchedProperty.features?.length ? `features include ${matchedProperty.features.join(', ')}` : matchedProperty.description
                ].filter(Boolean).join('; ');

                return `${matchedProperty.title}: ${details}. Would you like to book a site inspection?`;
            }

            return "Please tell me the property name or location so I can check the listed features on this website.";
        }

        if (query.includes('type') || query.includes('duplex') || query.includes('terrace') || query.includes('land') || query.includes('apartment')) {
            return "The website currently lists semi-detached terrace duplexes, houses, duplexes, semi detached duplexes, fully detached duplexes, terrace duplexes, luxury homes, luxury stand-alone homes, manor properties, and mega duplexes. Great Success Homes also offers land sales and land banking services.";
        }

        if (query.includes('inspection') || query.includes('book') || query.includes('visit') || query.includes('tour')) {
            return "You can book a site inspection by completing the inquiry form, using the WhatsApp button, or contacting a property consultant. Which listed property would you like to inspect?";
        }

        if (query.includes('document') || query.includes('documentation') || query.includes('title') || query.includes('c of o') || query.includes('certificate')) {
            if (matchedProperty?.features?.some((feature: string) => feature.toLowerCase().includes('c of o') || feature.toLowerCase().includes('document') || feature.toLowerCase().includes('certificate'))) {
                const documentFeatures = matchedProperty.features.filter((feature: string) => {
                    const lowerFeature = feature.toLowerCase();
                    return lowerFeature.includes('c of o') || lowerFeature.includes('document') || lowerFeature.includes('certificate');
                }).join(', ');

                return `For ${matchedProperty.title}, the listing mentions: ${documentFeatures}. I cannot provide legal advice, but a consultant can help you confirm the documentation.`;
            }

            return "I do not currently have full documentation requirements listed on this website. Some listings mention FCDA approved C of O. Please speak with a property consultant to confirm documents for your chosen property.";
        }

        if (query.includes('agent') || query.includes('contact') || query.includes('phone') || query.includes('whatsapp') || query.includes('email')) {
            return "You can contact Great Success Homes on +2348032750759 or +23483799279. Email info@greatsuccesshomesandproperties.com or greatsuccesshomes@gmail.com. WhatsApp is also available from the floating green button.";
        }

        if (query.includes('ownership') || query.includes('process') || query.includes('buy') || query.includes('purchase')) {
            return "The full ownership process is not detailed on this website. Great Success Homes helps clients with land sales, residential and commercial properties, advisory, and inspections. A consultant can guide you through the next step.";
        }

        return ASSISTANT_FALLBACK_MESSAGE;
    };

    const handleAssistantSubmit = (question: string) => {
        const trimmedQuestion = question.trim();
        const answer = trimmedQuestion ? getAssistantAnswer(trimmedQuestion) : ASSISTANT_STARTER_MESSAGE;
        setAssistantQuestion(trimmedQuestion);
        setAssistantAnswer(answer);
        speakAssistantAnswer(answer);
    };

    const openAssistant = () => {
        setShowAssistant(true);
        setAssistantAnswer(ASSISTANT_STARTER_MESSAGE);
        window.setTimeout(() => speakAssistantAnswer(ASSISTANT_STARTER_MESSAGE), 250);
    };

    const startAssistantListening = () => {
        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

        if (!SpeechRecognition) {
            setAssistantStatus('Voice input is unavailable. Type your question below.');
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.onstart = () => {
            setAssistantListening(true);
            setAssistantStatus('Listening for your question');
        };
        recognition.onresult = (event: any) => {
            const spokenQuestion = event.results?.[0]?.[0]?.transcript || '';
            setAssistantQuestion(spokenQuestion);
            handleAssistantSubmit(spokenQuestion);
        };
        recognition.onerror = () => {
            setAssistantStatus('Voice input had an issue. Type your question below.');
        };
        recognition.onend = () => {
            setAssistantListening(false);
            setAssistantStatus('Voice and text ready');
        };

        recognition.start();
    };

    return (
        <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-gs-green selection:text-white">

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-md py-3 transition-all duration-500">
                <div className="w-full px-4 lg:px-10 flex justify-between items-center">

                    {/* Left Side: Logo */}
                    <div className="flex items-center gap-2 lg:gap-3 cursor-pointer group shrink-0" onClick={() => handleNavClick('home')}>
                        <img src={companyLogo} alt="Great Success Homes Logo" className="w-10 h-10 lg:w-12 lg:h-12" />
                        <div className="block">
                            <div className="font-serif font-bold text-base lg:text-xl leading-none text-slate-900">Great Success</div>
                            <div className="flex items-baseline gap-1 lg:gap-2">
                                <span className="text-[8px] lg:text-xs tracking-[0.2em] font-bold uppercase text-gs-green whitespace-nowrap">Homes</span>
                                <span className="text-[7px] lg:text-[10px] font-medium text-slate-500 whitespace-nowrap">RC 7937708</span>
                            </div>
                        </div>
                    </div>

                    {/* Middle: Desktop Nav Links */}
                    <div className="hidden md:flex flex-1 justify-center px-2">
                        <div className="flex gap-2 lg:gap-8 relative px-4 lg:px-6 py-2 rounded-full border bg-slate-100/50 border-slate-200">
                            {NAV_LINKS.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => handleNavClick(link.id)}
                                    className={`relative px-1 lg:px-2 py-1 text-xs lg:text-sm font-medium transition-colors whitespace-nowrap ${activeSection === link.id ? 'text-gs-green font-bold' : 'text-slate-600 hover:text-gs-green'}`}
                                >
                                    {link.label}
                                    {activeSection === link.id && (
                                        <motion.div
                                            layoutId="nav-underline"
                                            className="absolute left-0 right-0 -bottom-1 h-0.5 bg-gs-gold rounded-full"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: AI Assistant & Mobile Toggle */}
                    <div className="flex items-center gap-2 lg:gap-4 shrink-0">
                        <button
                            onClick={openAssistant}
                            className="hidden md:block bg-gs-green text-white px-4 lg:px-6 py-2 lg:py-2.5 rounded-full text-xs lg:text-sm font-bold hover:bg-gs-gold transition-all shadow-lg hover:shadow-gs-green/30 border border-white/20 transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
                        >
                            AI Property Assistant
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button className="md:hidden z-50 p-2 text-slate-900" onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden"
                    >
                        <div className="flex flex-col gap-6 text-center">
                            {NAV_LINKS.map(link => (
                                <button key={link.id} onClick={() => handleNavClick(link.id)} className="text-xl font-medium text-slate-800 hover:text-gs-green">
                                    {link.label}
                                </button>
                            ))}
                            <button
                                onClick={() => {
                                    setMenuOpen(false);
                                    openAssistant();
                                }}
                                className="bg-gs-green text-white px-6 py-3 rounded-full mt-4 font-bold"
                            >
                                AI Property Assistant
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <main>
                {view === 'home' ? (
                    <>
                        {/* HERO SECTION */}
                        <section id="home" className="relative pb-12">
                            <div className="w-full relative">
                                {/* Hero Container */}
                                <div className="relative w-full h-[600px] lg:h-[750px] overflow-hidden shadow-2xl bg-slate-900 group">
                                    <img
                                        src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                                        alt="Luxury Modern Real Estate in Abuja - Great Success Homes"
                                        className="w-full h-full object-cover opacity-90 scale-105 group-hover:scale-110 transition-transform duration-[20s]"
                                        loading="eager"
                                    />
                                    {/* Darker Overlay for text contrast */}
                                    <div className="absolute inset-0 bg-black/30"></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>

                                    {/* Hero Content Overlay */}
                                    <div className="absolute top-1/3 left-6 lg:left-20 max-w-4xl text-white z-10">
                                        <motion.h1
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8 }}
                                            className="font-serif text-6xl lg:text-8xl font-medium leading-tight mb-4 drop-shadow-lg"
                                        >
                                            We Build <br />
                                            <span className="italic text-gs-gold">Community</span>
                                        </motion.h1>
                                        <motion.p
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: 0.2 }}
                                            className="text-lg text-white/90 leading-relaxed mb-8 max-w-lg font-light drop-shadow-md"
                                        >
                                            Welcome to a world where luxury meets lifestyle. Our handpicked properties offer more than just a place to live.
                                        </motion.p>

                                        {/* CTA Button */}
                                        <motion.button
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: 0.4 }}
                                            onClick={() => handleNavClick('properties')}
                                            className="bg-gs-gold text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-gs-green transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-2"
                                        >
                                            Explore Properties <ArrowRight size={20} />
                                        </motion.button>
                                    </div>

                                    {/* Decoration */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.8, delay: 0.6 }}
                                        className="hidden lg:block absolute bottom-12 right-12 text-white text-right"
                                    >
                                        <p className="font-serif text-4xl font-bold">14k+</p>
                                        <p className="text-sm uppercase tracking-widest opacity-80">Properties</p>
                                    </motion.div>
                                </div>
                            </div>
                        </section>

                        {/* LOGO MARQUEE */}
                        <LogoMarquee />

                        {/* ABOUT US SECTION */}
                        <section id="about" className="py-24 bg-white">
                            <div className="container mx-auto px-6">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                                    {/* Left: Content */}
                                    <div>
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="bg-gs-green/10 text-gs-green px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">About Us</span>
                                        </div>
                                        <h2 className="font-serif text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                                            Why Choose <br /><span className="text-gs-green italic">Great Success?</span>
                                        </h2>
                                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                            Great Success Homes And properties Ltd (RC 7937708) is very determined and committed to making home ownership to her clientele seamless, less cumbersome, and very transparent. Our team of experts are well trained to render a top-notch clientele satisfaction, thereby fostering a long-term business collaboration and referral.
                                        </p>

                                        {/* Services Section */}
                                        <div className="space-y-4 mb-8">
                                            <h4 className="font-bold text-slate-900 border-b border-slate-100 pb-2">Services</h4>
                                            <ul className="list-disc list-inside text-slate-600 space-y-2">
                                                <li>Home ownership</li>
                                                <li>Land ownership</li>
                                                <li>Land Banking</li>
                                            </ul>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-gs-green/30 transition-colors">
                                                <div className="w-10 h-10 bg-gs-green text-white rounded-lg flex items-center justify-center mb-4"><Target size={20} /></div>
                                                <h4 className="font-bold text-slate-900 mb-2">Our Mission</h4>
                                                <p className="text-sm text-slate-600">Creating Homes and fulfilling dreams.</p>
                                            </div>
                                            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-gs-green/30 transition-colors">
                                                <div className="w-10 h-10 bg-gs-gold text-white rounded-lg flex items-center justify-center mb-4"><BookOpen size={20} /></div>
                                                <h4 className="font-bold text-slate-900 mb-2">Our Vision</h4>
                                                <p className="text-sm text-slate-600">To be the most sought-after when it comes to properties ownership in Nigeria.</p>
                                            </div>
                                        </div>


                                    </div>

                                    {/* Right: Images */}
                                    <div className="relative flex justify-center lg:justify-end">
                                        <div className="aspect-[4/5] w-full max-w-sm rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10 group">
                                            <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Professional Real Estate Services in Abuja - Great Success Homes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-gs-green/90 to-transparent"></div>
                                            <div className="absolute bottom-8 left-8 text-white">
                                                <p className="font-serif text-2xl font-bold">RC 7937708</p>
                                                <p className="text-white/80 text-sm">Verified & Trusted</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* NEW: Video & Side-by-Side Image Row */}
                                <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                    {/* Video Column */}
                                    <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl bg-slate-950 shadow-2xl">
                                        <video
                                            src={ogaVideo}
                                            className="aspect-[9/16] w-full object-contain"
                                            controls
                                            playsInline
                                            preload="metadata"
                                            aria-label="Great Success Homes Corporate Overview and Property Showcase"
                                        />
                                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent"></div>
                                        <div className="pointer-events-none absolute bottom-6 left-6 text-white z-10">
                                            <h3 className="font-bold text-xl drop-shadow-md">Our Journey</h3>
                                            <p className="text-white/80 text-sm">Watch how we build dreams</p>
                                        </div>
                                    </div>

                                    {/* Verified Brand Column */}
                                    <div className="relative min-h-[24rem] overflow-hidden rounded-3xl shadow-xl group">
                                        <img
                                            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
                                            alt="Professional Real Estate Services in Abuja - Great Success Homes"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gs-green/95 via-gs-green/35 to-transparent"></div>
                                        <div className="absolute bottom-8 left-8 right-8 text-white">
                                            <p className="mb-2 font-serif text-4xl font-bold drop-shadow-md">RC 7937708</p>
                                            <p className="text-lg font-semibold text-white/90">Verified & Trusted</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Core Values & Propositions (Moved here) */}
                                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-slate-100 pt-16">
                                    <div className="space-y-4">
                                        <h4 className="font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2 text-xl">
                                            <Shield className="text-gs-green" size={24} /> Our Core Values
                                        </h4>
                                        <div className="flex flex-wrap gap-3">
                                            <span className="flex items-center gap-2 px-6 py-3 bg-gs-lightGreen text-gs-green rounded-full text-sm font-bold shadow-sm hover:shadow-md transition-shadow"><Users size={18} /> Openness</span>
                                            <span className="flex items-center gap-2 px-6 py-3 bg-gs-lightGreen text-gs-green rounded-full text-sm font-bold shadow-sm hover:shadow-md transition-shadow"><Award size={18} /> Impeccable customer service</span>
                                            <span className="flex items-center gap-2 px-6 py-3 bg-gs-lightGreen text-gs-green rounded-full text-sm font-bold shadow-sm hover:shadow-md transition-shadow"><CheckCircle size={18} /> Professionalism</span>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2 text-xl">
                                            <Target className="text-gs-gold" size={24} /> Our Core Value Propositions
                                        </h4>
                                        <div className="flex flex-wrap gap-3">
                                            <span className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-100 text-slate-700 rounded-full text-sm font-bold shadow-sm hover:shadow-md transition-shadow"><Shield size={18} /> Integrity</span>
                                            <span className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-100 text-slate-700 rounded-full text-sm font-bold shadow-sm hover:shadow-md transition-shadow"><CheckCircle size={18} /> Honesty</span>
                                            <span className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-100 text-slate-700 rounded-full text-sm font-bold shadow-sm hover:shadow-md transition-shadow"><Award size={18} /> Expertise</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* PROPERTIES SECTION - Featured */}
                        <section id="properties" className="py-24 bg-slate-50">
                            <div className="container mx-auto px-6">
                                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                                    <div>
                                        <span className="text-gs-green font-bold tracking-wider uppercase text-sm mb-2 block">Exclusive Listings</span>
                                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Properties</h2>
                                        <div className="w-24 h-1.5 bg-gs-green rounded-full"></div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                                    {PROPERTIES_LIST.slice(0, 8).map((prop) => (
                                        <PropertyCard
                                            key={prop.id}
                                            {...prop}
                                            onClick={() => setSelectedProperty(prop)}
                                        />
                                    ))}
                                </div>

                                <div className="flex justify-center mt-16">
                                    <button onClick={() => handleNavClick('properties')} className="flex items-center gap-3 bg-gs-green text-white px-10 py-4 rounded-full font-bold hover:bg-gs-gold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                                        View All Properties <ArrowRight size={20} />
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* STATS SECTION */}
                        <section className="py-20 bg-gs-green text-white border-y border-white/10">
                            <div className="container mx-auto px-6">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
                                    <div className="p-4">
                                        <div className="text-5xl font-serif font-bold mb-2">18k+</div>
                                        <div className="text-white/80 text-sm font-bold tracking-wider uppercase">Satisfied Customers</div>
                                    </div>
                                    <div className="p-4">
                                        <div className="text-5xl font-serif font-bold mb-2">17k+</div>
                                        <div className="text-white/80 text-sm font-bold tracking-wider uppercase">Total Partners</div>
                                    </div>
                                    <div className="p-4">
                                        <div className="text-5xl font-serif font-bold mb-2">13+</div>
                                        <div className="text-white/80 text-sm font-bold tracking-wider uppercase">Years Experience</div>
                                    </div>
                                    <div className="p-4">
                                        <div className="text-5xl font-serif font-bold mb-2">14k+</div>
                                        <div className="text-white/80 text-sm font-bold tracking-wider uppercase">Properties Available</div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* MORTGAGE CALCULATOR & WHY CHOOSE US */}
                        <section className="py-24 bg-white relative overflow-hidden">
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#006837 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

                            <div className="container mx-auto px-6">
                                <div className="text-center mb-16">
                                    <h2 className="font-serif text-4xl font-bold text-slate-900 mb-4">Mortgage Calculator</h2>
                                    <p className="text-slate-600">Estimate your mortgage payments easily with our smart calculator tool.</p>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                    <div className="order-2 lg:order-1">
                                        <MortgageCalculator />
                                    </div>
                                    <div className="order-1 lg:order-2">
                                        <div className="grid grid-cols-1 gap-8">
                                            <div className="flex gap-6 items-start">
                                                <div className="p-4 bg-gs-lightGreen rounded-2xl text-gs-green shrink-0">
                                                    <Home size={32} />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Property Financing</h3>
                                                    <p className="text-slate-600 leading-relaxed">We assist in securing the best financing options tailored to your income and needs.</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-6 items-start">
                                                <div className="p-4 bg-gs-lightGreen rounded-2xl text-gs-green shrink-0">
                                                    <Percent size={32} />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Low Interest Rates</h3>
                                                    <p className="text-slate-600 leading-relaxed">Our partners offer competitive interest rates to make your dream home affordable.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* TESTIMONIALS */}
                        <section id="testimonials" className="py-24 bg-gradient-to-br from-gs-green to-gs-darkGreen relative">
                            {/* Yellow Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-gs-gold/20 pointer-events-none"></div>

                            <div className="container mx-auto px-6 relative z-10">
                                <div className="text-center mb-16">
                                    <span className="text-gs-gold font-bold uppercase tracking-wider text-sm mb-2 block">Testimonials</span>
                                    <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">See what our customers <br /> are saying</h2>
                                    <div className="w-20 h-1 bg-gs-gold mx-auto mb-6"></div>
                                </div>

                                <TestimonialCarousel testimonials={TESTIMONIALS} />
                            </div>
                        </section>

                        {/* OUR TEAM */}
                        <section id="agents" className="py-24 bg-white">
                            <div className="container mx-auto px-6">
                                <div className="text-center mb-16">
                                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">Meet The Team</h2>
                                    <p className="text-slate-600 max-w-2xl mx-auto">Our expert team is committed to providing exceptional services and guidance.</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                                    {TEAM_MEMBERS.map((member, i) => (
                                        <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 transform hover:-translate-y-2">
                                            <div className="relative aspect-square overflow-hidden bg-slate-200">
                                                <img
                                                    src={member.image}
                                                    alt={`${member.name} - ${member.role} at Great Success Homes, Abuja`}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                                                    loading="lazy"
                                                />
                                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                                                    <button className="p-3 bg-white text-slate-900 rounded-full hover:bg-gs-gold hover:text-white transition-colors shadow-lg"><Phone size={20} /></button>
                                                    <button className="p-3 bg-white text-slate-900 rounded-full hover:bg-gs-gold hover:text-white transition-colors shadow-lg"><Mail size={20} /></button>
                                                </div>
                                            </div>
                                            <div className="p-8 text-center">
                                                <h4 className="font-serif text-2xl font-bold text-slate-900 mb-1">{member.name}</h4>
                                                <p className="text-gs-green font-bold text-sm uppercase tracking-wide mb-4">{member.role}</p>
                                                <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4 mt-4">
                                                    {member.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* BANNER CTA - LIST YOUR PROPERTY */}
                        <section className="py-24 bg-gs-green relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gs-gold/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

                            <div className="container mx-auto px-6 relative z-10 text-center">
                                <span className="text-gs-gold font-bold tracking-wider uppercase text-sm mb-4 block">Grow Your Investment</span>
                                <h2 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-8 drop-shadow-md">List your property today!</h2>
                                <p className="text-white/90 text-xl mb-12 max-w-2xl mx-auto font-light">Connect with potential buyers effortlessly and quickly. Get Expert Broker Consultation.</p>
                                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                    <button
                                        onClick={() => handleNavClick('contact')}
                                        className="bg-gs-gold text-slate-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-gs-green transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2"
                                    >
                                        List Your Property <ArrowRight size={20} />
                                    </button>
                                    <button
                                        onClick={() => handleNavClick('contact')}
                                        className="bg-white text-gs-green border-2 border-white px-10 py-5 rounded-full font-bold text-lg hover:bg-transparent hover:text-white transition-all shadow-xl hover:-translate-y-1"
                                    >
                                        Consult Now
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* EVENTS SECTION */}
                        <section id="events" className="py-24 bg-white overflow-hidden">
                            <div className="container mx-auto px-6">
                                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                                    <div className="max-w-2xl">
                                        <span className="text-gs-green font-bold tracking-wider uppercase text-sm mb-3 block">Upcoming Events</span>
                                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                                            Building <span className="text-gs-green italic">Community</span> through Excellence
                                        </h2>
                                        <p className="text-slate-600 text-lg leading-relaxed">
                                            Stay updated with our latest events, seminars, and community gatherings designed to bring our clients and partners closer together.
                                        </p>
                                    </div>
                                </div>
                                
                                <EventsCarousel events={EVENTS} />
                            </div>
                        </section>

                        {/* GALLERY SECTION */}
                        <section id="gallery" className="py-24 bg-slate-50">
                            <div className="container mx-auto px-6">
                                <div className="text-center mb-16">
                                    <span className="text-gs-green font-bold uppercase tracking-wider text-sm mb-3 block">Perspective</span>
                                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our <span className="text-gs-green italic">Gallery</span></h2>
                                    <div className="w-20 h-1.5 bg-gs-gold mx-auto rounded-full"></div>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {GALLERY.map((item, idx) => (
                                        <motion.div 
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                                            className="group relative overflow-hidden rounded-3xl aspect-[4/3] shadow-lg cursor-pointer"
                                        >
                                            <img src={item.url} alt={`${item.title} - Great Success Homes Abuja`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                                <span className="text-gs-gold text-xs font-bold uppercase tracking-widest mb-2">{item.category}</span>
                                                <h4 className="text-white text-xl font-bold">{item.title}</h4>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* CONTACT SECTION - IMPROVED SIDE BY SIDE */}
                        <section id="contact" className="py-24 bg-slate-50 relative">
                            {/* Subtle Pattern */}
                            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(45deg, #006837 25%, transparent 25%, transparent 50%, #006837 50%, #006837 75%, transparent 75%, transparent)', backgroundSize: '20px 20px' }}></div>

                            <div className="container mx-auto px-6 relative z-10">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                                    {/* Left: Contact Info */}
                                    <div className="flex flex-col justify-center h-full">
                                        <span className="text-gs-green font-bold uppercase tracking-wider text-sm mb-2 block">Get in Touch</span>
                                        <h2 className="font-serif text-4xl font-bold text-slate-900 mb-6">Let's discuss your <br />dream property</h2>
                                        <p className="text-slate-600 mb-10 leading-relaxed text-lg max-w-lg">
                                            Whether you're looking to buy, sell, or rent, our team is here to help you every step of the way. Visit us at our office or send a message.
                                        </p>

                                        <div className="space-y-6">
                                            <div className="flex items-start gap-5 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-gs-green/50 transition-all group hover:shadow-md hover:-translate-y-1">
                                                <div className="p-4 bg-gs-green/10 rounded-full text-gs-green group-hover:bg-gs-green group-hover:text-white transition-colors shrink-0"><MapPin size={24} /></div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900 text-lg mb-1">Our Headquarters</h4>
                                                    <p className="text-slate-600 leading-relaxed">SUITE FT-10, 4TH FLOOR, ALIBRO<br />ATRIUM, NO.32 A.E. EKUKINAM STREET,<br />UTAKO DISTRICT, ABUJA.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-5 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-gs-green/50 transition-all group hover:shadow-md hover:-translate-y-1">
                                                <div className="p-4 bg-gs-green/10 rounded-full text-gs-green group-hover:bg-gs-green group-hover:text-white transition-colors shrink-0"><Phone size={24} /></div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900 text-lg mb-1">Phone Number</h4>
                                                    <p className="text-slate-600 leading-relaxed">+2348032750759, +23483799279</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-5 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-gs-green/50 transition-all group hover:shadow-md hover:-translate-y-1">
                                                <div className="p-4 bg-gs-green/10 rounded-full text-gs-green group-hover:bg-gs-green group-hover:text-white transition-colors shrink-0"><Mail size={24} /></div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900 text-lg mb-1">Email Address</h4>
                                                    <p className="text-slate-600 leading-relaxed">info@greatsuccesshomesandproperties.com<br />greatsuccesshomes@gmail.com</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right: Contact Form */}
                                    <div className="bg-white p-4 md:p-6 rounded-3xl shadow-2xl border-t-8 border-gs-gold relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-gs-green/5 rounded-bl-full pointer-events-none"></div>
                                        <h3 className="font-serif text-2xl font-bold text-slate-900 mb-6 px-4 pt-4">Send us a message</h3>
                                        <div className="relative z-10 h-[44rem] overflow-hidden rounded-2xl border border-slate-100 bg-slate-50">
                                            <iframe
                                                src="https://docs.google.com/forms/d/e/1FAIpQLSfMSHebKU_oQIvkb-UWaGoGwXQ7O0VQJJuvV2jiTTUHa5GVfg/viewform?embedded=true"
                                                width="640"
                                                height="961"
                                                frameBorder="0"
                                                marginHeight={0}
                                                marginWidth={0}
                                                title="Great Success Homes Contact Form"
                                                className="h-full w-full"
                                            >
                                                Loading...
                                            </iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                ) : (
                    /* PROPERTIES PAGE VIEW */
                    <section className="pt-32 pb-24 bg-slate-50 min-h-screen">
                        <div className="container mx-auto px-6">
                            {/* Page Header */}
                            <div className="text-center mb-12">
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="font-serif text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
                                >
                                    Properties Listing
                                </motion.h1>
                                <p className="text-slate-600 max-w-2xl mx-auto">
                                    Explore our comprehensive collection of premium properties. From luxury villas to modern apartments, find your perfect home today.
                                </p>
                            </div>

                            {/* Filter Bar */}
                            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 mb-12 flex flex-col md:flex-row gap-4 justify-between items-center">
                                <div className="flex gap-4 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
                                    <button className="flex items-center gap-2 px-6 py-3 bg-gs-green text-white rounded-xl font-bold text-sm whitespace-nowrap shadow-lg hover:bg-gs-darkGreen transition-colors">
                                        <Grid size={18} /> All Properties
                                    </button>
                                    <button className="flex items-center gap-2 px-6 py-3 bg-slate-50 text-slate-600 hover:bg-gs-gold hover:text-white rounded-xl font-bold text-sm border border-slate-200 whitespace-nowrap transition-colors">
                                        Luxury Homes
                                    </button>
                                    <button className="flex items-center gap-2 px-6 py-3 bg-slate-50 text-slate-600 hover:bg-gs-gold hover:text-white rounded-xl font-bold text-sm border border-slate-200 whitespace-nowrap transition-colors">
                                        Counslutants
                                    </button>
                                    <button className="flex items-center gap-2 px-6 py-3 bg-slate-50 text-slate-600 hover:bg-gs-gold hover:text-white rounded-xl font-bold text-sm border border-slate-200 whitespace-nowrap transition-colors">
                                        Apartments
                                    </button>
                                    <button className="flex items-center gap-2 px-6 py-3 bg-slate-50 text-slate-600 hover:bg-gs-gold hover:text-white rounded-xl font-bold text-sm border border-slate-200 whitespace-nowrap transition-colors">
                                        Villas
                                    </button>
                                    <button className="flex items-center gap-2 px-6 py-3 bg-slate-50 text-slate-600 hover:bg-gs-gold hover:text-white rounded-xl font-bold text-sm border border-slate-200 whitespace-nowrap transition-colors">
                                        Offices
                                    </button>
                                </div>
                                <div className="flex items-center gap-3 w-full md:w-auto">
                                    <span className="text-sm font-bold text-slate-500 whitespace-nowrap">Sort By:</span>
                                    <select className="bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-xl focus:ring-gs-green focus:border-gs-green block w-full p-3 font-bold outline-none cursor-pointer">
                                        <option>Newest Listed</option>
                                        <option>Price: Low to High</option>
                                        <option>Price: High to Low</option>
                                    </select>
                                    <button className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 hover:bg-gs-gold hover:text-white transition-colors">
                                        <Filter size={20} />
                                    </button>
                                </div>
                            </div>

                            {/* Property Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                                {FULL_PROPERTIES_LIST.map((prop) => (
                                    <PropertyCard
                                        key={prop.id}
                                        {...prop}
                                        onClick={() => setSelectedProperty(prop)}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>

            <footer className="bg-slate-900 text-white py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        {/* Column 1: About */}
                        <div>
                            <h3 className="font-serif text-xl font-bold mb-4">Great Success Homes</h3>
                            <p className="text-slate-400 leading-relaxed">Your trusted partner in finding the perfect property. We are committed to making home ownership seamless and transparent.</p>
                        </div>
                        {/* Column 2: Quick Links */}
                        <div>
                            <h3 className="font-bold mb-4">Quick Links</h3>
                            <ul className="space-y-2 text-slate-400">
                                <li><a href="#about" className="hover:text-gs-gold transition-colors">About Us</a></li>
                                <li><a href="#properties" className="hover:text-gs-gold transition-colors">Properties</a></li>
                                <li><a href="#agents" className="hover:text-gs-gold transition-colors">Our Agents</a></li>
                                <li><a href="#contact" className="hover:text-gs-gold transition-colors">Contact</a></li>
                            </ul>
                        </div>
                        {/* Column 3: Contact Info */}
                        <div>
                            <h3 className="font-bold mb-4">Contact Us</h3>
                            <ul className="space-y-2 text-slate-400">
                                <li className="flex items-center gap-2 max-w-[250px]"><MapPin size={16} className="shrink-0" /> SUITE FT-10, 4TH FLOOR, ALIBRO ATRIUM, NO.32 A.E. EKUKINAM STREET, UTAKO DISTRICT, ABUJA.</li>
                                <li className="flex items-center gap-2"><Mail size={16} /> info@greatsuccesshomesandproperties.com</li>
                                <li className="flex items-center gap-2 ml-6 text-sm opacity-80">greatsuccesshomes@gmail.com</li>
                                <li className="flex items-center gap-2"><Phone size={16} /> +2348032750759</li>
                            </ul>
                        </div>
                        {/* Column 4: Social Media */}
                        <div>
                            <h3 className="font-bold mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="https://www.instagram.com/greatsuccesshomespropertiesltd?igsh=MTl3c3N4bTcwcjNvZA==" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-700 rounded-full hover:bg-gs-gold transition-colors"><Instagram size={20} /></a>
                                <a href="https://www.facebook.com/share/1D6EqA9wQf/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-700 rounded-full hover:bg-gs-gold transition-colors"><Facebook size={20} /></a>
                                <a href="https://x.com/SuccessAnd89144?t=vr80tLbQfFMH0CjHSMIKAw&s=09" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-700 rounded-full hover:bg-gs-gold transition-colors"><Twitter size={20} /></a>
                                <a href="https://www.tiktok.com/@iamgreatsuccesshomes?_r=1&_t=ZS-91hJ5TP3Xaz" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-700 rounded-full hover:bg-gs-gold transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12a4 4 0 1 0 4 4V8a8 8 0 1 0-8 8" /></svg></a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 border-t border-slate-700 pt-8 text-center text-slate-500">
                        <p>&copy; {new Date().getFullYear()} Great Success Homes. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>

            {/* Scroll To Top Button */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        onClick={scrollToTop}
                        className="fixed bottom-28 right-6 md:right-8 z-50 bg-gs-gold text-white p-4 rounded-full shadow-2xl hover:bg-gs-green transition-colors hover:-translate-y-1"
                    >
                        <ArrowUp size={24} />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.link/uaafhw"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_18px_40px_rgba(37,211,102,0.35)] ring-4 ring-white/90 hover:bg-[#128C7E] transition-all duration-300 hover:-translate-y-1 hover:scale-105 group flex items-center justify-center"
                aria-label="Chat with us on WhatsApp"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
            </a>

            <AnimatePresence>
                {showWhatsAppPrompt && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/45 px-4 backdrop-blur-sm"
                        onClick={() => setShowWhatsAppPrompt(false)}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 18, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 12, scale: 0.96 }}
                            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-[0_28px_80px_rgba(15,23,42,0.28)]"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#25D366] via-gs-green to-gs-gold"></div>
                            <button
                                onClick={() => setShowWhatsAppPrompt(false)}
                                className="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                                aria-label="Close WhatsApp message prompt"
                            >
                                <X size={18} />
                            </button>
                            <div className="p-7 pt-9 text-center">
                                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-xl shadow-emerald-500/25">
                                    <MessageCircle size={30} />
                                </div>
                                <h3 className="mb-2 font-serif text-2xl font-bold text-slate-900">Message us on WhatsApp</h3>
                                <p className="mx-auto mb-6 max-w-xs text-sm leading-relaxed text-slate-600">
                                    Speak with a consultant about available properties, site inspections, prices, and current offers.
                                </p>
                                <a
                                    href="https://wa.link/uaafhw"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 transition-colors hover:bg-[#128C7E]"
                                >
                                    Message on WhatsApp <ArrowRight size={16} />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showAssistant && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/55 px-4 backdrop-blur-sm"
                        onClick={() => {
                            window.speechSynthesis?.cancel();
                            setShowAssistant(false);
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 12, scale: 0.96 }}
                            className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-gs-green/10 bg-white shadow-[0_30px_90px_rgba(15,23,42,0.32)]"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <div className="bg-gs-green px-6 py-5 text-white">
                                <button
                                    onClick={() => {
                                        window.speechSynthesis?.cancel();
                                        setShowAssistant(false);
                                    }}
                                    className="absolute right-4 top-4 rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white"
                                    aria-label="Close AI Property Assistant"
                                >
                                    <X size={18} />
                                </button>
                                <div className="flex items-center gap-4 pr-10">
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gs-gold text-slate-950 shadow-lg">
                                        <Sparkles size={28} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gs-gold">Voice Assistant</p>
                                        <h3 className="font-serif text-2xl font-bold">AI Property Assistant</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-5 p-6">
                                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                                    <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gs-green">
                                        <Volume2 size={16} /> Assistant Reply
                                    </div>
                                    <p className="text-sm leading-relaxed text-slate-700">{assistantAnswer}</p>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {['Available properties', 'Property prices', 'Book site inspection', 'Documentation requirements'].map((prompt) => (
                                        <button
                                            key={prompt}
                                            onClick={() => handleAssistantSubmit(prompt)}
                                            className="rounded-full border border-gs-green/15 bg-gs-lightGreen px-3 py-2 text-xs font-bold text-gs-green transition-colors hover:bg-gs-green hover:text-white"
                                        >
                                            {prompt}
                                        </button>
                                    ))}
                                </div>

                                <form
                                    onSubmit={(event) => {
                                        event.preventDefault();
                                        handleAssistantSubmit(assistantQuestion);
                                    }}
                                    className="space-y-3"
                                >
                                    <label htmlFor="assistant-question" className="sr-only">Ask the AI Property Assistant</label>
                                    <input
                                        id="assistant-question"
                                        value={assistantQuestion}
                                        onChange={(event) => setAssistantQuestion(event.target.value)}
                                        placeholder="Ask about prices, locations, payment plans..."
                                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-colors focus:border-gs-green focus:ring-4 focus:ring-gs-green/10"
                                    />
                                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-[auto,1fr]">
                                        <button
                                            type="button"
                                            onClick={startAssistantListening}
                                            className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white shadow-lg transition-all ${assistantListening ? 'bg-gs-gold text-slate-950' : 'bg-gs-green hover:bg-gs-darkGreen'}`}
                                        >
                                            <Mic size={18} /> {assistantListening ? 'Listening...' : 'Ask by Voice'}
                                        </button>
                                        <button
                                            type="submit"
                                            className="inline-flex items-center justify-center gap-2 rounded-full bg-gs-gold px-5 py-3 text-sm font-bold text-slate-950 shadow-lg transition-colors hover:bg-white hover:text-gs-green hover:ring-2 hover:ring-gs-gold"
                                        >
                                            Get Answer <ArrowRight size={18} />
                                        </button>
                                    </div>
                                </form>

                                <p className="text-center text-xs font-medium text-slate-500">{assistantStatus}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* PROPERTY MODAL POPUP */}
            <AnimatePresence>
                {selectedProperty && (
                    <PropertyModal property={selectedProperty} onClose={() => setSelectedProperty(null)} />
                )}
            </AnimatePresence>

        </div>
    );
};

export default App;
