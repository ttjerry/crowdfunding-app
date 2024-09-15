function Nav() {
  return (
    <div className="h-[40vh] w-full bg-[url('/images/image-hero-desktop.jpg')]">
      <nav className="flex flex-row items-center justify-between p-10 px-24">
        <div>
            <img src="/images/logo.svg" alt="image" />
        </div>
        <ul>
          <li className="flex flex-row gap-12">
            <a href="#" className="text-white">About</a>
            <a href="#" className="text-white">Discover</a>
            <a href="#" className="text-white">Get Started</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
