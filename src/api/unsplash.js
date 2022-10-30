import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID UVVx9ec12lg2Gv1goFvzjR-YGEu04NlzKRAbHz39U9c'
    },
})