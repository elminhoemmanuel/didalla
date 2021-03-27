
const TestimonialCard = ({ testimonialObj }) => {
    return ( 
        <div className='shadow-lg p-3 flex flex-col md:flex-row'>
            <div className="mr-3 mb-3 w-full md:w-2/5"><img className='w-full h-full rounded' src={testimonialObj.image} alt="testimonial image"/></div>
            <div className='flex flex-col w-full md:w-3/5 '>
                <div className='mb-2 text-sm text-didallatitle'><p>{testimonialObj.text}</p></div>
                <div className='mb-2 text-sm'><p className='font-bold'>{testimonialObj.name}</p></div>
                <div className='mb-2 text-sm text-didallabody'><p className=''>{testimonialObj.job}</p></div>
            </div>
        </div>
     );
}
 
export default TestimonialCard;