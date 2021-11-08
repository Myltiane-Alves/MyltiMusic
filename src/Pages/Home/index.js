import React from 'react';
import Content from '../../Components/Content';
import Header from '../../Components/Header';
import Pricing from '../../Components/Pricing';
import { heroOne, heroTwo, heroThree } from '../../Data/home.Data';

const Home = () => {
    return (
       <>
          <Header />  
          <Content {...heroOne} />
          <Content {...heroTwo} />
			<Content {...heroThree} />
         <Pricing />
       </>
    )
}

export default Home;