import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchFurniture } from "./redux/furnitureSlice";
import IndividualFurniture from "./IndividualFurniture";
import axios from "axios";
import "./Home.css";
// "https://course-api.com/react-store-products";
const Home = () => {
	// const [furnitureData, setFurnitureData] = useState("");
	const furnitureData = useSelector((state) => state.furniture);
	const dispatch = useDispatch();
	useEffect(() => {
		axios.get("http://localhost:3002/").then((res) => {
			dispatch(fetchFurniture(res.data));
		});
	}, []);
	return (
		console.log(furnitureData.furniture),
		(
			<section className="AllItem">
				{furnitureData.furniture.furnitureData &&
					furnitureData.furniture.furnitureData.map((furniture) => (
						<IndividualFurniture
							key={furniture._id}
							id={furniture.id}
							name={furniture.name}
							price={furniture.price}
							imgSrc={furniture.image}
						/>
					))}
			</section>
		)
	);
};

export default Home;
