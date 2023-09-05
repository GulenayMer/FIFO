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

	<h2 className="text-2xl font-bold mt-20 mb-10">MENU LIST</h2>
	  <div className="flex flex-col justify-center items-center w-full 2xl:w-[80%] bg-gray-100">
		<img src={menuImg} alt="menu" className="w-[100%] h-100" />
		<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-[100%] 2xl:w-[80%] cursor-pointer ml-3  my-10">
		{ menu &&
			menu.map((item) => (
			<div key={item._id} className="bg-gray-50 py-3 px-2 shadow-md rounded-md flex flex-col justify-center items-center w-full"
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
			  backgroundColor: "#ffedd5"
			},
		  }}
      >
        {selectedItem && (
          <div className="flex relative flex-col justify-center items-center py-8" >
			<button
            className="absolute top-2 right-1 text-gray-500 bg-transparent hover:bg-gray-200 hover:text-gray-900
				rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
			onClick={() => setModalIsOpen(false)}>
			X
			</button>
			<div className="flex flex-col justify-center items-center  border-2 w-[70%] border-gray-300 p-3" ref={divToCaptureRef}>
			<h2 className="text-2xl text-gray-800 font-semibold">{selectedItem.name}</h2>
			<span>
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
            {selectedItem.dishes && 
				selectedItem.dishes.map((dish) => (
                <div key={dish._id} className="flex flex-col justify-center items-center my-3">
					<h5 className="text-gray-800 text-lg font-semibold uppercase tracking-wider">{dish.type}</h5>
					<p className="text-gray-800 text-md uppercase tracking-wide">
						{dish.name}
					</p>
					<p className="text-gray-600 text-sm lowercase italic">
						{dish.description}
					</p>
                </div>
			))}
			</div>
          
			 <button
			 onClick={captureAndDownloadImage}
              className=" mt-5 bg-purple-800 text-gray-50 px-3 py-2 rounded-lg hover:bg-purple-600 cursor-pointer"
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