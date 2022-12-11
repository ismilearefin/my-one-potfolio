import React from 'react';

const Projects = () => {
    return (
        <div className=''>
            <div className='mr-4'>
           <h1 className='text-2xl uppercase'>My projects</h1> 
           <hr className='border-2'/>
           </div>
            <div className="carousel w-full mt-10">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='w-full border'>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/400/arch" alt="Album"/></figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
                </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
            <div className='w-full border'>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/400/arch" alt="Album"/></figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
                </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
            <div className='w-full border'>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/400/arch" alt="Album"/></figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
                </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div> 
            </div>
        </div>
    );
};

export default Projects;