/*'use client';

import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Link from "next/link";
import { anton } from "@/components/ui/fonts";

const links = [
    { name: 'Home', href: '/' },
    { name: 'Resume', href: '/resume/my-resume' },
    { name: 'Projects', href: '/projects/my-projects' },
    { name: 'About', href: '/aboutme/about-me' },
];

export default function NavLink() {
    const pathname = usePathname();
    return (
        <div className={`${anton.className} flex justify-center space-x-6 mb-16 bg-yellow-500 bg-gradient-to-t from-yellow-500 to-black`}>
            {links.map((link) => (
                <Link
                    key={link.name}
                    href={link.href}
                    className={clsx(
                        //'bg-transparent p-3 text-xl font-medium hover:text-white md:p-2 md:px-3 rounded-xl',
                        'p-6 hover:text-white',
                        {
                            'bg-red-900 text-yellow-500 pb-6': pathname === link.href,
                        },
                    )}
                >
                    <p className="hidden md:block">{link.name}</p>
                </Link>
            ))}
        </div>
    );
}
*/


'use client';

import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Link from "next/link";
import { useState } from 'react';
import { anton } from "@/components/ui/fonts";

const links = [
    { name: 'Home', href: '/' },
    { name: 'Resume', href: '/resume/my-resume' },
    { name: 'Projects', href: '/projects/my-projects' },
    { name: 'About', href: '/aboutme/about-me' },
];

export default function NavLink() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className={`${anton.className} bg-yellow-500 bg-gradient-to-t from-yellow-500 to-black mb-3`}>
            <div className="flex justify-between items-center p-4 md:hidden">
                <div className="text-xl font-bold">Menu</div>
                <button
                    className="p-2 rounded-md focus:outline-none focus:ring"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {menuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        )}
                    </svg>
                </button>
            </div>
            <div className={clsx(
                "flex flex-col md:flex-row justify-center md:space-x-6",
                { "hidden": !menuOpen, "md:flex": true }
            )}>
                {links.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'p-6 hover:text-white',
                            {
                                'bg-red-900 text-yellow-500': pathname === link.href,
                            },
                        )}
                    >
                        <p className="text-xl">{link.name}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
