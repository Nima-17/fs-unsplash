import React from 'react'
import '../index.css'

class ImageCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { spans: 0 };
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpan);
    }

    setSpan = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height);

        this.setState({ spans });
    }


    render() {
        const { alt_description, urls } = this.props.image;
        return (
            <>
                <div className='p-1' style={{ gridRowEnd: `span ${this.state.spans}` }} >
                    <a href={urls.regular}>
                        <img
                            id='imagehover'
                            className="cursor-zoom-in"
                            ref={this.imageRef}
                            src={urls.regular}
                            alt={alt_description}
                        />
                    </a>
                </div>
            </>
        )
    }
}


export default ImageCard;