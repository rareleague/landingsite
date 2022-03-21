const Span = () => <span></span>

const SecWhoWeContant = ({data}) => {
  console.log(":::data at secWhowe::::",data);
  return (
    <div className="col-12 col-lg-6">
        <div className="who-we-contant">
            <div className="dream-dots" data-aos="fade-up">
                {Array(7).fill().map((key) => (
                		<Span />
                	))}
            </div>
            <h4 data-aos="fade-up">{data?.title || '' }</h4>
            <p data-aos="fade-up">{data?.text || ''}</p>
            {/* <p data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magni, error. Tempora odit laborum iure inventore possimus laboriosam qui nam. Fugit!</p> */}
            {/* <a className="btn dream-btn mt-30" href="#" data-aos="fade-up">Read More</a> */}
        </div>
    </div>
  );
}

export default SecWhoWeContant;