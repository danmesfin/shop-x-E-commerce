// @ts-nocheck
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import {
  addToCart,
  totalAmount,
  totalCartItems,
} from '../../store/shop/cartReducerSlice';
import { addToWishList } from '../../store/shop/wishList';
import { increment, decrement } from '../../store/counter/counterSlice';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { AiOutlineHeart } from 'react-icons/ai';

const Product = () => {
  const router = useRouter();
  const { id } = router.query;

  const dispatch = useDispatch();
  const myProducts = useSelector((state) => state.product.product);
  const item = myProducts.filter((product) => product.id == id)[0];
  const count = useSelector((state) => state.counter.value);

  const onAddtoCartHandler = (item, count) => {
    const quantity = count;
    const product = { ...item, quantity };
    dispatch(addToCart(product));
    dispatch(totalAmount());
    dispatch(totalCartItems());
  };

  const onIncrementHandler = () => {
    dispatch(increment());
  };

  const onDecrementHandler = () => {
    dispatch(decrement());
  };
  const onAddtoWishListHandler = (item) => {
    dispatch(addToWishList(item));
  };

  return (
    <section className="flex flex-col mt-10 py-5 px-10">
      <div className="flex flex-wrap md:flex-nowrap md:px-10">
        <div className="w-full md:w-1/2 mx-2 flex justify-center">
          <Image
            src={item.image}
            alt="img"
            height={250}
            width={250}
            objectFit="contain"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center text-gray-800">
          <div className="text-lg font-semibold">{item.title}</div>
          <div className="md:w-72 text-sm text-gray-800 mt-3 space-x-1">
            {item.description}
          </div>
          <div className="text-gray-800 mt-3 space-x-1 text-sm">
            Rating : {item.rating.rate}/5
          </div>
          <div className="flex w-24 justify-between border rounded-lg px-2 mt-3 py-0 font-bold">
            <button
              className="hover:text-red-500 px-2"
              onClick={() => onDecrementHandler()}
            >
              -
            </button>
            <span className="mx-2">{count}</span>
            <button
              className="hover:text-red-500 px-2"
              onClick={() => onIncrementHandler()}
            >
              +
            </button>
          </div>
          <div className="flex mt-3">
            <button
              onClick={() => onAddtoCartHandler(item, count)}
              className="transform delay-75 duration-100 text-sm hover:bg-red-500 hover:shadow-md border border-red-500 rounded-lg mx-1 px-2"
            >
              Add to cart
            </button>
            <AiOutlineHeart
              className="mx-2 hover:fill-red-500 hover:cursor-pointer"
              onClick={() => onAddtoWishListHandler(item)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
