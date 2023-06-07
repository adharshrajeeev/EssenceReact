import React, { useEffect, useState } from 'react'
import { RANDOMIMAGES, imageIntance } from '../utils/axios';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Cardss() {

    const [randomImages,setRandomImages]=useState([])

    const getImages = async ()=>{
        try{
            imageIntance.get(RANDOMIMAGES).then((response)=>{
                setRandomImages(response.data)
            })

        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
       getImages()
    },[])

    return (
        <div className='container mt-5'>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
    
                        randomImages.map((images,key)=>(

                        <div className="col mb-3" key={images.id}>
                            <div className="card">
                                <LazyLoadImage
                                 src={images?.urls?.regular} className="card-img-top" alt={images?.alt_description}  effect="blur"/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">
                                       {images?.alt_description}
                                    </p>
                                </div>
                            </div>
                        </div>
                        ))
                    // ))
                }
            </div>

        </div>
    )
}

export default Cardss