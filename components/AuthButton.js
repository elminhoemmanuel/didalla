import Link from 'next/link';

const AuthButton = ({buttonText}) => {
    return ( 
        <Link href="">
            <a className='block'>
                <button type='submit' className="p-4 text-center w-full bg-transparent rounded text-sm
                font-bold bg-didalla text-white hover:bg-green-600 focus:outline-none ">
                    {buttonText}
                </button>
            </a>
        </Link>
     );
}
 
export default AuthButton;