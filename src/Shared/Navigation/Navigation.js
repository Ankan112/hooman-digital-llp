import React from "react";
import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { HiMenu, HiX } from "react-icons/hi";

const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

// function classNames(...classes) {
//     return classes.filter(Boolean).join(" ");
// }

const Navigation = () => {
    // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-8 md:px-0">
                        <div className="flex justify-between h-24">
                            <div className="flex justify-between w-full items-center">
                                <Link
                                    to="/"
                                    className="flex-shrink-0 text-white font-bold text-2xl"
                                >
                                    My Website
                                </Link>
                                <div className="hidden md:block">
                                    <div className="ml-10 flex items-baseline space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-10 flex items-baseline space-x-4">
                                        <button className="btn">Contact Us</button>
                                        <button className="btn">Get Started</button>
                                    </div>
                                </div>
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                <Disclosure.Button
                                    className="inline-flex items-center justify-center rounded-md text-gray-400 hover:text-white focus:outline-none  transition-all duration-500"
                                >
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <HiX className="block h-10 w-10" aria-hidden="true" />
                                    ) : (
                                        <HiMenu className="block h-10 w-10" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="md:hidden">
                        <div className="px-6 pt-2 pb-3 space-y-1 sm:px-3">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div>
                                <button className="btn">Contact Us</button>
                            </div>
                            <div>
                                <button className="btn">Get Started</button>
                            </div>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default Navigation;