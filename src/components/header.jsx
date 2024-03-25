import Image from "next/image"
import Link from "next/link"
import logo from "/public/images/sweed-white.png"

export default function Header() {
    return (
        <div className="text-white bg-transparent absolute top-0 w-full z-50">
            <div className="container">
                <div className="flex justify-between items-center gap-8 h-[105px]">
                    <Link href="/">
                        <Image
                            width={125}
                            src={logo}
                            alt=""
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}