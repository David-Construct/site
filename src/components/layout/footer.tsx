import { navLinks } from "@/lib/data";
import { Mail, Home, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-muted text-muted-foreground">
          <div className="container py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
                <Link href="/" className="flex items-center gap-2">
                    <Home className="h-6 w-6 text-primary" />
                    <span className="font-bold font-headline text-xl text-foreground">David Construct</span>
                </Link>
                <p className="text-sm">
                    Specialiști în construcții din lemn, de la vis la realitate durabilă.
                </p>
            </div>
            <div className="space-y-4">
                <h4 className="font-headline font-semibold text-foreground">Linkuri Utile</h4>
                <ul className="space-y-2">
                    {navLinks.map(link => (
                         <li key={link.href}>
                             <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                                {link.label}
                             </Link>
                         </li>
                    ))}
                </ul>
            </div>
            <div className="space-y-4">
                <h4 className="font-headline font-semibold text-foreground">Contact</h4>
                <address className="space-y-2 not-italic text-sm">
                    <p className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        <a href="tel:+40724084555" className="hover:text-primary transition-colors">+40 724 084 555</a>
                    </p>
                    <p className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        <a href="mailto:contact.davidconstruct@gmail.com" className="hover:text-primary transition-colors">contact.davidconstruct@gmail.com</a>
                    </p>
                    <p className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>Lucrăm oriunde în țară.</span>
                    </p>
                </address>
            </div>
          </div>
          <div className="bg-muted/50 py-4">
            <div className="container text-center text-sm">
                &copy; {new Date().getFullYear()} David Construct. Toate drepturile rezervate.
            </div>
          </div>
        </footer>
    )
}
