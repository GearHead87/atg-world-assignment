import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'font-awesome/css/font-awesome.min.css';
import Navbar from './Components/Page/Navbar/Navbar';
import Header from './Components/Page/Header/Header';
import AllPost from './Components/Page/AllPost/AllPost';

function App() {
	return (
		<>
			<Navbar />
			<Header />
			<AllPost />
		</>
	);
}

export default App;
