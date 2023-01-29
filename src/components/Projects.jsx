import "../CSS/Projects.css";
import React, { useState } from "react";

const Projects = () => {
  const [readMore1, setReadMore1] = useState(false);
  const [readMore2, setReadMore2] = useState(false);

  const linkName1 = readMore1 ? "Read Less << " : "Read More >> ";
  const linkName2 = readMore2 ? "Read Less << " : "Read More >> ";

  const extraContent1 = (
    <div>
      <div className="extra-content">
        With this web application, users can:
        <ul className="portfolio-item-features-list">
          <li>View all articles</li>
          <li>View an individual article</li>
          <li>Like an article</li>
          <li>View a list of comments associated with an article</li>
          <li>Post a new comment to an existing article (as a valid user)</li>
          <li>Sort articles based on: date, author, or number of likes</li>
          <li>Order sorted articles in ascending or descending order</li>
          <li>Delete comments (as a valid user)</li>
          <li>Have responsive error handling for invalid URL paths</li>
        </ul>
        As the Guest user - the default user for the Home page - you can browse
        articles, topics, and view comments. You will not be able to comment on
        an article without being a valid user. You can also not delete comments
        as the Guest user. To be recognised as a valid user, select the login
        button in the top right corner. You will then be able to comment on
        articles (using that username), and you will be able to delete your
        comments. <br />
        <br />
        Below is a screenshot of the homepage. Alternatively, if you would like
        to visit the hosted app, please link on this link: <br />
        <br />
        <a
          href="https://oliverholt-ncnews.netlify.app/"
          target={"_blank"}
          rel="noreferrer"
          className="project-link"
        >
          <u>https://oliverholt-ncnews.netlify.app/</u>
        </a>
        <br />
        <br />
        To see the hosted backend API, please click on this link:
        <br />
        <br />
        <a
          href="https://long-pink-goat-wear.cyclic.app/api/"
          target={"_blank"}
          rel="noreferrer"
          className="project-link"
        >
          https://long-pink-goat-wear.cyclic.app/api/
        </a>
        <br />
        <br />
        To see the code I wrote to build this application, please visit my
        Github profile by using the button at the bottom of this page.
        <br /> <br />
        <h3>Tech stack:</h3>
        <ul style={{ display: "flex" }}>
          <li style={{ margin: "10px" }}>
            Front-end
            <ul>
              <li>React</li>
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </li>
          <li style={{ margin: "10px" }}>
            Back-end
            <ul>
              <li>PSQL</li>
              <li>Node</li>
              <li>Express</li>
              <li>Jest</li>
            </ul>
          </li>
        </ul>
      </div>
      <img
        src="https://i.imgur.com/K5WMFm1.png"
        alt="Northcoders News frontpage screenshot"
        style={{ width: "100%", border: "2px solid #f4f1ed" }}
      />
    </div>
  );

  const extraContent2 = (
    <div>
      <div className="extra-content">
        The app locates the user’s GPS location and displays a map of the
        surrounding area, with markers indicating the location of nearby
        toilets. A circle around the user marker indicates an estimated five
        minute walking distance from the user. Users can search for toilets
        based on their current location or by entering a specific address /
        place name. By pressing a marker, a card will appear and display
        detailed information about each toilet such as its name and address. A
        ‘Get directions’ button will also appear, that will redirect the user to
        google maps, allowing users to locate the toilet. By logging in or
        registering, users can leave reviews and ratings to help the wider user
        community make informed decisions about the accessibility and
        cleanliness of toilets.
        <br /> <br />
        <h3>Tech stack:</h3>
        <ul style={{ display: "flex" }}>
          <li style={{ margin: "10px" }}>
            Front-end
            <ul>
              <li>React Native</li>
              <li>Typescript</li>
              <li>Expo</li>
              <li>CSS</li>
            </ul>
          </li>
          <li style={{ margin: "10px" }}>
            Back-end
            <ul>
              <li>PSQL</li>
              <li>Node</li>
              <li>Express</li>
              <li>Google Places API</li>
            </ul>
          </li>
        </ul>
        <br /> <br />
        To see the code I wrote to build this application, please visit my
        Github profile by using the button at the top of the page.
        <br /> <br />
        Or you can watch my team's demo video below:
        <br /> <br />
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/PrBAnEYXq0c"
          title="NipToLoo demo video"
          style={{ border: "2px solid #f4f1ed" }}
        ></iframe>
      </div>
    </div>
  );

  return (
    <main className="projects">
      <header id="projects-section-title">Projects</header>
      <section className="portfolio-items">
        <article>
          <h1>Northcoders News Website</h1>
          <p>
            This project aimed to mimic a news website, whereby articles stored
            in a database (built from scratch) are rendered on a website which
            users can interact with.
          </p>
          <p
            className="read-more-link"
            onClick={() => {
              setReadMore1(!readMore1);
            }}
          >
            {linkName1}
          </p>

          {readMore1 && extraContent1}
        </article>
        <article>
          <h1>NipToLoo Mobile app</h1>
          <p>
            This is an IOS mobile application designed to help users locate
            public toilets within walking distance. We designed this app for
            people with conditions like IBS or Crohn’s disease.
          </p>
          <p
            className="read-more-link"
            onClick={() => {
              setReadMore2(!readMore2);
            }}
          >
            {linkName2}
          </p>

          {readMore2 && extraContent2}
        </article>
      </section>
    </main>
  );
};

export default Projects;
