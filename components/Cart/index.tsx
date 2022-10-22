// @ts-nocheck

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeFromCart,
  totalAmount,
  totalCartItems,
  incrementQuantity,
  decrementQuantity,
} from '../../store/shop/cartReducerSlice';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillDelete } from 'react-icons/ai';

export default function Cart() {
  const state = useSelector((state) => state);
  const myCart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalCartPrice);
  const cartItems = useSelector((state) => state.cart.totalCartItem);
  const dispatch = useDispatch();

  function onRemoveCartHandler(item: any) {
    dispatch(removeFromCart(item));
    dispatch(totalAmount(state));
    dispatch(totalCartItems(state));
  }
  const onIncrementHandler = (item: any) => {
    dispatch(incrementQuantity(item));
    dispatch(totalAmount(state));
    dispatch(totalCartItems(state));
  };

  const onDecrementHandler = (item: any) => {
    dispatch(decrementQuantity(item));
    dispatch(totalAmount(state));
    dispatch(totalCartItems(state));
  };

  return (
    <div className="flex flex-col mt-5 px-0 md:px-5 md:py-10 justify-center items-center text-gray-600 md:mx-auto">
      {cartItems ? (
        <table className="text-sm md:mx-auto text-center py-3 md:px-2 border">
          <thead>
            <tr>
              <th className="mx-2 py-3" scope="col">
                #
              </th>
              <th className="py-3" scope="col">
                Item
              </th>
              <th className="py-3" scope="col">
                Price
              </th>
              <th className="py-3" scope="col">
                Quantity
              </th>
              <th className="py-3" scope="col">
                Handle
              </th>
            </tr>
          </thead>
          <tbody>
            {myCart.map((item) => (
              <tr key={item.id}>
                <th className="mx-2 py-3">
                  <Image
                    src={item.image}
                    alt="..."
                    width={60}
                    height={60}
                    objectFit="contain"
                  />
                </th>
                <td className="mx-2 py-3 min-w-72 w-72 ">{item.title}</td>
                <td className="mx-2 py-3">${item.price}</td>
                <td className="mx-2 py-3">
                  <div className="flex w-24 justify-between border rounded-lg px-2 mt-3 py-0 font-bold">
                    <button
                      className="hover:text-red-500 px-2"
                      onClick={() => onDecrementHandler(item)}
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="hover:text-red-500 px-2"
                      onClick={() => onIncrementHandler(item)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>
                  <button
                    className="text-sm rounded-md px-2 py-1 border hover:border-red-500 "
                    onClick={() => onRemoveCartHandler(item)}
                  >
                    <AiFillDelete />
                  </button>
                </td>
              </tr>
            ))}
            <tr className="border-t px-2">
              <td></td>
              
              <td>
                <b>total : ${totalPrice}</b>
              </td>
              
              <td>
                <button className="w-24 text-white border bg-red-500 text-sm rounded-md px-2 py-1 m-2 hover:border-red-500">
                  <Link href={'/CheckOut'}>Check Out</Link>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <div className="flex mx-auto">
          <div className="text-xl md:text-4xl text-gray-500 mx-2 my-2 p-2 ">
            {' '}
            currently your cart is empty !
          </div>
        </div>
      )}
      <div>
        <button className="rounded-md px-2 m-2 py-1 border text-sm hover:border-red-400 ">
          <Link href={'/'}>Continue Shoping</Link>
        </button>
      </div>
    </div>
  );
}
