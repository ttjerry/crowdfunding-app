import Top from './sections/bookmark'
import Stats from './sections/stats';
import About from './sections/about';

function FirstSec(){
    return (
        <div className='flex flex-col gap-6 items-center'>
        <Top/>
        <Stats/>
        <About/>
        </div>
    )
}

export default FirstSec;