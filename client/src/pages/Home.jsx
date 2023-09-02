import DefaultLayout from '../components/layout/DefaultLayout';
import Tabs from '../components/layout/landingPage/Tabs'
import Hero from '../components/layout/landingPage/Hero'
import SecondPart from '../components/layout/landingPage/SecondPart'


const Home = () => {
	return (
    <DefaultLayout>
		<Hero></Hero>
		<SecondPart></SecondPart>
		<div className='flex justify-center bg-gray-200'>
			<Tabs></Tabs>

		</div>
    </DefaultLayout>
	);
};

export default Home;
