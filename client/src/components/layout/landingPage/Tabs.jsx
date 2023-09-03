import { useState } from 'react'
import { Tab } from '@headlessui/react'
import placeholder from '../../../assets/avatar.png';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Tabs() {
  let [categories] = useState({
    Inventory: [
    {
        id: 1,
        title: 'Inventory Collection',
		image:placeholder,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, nemo vitae? Sed aspernatur quis reprehenderit obcaecati', 

    },
    ],
    Dishes: [
    {
        id: 1,
        title: 'Dish Collection',
		image:placeholder,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, nemo vitae? Sed aspernatur quis reprehenderit obcaecati', 
    },
    ],
    Menu: [
    {
        id: 1,
        title: 'Menu Collection',
		image:placeholder,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, nemo vitae? Sed aspernatur quis reprehenderit obcaecati', 
    },
    ],
  })

  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-gray-900/80 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-200',
                  selected
                    ? 'bg-gray-600 shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                
              )}
            >
            {posts.map((post) => (
    		<div  key={post.id} className="flex flex-col items-center justify-center max-w-md rounded-lg shadow-md ">
    			<a href="#">
        		<img className="rounded-t-lg " src={post.image} alt="" width={200}/>
    			</a>
    	<div className="p-2 text-center">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{post.title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">{post.description}</p>
        <Link to='' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
			<span className='ml-2'><HiOutlineArrowNarrowRight/></span>
        </Link>
    </div>
</div>
        ))}
        </Tab.Panel>
        ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
