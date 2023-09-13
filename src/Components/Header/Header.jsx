
import profile from '../../assets/img/IMG_20230523_144245.jpg'
const Header = () => {
    return (
        <div className=' flex justify-between items-center p-5 m-3 border-b-4  max-w-7xl mx-auto'>
            <h1 className=' text-4xl font-bold' >Study With Jahid</h1>
            <img className=' w-24 h-20 rounded-full' src={profile} alt="" />
        </div>
    );
};

export default Header;