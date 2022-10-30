import React from 'react'
import Unsplash from './api/unsplash';
import Header from './Components/Header';
import ImageList from './Components/imageList';
import Buy from './Components/buy';
import Footer from './Components/footer';
import Main from './Components/main';


class App extends React.Component {

    state = { images: [] };

    async onSearchSubmit(term) {
        const { data } = await Unsplash.get('search/photos', {
            params: {
                query: term
            }
        });
        this.setState({ images: data.results });
    }

    render() {
        return (
            <>
                <div>
                    <Header onSubmit={this.onSearchSubmit.bind(this)} />
                    <Main />
                    <ImageList images={this.state.images} />
                    <Buy />
                    <Footer />
                </div>
            </>
        )
    }
}

export default App;