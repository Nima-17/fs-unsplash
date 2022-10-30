import React from 'react'
import '../index.css'
import ImageCard from './imageCard';
import '../Components/imageList.css'

const ImageList = (props) => {

    const photos = props.images.map(image => {
        return (
            <>
                <ImageCard
                    image={image}
                    key={image.id}
                />
            </>
        );
    });

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                {photos}
            </div>
        </>
    );
}

export default ImageList;