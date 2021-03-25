import HeaderTemplate from './HeaderTemplate';
import { headerObjTwo } from './HeaderData';
import {boosterObjOne, boosterObjTwo, boosterObjThree, boosterObjFour} from './VendorDetails'
import VendorCard from './VendorCard';


const ForBoosters = () => {
    return ( 
        <div className='px-6 md:px-10 lg:px-16 py-16 bg-didallablack text-white booster-holder'>
            <HeaderTemplate headerObj={headerObjTwo} />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2 mb-10'>
                <VendorCard vendorObj={boosterObjOne}/>
                <VendorCard vendorObj={boosterObjTwo}/>
                <VendorCard vendorObj={boosterObjThree}/>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                <VendorCard vendorObj={boosterObjFour}/>
                <VendorCard vendorObj={boosterObjOne}/>
                <VendorCard vendorObj={boosterObjOne}/>
            </div>
        </div>
     );
}
 
export default ForBoosters;