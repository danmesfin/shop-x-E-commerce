// @ts-nocheck
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { filterByCategory } from '../../redux/shop/productSlice';

import Sidebar from '../../components/Sidebar';
import SingleItem from '../../components/Cards/SingleItem';

export const Cat = () => {
  const router = useRouter();
  const { catagory } = router.query;

  return { catagory };
};

function Category() {
  const router = useRouter();
  const { category } = router.query;

  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  // const [items, setItems] = useState(null);

  useEffect(() => {
    setLoading(true);
    if (!(category == undefined)) {
      dispatch(filterByCategory(category));
    }
    setLoading(false);
  }, []);

  const items = useSelector((state) => state.product.filtered);

  if (isLoading) return <p>Loading..</p>;
  if (!items) return <p>No profile data</p>;

  console.log(items[0]);
  return (
    <section className="flex py-10 px-5 flex-wrap md:flex-nowrap ">
      <div className="w-full md:w-1/4 flex">
        <Sidebar />
      </div>

      <div className="w-full md:w-3/4 flex flex-wrap">
        {items.map((item) => (
          <SingleItem item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}
export default Category;
