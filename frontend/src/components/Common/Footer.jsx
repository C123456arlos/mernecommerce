import { IoLogoInstagram } from "react-icons/io"
import { RiTwitterXLine } from "react-icons/ri"
import { TbBrandMeta } from "react-icons/tb"
import { FiPhoneCall } from 'react-icons/fi'
import { Link } from "react-router-dom"

const Footer = () => {
    return <footer className="border-t py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
            <div>
                <h3 className="text-lg text-gray-800 mb-4">newsletter</h3>
                <p className="text-gray-500 mb-4">be te first to hear about new products</p>
                {/* <p className="font-medium text-sm text-gray-600 mb-6"> */}
                <p className="font-medium text-sm text-gray-600 mb-6">
                    sign up to get 10% off
                </p>
                <form className="flex">
                    <input type="email" placeholder="enter your email" className="p-3 w-full text-sm border-t
                    border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                        required></input>
                    <button type="submit" className="bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all">subscribe</button>
                </form>
            </div>
            <div>
                <h3 className="text-lg text-gray-800 mb-4">shop</h3>
                <ul className="space-y-2 text-gray-600 ">
                    <li>
                        <Link to={'#'} className="hover:text-gray-600 transition-colors">men's top wear</Link>
                    </li>
                    <li>
                        <Link to={'#'} className="hover:text-gray-600 transition-colors">women's top wear</Link>
                    </li>
                    <li>
                        <Link to={'#'} className="hover:text-gray-600 transition-colors">men's bottom wear</Link>
                    </li>
                    <li>
                        <Link to={'#'} className="hover:text-gray-600 transition-colors">women's bottom wear</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className="text-lg text-gray-800 mb-4">support</h3>
                <ul className="space-y-2 text-gray-600 ">
                    <li>
                        <Link to={'#'} className="hover:text-gray-600 transition-colors">contact us</Link>
                    </li>
                    <li>
                        <Link to={'#'} className="hover:text-gray-600 transition-colors">about us</Link>
                    </li>
                    <li>
                        <Link to={'#'} className="hover:text-gray-600 transition-colors">faqs</Link>
                    </li>
                    <li>
                        <Link to={'#'} className="hover:text-gray-600 transition-colors">features</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className="text-lg text-gray-800 mb-4">follow us</h3>
                <div className="flex items-center space-x-4 mb-6">
                    <a href="www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
                        <TbBrandMeta className="h-5 w-5"></TbBrandMeta>
                    </a>
                    <a href="www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
                        <IoLogoInstagram className="h-5 w-5"></IoLogoInstagram>
                    </a>
                    <a href="www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
                        <RiTwitterXLine className="h-5 w-5"></RiTwitterXLine>
                    </a>
                </div>
                <p className="text-gray-500">call us</p>
                <FiPhoneCall className="inline-block mr-2"></FiPhoneCall>
                01234566778
            </div>
        </div>
        <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 ot-6">
            <p className="text-gray-500 text-sm tracking-tighter text-center"> &copy; cesteam all rights reserved</p>
        </div>
    </footer>
}

export default Footer
