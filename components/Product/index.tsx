// @ts-nocheck
import React, { useState, useEffect } from 'react';
import SingleItem from '../Cards/SingleItem';
import Skeleton from '../Skeleton';

import { addProduct } from '../../store/shop/productSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Product() {
  const [data, setData] = useState(null);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const products = useSelector((state) => state.product.product);
  useEffect(() => {
    setLoading(true);
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        dispatch(addProduct(data));
        setLoading(false);
      });
  }, []);

  if (isLoading) return <Skeleton />;

  if (!data) return <p>No profile data</p>;

  return (
    <section className="mx-auto">
      <div className="w-full bg-gray-100 rounded-md"></div>
      <div className="flex flex-wrap justify-center item-center mx-2 h-auto">
        {products.map((item) => (
          <SingleItem item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}
