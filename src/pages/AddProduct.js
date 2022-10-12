import { useState } from 'react';
import axios from 'axios';

import './Products.css';
import { useNavigate } from 'react-router-dom';

function AddProduct() {
	const [title, setTitle] = useState('');
	const [price, setPrice] = useState(0);
	const [image, setImage] = useState('');
	const [description, setDescription] = useState('');

	let navigate = useNavigate();

	const formSubmit = (e) => {
		e.preventDefault();

		axios
			.post(`http://localhost:9000/products`, {
				title,
				price,
				description,
				image,
			})
			.then((data) => navigate('/products'));
	};

	// 	fetch('http://localhost:9000/products', {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'Application/json',
	// 		},
	// 		body: JSON.stringify({
	// 			title,
	// 			price,
	// 		}),
	// 	})
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			console.log(data);
	// 			navigate('/products');
	// 		});
	// };

	return (
		<>
			<h1>Add New Product</h1>
			<form className="add-from" onSubmit={formSubmit}>
				<div className="mb-3">
					<label htmlFor="productTitle" className="form-label">
						Title
					</label>
					<input
						type="text"
						className="form-control"
						id="productTitle"
						placeholder="Product Title"
						aria-describedby="Product title"
						onChange={(e) => {
							setTitle(e.target.value);
						}}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="productPrice" className="form-label">
						Price
					</label>
					<input
						type="number"
						className="form-control"
						id="productPrice"
						placeholder="Product Price"
						aria-describedby="Product price"
						onChange={(e) => {
							setPrice(+e.target.value);
						}}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="productDesc" className="form-label">
						Description
					</label>
					<input
						type="text"
						className="form-control"
						id="productDesc"
						placeholder="Product Description"
						aria-describedby="Product Description"
						onChange={(e) => {
							setDescription(e.target.value);
						}}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="productImage" className="form-label">
						Image
					</label>
					<input
						type="url"
						name="imgURL"
						className="form-control"
						id="productImage"
						placeholder="Product Image"
						aria-describedby="Product Image"
						onChange={(e) => {
							setImage(e.target.value);
						}}
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Add Product
				</button>
			</form>
		</>
	);
}

export default AddProduct;
