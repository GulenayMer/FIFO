import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
import {MdEmail} from 'react-icons/md'
import cashier from './landingPagePics/cashier.jpg';
const SecondPart = () => {
  return (
	<section className="bg-gray-300 h-[60vh] 2xl:h-[40vh]">
    <div className="grid max-w-screen-xl px-10 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto ml-5 place-self-center lg:col-span-7">
            <h2 className="max-w-2xl mb-4 text-4xl  tracking-tight leading-none md:text-5xl xl:text-6xl">
				Send Us an Email 
			</h2>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
					Our Team is reaching out to you 
			</p>
			<div className='flex flex-row justify-center gap-4'>
			<div className=" relative max-w-xs">
			<p className="pl-3 items-center flex absolute inset-y-0 left-0 pointer-events-none">
				<span className="items-center justify-center flex">
					<MdEmail/>
				</span>
			</p>
			<input placeholder="Type your email" type="search" 
				className="border border-gray-300 sm:text-sm w-full rounded-lg pt-2 pb-2 pl-10 px-3 py-2"/>
		</div>
			<Link to="" className="inline-flex items-center justify-center px-5 py-1  font-medium  text-gray-900 border
			border-gray-300 rounded-lg hover:bg-gray-100">
                Send
				<span className='ml-1'>
					<HiOutlineArrowNarrowRight/>
				</span>						
            </Link> 
		</div>

        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={cashier} alt="cashier" />
        </div>                
    </div>
	</section>
  )
}

export default SecondPart