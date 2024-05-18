'use client';

import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Link from "next/link";

const links = [
    { name: 'Home', href: '/' },
    { name: 'Resume', href: '/resume/my-resume' },
    { name: 'Projects', href: '/projects/my-projects' },
    { name: 'About', href: '/aboutme/about-me' },
];

export default function NavLink() {
    const pathname = usePathname();
    return (
        <div className="flex justify-center space-x-6 mb-16 mt-2 p-6 md:shadow-md">
            {links.map((link) => (
                <Link
                    key={link.name}
                    href={link.href}
                    className={clsx(
                        'bg-gray-50 p-3 text-xl font-medium hover:bg-sky-100 hover:text-blue-600 md:p-2 md:px-3 rounded-md',
                        {
                            'bg-sky-100 text-blue-800': pathname === link.href,
                        },
                    )}
                >
                    <p className="hidden md:block">{link.name}</p>
                </Link>
            ))}
        </div>
    );
}
