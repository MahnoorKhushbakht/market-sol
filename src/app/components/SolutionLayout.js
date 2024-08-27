export default function SolutionLayout({children}) {
    return(
        <div className='min-h-svh w-full'>
        <div className="grid grid-cols-1 place-items-center place-content-center mt-5">
        <h1 data-aos="fade-down" className="font-extrabold text-2xl md:text-3xl">Our Services and Solutions</h1>
        <p data-aos="fade-down" className="font-semibold text-lg md:text-2xl text-center">Your IT Infrastructure is Entrusted to Us</p>
        </div>
        {children}
        </div>
    )}