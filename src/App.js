
import './App.css';
import Header from '../src/components/Header.jsx'
import { Outlet } from 'react-router-dom';
import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

function App() {

    return (
        <div className='App'>
            <Header/>
            <Outlet/>
            {/* <Footer/> */}
        </div>
    );
}

export default App;