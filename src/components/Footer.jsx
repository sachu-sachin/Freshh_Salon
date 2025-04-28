import { MapPin, PhoneCall } from "lucide-react";
import insta from '../assets/svg/instagram.svg';
import whatsapp from '../assets/svg/whatsapp.svg';
import youtube from '../assets/svg/youtube.svg';
import AnimatedBackground from "./AnimatedBackground";
export default function Footer() {
    return (
        <footer className="footer flex flex-col md:flex-row md:justify-between items-center bg-neutral text-neutral-content p-6 md:p-10 relative overflow-hidden footer-pattern">
            <aside className="flex flex-col items-center md:items-start mb-6 md:mb-0">
                <img src="src/assets/logo_b.png" alt="Neofair Logo" className="w-32 h-auto mb-2" />
                <ul className="space-y-2 text-left">
                    <li className="mb-4 text-center md:text-left">Neofair Salon & Spa<br />
                        Beauty & Wellness for Every Occasion
                    </li>
                    <li className="flex gap-2"><MapPin/> <a href="https://maps.app.goo.gl/RW48BCyboYaJqw6CA" target="_blank">Nehru Nagar 2nd Bus Stop, Aerodrome-641014</a></li>
                    <li className="flex gap-2"><PhoneCall/> <a href="tel:08526714121" target="_blank">08526714121</a></li>
                </ul>
            </aside>
            <nav className="mb-6 md:mb-0 flex flex-col items-center">
                <h6 className="footer-title mb-2 font-bold">Sections</h6>
                <ul className="flex flex-wrap gap-4 mb-4">
                    <li><a href="#home" className="hover:underline">Home</a></li>
                    <li><a href="#about" className="hover:underline">About</a></li>
                    <li><a href="#services" className="hover:underline">Services</a></li>
                    <li><a href="#contact" className="hover:underline">Contact</a></li>
                </ul>
                <h6 className="footer-title mb-2 font-bold">Follow us</h6>
                <div className="flex gap-4">
                    <a href="https://www.instagram.com/neofair_signaturesalon/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <img src={insta} className="w-full h-full" alt="Instagram Icon" />
                    </a>
                    <a href="https://wa.me/918526714121" target="_blank" rel="noopener noreferrer" aria-label="whatsapp">
                        <img src={whatsapp} className="w-full h-full" alt="whatsapp Icon" />
                    </a>
                    <a href="https://www.youtube.com/@neofairbeautyclinic" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                        <img src={youtube} className="w-full h-full" alt="YouTube Icon" />
                    </a>
                </div>
            </nav>
        </footer>
    )
}