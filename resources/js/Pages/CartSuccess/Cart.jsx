const Cart = (props) => {
    return (
        <div className="bg-green-500 absolute bottom-8 left-0 text-white text-center flex justify-center items-center w-80 h-24">
            <h1>{props.message}</h1>
        </div>
    );
};
export default Cart;
