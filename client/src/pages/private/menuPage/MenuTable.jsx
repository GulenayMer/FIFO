import { useEffect, useState, useRef  } from "react"
import instance from "../../../components/axios/axiosInstance";
import Modal from "react-modal"; 
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import menuImg from '../../../assets/menu.svg'

const MenuAll = () => {
	const [menu, setMenu] = useState(null);
	const [selectedItem, setSelectedItem] = useState(null); // To track the selected menu item
	const [modalIsOpen, setModalIsOpen] = useState(false); 
	const divToCaptureRef = useRef(null);
	const getMenu = async() => {
		try{
			const res = await instance.get('api/menu');
			setMenu(res.data)
			console.log('menusss', res.data);
		}catch(error){
			console.log(error.response);
		}
	}

	useEffect( () => {
		getMenu();
	}, []);

	 // Function to handle when a menu item is clicked
	 const handleMenuItemClick = (item) => {
		setSelectedItem(item);
		setModalIsOpen(true); 
	  };

	  function captureAndDownloadImage() {
		if (divToCaptureRef.current) {
		  html2canvas(divToCaptureRef.current).then((canvas) => {
			canvas.toBlob((blob) => {
			  saveAs(blob, "captured-image.png");
			});
		  });
		}
	  }

  return (
	<>

	<h2 className="text-2xl font-bold mb-4">MENU LIST</h2>
	  <div className="flex flex-col justify-center items-center w-full bg-gray-100 p-4">
		<img src={menuImg} alt="menu" className="w-full mb-4" />
		<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-[100%] cursor-pointer">
		{ menu &&
			menu.map((item) => (
			<div key={item._id} className="bg-white py-3 px-2 shadow-md rounded-md flex flex-col justify-center items-center  w-full"
			onClick={() => handleMenuItemClick(item)}>
				<h3 className=" text-gray-800  font-semibold uppercase mb-1">{item.name}</h3>
				{item.dishes && 
					item.dishes.map( (i) => (
					<div key={i._id} className="" >
						<p className="text-gray-600 text-md ">{i.name}
						<span className="text-purple-400 font-semibold italic ml-2 mt-2 ">{i.price}
							<span className='ml-1 italic font-semibold'>&euro;</span>
						</span>
						</p>
					</div>
				))}
			</div>
			))
		}
		
		</div>
		{/* Modal to display detailed menu item */}
		<Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Menu Item Details"
        ariaHideApp={false} // Prevent accessibility warning
		style={{
			content: {
			  width: "70%",
			  maxWidth: "", 
			  margin: "0 auto", 
			  overflow: "hidden",
			  backgroundColor: "#dccdb7"
			},
		  }}
      >
        {selectedItem && (
          <div className="flex relative flex-col justify-center items-center p-4" ref={divToCaptureRef}>
			<button
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900
				rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
			onClick={() => setModalIsOpen(false)}>
			X
			</button>
            <h2 className="text-2xl text-gray-800  font-semibold uppercase mb-4">{selectedItem.name}</h2>
            {selectedItem.dishes && 
				selectedItem.dishes.map((dish) => (
                <div key={dish._id} className="flex flex-col justify-center items-center">
					<h5 className="text-gray-600 text-md">{dish.type}</h5>
					<p className="text-gray-600  font-semibold italic mt-2">
						{dish.name}
					</p>
					<p className="text-gray-600  italic mt-2">
						{dish.description}
					</p>
					<span className="">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 100 20"
							preserveAspectRatio="none"
							className="text-gray-400 w-20 h-8"
						>
						<path
							d="M0 10 C 20 0, 40 20, 60 10 S 100 20, 100 10"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
						/>
						</svg>
					</span>
                </div>
			))}
			 <button
			 onClick={captureAndDownloadImage}
              className=" mt-3 bg-[#f7fff7] text-gray-800 px-4 py-2 rounded hover:bg-[#d2d6d2] cursor-pointer"
            >
              Download as Image
            </button>
		</div>
        )}
		</Modal>
	</div>
	</>
	)
}

export default MenuAll