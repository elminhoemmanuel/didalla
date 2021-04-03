
const AuthButton = ({buttonText}) => {
    return ( 
        <div>
            <button type='submit' className="pointer-events-none block p-4 text-center w-full bg-transparent rounded text-sm 
            font-bold bg-didalla bg-opacity-50 text-white hover:bg-green-600 focus:outline-none disabled:opacity-50"  >
                {buttonText}
            </button>
        </div>
     );
}
 
export default AuthButton;