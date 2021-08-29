import Link from 'next/link';
import HeadComponent from '../components/HeadComponent';
import styles from '../styles/Home.module.css';

function Home() {
    return (
        <div className="home">
            <HeadComponent pageName="Home" />

            <h1 className={ styles.title }>Home</h1>
            <p className={ styles.text }>Waifu originates as a Japanese borrowing and rendering of the English word wife. Evidence for the term in Japanese dates back to at least the 1980s, when some younger Japanese people may have adopted wife as an alternative to the gender limitations implied by the traditional term, kanai, which literally means “inside the house.”</p>
            <p className={ styles.text }>Waifu developed a more specialized meaning in English-speaking anime and manga culture, however, in the 2000s. In the 2002 anime Azumanga Daioh, some students find a photograph a teacher has dropped and ask who the woman in it is. The teacher replies “my wife” in English, which is often transcribed as mai waifu thanks to Japanese pronunciation and transliteration practices.</p>
            <p className={ styles.text }>Anime fans began using waifu to refer to a character they were particularly fond of, one they viewed as being special to them. The earliest Urban Dictionary entry for this use of the word dates from 2007, and there’s evidence that the term dates back in its anime sense to at least 2006. It also spread outside the anime fandom, so that characters from video games or even live-action television shows can also be called waifu.</p>

            <Link
                href="/waifus"
            >
                <a className={ styles.button }>See a List of Waifus</a>
            </Link>
        </div>
    );
}

export default Home;
