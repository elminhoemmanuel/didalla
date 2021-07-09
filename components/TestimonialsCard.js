
const TestimonialsCard = ({ testimonialObj }) => {
    return ( 
        <div className='shadow-lg p-3 flex flex-col h-72'>
            <div className='flex flex-col w-full md:w-3/5 p-4'>
                <div className='mb-10 text-sm text-didallatitle'><p>{testimonialObj.text}</p></div>
                <div className='mb-2 text-sm'><p className='font-bold'>{testimonialObj.name}</p></div>
                <div className='mb-2 text-sm text-didallabody'><p className=''>{testimonialObj.job}</p></div>
            </div>
        </div>
     );
}
 
export default TestimonialsCard;