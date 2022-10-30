import react from 'react'
import '../index.css'
import PhotoCollage from '../images/PhotoCollage.jpg'
import Grid from '../images/Grid.jpg'

class Main extends react.Component {
    render() {
        return (
            <>
                <section id='as' className='sticky'>
                    <h1 id='pt' className='text-center absolute text-sm lg:text-2xl font-semibold tracking-wide'>
                        Types Of Photos Horizontal And Vertical In This Site With High Resolution
                    </h1>
                    <img src={PhotoCollage} alt="Horizonal & Vertical" />
                </section>
                <section className='my-10 sticky'>
                    <p className="text-xl lg:text-4xl md:text-4xl" id='editext'>FS-UNSPLASH</p>
                    <div id='bg' className='h-10 w-full'></div>
                </section>
                <section id='as2' className='sticky'>
                    <div className='allt'>
                        <p className='top-right'>Black & White Filter</p>
                        <p className='bottom-right'>Story Filter</p>
                        <p className='centered'>You can with buy membership photos edit and filter</p>
                        <p className='top-Left'>Original Photo</p>
                        <p className='bottom-Left'>RGB Filter</p>
                    </div>
                    <img src={Grid} alt="" />
                </section>
            </>
        );
    }
}

export default Main;