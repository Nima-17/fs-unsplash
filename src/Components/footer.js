import React from 'react'
import '../index.css'

class Footer extends React.Component {
    render() {
        return (
            <>
                <footer>
                    <div className='row'>
                        <div className='col'>
                            {/* Logo */}
                            <h1 id='logo' style={{ fontFamily: '"Open Sans", sans-serif' }}
                                className='text-white text-lg font-semibold'>
                                <span className='uppercase tracking-wider cursor-default'>
                                    FS-Unsplash
                                </span>
                            </h1>
                            <p className='mt-3'>
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Error maxime recusandae aut, exercitationem
                                molestiae in impedit voluptates magni vitae excepturi
                                esse fugit cupiditate mollitia.
                            </p>
                        </div>
                        <div className='col'>
                            <h1 className='w-fit cursor-default mb-10 relative text-xl font-semibold'>
                                Office
                                <div className='underline'><span></span></div>
                            </h1>
                            <p>ITPL road</p>
                            <p>whitefelid, Bangalor</p>
                            <p>Sabzevar, PIN 0051, Iran</p>
                            <p className='w-fit border-b border-b-gray-400 my-5'>O**********e1@gmail.com</p>
                            <h4 className='text-lg font-semibold w-fit'>+98, 933*****13</h4>
                        </div>
                        <div className='col'>
                            <h1 className='w-fit cursor-default text-xl font-semibold'>
                                Links
                                <div className='underline'><span></span></div>
                            </h1>
                            <ul className='list-none mt-3'>
                                <li className={className.a}><a href="#background">Go Up</a></li>
                                <li className={className.a}><a href="/">Services</a></li>
                                <li className={className.a}><a href="/">About Us</a></li>
                                <li className={className.a}><a href="/">Features</a></li>
                                <li className={className.a}><a href="/">Contacts</a></li>
                            </ul>
                        </div>
                        <div className='col'>
                            <h1 className='w-fit cursor-default text-xl font-semibold'>
                                Newsletter
                                <div className='underline'><span></span></div>
                            </h1>
                            <form className="pb-2 w-full mt-3 flex items-center justify-between border-b border-b-gray-400 mb-12">
                                <i style={{ fontSize: `18px`, marginRight: `10px` }} className="far fa-envelope"></i>
                                <input
                                    className='bg-transparent outline-none pr-2'
                                    type="email"
                                    placeholder='Enter your email'
                                    required />
                                <button className="bg-transparent items-center outline-none border-none cursor-pointer" type='submit'>
                                    <i style={{ fontSize: `16px` }} className="fas fa-arrow-right"></i>
                                </button>
                            </form>
                            <div className='flex justify-between'>
                                <a href="https://www.instagram.com"><i id='icon' className="fab fa-instagram"></i></a>
                                <a href="https://www.whatsapp.com"><i id='icon' className="fab fa-whatsapp"></i></a>
                                <a href="https://www.twitter.com"><i id='icon' className="fab fa-twitter"></i></a>
                                <a href="https://www.youtube.com"><i id='icon' className="fab fa-youtube"></i></a>
                                <a href="https://www.linkedin.com"><i id='icon' className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <p className='text-center mt-3'>© 2022 Created By FS-unsplash Group - All Rights Reserved </p>
                </footer>
            </>
        )
    }
}

const className = {
    a: 'my-3',
}

export default Footer;