import { useContext } from 'react'
import { HomeContext } from '../../context/HomeProvider.component'
import {Hero} from '../../Router/feature-router'

export default function Home() {
    const {homeData} = useContext(HomeContext);
    console.log(homeData);

  return (
    <div>
        <Hero homeData={homeData}/>
        Home
    </div>
  )
}
