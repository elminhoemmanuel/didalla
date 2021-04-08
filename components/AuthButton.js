
const AuthButton = ({buttonText, handleNext}) => {
    return ( 
        <div>
            <button type='submit' className="block p-3 text-center w-full bg-transparent rounded text-sm
            font-bold bg-didalla text-white hover:bg-green-600 focus:outline-none disabled:opacity-50"  >
                {buttonText}
            </button>
        </div>
     );
}
 
export default AuthButton;