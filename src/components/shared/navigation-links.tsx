'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { TbCategoryFilled } from "react-icons/tb";
import { FaRegAddressCard } from "react-icons/fa"
import { FaHouse } from "react-icons/fa6"
import { IoMdContact } from "react-icons/io";

type PropTypes = {
    mobile?: boolean
}

const NavigationLinks = ({ mobile = false }: PropTypes) => {

    const pathname = usePathname()

    const iconSize = mobile ? 20 : 24
    const textSize = mobile ? 'text-xs' : 'text-sm'
    return (
        <ul className='nav-links'>
            <Link href='/' className={`nav-link ${pathname === '/' && 'selected-nav-link'}`}>
                <FaHouse size={iconSize} />
                <p className={textSize}>Home</p>
            </Link>


            <Link href='/categories' className={`nav-link ${pathname === '/categories' && 'selected-nav-link'}`}>
                <TbCategoryFilled size={iconSize} />
                <p className={textSize}>Categories</p>
            </Link>
            <Link href='/about' className={`nav-link ${pathname === '/about' && 'selected-nav-link'}`}>
                <FaRegAddressCard size={iconSize} />
                <p className={textSize}>About</p>
            </Link>



            <Link href='/contact' className={`nav-link ${pathname.includes('/contact') && 'selected-nav-link'}`}>
                <IoMdContact size={iconSize} />
                <p className={textSize}>Contact</p>
            </Link>

        </ul>
    )
}

export default NavigationLinks