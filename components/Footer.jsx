import { GithubIcon, LinkedinIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    const socialIcons = [
        { 'icon': LinkedinIcon, 'url': 'https://www.linkedin.com/in/vipindagar07' },
        { 'icon': GithubIcon, 'url': 'https://www.github.com/vipindagar7' }
    ]
    return (
        <footer className="w-full shadow-md bg-transparent backdrop-blur-sm z-50 flex justify-around p-4 items-center flex-col gap-3 lg:flex-row">
            <div>
                <h1 className='text-xl ld:text-2xl font-bold'>Vipin Dagar</h1>
            </div>
            <div className="flex gap-4">
                {socialIcons.map((social, index) => (
                    <Link href={social.url} key={index} target="_blank" className="border p-2 rounded-4xl hover:scale-125">
                        <social.icon key={index} size={20} className="text-primary" />
                    </Link>
                ))}
            </div>
            <div>
                <p>© 2025 Vipin Dagar. All rights reserved.</p>
            </div>

        </footer>

    )
}

export default Footer