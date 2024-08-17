export function addToCart(item) {
  return new Promise(async (resolve, reject) => {
    const response = await fetch(
      "https://backend-ecommerce-80ec.onrender.com/cart",
      {
        // const response=await fetch("https://ecommerce-backend-data.onrender.com/cart",{
        method: "POST",
        body: JSON.stringify(item),
        headers: { "content-type": "application/json" },
      }
    );
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchItemsByUserId(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "https://backend-ecommerce-80ec.onrender.com/cart?user=" + userId
    );
    // const response=await fetch("https://ecommerce-backend-data.onrender.com/cart?user="+ userId);
    const data = await response.json();
    resolve({ data });
  });
}

export function updateCart(update) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "https://backend-ecommerce-80ec.onrender.com/cart/" + update.id,
      {
        // const response=await fetch("https://ecommerce-backend-data.onrender.com/cart/"+update.id,{
        method: "PATCH",

        body: JSON.stringify(update),
        headers: { "content-type": "application/json" },
      }
    );
    const data = await response.json();
    resolve({ data });
  });
}

export function deleteItemFromCart(itemId) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "https://backend-ecommerce-80ec.onrender.com/cart/" + itemId,
      {
        // const response=await fetch("https://ecommerce-backend-data.onrender.com/cart/"+itemId,{
        method: "DELETE",
        headers: { "content-type": "application/json" },
      }
    );
    const data = await response.json();
    resolve({ data: { id: itemId } });
  });
}

export function resetCart(userId) {
  return new Promise(async (resolve) => {
    const response = await fetchItemsByUserId(userId);
    const items = response.data;
    for (let item of items) {
      await deleteItemFromCart(item.id);
    }
    resolve({ status: "Success" });
  });
}
