import React, {useRef} from 'react';

const Product = (props) => {

    const   productId = useRef(props.match.params.id),
            btnRef = useRef();
    

    function handelClick() {
        btnRef.current.click();
    }


  return (
    <div>
      site Product { productId.current}

        <button onClick={handelClick}>BTN 1</button>
        <button ref={btnRef} onClick={()=>alert('clicked')}>BTN 2</button>
    </div>
  );
};

export default Product;