import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';

import './Products.css';

function Categories() {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:9000/categories`)
			.then((res) => res.json())
			.then((data) => {
				setCategories(data);
				// console.log(data);
				// console.log(categories);
			});
	}, []);

	return (
		<>
			<h1>Categories Page</h1>
			<div className="category-parent">
				{categories.map((category) => (
					<Link className="category-card" key={category.id} to={`/${category.category}`}>
						<img src={category.image} alt={category.category} className="category-img" />
						<h4>{category.category}</h4>
					</Link>
				))}
			</div>
		</>
	);
}
export default Categories;
