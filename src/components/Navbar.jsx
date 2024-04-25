import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-sky-600">
            <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 text-white">
                            <img className='h-14 w-auto' src="/logo.webp" alt="logo" />
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4 text-lg">
                                <Link to="/" className="text-white hover:bg-white/20 px-3 py-2 rounded-md font-medium">Home</Link>
                                <Link to="/search" className="text-white hover:bg-white/20 px-3 py-2 rounded-md font-medium">Search Course</Link>
                                <Link to="/login" className="text-white hover:bg-white/20 px-3 py-2 rounded-md font-medium">Login</Link>
                                <Link to="/portal" className="text-white hover:bg-white/20 px-3 py-2 rounded-md font-medium">Portal</Link>
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={toggleMobileMenu} className="text-white hover:bg-blue-600 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} fixed inset-0 z-50 bg-black bg-opacity-50`}>
                <div className="h-full flex items-center justify-end px-4 sm:px-6 lg:px-8">
                    <div className="bg-blue-950 w-64 h-full fixed right-0 shadow-lg">
                        <div className="flex justify-end">
                            <button onClick={toggleMobileMenu} className="text-gray-500 hover:text-gray-700 p-2">
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link to="/" className="text-white block hover:bg-blue-400 px-3 py-2 rounded-md text-base font-medium">Home</Link>
                            <Link to="/search" className="text-white block hover:bg-blue-400 px-3 py-2 rounded-md text-base font-medium">Search Course</Link>
                            <Link to="/login" className="text-white block hover:bg-blue-400 px-3 py-2 rounded-md text-base font-medium">Login</Link>
                            <Link to="/portal" className="text-white block hover:bg-blue-400 px-3 py-2 rounded-md text-base font-medium">Portal</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
