import "../CSS/About.css";

const About = () => {
  return (
    <main className="about">
      <header id="about-section-title">About</header>
      <section className="about-items">
        <article id="about-me-blurb">
          <p>
            I am a graduate of the Northcoders Software Development Bootcamp,
            and I am currently looking for my first Junior Software Developer
            role! <br />
            <br />
            Although my previous experience was primarily in Commercial and
            Project Management, I decided to make this change in my career after
            a project where I built a KPI dashboard. In this project, I taught
            myself how to query databases in SQL and how to visualise that data
            in PowerBI. I fell in love with coding and I am excited to take my
            interest ever-further.
            <br />
            <br />
            To learn more about me, please visit the links section or check out
            my previous work.
          </p>
        </article>
        <article id="about-me-photo">
          <img
            src="https://media.licdn.com/dms/image/C4E22AQGg-Ovl1imguA/feedshare-shrink_1280/0/1673027101006?e=1677110400&v=beta&t=XRpEniYE3B-hhplh86YhtmrV6tzicrIuHGtn2AjRXy0"
            alt="My bootcamp cohort <3"
            id="bootcamp-cohort"
          />
          <span>My bootcamp cohort ❤️</span>
        </article>
        <article id="about-me-links">
          <h1>
            <b>Links</b>
          </h1>
          <br />
          <a
            href="https://drive.google.com/file/d/1qq-O7uZA0PD5rmPXoCEBSL1Pn6t0DUE_/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            My CV
          </a>
          <br />
          <br />
          <a
            href="https://www.linkedin.com/in/oliverholt00/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <br />
          <br />
          <a
            href="https://github.com/OliverHolt"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </article>
      </section>
    </main>
  );
};

export default About;
