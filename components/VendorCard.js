

const VendorCard = ({ vendorObj }) => {
    return ( 
        <div className='text-center p-6'>
            <div className='mb-3 flex justify-center items-center'><img className='' src={`/images/${vendorObj.image}.svg`} alt="post gig image"/></div>
            <h1 className='text-didallatitle text-black text-xl mb-2'>{vendorObj.bold}</h1>
            <p className='text-didallabody text-sm'>{vendorObj.description}</p>

        </div>
     );
}
 
export default VendorCard;