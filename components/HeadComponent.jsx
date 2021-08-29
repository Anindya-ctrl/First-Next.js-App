import Head from 'next/head';

function HeadComponent({ pageName }) {
    return (
        <Head>
            <meta name="keywords" content="waifu list" />
            <title>Waifu List | { pageName }</title>
        </Head>
    );
}

export default HeadComponent;
