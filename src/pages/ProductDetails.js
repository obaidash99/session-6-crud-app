import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './Products.css';

function ProductDetails() {
	let { productId } = useParams();

	const [productDetails, setProductDetails] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:9000/products/${productId}`)
			.then((res) => res.json())
			.then((data) => setProductDetails(data));
	}, [productId]);

	return (
		<>
			{productDetails && (
				<>
					<h1>{productDetails.title}</h1>
					<div className="product-details">
						<img src={productDetails.image} alt={productDetails.title} />
						<div className="info">
							{/* <p>{productDetails.description}</p> */}
							<strong>Price: {productDetails.price}</strong>
						</div>
					</div>
				</>
			)}
		</>
	);
}

export default ProductDetails;
