
import './App.css';
import Header from '../src/components/Header.jsx'
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {

    return (
        <div className='App'>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default App;