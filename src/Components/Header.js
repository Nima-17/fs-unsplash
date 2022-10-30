import React from 'react'
import '../index.css'
import HoverImage from './hoverimage';

class Header extends React.Component {

    state = { term: '' };

    onFormSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <>
                {/* Header */}
                <div style={{ fontFamily: '"Open Sans", sans-serif' }} id='background' className='bg-no-repeat h-screen w-full bg-cover bg-center'>
                    {/* Top logo */}
                    <h1 style={{ fontFamily: '"Open Sans", sans-serif' }}
                        className='text-center p-2 text-white  text-xl font-semibold'>
                        <span className='uppercase tracking-wider cursor-default'>
                            FS-Unsplash
                        </span>
                    </h1>
                    {/* Navbar */}
                    <nav className='flex items-center justify-between flex-wrap text-white mr-9 ml-9'>
                        <div id='hover-item'
                            className='flex-none items-center cursor-pointer p-2 rounded-full'>
                            <a href="#buymembership">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                            </a>
                        </div>
                        <div className='shrink text-center'>

                            <div className='inline-flex cursor-pointer'>
                                <a id='hover-item' className='cursor-pointer p-1 rounded-lg uppercase' href={HoverImage}> Services </a>
                            </div>

                            <div id='item' className='inline-flex ml-11'>
                                <a id='hover-item' className='cursor-pointer p-1 rounded-lg uppercase' href="/"> Collction </a>
                            </div>

                            <div id='item-center' className='inline-flex mx-5'></div>

                            <div id='item2' className='inline-flex mr-11'>
                                <a id='hover-item' className='cursor-pointer p-1 rounded-lg uppercase' href="/"> Blog </a>
                            </div>

                            <div id='item3' className='inline-flex cursor-pointer'>
                                <a id='hover-item' className='cursor-pointer p-1 rounded-lg uppercase' href="/"> AboutUs </a>
                            </div>
                        </div>
                        <div id='hover-item'
                            className='flex-none items-center cursor-pointer p-2 rounded-full'>
                            <a href="#search">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </a>
                        </div>
                    </nav>
                    {/* Caption */}
                    <div className='text-white grid p-5 mt-24 items-center ml-5 cursor-default'>
                        <p className='text-5xl items-center transition-all uppercase tracking-wide font-semibold'> FS-Unspalsh </p>
                        <p className='items-center text-3xl'>No VPN connection require</p>
                        <div className='items-center'>
                            <p className='text-lg my-1 uppercase'>
                                <span>With this website fastSearch on Unsplash</span>
                                <br />
                                <span>download free photos This site.</span>
                            </p>
                        </div>
                        <div id='f'>
                            <a href="/">
                                <button style={{ fontFamily: '"Open Sans", sans-serif' }}>Click to start</button>
                            </a>
                        </div>
                    </div>
                </div>
                { /* SearchBar */}
                <form id='search' onSubmit={this.onFormSubmit.bind(this)} className="group top-0 bg-zinc-700 z-50 px-4 sm:px-6 lg:px-16">
                    <div className="max-w-10xl mx-auto flex">
                        <label htmlFor='search-input' className="flex-none pr-3 flex items-center">
                            <span className="sr-only"></span>
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-200 group-focus-within:text-gray-400 transition-colors duration-150">
                                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </label>
                        <input autoComplete='off'
                            style={{ fontFamily: '"Open Sans",sans-serif' }}
                            type="text" id="search-input"
                            spellCheck="true"
                            placeholder="Search free high-resolution photos"
                            className="flex-auto bg-zinc-700 py-6 text-base leading-6 text-gray-200 placeholder-gray-300 focus:outline-none focus:placeholder-gray-200"
                            onChange={e => this.setState({ term: e.target.value })} />
                    </div>
                </form>
            </>
        )
    }
}


export default Header;