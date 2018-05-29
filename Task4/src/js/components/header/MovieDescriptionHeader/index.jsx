import React from 'react';
import {TextInContainerComponent} from "../../common/TextInContainerComponent/index";

export const MovieDescriptionHeader = ({movie}) => (
    <div className='description-movie-doc-header'>
        <div>
            <img src={movie.poster_path} className='description-movie-doc-header_image'/>
        </div>
        <div className='description-movie-doc-header_text'>
            <TextInContainerComponent text={movie.title}/>
            <TextInContainerComponent text={movie.release_date}/>
        </div>
    </div>
);