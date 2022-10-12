import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditProduct() {
	let { productId } = useParams();
	const [productDetails, setProductDetails] = useState([]);

	const [title, setTitle] = useState('');
	const [price, setPrice] = useState(0);
	const [image, setImage] = useState('');
	const [description, setDescription] = useState('');

	let navigate = useNavigate();

	useEffect(() => {
		fetch(`http://localhost:9000/products/${productId}`)
			.then((res) => res.json())
			.then((data) => setProductDetails(data));
	}, [productId]);

	const formSubmit = (e) => {
		e.preventDefault();

		axios
			.put(`http://localhost:9000/products/${productId}`, {
				title,
				price,
				description,
				image,
			})
			.then((data) => navigate('/products'));
	};

	return (
		<>
			{productDetails && (
				<>
					<h1>{productDetails.title}</h1>
					<div className="product-details">
						<img src={productDetails.image} alt={productDetails.title} />
						<div className="info">
							<p>{productDetails.description}</p>
							<strong>Price: {productDetails.price}</strong>
						</div>
					</div>

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
								defaultValue={productDetails.title}
								onChange={(e) => {
									setTitle(e.target.value || productDetails.title);
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
								defaultValue={productDetails.price}
								onChange={(e) => {
									setPrice(+e.target.value || productDetails.price);
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
								defaultValue={productDetails.description}
								onChange={(e) => {
									setDescription(e.target.value || productDetails.description);
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
								defaultValue={productDetails.image}
								onChange={(e) => {
									setImage(e.target.value || productDetails.image);
								}}
							/>
						</div>
						<button type="submit" className="btn btn-primary">
							Edit Product
						</button>
					</form>
				</>
			)}
		</>
	);
}

export default EditProduct;
