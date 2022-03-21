import SecWelcomeMeter from './SecWelcomeMeter'
import SecWhoWeContant from './SecWhoWeContant'

const SecAboutUsClient = ({img,data}) => {

  return (
    <section className="about-us-area section-padding-0-100 clearfix" id="about">
        <div className="container">
            <div className="row align-items-center">
                
                <SecWelcomeMeter img={img} />

                <SecWhoWeContant data={data} />

            </div>
        </div>
    </section>
  );
}

export default SecAboutUsClient;