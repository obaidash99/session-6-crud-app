import { Routes, Route, Outlet } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import AddProduct from './pages/AddProduct';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="row">
				<div className="col-2 sidebar">
					<Sidebar />
				</div>
				<div className="col-10">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route
							path="/products"
							element={
								<>
									<Outlet />
								</>
							}
						>
							<Route path="" element={<Products />} />
							<Route path="add" element={<AddProduct />} />
							<Route path=":productId" element={<ProductDetails />} />
						</Route>
					</Routes>
				</div>
			</div>
		</div>
	);
}

export default App;
