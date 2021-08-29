import HeadComponent from "../../components/HeadComponent";

export const getStaticPaths = async () => {
    const result = await fetch('https://api-for-first-next-app.anindyactrl.repl.co');
    const data = await result.json();

    return {
        paths: data.map(waifu => ({
            params: { id: waifu.id.toString() },
        })),
        fallback: false,
    };
}

export const getStaticProps = async context => {
    const { id } = context.params;
    const result = await fetch(`https://api-for-first-next-app.anindyactrl.repl.co/${ id }`);
    const data = await result.json();

    return {
        props: { waifu: data }
    };
}

function WaifuDetails({ waifu }) {
    const { name, email, occupation, anime } = waifu;

    return (
        <div className="waifu-details">
            <HeadComponent pageName={ `waifus | ${ name }` } />

            <h1>Name - { name }</h1>
            <p>Email - { email }</p>
            <p>Occupation - { occupation }</p>
            <p>Anime - { anime }</p>
        </div>
    );
}

export default WaifuDetails;
