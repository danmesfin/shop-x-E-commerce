// @ts-nocheck
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishList } from '../../store/shop/wishList';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillDelete } from 'react-icons/ai';

export default function wishList() {
  const wishListItems = useSelector((state) => state.wishList.wishList);

  const dispatch = useDispatch();

  function onRemoveWishHandler(item) {
    dispatch(removeFromWishList(item));
  }

  return (
    <div className="flex flex-col mt-5 px-5 md:py-10 justify-center items-center text-gray-600 mx-auto border">
      {wishListItems.length ? (
        <table className="mx-auto text-center py-3 px-2">
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
                Handle
              </th>
            </tr>
          </thead>
          <tbody>
            {wishListItems.map((item) => (
              <tr key={item.id} className="border-t">
                <th>
                  <Image
                    src={item.image}
                    alt="..."
                    width={60}
                    height={60}
                    objectFit="contain"
                  />
                </th>
                <td className="mx-2 py-3 min-w-72 w-72 ">
                  <Link href={`/product/${encodeURIComponent(item.id)}`}>
                    <a className="mx-2 py-3">{item.title} </a>
                  </Link>
                </td>

                <td className="mx-2 py-3">${item.price}</td>

                <td>
                  <button
                    className="text-sm rounded-md px-2 py-1 border hover:border-red-500 "
                    onClick={() => onRemoveWishHandler(item)}
                  >
                    <AiFillDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="flex mx-auto">
          <div className="text-xl md:text-4xl text-gray-500 mx-2 my-2 p-2 ">
            {' '}
            currently your wish list is empty !
          </div>
        </div>
      )}
      <div>
        <button className="rounded-md px-2 m-2 py-1 border text-white text-sm hover:border-blue-500 bg-blue-600">
          <Link href={'/'}>Continue Shoping</Link>
        </button>
      </div>
    </div>
  );
}
