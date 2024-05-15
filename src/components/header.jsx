import Image from "next/image"
import Link from "next/link"
import logo from "/public/images/sweed-white.png"
import logoFixed from "/public/images/sweed-green.png"

export default function Header() {
    return (
        <div className="header-section text-white bg-transparent top-0 w-full z-50 transition-all">
            <div className="container">
                <div className="flex justify-between items-center gap-[10px] sm:gap-8 h-[72px]">
                    <Link href="/">
                        <Image
                            width={125}
                            src={logo}
                            alt=""
                            className="logo-white"
                        />
                        <Image
                            width={125}
                            src={logoFixed}
                            alt=""
                            className="logo-green"
                        />
                    </Link>
                    <Link href="#schedule-form" className="btn btn-green-solid hover:bg-[#12130f] leading-none px-[20px]">Schedule a Demo</Link>
                </div>
            </div>
        </div>
    )
}