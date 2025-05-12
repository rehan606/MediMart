import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <div className='bg-gray-100 pb-20 pt-10'>
            <div className='w-11/12 mx-auto'>
                <h2 className='text-2xl font-bold mb-4 text-[#005963]'>Categories  </h2> 
                 

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    
                    <Link to="/tablet" className="bg-white relative text-white p-4 shadow rounded-lg "
                        style={{ backgroundImage: 'url(https://i.ibb.co.com/tqK5NVT/image.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
                        >
                        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                        <div  className="relative z- p-4">
                            <h3 className="text-lg text-white font-semibold">Tablet</h3>
                            {/* <p className="text-2xl font-bold mt-2">4</p> */}
                        </div>
                    </Link>
                    
                    
                    <Link to="/capsul" className="bg-white relative text-white p-4 shadow rounded-lg"
                        style={{ backgroundImage: 'url(https://i.ibb.co.com/f0K4rJk/image.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                        <div  className="relative z-10 p-4 ">
                            <h3 className="text-lg font-semibold">Capsul</h3>
                            {/* <p className="text-2xl font-bold mt-2">4</p> */}
                        </div>
                    </Link>

                    <Link to="/syrap" className="bg-white relative text-white  p-4 shadow rounded-lg"
                        style={{ backgroundImage: 'url(https://i.ibb.co.com/42LrxVQ/image.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                        <div  className="relative z-10 p-4">
                            <h3 className="text-xl font-semibold">Syrap</h3>
                            {/* <p className="text-2xl font-bold mt-2">4</p> */}
                        </div>
                    </Link>
                    
                    <Link to="/injection" className="bg-white relative text-white p-4 shadow rounded-lg"
                        style={{ backgroundImage: 'url(https://i.ibb.co.com/DYT6tDB/image.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                        <div  className="relative z-10 p-4">
                            <h3 className="text-lg font-semibold">Injection</h3>
                            {/* <p className="text-2xl font-bold mt-2">4</p> */}
                        </div>
                    </Link>
                    
                    
                    
                    <Link to="/suspension" className="bg-white relative text-white p-4 shadow rounded-lg"
                        style={{ backgroundImage: 'url(https://i.ibb.co.com/rkGHY35/image.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                        <div  className="relative z-10 p-4">
                            <h3 className="text-lg font-semibold">Suspension</h3>
                            {/* <p className="text-2xl font-bold mt-2">4</p> */}
                        </div>
                    </Link>
                    
                    <Link to="/others" className="bg-white p-4 relative text-white  shadow rounded-lg"
                        style={{ backgroundImage: 'url(https://i.ibb.co.com/qJ8JQRD/image.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                        <div  className="relative z-10 p-4">
                            <h3 className="text-xl font-semibold z-10">Others</h3>
                            {/* <p className="text-2xl font-bold mt-2">4</p> */}
                        </div>
                    </Link>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Category;