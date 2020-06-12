import React from 'react';
import ImageCard from '../imageCard/ImageCard';
import style from './imageCardList.module.scss';

/**
 * General Component to create image card list
 */
export class ImageCardList extends React.Component { 
    
    constructor(props){
        super(props);
        this.state = {imageList: this.props.images};
    }
    
    /**
     *Return image list
     *
     * @param {[]} items Array of image detalis
     */
    listCreator = (items) => {
        return items.map(({ Poster, Title, imdbID, Year, isFav = false }, i) => {
            return (
            <div className={ style.row__column } key={i}>
                <ImageCard imgURL={ Poster }
                title={ Title }
                isFav = { isFav }
                id = { imdbID }
                year = { Year }
                onFavClick = { this.onFavClick }>
                </ImageCard>
            </div>
            )
        });        
    }

    /**
     * Onclick for image like button
     */
    onFavClick = async ({ id, isFav }) => {
        const reqOptions = {
            method: isFav ? 'delete' : 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ imageId: id }),
        };
        try {
            const res = await fetch('http://localhost:8357/api/favImages', reqOptions);
        } catch (ex) {
            console.log('error', ex);
        }
        const images = [...this.state.imageList];
        const item = images.find(item => item.imdbID === id);
        item['isFav'] = !isFav;
        if(this.props.isFavourite) {
            this.setState({ imageList: images.filter(item => item.isFav)});
            return;
        }
        this.setState({ imageList: images});
    }

    render() { 
        return (
            <div className={ style.row }>
             {
                 this.state.imageList && this.state.imageList.length >0 ? (                    
                    this.listCreator(this.state.imageList)
                ) : (<div className= { style.error }>Please like images! :|</div>)
             }           
            </div>            
        )
    }
}

export default ImageCardList;