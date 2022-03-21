import SectionHeading from '../../../components/SectionHeading'
import Content from './Content'

const SecOurServices = ({data}) => {
  return (
    <section className="our_services_area section-padding-0-100 clearfix" id="services">
        <div className="container">
        {data.map(proposition=>{
                return <>
                <SectionHeading
                title={proposition.heading}
            />
            <div className="row">
                {proposition.content && proposition.content.map((item , key) => (
                    <Content
                        key={key}
                        img={item.img}
                        title={item.title}
                    />
                ))}
            </div>
            </>
            })
        }    
        </div>
    </section>
  );
}

export default SecOurServices;