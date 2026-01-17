
import { Container } from "lucide-react"
import { FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"


const Footer = () => {
    return (
        <footer className="flex flex-col md:flex-row justify-between items-center gap-4 p-6  ">
            <aside className="flex flex-col justify-center items-center">

                <Container className="w-10 h-10" />
                <p className="font-bold">
                    MARC
                    <span className="text-accent">DEV</span>
                </p>
                <p>Copyright © {new Date().getFullYear()} -  Tous droits réservés</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://web.facebook.com/profile.php?id=100069193186621" target="_blank" className="rounded-full border text-accent border-accent p-2 text-3xl hover:bg-accent hover:text-white  hover:-translate-y-1" >
                        <FaFacebook />
                    </a>
                    <a href="https://wa.me/2250777444444" target="_blank" className="rounded-full border text-accent border-accent p-2 text-3xl hover:bg-accent hover:text-white  hover:-translate-y-1">
                        <FaWhatsapp />
                    </a>
                    <a href="https://www.youtube.com/@programmationInformatique" target="_blank" className="rounded-full border text-accent border-accent p-2 text-3xl hover:bg-accent hover:text-white  hover:-translate-y-1">
                        <FaYoutube />
                    </a>

                    <a href="https://twitter.com" target="_blank" className="rounded-full border text-accent border-accent p-2 text-3xl hover:bg-accent hover:text-white  hover:-translate-y-1">
                        <FaXTwitter/>
                    </a>
                    
                </div>
            </nav>
        </footer>
    )
}

export default Footer
