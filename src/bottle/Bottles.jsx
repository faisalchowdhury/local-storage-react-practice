
import { use, useState } from 'react';
import Bottle from './Bottle';

const Bottles = ({dataFetch}) => {

    const data = use(dataFetch);
    // console.log(data)

    // const [localData ,setLocalData] = useState();


    return (
        <>
        <h2 className='py-5'><span className='text-2xl bg-green-800 text-white'>Total Product : {data.length}</span> </h2>
        <div className='grid grid-cols-4 gap-5' >
        {
            data.map(bottle => <Bottle key={bottle.id} bottle={bottle} ></Bottle>)
        }
        </div>
        </>
    );
};

export default Bottles;