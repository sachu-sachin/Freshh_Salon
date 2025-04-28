import { MapPin, PhoneCall } from "lucide-react";
import footerData from '../util/footer-data.json';

export default function Footer() {
    return (
        <footer className="footer flex flex-col md:flex-row md:justify-between items-center bg-neutral text-neutral-content p-6 md:p-10 relative overflow-hidden footer-pattern">
            <aside className="flex flex-col items-center md:items-start mb-6 md:mb-0">
                <div className="w-32 h-32 mb-2 relative overflow-hidden rounded-lg">
                    <img src={`/images/${footerData.logo}`} alt="Logo" className="absolute top-0 left-0 w-full h-full object-contain" />
                </div>
                <ul className="space-y-2 text-left">
                    <li className="mb-4 text-center md:text-left">{footerData.businessName}<br />
                        {footerData.tagline}
                    </li>
                    <li className="flex gap-2"><MapPin/> <a href={footerData.address.mapLink} target="_blank" rel="noopener noreferrer">{footerData.address.text}</a></li>
                    <li className="flex gap-2"><PhoneCall/> <a href={footerData.phone.telLink} target="_blank" rel="noopener noreferrer">{footerData.phone.text}</a></li>
                </ul>
            </aside>
            <nav className="mb-6 md:mb-0 flex flex-col items-center">
                <h6 className="footer-title mb-2 font-bold">Sections</h6>
                <ul className="flex flex-wrap gap-4 mb-4">
                    {footerData.sections.map((section, idx) => (
                        <li key={idx}><a href={section.href} className="hover:underline">{section.label}</a></li>
                    ))}
                </ul>
                <h6 className="footer-title mb-2 font-bold">Follow us</h6>
                <div className="flex gap-4">
                    {footerData.socials.map((social, idx) => (
                        <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                            <img src={`/svg/${social.icon}`} className="w-full h-full" alt={`${social.label} Icon`} />
                        </a>
                    ))}
                </div>
            </nav>
        </footer>
    )
}