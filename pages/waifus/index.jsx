import HeadComponent from '../../components/HeadComponent';
import Link from 'next/link';
import { waifu as WaifuStyle } from '../../styles/Waifus.module.css';

export const getStaticProps = async () => {
    const result = await fetch('https://api-for-first-next-app.anindyactrl.repl.co');
    const data = await result.json();

    return {
        props: { waifus: data }
    };
}

function Waifus({ waifus }) {
    return (
        <div className="waifus">
            <HeadComponent pageName="All Waifus" />

            <h1>Dummy List of Waifus</h1>
            {
                waifus.map(waifu => (
                    <Link
                        href={ `/waifus/${ waifu.id }` }
                        key={ waifu.id }
                        className="waifu"
                    >
                        <a className={ WaifuStyle }><h3>{ waifu.name }</h3></a>
                    </Link>
                ))
            }
        </div>
    );
}

export default Waifus;
