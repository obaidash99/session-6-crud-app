import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import './Products.css';

function Products() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getAllProducts();
	}, []);

	const getAllProducts = () => {
		fetch('http://localhost:9000/products')
			.then((res) => res.json())
			.then((data) => setProducts(data));
	};

	const deleteProduct = (product) => {
		Swal.fire({
			title: `You Are Going to Delete "${product.title}"  Are You Sure?`,
			showCancelButton: true,
		}).then((data) => {
			if (data.isConfirmed) {
				fetch(`http://localhost:9000/products/${product.id}`, {
					method: 'DELETE',
				})
					.then((res) => res.json())
					.then(() => getAllProducts());
			}
		});
	};

	return (
		<>
			<h1>Products Pgae</h1>
			<Link className="btn btn-success mt-3" to="/products/add">
				Add New Product
			</Link>
			<table className="table table-striped mt-5 products-table">
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Description</th>
						<th>Price</th>
						<th>Operations</th>
					</tr>
				</thead>
				<tbody>
					{products.map((product) => (
						<tr key={product.id}>
							<td>{product.id}</td>
							<td>{product.title}</td>
							<td>{product.description.slice(0, 60)}...</td>
							<td>{product.price}</td>
							<td>
								<button
									className="btn btn-danger btn-sm"
									onClick={() => deleteProduct(product)}
								>
									Delete
								</button>
								<Link className="btn btn-info btn-sm" to={`/products/${product.id}`}>
									View
								</Link>
								<button className="btn btn-primary btn-sm">Edit</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}

export default Products;
