"use client";

import { useState, useRef, useEffect } from "react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { ModeToggle } from "./ModeToggleButton";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    // Close menu when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);
    const navItems = [
        { 'title': 'Skills', 'url': '#skills' },
        { 'title': 'Services', 'url': '#services' },
        { 'title': 'Projects', 'url': '#projects' },
        { 'title': 'Testimonials', 'url': '#testimonials' },
    ]
    return (
        <nav className="w-full fixed shadow-md bg-transparent backdrop-blur-sm z-50">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="font-bold">
                    <div className="relative overflow-hidden p-3">
                        <h1 className="text-lg lg:text-xl font-bold tracking-wide">
                            Vipin Dagar
                        </h1>
                    </div>
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Navigation Menu */}
                <div
                    ref={menuRef}
                    className={`${isOpen ? "flex flex-col items-center justify-center backdrop-blur-sm bg-white dark:bg-black z-50" : "hidden"} 
                    fixed lg:flex lg:items-center lg:space-x-6 absolute lg:static w-full left-0 top-16 lg:w-auto p-4 lg:p-0 transition-all ease-in-out duration-300`}
                >
                    <NavigationMenu>
                        <NavigationMenuList className="flex flex-col lg:flex-row lg:gap-6 w-full">
                            <NavigationMenuList className="flex flex-col lg:flex-row lg:gap-6 w-full">
                                {navItems.map((navItem, index) => (
                                    <NavigationMenuItem key={index} className="w-full lg:w-auto">
                                        <NavigationMenuLink asChild className="w-full text-center py-3 flex items-center gap-2">
                                            <Link href={navItem.url} className="flex items-center gap-2"
                                                onClick={() => setIsOpen(false)}>

                                                {navItem.icon}
                                                {navItem.title}
                                            </Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="flex gap-3 pr-2">
                    <Button size='sm'><Link className="" href="#contact">Contact me</Link></Button>
                    <ModeToggle />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;