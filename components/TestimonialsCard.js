
const TestimonialCard = ({ testimonialObj }) => {
    return ( 
        <div className='shadow-lg p-3 flex flex-col'>
            <div className='flex flex-col w-full md:w-3/5 p-4'>
                <div className='mb-2 text-sm text-didallatitle'><p>{testimonialObj.text}</p></div>
                <div className='mb-2 text-sm'><p className='font-bold'>{testimonialObj.name}</p></div>
                <div className='mb-2 text-sm text-didallabody'><p className=''>{testimonialObj.job}</p></div>
            </div>
        </div>
     );
}
 
export default TestimonialCard;