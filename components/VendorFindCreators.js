import React , { useState }from 'react'

const VendorFindCreators = ({
                handleBack,
                handleChangeSkills,
                socialInfluencer,
                contentWriter,
                photographer,
                youtuber,
}) => {

    const handleFormSubmit =(e) =>{
        e.preventDefault();
        alert('Congrats you have been onboarded')
    }

    const [click, setClick] = useState(false)
    const [click1, setClick1] = useState(false)
    const [click2, setClick2] = useState(false)
    const [click3, setClick3] = useState(false)

    console.log(socialInfluencer)

    return (
        <div className='pt-6 mx-auto w-4/5'>
            <div className='mb-8 md:hidden border-b-4 border-didalla flex flex-col flex-nowrap '>
                <div className='mb-4'>
                    <img src="/images/four.svg" alt="Fourth step icon"/>
                </div>
                <div className='mb-4'>
                    <p className='text-didallabody '>Find Creators</p>
                </div>
            </div>
            <p className='text-didallatitle mb-4 text-xl'>Choose creator skills</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
                <div>
                    <form action="" onSubmit={handleFormSubmit}>
                        <p className='text-didallabody text-sm mb-6'>Click to select or deselect</p>

                        <div className='flex flex-wrap justify-start onboarding-container mb-20'>
                            <div className='p-2'>
                            {
                                click ? <div type='text' name={true} className="cursor-pointer whitespace-nowrap mr-3 block py-3 px-6 text-center bg-didalla  rounded-full border border-didalla 
                                font-bold text-white focus:outline-none " onClick={() =>{handleChangeSkills('socialInfluencer');setClick(!click)}} >
                                    Social Influencer
                                </div> :<div type='text' name={true} className="cursor-pointer whitespace-nowrap mr-3 block py-3 px-6 text-center bg-transparent rounded-full border border-didalla 
                            font-bold text-didalla hover:text-white hover:bg-didalla focus:outline-none " onClick={() =>{handleChangeSkills('socialInfluencer');setClick(!click)}} >
                                Social Influencer
                            </div>
                            }
                            </div>

                            <div className='p-2'>
                            {
                                click1 ? <div type='text' name={true} className="cursor-pointer whitespace-nowrap mr-3 block py-3 px-6 text-center bg-didalla  rounded-full border border-didalla 
                                font-bold text-white focus:outline-none " onClick={() =>{handleChangeSkills('contentWriter');setClick1(!click1)}} >
                                    contentWriter
                                </div> :<div type='text' name={true} className="cursor-pointer whitespace-nowrap mr-3 block py-3 px-6 text-center bg-transparent rounded-full border border-didalla 
                            font-bold text-didalla hover:text-white hover:bg-didalla focus:outline-none " onClick={() =>{handleChangeSkills('contentWriter');setClick1(!click1)}} >
                                contentWriter
                            </div>
                            }
                            </div>

                            <div className='p-2'>
                            {
                                click2 ? <div type='text' name={true} className="cursor-pointer whitespace-nowrap mr-3 block py-3 px-6 text-center bg-didalla  rounded-full border border-didalla 
                                font-bold text-white focus:outline-none " onClick={() =>{handleChangeSkills('photographer');setClick2(!click2)}} >
                                    Photographer
                                </div> :<div type='text' name={true} className="cursor-pointer whitespace-nowrap mr-3 block py-3 px-6 text-center bg-transparent rounded-full border border-didalla 
                            font-bold text-didalla hover:text-white hover:bg-didalla focus:outline-none " onClick={() =>{handleChangeSkills('photographer');setClick2(!click2)}} >
                                Photographer
                            </div>
                            }
                            </div>
                            
                            <div className='p-2'>
                            {
                                click3 ? <div type='text' name={true} className="cursor-pointer whitespace-nowrap mr-3 block py-3 px-6 text-center bg-didalla  rounded-full border border-didalla 
                                font-bold text-white focus:outline-none " onClick={() =>{handleChangeSkills('youtuber');setClick3(!click3)}} >
                                    Youtuber
                                </div> :<div type='text' name={true} className="cursor-pointer whitespace-nowrap mr-3 block py-3 px-6 text-center bg-transparent rounded-full border border-didalla 
                            font-bold text-didalla hover:text-white hover:bg-didalla focus:outline-none " onClick={() =>{handleChangeSkills('youtuber');setClick3(!click3)}} >
                                Youtuber
                            </div>
                            }
                            </div>

                            

                        </div>

                        <div className='flex flex-row flex-nowrap justify-between'>
                            <button type='text' className="block p-3 text-center w-1/4 bg-didalla rounded 
                            font-bold text-white hover:bg-green-600 focus:outline-none"  onClick={handleBack}>
                                Back
                            </button>
                            <button type='submit' className="whitespace-nowrap block p-3 text-center w-2/4 bg-didalla rounded 
                            font-bold text-white hover:bg-green-600 focus:outline-none"  >
                                Create Campaign
                            </button>
                        </div>

                    </form>
                </div>

                <div className='hidden md:block'>
                    <img src="/images/rafiki.svg" alt="brand details image" className="w-4/5"/>
                </div>

            </div>
            

        </div>
    )
}

export default VendorFindCreators
