import React from 'react'

const DisplayCreators = ({
    handleBack,
    
}) => {

    const onSubmit = (e) =>{
        e.preventDefault();
    }

    return (
        <div className='px-6 md:px-10 lg:px-16'>
            
            <p className='text-xl text-black font-bold pb-2 border-b border-gray-200 mb-4'>Find creators</p>
            <p className='text-sm text-didallabody'>Here is a list of creators from our pool of creators that match your requirements</p>
            

        </div>
    )
}

export default DisplayCreators
