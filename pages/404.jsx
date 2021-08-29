import Link from 'next/link';

function NotFound() {
    return (
        <div className="not-found">
            <img src="https://anilist.co/img/404/404_chan1.jpg" alt="" />

            <p>
                Go back to <Link href="/"><a>Home</a></Link>
            </p>
        </div>
    );
}

export default NotFound;
