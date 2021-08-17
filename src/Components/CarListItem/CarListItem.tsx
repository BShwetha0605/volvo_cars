import React,{ FC } from 'react';
import { Link } from 'react-router-dom';
import {ICar} from '../../interface/cars';
import { ReactComponent as Arrow} from '../../assets/Img/chevron-small.svg';
import './CarListItem.css';

interface IProps{
   data: ICar
}
const CarListItem:FC<IProps> = ({data}) =>{
    return(<> 
        <figure className='car-item-fig'>
            <figcaption>{data.bodyType}</figcaption>
            <figcaption className='car-item-fig-caption'>{data.modelName} <span className='car-item-fig-sub-caption'>{data.modelType}</span></figcaption>
           <div className='car-item-figure-container' >
                 <img  className='car-item-figure' src={`${process.env.PUBLIC_URL}${data.imageUrl}`} alt="Trulli" />
            </div>
            <div className='car-item-fig-caption-links'>
               <div className='links'> <Link to={'/'}>Learn <Arrow/></Link></div>
               <div className='links'> <Link to={'/'}>Shop <Arrow/></Link></div>
            </div>
        </figure>
    </>)
};

export default React.memo(CarListItem);
