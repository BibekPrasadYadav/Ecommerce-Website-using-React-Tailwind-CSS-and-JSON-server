import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteItemFromCartAsync,
  selectItems,
  updateCartAsync,
} from "../../cart/cartSlice";
import { selectLoggedInUser } from "../../auth/authSlice";
import {
  fetchLoggedInUserOrderAsync,
  selectUserInfo,
  selectUserOrder,
} from "../userSlice";
import { discountedPrice } from "../../../app/constants";

export default function UserOrder() {
  const [open, setOpen] = useState(true);
  const userInfo = useSelector(selectUserInfo);
  const orders = useSelector(selectUserOrder);
  const dispatch = useDispatch();
  const [selectedAddress, setSelectedAddress] = useState(null);
  useEffect(() => {
    dispatch(fetchLoggedInUserOrderAsync(userInfo?.id));
  }, []);

  const handleAddress = (e) => {
    console.log(e.target.value);
    setSelectedAddress(userInfo.addresses[e.target.value]);
    console.log(userInfo.addresses[e.target.value]);
  };

  return (
    <div>
      {orders?.map((order) => (
        <div>
          <div className="w-[80%] mx-auto p-10 mt-8 bg-white max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Order #{order.id}
            </h1>
            <h3 className=" font-bold tracking-tight text-gray-900">
              Order Status: {order.status}
            </h3>
            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {order?.items.map((item) => (
                    <li key={item.product.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={item.product.thumbnail}
                          alt={item.product.title}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a href={item.product.id}>{item.product.title}</a>
                            </h3>
                            <p className="ml-4">
                              ${discountedPrice(item.product)}
                            </p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            {item.product.brand}
                          </p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <div className="text-gray-500">
                            <label
                              htmlFor="quantity"
                              className="inline mr-2 text-sm font-medium leading-6 text-gray-900"
                            >
                              Qty: {item.quantity}
                            </label>
                          </div>

                          <div className="flex"></div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <div className="flex justify-between my-2 text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>${order.totalAmount}</p>
              </div>
              <div className="flex justify-between my-2 text-base font-medium text-gray-900">
                <p>Total Items in Cart</p>
                <p>{order.totalItems} items</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                Shipping and taxes calculated at checkout.
              </p>

              <ul role="list">
                <div className="flex justify-between gap-x-6 py-5  border-solid border-2 border-gray-200 p-5">
                  <div className="flex min-w-0 gap-x-4">
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm font-semibold leading-6 text-gray-900">
                        {order.selectedAddress.name}
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                        {order.selectedAddress.street}
                      </p>
                      <p className="text-sm leading-6 text-gray-500">
                        {order.selectedAddress.pincode}
                      </p>
                    </div>
                  </div>
                  <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm leading-6 text-gray-900">
                      Phone: {order.selectedAddress.phone}
                    </p>
                    <p className="text-sm leading-6 text-gray-500">
                      {order.selectedAddress.city}
                    </p>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
