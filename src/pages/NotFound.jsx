import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div>
            <h2>Page not found!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti aut maiores maxime id harum, dolorem eaque eveniet reprehenderit, dolore possimus consequuntur minima iure. Quisquam voluptates nulla a odit illo expedita?</p>
            <p>Go to the <Link to="/">home page</Link></p>
        </div>
     );
}
 
export default NotFound;