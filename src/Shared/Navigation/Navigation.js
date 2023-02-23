import React from "react";
import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from '../../images/assets/hooman-digital.png'

const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Service", href: "/service" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
];

// function classNames(...classes) {
//     return classes.filter(Boolean).join(" ");
// }

const Navigation = () => {
    // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


    return (
        <Disclosure style={{ backgroundColor: '#0377FF' }} as="nav" className="">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-8 md:px-0">
                        <div className="flex justify-between py-6">
                            <div className="flex justify-between w-full items-center">
                                <Link
                                    to="/"
                                    className="flex-shrink-0 text-white font-bold text-2xl"
                                >
                                    <img src={logo} alt="hooman-digital-llp-logo" />
                                </Link>
                                <div className="hidden md:block">
                                    <div className="ml-10 flex items-baseline space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className="text-white px-3 py-2 rounded-md text-2xl font-semibold"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-10 text-2xl font-semibold text-white flex items-baseline space-x-4">
                                        <button className="border-2 px-5 py-2">Contact Us</button>
                                        <button style={{ backgroundColor: '#000F5F', border: '2px solid #000F5F' }} className="px-5 py-2">Get Started</button>
                                    </div>
                                </div>
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                <Disclosure.Button
                                    className="inline-flex items-center justify-center rounded-md text-white focus:outline-none  transition-all duration-500"
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
                                    className=" hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-xl font-medium"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="text-xl font-semibold text-white">
                                <button className="border-2 px-5 my-2 py-2">Contact Us</button>
                            </div>
                            <div className="text-xl font-semibold text-white">
                                <button style={{ backgroundColor: '#000F5F', border: '2px solid #000F5F' }} className="px-5 py-2">Get Started</button>
                            </div>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default Navigation;