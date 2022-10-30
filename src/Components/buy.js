import React from 'react'
import '../index.css'


class Buy extends React.Component {
    render() {
        return (
            <>
                <div id='buymembership' className='p-8 flex justify-around mb-5 flex-wrap'>
                    {/* card goes here */}
                    <div id='transition' style={{ fontFamily: 'Open Sans' }} className='relative mt-10 lg:m-0 w-64'>
                        {/* yellow background */}
                        <div style={{ background: `#3500D3` }} className='absolute -right-5 -bottom-5 h-full w-full rounded-xl'></div>
                        <div className='relative bg-gray-800 text-gray-50 rounded-xl p-8 space-y-7'>
                            {/* yellow line */}
                            <div id='transition' style={{ background: `#3500D3` }} className='h-2 w-28 rounded-md'></div>
                            {/* percentage */}
                            <div className='text-4xl font-extrabold text-white cursor-default'>Personal</div>
                            {/* description */}
                            <p className='text-gray-400 leading-normal cursor-default'>
                                Download 10 Times
                                <br />
                                2GB Storage
                                <br />
                                Research Find 15 Times
                                <br />
                                Normal Token
                            </p>
                            {/* Order Now */}
                            <button className='btn btn-1'>Order Now</button>
                        </div>
                    </div>
                    {/* card goes here */}
                    <div id='transition' style={{ fontFamily: 'Open Sans' }} className='relative mt-10 lg:m-0 w-64'>
                        {/* yellow background */}
                        <div style={{ background: `#3500D3` }} className=' absolute -right-5 -bottom-5 h-full w-full rounded-xl'></div>
                        <div id='transition' className='relative bg-gray-800 text-gray-50 rounded-xl p-8 space-y-7'>
                            {/* yellow line */}
                            <div id='transition' style={{ background: `#3500D3` }} className='h-2 w-28 rounded-md'></div>
                            {/* percentage */}
                            <div className='text-4xl font-extrabold text-white cursor-default'>Premium</div>
                            {/* description */}
                            <p className='text-gray-400 leading-normal cursor-default'>
                                Download 30 Times
                                <br />
                                10GB Storage
                                <br />
                                Research Find 25 Times
                                <br />
                                Rare Token
                            </p>
                            {/* Order Now */}
                            <button className='btn btn-1'>Order Now</button>
                        </div>
                    </div>
                    {/* card goes here */}
                    <div id='transition' style={{ fontFamily: 'Open Sans' }} className='relative w-64 mt-10 lg:m-0'>
                        {/* yellow background */}
                        <div style={{ background: `#3500D3` }} className='absolute -right-5 -bottom-5 h-full w-full rounded-xl'></div>
                        <div className='relative bg-gray-800 text-gray-50 rounded-xl p-8 space-y-7'>
                            {/* yellow line */}
                            <div id='transition' style={{ background: `#3500D3` }} className='h-2 w-32 rounded-md'></div>
                            {/* percentage */}
                            <div className='text-4xl font-extrabold text-white cursor-default'>Ultimate</div>
                            {/* description */}
                            <p className='text-gray-400 leading-normal cursor-default'>
                                Download Infinite Times
                                <br />
                                1TB Storage
                                <br />
                                Research Infinite Times
                                <br />
                                Epic Token
                            </p>
                            {/* Order Now */}
                            <button className='btn btn-1'>Order Now</button>
                        </div>
                        
                    </div>
                </div>
            </>
        )
    }
}


export default Buy;