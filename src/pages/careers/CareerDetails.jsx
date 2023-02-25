import { useLoaderData, useParams } from "react-router-dom";

const CareerDetails = () => {
    const {id} = useParams()
    const career = useLoaderData()

    return ( 
        <div className="career-details">
          <h2>Career Details for {career.title}</h2>
          <p>Starting salary: {career.salary}</p>
          <p>Location: {career.location}</p>
          <div className="details">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam illum, ad et ab itaque odio hic temporibus enim repudiandae velit possimus rerum excepturi necessitatibus ex dicta dolore, eos deleniti? At esse obcaecati tempora, nam totam rem omnis non repudiandae quo enim aliquid ea vel explicabo nostrum necessitatibus facilis voluptate magni?</p>
          </div>
        </div>
     );
}

//loader fuunction 
const careerDetailsLoader = async ({params}) => {
    const {id} = params
    const res = await fetch("http://localhost:4000/careers/" + id)
    if(!res.ok) {
      throw Error('Could not find that career')
    }
    return res.json()
}
 
export {CareerDetails, careerDetailsLoader};