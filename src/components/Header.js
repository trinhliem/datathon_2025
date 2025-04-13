const Header = ({ title }) => (
    <div className="bg-red-600 text-white p-6 flex items-center">
        <span className="text-3xl mr-4">❤️</span>
        <h1 className="text-xl font-semibold">{title}</h1>
    </div>
);
export default Header;