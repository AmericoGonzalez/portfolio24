'use client';

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
        <div className={`${anton.className} flex justify-center space-x-6 mb-16 pt-10 p-6 bg-yellow-500 bg-gradient-to-t from-yellow-500 to-black md:shadow-md`}>
            {links.map((link) => (
                <Link
                    key={link.name}
                    href={link.href}
                    className={clsx(
                        'bg-transparent p-3 text-xl font-medium hover:text-red-600 md:p-2 md:px-3 rounded-xl',
                        {
                            'bg-yellow-400 text-white': pathname === link.href,
                        },
                    )}
                >
                    <p className="hidden md:block">{link.name}</p>
                </Link>
            ))}
        </div>
    );
}
