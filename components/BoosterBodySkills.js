import React, { useState , useEffect} from 'react'
import Select from "react-select";

const BoosterBodySkills = ({
    activeStep,
    handleNext,
    handleBack,
    booster,
    creatorSkills,
    handleSetBoosterSkills,
}) => {

    const [selectedOption, setSelectedOption] = useState(null);
    const [hasSelected, setHasSelected] = useState(false);
    const selectField = <Select className=''
                            isMulti
                            isSearchable
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={creatorSkills}
                        />

    useEffect(() => {
        handleSetBoosterSkills(selectedOption)
        
        
    }, [selectedOption])

    return (
        <div className=' col-span-5 px-6 pt-6 md:pt-32 pb-4'>
            <div className='py-8 px-10 bg-white rounded'>
                <div className=' mb-6 border-b border-gray-200 py-4'>
                    <p className='text-black text-sm '>Step {activeStep} of 8</p>
                    <h1 className='text-2xl text-black'>Creator Skills</h1>
                </div>

                <div className='mb-12'>
                    <p className='text-didallabody'>Tell us about what services you offer,  you can select up to five skills from the dropdown</p>
                </div>

                <div className='py-4 pr-4'>
                    <form action="" onSubmit={(e) =>{
                        e.preventDefault()
                        if (booster.skills === null && !hasSelected){
                            // alert('You have to select atleast one skill');
                            setHasSelected(true);
                        }else if (booster.skills === null && hasSelected){
                            setHasSelected(true)
                        }else{
                            handleNext();
                        }
                        }}>
                        <div >
                            {selectField}
                        </div>

                        {hasSelected && <p className='text-red-500 my-2'>You have to select atleast one skill</p>}

                        <div className='pt-6 flex flex-row flex-nowrap justify-end'>
                            <div className='mr-2'>
                                <button type='text' className="block py-3 px-6 text-center bg-transparent border border-didalla rounded 
                                        font-bold text-didalla hover:text-white hover:bg-didalla focus:outline-none"  
                                        onClick={handleBack} 
                                        >
                                            Back
                                </button>
                            </div>
                            <div>
                                <button type='submit' className="block py-3 px-6 text-center bg-didalla rounded 
                                    font-bold text-white hover:bg-green-600 focus:outline-none"  
                                     
                                    >
                                        Next
                                </button>
                                
                            </div>
                    </div>

                    </form>
                    
                </div>

            </div>
            
        </div>
    )
}

export default BoosterBodySkills
