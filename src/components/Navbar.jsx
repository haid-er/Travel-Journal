export default function Navbar() {
  return (
    <>
      <nav className="bg-red-500 flex items-center justify-center py-5">
        <div className="flex items-center justify-center">
          <a href="#" className="flex items-center content-center">
            <img
              src="/logo-world.png"
              alt="Logo of the Travel Journal"
              width={30}
            />
            <p className="text-white ps-3">My Travel Journal</p>
          </a>
        </div>
      </nav>
    </>
  );
}
