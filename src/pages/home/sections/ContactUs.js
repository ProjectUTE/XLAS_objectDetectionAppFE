function ContactUs() {
  return (
    <section className="contact section container" id="contact">
      <div className="contact__container grid">
        <div className="contact__content">
          <h2 className="section__title-center">
            Contact Us From <br /> Here
          </h2>
          <p className="contact__description">
            You can contact us from here, you can write to us, call us or visit
            our service center, we will gladly assist you.
          </p>
        </div>
        <ul className="contact__content grid">
          <li className="contact__address">
            Telephone:{' '}
            <span className="contact__information">999 - 888 - 777</span>
          </li>
          <li className="contact__address">
            Email: <span className="contact__information">ddtt@gmail.com</span>
          </li>
          <li className="contact__address">
            Location:{' '}
            <span className="contact__information">
              01 Vo Van Ngan, Thu Duc
            </span>
          </li>
        </ul>
        <div className="contact__content">
          <a href="#" className="button">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
