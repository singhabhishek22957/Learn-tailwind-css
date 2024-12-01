import React from 'react';

const Typography = () => {
    return (
        <div>
            <h1 className=' text-9xl line-through  lowercase '>Title 1</h1>
            <h2 className=' text-3xl underline decoration-dotted decoration-red-500 '>Title 2</h2>
            <h3 className=' text-xl underline decoration-wavy underline-offset-8 '>Title 3</h3>
            <p className=' text-base  '>A regular paragraph  </p>
            <p className='text-sm  capitalize leading-10 '>A description paragraph  </p>
            <p className=' text-xs uppercase '>A little note</p>
            <div className='w-1/2'>
            <p className=' truncate '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur odio optio voluptatibus totam ullam illum quam, laboriosam nulla saepe perspiciatis eveniet, earum cum explicabo dolorem! Laboriosam perspiciatis delectus eum cupiditate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est mollitia laborum ex exercitationem, qui porro? Fuga ad labore vero in nam cupiditate alias quia porro, distinctio fugiat a? Quibusdam, expedita.</p>
            </div>
           
        </div>
    );
}

export default Typography;
