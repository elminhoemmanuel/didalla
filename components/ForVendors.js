import HeaderTemplate from './HeaderTemplate'
import VendorCard from './VendorCard'
import { vendorObjOne, vendorObjTwo, vendorObjThree } from './VendorDetails'
import { headerObjOne } from './HeaderData'

const ForVendors = () => {
    return ( 
        <div className='px-6 md:px-10 lg:px-16 py-20'>
            <HeaderTemplate headerObj={headerObjOne} />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2 text-center relative'>
                {/* individual cards for the vendors section */}
                <VendorCard vendorObj={vendorObjOne}/>
                <VendorCard vendorObj={vendorObjTwo}/>
                <VendorCard vendorObj={vendorObjThree}/>

                {/* concave and convex curves */}
                <img src='/images/convex.svg' alt='convex curve' className='hidden md:inline w-16 lg:w-32 absolute convex' />
                <img src='/images/concave.svg' alt='concave curve' className='hidden md:inline w-16 lg:w-32 absolute concave' />
                {/* Mobile view curves */}
                <img src='/images/right-curve.svg' alt='concave curve' className='md:hidden w-8 absolute right-curve' />
                <img src='/images/left-curve.svg' alt='convex curve' className='md:hidden w-8 absolute left-curve' />
            </div>

        </div>
     );
}
 
export default ForVendors;