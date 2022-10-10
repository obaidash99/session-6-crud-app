import { Link } from 'react-router-dom';

function Products() {
	return (
		<>
			<h1>Products Pgae</h1>
			<Link className="btn btn-success mt-3" to='/products/add'>Add New Product</Link>
			<table className="table table-striped mt-5">
				<thead>
					<tr>
						<td>ID</td>
						<td>Title</td>
						<td>Price</td>
						<td>Operations</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Products-1</td>
						<td>100</td>
						<td>
							<button className="btn btn-danger btn-sm">Delete</button>
							<button className="btn btn-info btn-sm">View</button>
							<button className="btn btn-primary btn-sm">Edit</button>
						</td>
					</tr>
				</tbody>
			</table>
		</>
	);
}

export default Products;
