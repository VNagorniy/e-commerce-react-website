import { useParams } from 'react-router-dom';
import { allProducts } from '../../data';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './SingleProduct.css';
import { useState } from 'react';

function SingleProduct() {
	const { id } = useParams();
	const product = allProducts.find((product) => product.id === parseInt(id));

	const colors = ['red', 'purple', 'teal', 'green', 'black'];
	const [selectedColor, setSelectedColor] = useState(null);
	const handleCircleClick = (color) => {
		setSelectedColor(color);
	};

	const sizes = ['xs', 's', 'm', 'l', 'xl'];
	const [selectedSize, setSelectedSize] = useState(null);
	const handleSizeClick = (size) => {
		setSelectedSize(size);
	};

	return (
		<div className="singleProduct-container">
			<Navbar />
			<div className="singleProduct-wrapper">
				<div className="singleProduct-imageSection">
					<img src={product.img} alt="" className="singleProduct-image" />
				</div>
				<div className="singleProduct-infoSection">
					<h2 className="singleProduct-title">{product.title}</h2>
					<p className="singleProduct-number">{product.price}</p>
					<h4 className="description-title">Description</h4>
					<p className="singleProduct-description">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex repellat repudiandae magnam ut optio ducimus saepe repellendus, consequatur maxime illum voluptatem odit suscipit sit nam
						cupiditate! Laudantium quam magnam veniam assumenda quos beatae culpa itaque explicabo laboriosam eligendi. Laborum amet dicta quae tempora doloribus exercitationem nam natus laudantium
						at. Rem est similique aspernatur quam commodi fugit! Consequuntur obcaecati iure quod.
					</p>
					<div className="singleProduct-options">
						<div className="colors-section">
							<h4>Colors</h4>
							<div className="colors">
								{colors.map((color) => (
									<div
										key={color}
										className="color-circle"
										style={{ backgroundColor: color, outline: selectedColor === color ? `3px solid ${color}` : '' }}
										onClick={() => handleCircleClick(color)}
									></div>
								))}
							</div>
						</div>
						<div className="sizes-section">
							<h4>Size</h4>
							<div className="sizes">
								{sizes.map((size) => (
									<span key={size} style={{ border: selectedSize === size ? '1px solid #ccc' : '' }} onClick={() => handleSizeClick(size)}>
										{size}
									</span>
								))}
							</div>
						</div>
					</div>
					<div className="addToCart">
						<button>Add to cart</button>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default SingleProduct;
