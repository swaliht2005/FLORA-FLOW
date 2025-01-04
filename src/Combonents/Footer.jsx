
import { Link } from 'react-router-dom';
import Combonentsimgs from '../assets/images/add.png';


function Footer() {
  

 
 
  

  return (
    <div className="h-[100px] w-full  shadow-md fixed bottom-0 z-20 flex items-center justify-center">
      <Link to={'/addproduct'}>
      <button
        
        className="h-[50px] w-[50px] text-2xl shadow-md flex bg-green-800 items-center justify-center rounded-full"
      >
        <img
          src={Combonentsimgs}
          alt="Add"
          className="h-[50px] w-[50px] rounded-full"
        />
      </button>
      </Link>
     
           
          </div>
       
      
      )}
      
    
  

export default Footer;
