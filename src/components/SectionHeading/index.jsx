const Span = () => <span></span>

const SectionHeading = ({title , text}) => {

  return (
    <div className="section-heading text-center mt-80">
        <h2 data-aos="fade-up" data-aos-delay='300'>{title}</h2>
        <p data-aos="fade-up" data-aos-delay='400'>{text}</p>
    </div>
  );
}

export default SectionHeading;