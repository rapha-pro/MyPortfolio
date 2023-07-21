import {React} from 'react';
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';



export default function Home() {
    return (

        <section 
            id='home' 
            className='w-full flex flex-col gap-10 lgl:flex-row lgl: gap-0 items-center py-20 border-b-[1px] border-b-black font-titleFont'
        >
            <LeftBanner  />
            <RightBanner  />
        </section>
  );
}
