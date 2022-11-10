import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

import gallery01 from '../../../assets/gallery/gallery01.jpg'
import gallery02 from '../../../assets/gallery/gallery02.jpg'
import gallery03 from '../../../assets/gallery/gallery03.jpg'
import gallery04 from '../../../assets/gallery/gallery04.jpg'
import gallery05 from '../../../assets/gallery/gallery05.jpg'
import gallery06 from '../../../assets/gallery/gallery06.jpg'
import gallery07 from '../../../assets/gallery/gallery07.jpg'
import gallery08 from '../../../assets/gallery/gallery08.jpg'
import gallery09 from '../../../assets/gallery/gallery09.jpg'
import gallery10 from '../../../assets/gallery/gallery10.jpg'






const Gallery = () => {
    return (
        <div>
            <section className="py-10 relative my-10 bg-primary">
                <div className="container mx-auto">
                    <div className="block text-center">
                        <span className="text-white">Our</span>
                        <h1 className="capitalize mb-5 text-4xl font-bold text-white">Gallery</h1>
                    </div>
                </div>
            </section>
            <section className="py-6">
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                    <PhotoProvider className='shadow-md'>
                        <PhotoView src={gallery01}>
                            <img src={gallery01} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
                        </PhotoView>
                        <PhotoView src={gallery02}>
                            <img src={gallery02} alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" />
                        </PhotoView>
                        <PhotoView src={gallery03}>
                            <img src={gallery03} alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" />
                        </PhotoView>
                        <PhotoView src={gallery04}>
                            <img src={gallery04} alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" />
                        </PhotoView>
                        <PhotoView src={gallery05}>
                            <img src={gallery05} alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" />
                        </PhotoView>
                        <PhotoView src={gallery06}>
                            <img src={gallery06} alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" />
                        </PhotoView>
                        <PhotoView src={gallery07}>
                            <img src={gallery07} alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" />
                        </PhotoView>
                        <PhotoView src={gallery08}>
                            <img src={gallery08} alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" />
                        </PhotoView>
                        <PhotoView src={gallery09}>
                            <img src={gallery09} alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" />
                        </PhotoView>
                        <PhotoView src={gallery10}>
                            <img src={gallery10} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
                        </PhotoView>
                    </PhotoProvider>
                </div>
            </section>
        </div>
    );
};

export default Gallery;
