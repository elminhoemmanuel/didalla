
const HeaderTemplate = ({ headerObj }) => {
    return ( 
        <div className='text-center mb-10'>
            <div className='text-center mb-3'><span className='text-xs text-didalla bg-didallateal rounded-2xl p-2 font-black'>{headerObj.tag}</span></div>
            <h1 className='text-2xl font-bold text-didallatitle mb-3'>{headerObj.bold}</h1>
            <p className='text-xs text-didallabody mb-3'>{headerObj.description}</p>
        </div>
     );
}
 
export default HeaderTemplate;