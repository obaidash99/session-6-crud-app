import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './Products.css';

function CategoryProducts() {
	const { category } = useParams();

	const [categoryDeatils, setCategoryDetails] = useState({});

	useEffect(() => {
		fetch(`http://localhost:9000/products/category/${category}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				console.log(category);
				setCategoryDetails(data);
			});
	}, []);

	return (
		<>
			<h1>All Category Products</h1>
		</>
	);
}

export default CategoryProducts;
