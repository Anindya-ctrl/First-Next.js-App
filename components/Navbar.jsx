import Link from 'next/link';
import Image from 'next/image';

function Navbar() {
    return (
        <nav className="navbar">
            <a href="/">
                <Image
                    src="/logo.jpg"
                    height={ 70 }
                    width={ 70 }
                    alt="logo"
                />
            </a>

            <div className="links">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/waifus">List of Waifus</Link>
            </div>
        </nav>
    );
}

export default Navbar;
