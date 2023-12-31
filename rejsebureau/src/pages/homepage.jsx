
export default function HomePage() {
    return (
        <>
            <section className="videoContent">
                <h1>Travel Co.</h1>
                <p>Traveling is a wonderful way to explore new places, experience different cultures, and create lasting memories. Whether you&#39;re a seasoned traveler or a novice adventurer, there are countless travel destinations to choose from. From exotic beaches to bustling cities!.</p>
                <p>With us you can find your desired travel destination and we&#39;ll show the best option for you!</p>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/LydoK7hXKbs?si=SAoGyvBNvFanpsQc&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </section>

            <section className="galleryContent">
                <h1>Gallery</h1>
                <p>This is a gallery of vacation destinations.</p>

                <div className="gallery">
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </section>

            <section className="bookingContent">
                <h1>Book your next vacation!</h1>
                <p>This is where you can book your next vacation.</p>

                <form action="#">
                    <fieldset className="bContainer">
                        <label htmlFor="tSearch">Travel destination: </label>
                        <input type="search" id="tSearch" name="tSearch" />

                        <label htmlFor="tSearch">Date of depature: </label>
                        <input type="date" id="tDate" name="tDate" />

                        <label htmlFor="tSearch">Date of return: </label>
                        <input type="date" id="tDate" name="tDate" />
                    </fieldset>



                </form>
            </section>
        </>
    );
}

