import Announcement from '../../components/announcement/Announcement';
import Categories from '../../components/categories/Categories';
import Navbar from '../../components/navbar/Navbar';
import Bestsellers from '../../components/products/Bestsellers';
import NewArrivals from '../../components/products/NewArrivals';
import Slider from '../../components/slider/Slider';
import Newsletter from '../../components/newsletter/Newsletter';

function Home() {
	return (
		<div>
			<Announcement />
			<Navbar />
			<Slider />
			<Categories />
			<NewArrivals />
			<Bestsellers />
			<Newsletter />
		</div>
	);
}

export default Home;
