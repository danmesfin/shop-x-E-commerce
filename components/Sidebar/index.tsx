import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { applyFilter } from '../../redux/shop/productSlice';

function index() {
  const dispatch = useDispatch();
  const [maxPrice, setPrice] = useState(100);
  const [filters, setFilter] = useState({
    categories: [],
    priceRange: 0,
  });

  const checkboxValues = [
    { id: 'mens', name: 'Men clothing', value: "men's clothing" },
    { id: 'womens', name: 'Women clothing', value: "women's clothing" },
    { id: 'electronics', name: 'Electronics', value: 'electronics' },
    { id: 'jewelery', name: 'Jewelery', value: 'jewelery' },
  ];

  const handleChange = (e) => {
    const checked = e.target.checked;

    // to get the checked value
    const checkedValue = e.target.value;
    if (checked)
      setFilter({
        categories: [...filters.categories, checkedValue],
        priceRange: filters.priceRange,
      });
    if (!checked) {
      filters.categories = filters.categories.filter(
        (element) => element != checkedValue
      );
    }
    console.log('filters', filters);

    //setFilter(filters);
    //console.log('hooked Filter', filterss);
  };
  const handleSlider = (e) => {
    // to get the checked value
    setPrice(e.target.value);
    filters.priceRange = maxPrice;
    console.log(filters);
  };

  const applyFilterhandler = () => {
    // console.log(filters);
    dispatch(applyFilter(filters));
    console.log('aplied filter');
  };

  return (
    <aside className="md:h-screen sticky top-10 w-full px-6 md:w-72 flex flex-col rounded-md md:px-2 text-gray-600 font-semibold text-xs">
      <div className="text-md font-bold px-2 py-1 m-1 border">Filter</div>
      <div className="bg-gray-100 flex flex-col rounded-md shadow-sm px-2 py-3">
        {checkboxValues.map((item) => (
          <div key={item.id}>
            <input
              type="checkbox"
              id={item.id}
              name={item.name}
              value={item.value}
              onChange={handleChange}
            />
            <label htmlFor={item.id}> {item.name}</label>
          </div>
        ))}
      </div>
      <div className="bg-gray-100 mt-3 flex flex-col px-2">
        <label>Price</label>
        <input
          type="range"
          min={5}
          max={1000}
          step={5}
          onChange={handleSlider}
        />
        <div className="flex justify-between px-2 py-1">
          <span>{0}</span>
          <span>${maxPrice}</span>
        </div>
      </div>
      <button
        className="my-2 bg-gradient-to-br from-red-600 via-yellow-400 to-sky-500 rounded-sm px-4 mx-auto border hover:border-red-500"
        onClick={applyFilterhandler}
      >
        Apply
      </button>
    </aside>
  );
}

export default index;
