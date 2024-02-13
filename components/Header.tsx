"use client"

import Link from "next/link";
import Image from "next/image";
import { Grid2X2, Heart, LayoutGrid, Search, ShoppingCart, User } from "lucide-react"
import { FormEvent } from "react";
import { useRouter } from "next/navigation";
function Header() {
    const router = useRouter();
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const input = e.currentTarget.input.value;
        router.push(`/search?q=${input}`)
    }
    return (
        <header className="flex px-10 py-7 space-x-5">
            <Link href={"/"}>
                <Image
                    src={"https://i.imgur.com/IJ4nqnK.jpeg"}
                    alt="logo"
                    width={150}
                    height={150}
                ></Image>
            </Link>
            <form onSubmit={handleSubmit} className="flex items-center bg-white rounded-full w-full">
                {/* importante añadir un name al input */}
                <input name="input" className="flex px-4 outline-none placeholder:text-sm" type="text" placeholder="Search everything...">
                </input>
                <button>
                    <Search className="rounded-full h-10 px-2 w-10 bg-rose-200 cursor-pointer" />
                </button>
            </form>
            <div className="flex space-x-5">
                <Link href={"/"} className="hidden xl:flex font-bold items-center space-x-2">
                    <Grid2X2 size={20} />
                    <p>Departments</p>
                </Link>
                <Link href={"/"} className="hidden xl:flex font-bold items-center space-x-2">
                    <LayoutGrid size={20} />
                    <p>Services</p>
                </Link>
                <Link href={"/"} className="hidden xl:flex font-bold items-center space-x-2">
                    <Heart size={20} />
                    <div>
                        <p className="text-xs font-extralight">Reorder</p>
                        <p>My Items</p>
                    </div>
                </Link>
                <Link href={"/"} className="hidden xl:flex font-bold items-center space-x-2">
                    <User size={20} />
                    <div>
                        <p className="text-xs font-extralight">Sign in</p>
                        <p>Account</p>
                    </div>
                </Link>
                <Link href={"/"} className="hidden xl:flex font-bold items-center space-x-2">
                    <ShoppingCart size={20} />
                    <div>
                        <p className="text-xs font-extralight">No items</p>
                        <p>$0.00</p>
                    </div>
                </Link>
            </div>
        </header>
    );
}

export default Header;
