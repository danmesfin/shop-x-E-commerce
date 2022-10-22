import React from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  totalAmount,
  totalCartItems,
} from '../../redux/shop/cartReducerSlice';
import { addToWishList } from '../../redux/shop/wishList';
import Link from 'next/link';
import { AiOutlineHeart } from 'react-icons/ai';

function SingleItem({ item }: { item: any }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const onAddtoCartHandler = (item: any) => {
    const quantity = 1;
    const product = { ...item, quantity };
    dispatch(addToCart(product));
    dispatch(totalAmount(state));
    dispatch(totalCartItems(state));
  };
  const onAddtoWishList = (item: any) => {
    dispatch(addToWishList(item));
  };

  return (
    <div className="bg-white transform delay-75 duration-150 px-6 md:p-2 m-1 w-full md:w-60 h-96 border border-gray-300 rounded-md hover:shadow-md hover:border-pink-200">
      <Link href={`/product/${encodeURIComponent(item.id)}`}>
        <a>
          <Image
            src={item.image}
            alt="..."
            width={250}
            height={250}
            objectFit="contain"
          />
          <div className="font-semibold">
            <div className="text-sm h-20 text-truncate">{item.title}</div>
            <span className="text-red-500">${item.price}</span>
          </div>
        </a>
      </Link>
      <div className="flex justify-center">
        <button
          onClick={() => onAddtoCartHandler(item)}
          className="transform delay-50 duration-50 text-sm hover:bg-pink-500 hover:shadow-md border border-pink-500 rounded-lg mx-1 px-2"
        >
          Add to cart
        </button>
        <AiOutlineHeart
          className="mx-2 hover:fill-red-500 hover:cursor-pointer"
          onClick={() => onAddtoWishList(item)}
        />
      </div>
    </div>
  );
}

export default SingleItem;
