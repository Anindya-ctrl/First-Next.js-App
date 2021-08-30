import Link from 'next/link';
import Image from 'next/image';

function NotFound() {
    return (
        <div className="not-found">
            <Image
                src="https://anilist.co/img/404/404_chan1.jpg"
                height={ 800 }
                width={ 1000 }
                alt="404-chan"
            />

            <p>
                Go back to <Link href="/"><a>Home</a></Link>
            </p>
        </div>
    );
}

export default NotFound;
