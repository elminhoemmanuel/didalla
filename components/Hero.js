const Hero = () => {
    return ( 
        <div className='px-6 hero'>
            <div className='flex flex-col font-black md:items-center justify-start md:justify-center 
                pt-32 pb-6 text-3xl md:text-6xl text-didallatitle'>
                <h1 className='whitespace-nowrap leading-tight'>Find a <span className='text-didalla'>content</span></h1>
                <h1 className='whitespace-nowrap leading-tight'><span className='text-didalla'>creator</span>, promote</h1>
                <h1 className='whitespace-nowrap leading-tight '>your business</h1>
                <p className='text-didallabody text-sm md:text-base mt-3 text-left md:text-center tracking-widest'>The largest marketplace for booking advertising gigs<br/>with content creators.</p>
            </div>
            <form action="" className='text-left md:text-center mb-12'>
                    <div className='block md:inline-block mb-2 md:mb-0 relative'>
                        <input type="text" className='w-64 md:w-96 rounded p-3 pl-10 border border-didalla 
                        focus:border-didalla focus:outline-none mr-3
                        bg-footergray' placeholder='What do you want to promote'/>
                        <img className='absolute search-icon' src="/images/MagnifyingGlass.svg" alt="search icon"/>
                    </div>
                    
                    <div className='block md:inline-block'>
                        <button className='w-52 whitespace-nowrap p-3 bg-didalla
                                border border-didalla rounded text-white hover:bg-green-600 hover:border-green-600
                                focus:outline-none shadow-2xl'>Find a content creator
                        </button>
                    </div>

                    

            </form>
        </div>
     );
}
 
export default Hero;