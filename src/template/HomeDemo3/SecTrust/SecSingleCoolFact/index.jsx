import SingleCoolFact from './SingleCoolFact'

const SecSingleCoolFact = ({data}) => {

  return (
  	<>
	  	{data && data.map((item , key) => (
					<SingleCoolFact
						key={key}
						img={item.img}
					/>
	  		))}
  	</>
  );
}

export default SecSingleCoolFact;