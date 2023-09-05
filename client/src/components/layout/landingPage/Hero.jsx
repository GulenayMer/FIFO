import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
import {MdKeyboardArrowRight} from 'react-icons/md'

const Hero = () => {
  return (
	<section className="bg-gray-200 pt-10">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <Link to='' 
		className="inline-flex cursor-pointer justify-between items-center py-1 px-1 pr-4 mb-7 text-sm
		 text-gray-100 bg-orange-400 rounded-full hover:bg-orange-500" >
          <span className="text-xs bg-orange-500 rounded-full text-white px-4 py-1.5 mr-3">NEW</span>
          <span className="text-sm font-medium ml-2">FIFO is out! See what's new</span>
        <span className='font-medium ml-1'><MdKeyboardArrowRight></MdKeyboardArrowRight></span>
        </Link>
        <h1 className="mb-4 text-4xl py-5 font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
			FIFO Manager: Elevate Your Restaurant's Success
		</h1>
        <p className="mb-8 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 xl:px-48">
			Transform your restaurant's inventory and pricing with ease. Empowering chefs and owners, it streamlines inventory,
			calculates dish prices and customizes menus effortlessly. Elevate your restaurant's success today!
		</p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        	<Link to=''  
			className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center
			text-white bg-gray-800  rounded-lg  hover:bg-gray-600">
            Learn more 
          </Link>
		  <Link to="" smooth duration={500} 
			className='group w-fit px-6 py-3 my-4 flex items-center text-black
				rounded-md bg-white hover:bg-orange-500 hover:text-white cursor-pointer'>
				Check Out Our Prices
				<span className='ml-1 group-hover:rotate-90 duration-300'>
					<HiOutlineArrowNarrowRight/>
			</span>						
		</Link>
        </div>
      </div>
    </section>
  )
}

export default Hero