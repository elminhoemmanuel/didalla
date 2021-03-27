
const AuthButton = ({buttonText}) => {
    return ( 
        <div>
            <button type='submit' className="block p-4 text-center w-full bg-transparent rounded text-sm
            font-bold bg-didalla text-white hover:bg-green-600 focus:outline-none ">
                {buttonText}
            </button>
        </div>
     );
}
 
export default AuthButton;