import Announcement from '../../components/announcement/Announcement';
import Categories from '../../components/categories/Categories';
import Navbar from '../../components/navbar/Navbar';
import Slider from '../../components/slider/Slider';

function Home() {
	return (
		<div>
			<Announcement />
			<Navbar />
			<Slider />
			<Categories />
		</div>
	);
}

export default Home;
