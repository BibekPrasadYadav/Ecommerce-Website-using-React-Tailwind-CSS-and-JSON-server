import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInfo } from "../../user/userSlice";
import {
  fetchAllOrdersAsync,
  selectAllOrders,
  selectTotalOrders,
  updateOrderAsync,
} from "../../order/orderSlice";
import { ITEM_PER_PAGE, discountedPrice } from "../../../app/constants";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  EyeIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import Pagination from "../../common/Pagination";

export default function AdminOrders() {
  const users = useSelector(selectUserInfo);
  const orders = useSelector(selectAllOrders);
  const totalOrders = useSelector(selectTotalOrders);
  const [page, setPage] = useState(1);
  const [editableOrderId, setEditableOrderId] = useState(-1);
  const [sort, setSort] = useState({});
  const dispatch = useDispatch();

  const handleShow = () => {
    console.log("handle Show");
  };

  const handleEdit = (order) => {
    setEditableOrderId(order.id);
  };

  const handleUpdate = (e, order) => {
    const updatedOrder = { ...order, status: e.target.value };
    dispatch(updateOrderAsync(updatedOrder));
    setEditableOrderId(-1);
  };

  const chooseColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-purple-200 text-purple-600";

      case "dispatched":
        return "bg-yellow-200 text-yellow-600";

      case "delivered":
        return "bg-green-200 text-green-600";

      case "cancelled":
        return "bg-red-200 text-red-600";

      default:
        return "bg-purple-200 text-purple-600";
    }
  };

  const handleSort = (option) => {
    const sort = { _sort: option.sort, _order: option.order };
    setSort(sort);
  };

  const handlePage = (page) => {
    setPage(page);
  };

  useEffect(() => {
    const pagination = { _page: page, _limit: ITEM_PER_PAGE };
    dispatch(fetchAllOrdersAsync({ sort, pagination }));
  }, [dispatch, page, sort]);
  return (
    <>
      <div className="overflow-x-auto">
        <div className="bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
          <div className="w-full">
            <div className="bg-white shadow-md rounded my-6">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th
                      className="py-3 px-6 text-left cursor-pointer"
                      onClick={(e) =>
                        handleSort({
                          sort: "id",
                          order: sort._order === "asc" ? "desc" : "asc",
                        })
                      }
                    >
                      <div className="flex items-center">
                        Order#{" "}
                        {sort._sort === "id" &&
                          (sort._order === "desc" ? (
                            <ArrowDownIcon className="w-4 h-4"></ArrowDownIcon>
                          ) : (
                            <ArrowUpIcon className="w-4 h-4"></ArrowUpIcon>
                          ))}
                      </div>
                    </th>
                    <th className="py-3 px-6 text-left">Items</th>
                    <th className="py-3 px-6 text-left">Price</th>
                    <th className="py-3 px-6 text-center">Total Amount</th>
                    <th className="py-3 px-6 text-left">Shipping Address</th>
                    <th className="py-3 px-6 text-center">Status</th>
                    <th className="py-3 px-6 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {orders.map((order) => (
                    <tr key={order.id} className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="mr-2"></div>
                          <span className="font-medium">{order.id}</span>
                        </div>
                      </td>

                      <td className="py-3 px-6 text-left">
                        {order.items?.map((item,index) => (
                          <div key={index} className="flex items-center">
                            <div className="mr-2">
                              <img
                                className="w-6 h-6 rounded-full"
                                src={item.thumbnail}
                              />
                            </div>
                            <span>
                              {item.title} - #{item.quantity}
                            </span>
                          </div>
                        ))}
                      </td>
                      <td className="py-3 px-6 text-left">
                        {order.items?.map((item) => (
                          <div className="flex items-center justify-start">
                            <span>${discountedPrice(item)}</span>
                          </div>
                        ))}
                      </td>

                      <td className="py-3 px-6 text-center">
                        <div className="flex items-center justify-center">
                          ${order.totalAmount}
                        </div>
                      </td>

                      <td className="py-3 px-6 text-left">
                        <div className="items-center justify-center">
                          <div>
                            <strong>{order.selectedAddress.name}</strong>
                          </div>
                          <div>{order.selectedAddress.street}</div>
                          <div>{order.selectedAddress.city}</div>
                          <div>{order.selectedAddress.state}</div>
                          <div>{order.selectedAddress.pincode}</div>
                          <div>{order.selectedAddress.phone}</div>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        {order.id === editableOrderId ? (
                          <select onChange={(e) => handleUpdate(e, order)}>
                            <option value="pending">Pending</option>
                            <option value="dispatched">Dispatched</option>
                            <option value="delivered">Delivered</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                        ) : (
                          <span
                            className={`${chooseColor(
                              order.status
                            )} py-1 px-3 rounded-full text-xs`}
                          >
                            {order.status}
                          </span>
                        )}
                      </td>

                      <td className="py-3 px-6 text-center">
                        <div className="flex item-center justify-center">
                          <div className="w-6 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <EyeIcon
                              className="h-6 w-6 justify-center cursor-pointer"
                              onClick={(e) => handleShow(order)}
                            ></EyeIcon>
                          </div>
                          <div className="w-6 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <PencilIcon
                              className="h-6 w-6 justify-center cursor-pointer"
                              onClick={(e) => handleEdit(order)}
                            ></PencilIcon>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Pagination
        handlePage={handlePage}
        page={page}
        setPage={setPage}
        totalItems={totalOrders}
      ></Pagination>
    </>
  );
}
