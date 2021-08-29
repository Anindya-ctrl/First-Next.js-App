import HeadComponent from '../components/HeadComponent';

function About() {
    return (
        <div className="about">
            <HeadComponent pageName="About" />

            <h1 style={{ color: 'hsl(0, 0%, 20%)', textAlign: 'center' }}>About</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto rerum quo quasi laboriosam atque sed, possimus facilis quod nesciunt dolorum obcaecati ex voluptas similique perspiciatis magnam impedit dignissimos minima dolore? Eum tenetur, inventore voluptatem rem officia qui est nulla, et aliquid error libero, nesciunt recusandae rerum eaque debitis autem quis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto rerum quo quasi laboriosam atque sed, possimus facilis quod nesciunt dolorum obcaecati ex voluptas similique perspiciatis magnam impedit dignissimos minima dolore? Eum tenetur, inventore voluptatem rem officia qui est nulla, et aliquid error libero, nesciunt recusandae rerum eaque debitis autem quis.</p>
        </div>
    );
}

export default About;
