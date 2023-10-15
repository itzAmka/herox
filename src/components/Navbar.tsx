import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="max-w-6xl mx-auto px-4 py-4 flex gap-12 items-center justify-between">
      <div className="flex gap-12 items-center">
        <h1 className="text-xl font-bold">
          <a href="/">Herox</a>
        </h1>
        <ul className="flex gap-12">
          <li>
            <Link href="#services" className="text-accent">Services</Link>
          </li>
          <li>
            <Link href="#portfolio" className="text-accent">Portfolio</Link>
          </li>
          <li>
            <Link href="#contact-us" className="text-accent">Contact Us</Link>
          </li>
          <li>
            <Link href="#about-us" className="text-accent">About Us</Link>
          </li>
        </ul>
      </div>
      <button className="bg-primary text-white text-sm py-3 px-6 rounded-full transition-all hover:brightness-75">Register / Login</button>
    </nav>
  )
}

export default Navbar