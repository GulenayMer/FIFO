import { useState } from 'react'
import { Tab } from '@headlessui/react'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-router-dom'
import ingredient from './landingPagePics/ingredient.jpg'
import dish2 from "./landingPagePics/dish2.jpg"
import menu2 from "./landingPagePics/menu2.jpg"


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Tabs() {
  let [categories] = useState({
    Inventory: [
    {
        id: 1,
        title: 'Inventory Collection',
		image: ingredient ,
		description: 'Lists your inventory, you can pick how much of an ingredient you want to use, and keeps track of changing prizes over time.', 

    },
    ],
    Dishes: [
    {
        id: 1,
        title: 'Dish Collection',
		image: dish2 ,
		description: 'In the dish collection, you can pick ingredients from your inventory, that you need to create your dish. The dish collection will calculate the prize for one dish and add it to your list of dishes.', 
    },
    ],
    Menu: [
    {
        id: 1,
        title: 'Menu Collection',
		image: menu2,
		description: 'The Menu collection offers you to create menus with your created dishes. Filtering them by season, allergies etc.', 
    },
    ],
  })

  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-orange-400 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-200',
                  selected
                    ? 'bg-orange-500 shadow focus:outline-none'
                    : 'text-blue-100 hover:bg-orange-600 hover:text-white '
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
			<div  key={post.id} className="flex flex-col items-center justify-center max-w-md  ">
				<a className='' >
				<img className="object-cover object-center w-full h-70" src={post.image} alt="image"  />
				</a>
			<div className="p-2 text-center">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{post.title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">{post.description}</p>
        <Link to='' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white 
		bg-gradient-to-r from-pink-400 to-yellow-500 
		rounded-lg hover:from-pink-300 hover:to-yellow-400  focus:outline-none ">
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
