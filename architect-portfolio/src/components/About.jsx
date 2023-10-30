import Button from "./Button";

const About = () => {
  return (
    <section className="about">
      <div className="about-img">
        <div>
          <img src="/img/about1.png" alt="" />
          <img src="/img/about2.png" alt="" />
        </div>
        <div>
          <img src="/img/about3.png" alt="" />
        </div>
      </div>
      <div className="about-text">
        <h2>About</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <Button text="READ MORE" link={""} />
      </div>
    </section>
  );
};

export default About;
