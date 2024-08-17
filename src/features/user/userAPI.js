export function fetchLoggedInUser(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "https://backend-ecommerce-80ec.onrender.com/users/" + userId
    );
    // const response=await fetch("https://ecommerce-backend-data.onrender.com/users/"+userId)
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchLoggedInUserOrder(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "https://backend-ecommerce-80ec.onrender.com/orders?user=" + userId
    );
    // const response=await fetch("https://ecommerce-backend-data.onrender.com/orders?user.id="+userId)
    const data = await response.json();
    resolve({ data });
  });
}

export function updateUser(update) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        "https://backend-ecommerce-80ec.onrender.com/users/" + update.id,
        {
          // const response = await fetch("https://ecommerce-backend-data.onrender.com/users/" + update.id, {
          method: "PUT",
          body: JSON.stringify(update),
          headers: { "Content-Type": "application/json" },
        }
      );

      // Check if the response is ok (status is in the range 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data, "updateUser");
      resolve({ data });
    } catch (error) {
      console.error("Error:", error);
      reject(error);
    }
  });
}
