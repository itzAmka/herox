import Image from "next/image"

const Hero = () => {
  return (
    <section className="flex flex-col gap-12">
      <div className="flex flex-col items-start gap-4">
        <h1 className="md:text-7xl sm:text-5xl text-4xl md:font-semibold font-bold">
          Where creators run <br className="sm:block hidden" />
          their business
        </h1>
        <button className="bg-primary text-white text-sm py-3 px-6 rounded-md transition-all hover:brightness-75">Get Started</button>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        <div className="lg:h-80 h-72 relative">
          <Image src="https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" alt="hero" width={200} height={200} className="w-full h-full" />
          <button className="bg-primary text-white text-xl font-medium py-3 px-6 absolute bottom-0 w-full h-24 flex items-center gap-2 transition-all hover:brightness-75">
            Send Invoices
          <span className="text-2xl font-normal">{"->"}</span>
          </button>
        </div>
        <Image src="https://images.unsplash.com/photo-1611241893603-3c359704e0ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="hero" width={200} height={200} className="w-full lg:h-80 h-72"/>
        <Image src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="hero"  width={200} height={200} className="w-full lg:h-80 h-72"/>
      </div>
    </section>
  )
}

export default Hero