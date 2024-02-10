import Link from "next/link";
import Image from "next/image";
function Header() {
    return (
        <div>
            <Link href={"/"}>
                <Image
                    src={"https://i.imgur.com/IJ4nqnK.jpeg"}
                    alt="logo"
                    width={150}
                    height={150}
                ></Image>
            </Link>
        </div>
    );
}

export default Header;
