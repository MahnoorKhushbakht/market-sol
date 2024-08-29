export default function SolutionLayout({children}) {
    return(
        <div className='h-auto w-full bg-blue-950'>
        <div className="grid grid-cols-1 place-items-center place-content-center mt-5">
        <h1 data-aos="fade-down" className="text-white mt-5 font-extrabold text-2xl md:text-3xl">Our Services and Solutions</h1>
        <p data-aos="fade-down" className="text-white font-semibold text-lg md:text-2xl text-center">Your IT Infrastructure is Entrusted to Us</p>
        </div>
        {children}
        </div>
    )}