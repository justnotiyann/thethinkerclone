import { Menu, Search, ShoppingCart } from "lucide-react";

export const Navbar = () => {
    const menuItems = [
        {
            name: "Shop",
            path: "/",
        },
        {
            name: "Collective",
            path: "/",
        },
        {
            name: "Designers",
            path: "/",
        },
        {
            name: "About Us",
            path: "/",
        },
        {
            name: "Contact",
            path: "/",
        },
    ];

    return (
        <nav className="font-Poppins sticky hidden w-full items-center justify-between border-b px-10 py-8 md:flex">
            <a href="/" className="font-Cambay font-semibold">
                Cozy
            </a>
            <ul className="font-Proxima flex items-center gap-x-10">
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <a href={item.path}>{item.name}</a>
                    </li>
                ))}
            </ul>

            <div className="flex items-center gap-x-10">
                <div className="flex items-center gap-x-10">
                    <Menu className="h-5 w-5" />
                    <Search className="h-5 w-5" />
                </div>
                <ShoppingCart className="h-5 w-5" />
            </div>
        </nav>
    );
};
