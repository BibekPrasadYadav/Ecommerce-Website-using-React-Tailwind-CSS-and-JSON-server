export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "https://backend-ecommerce-80ec.onrender.com/auth/signup",
      {
        // const response = await fetch("https://ecommerce-backend-data.onrender.com/users", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: { "content-type": "application/json" },
      }
    );
    const data = await response.json();
    resolve({ data });
  });
}

export function checkUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        "https://backend-ecommerce-80ec.onrender.com/auth/login",
        {
          method: "POST",
          body: JSON.stringify(loginInfo),
          headers: { "content-type": "application/json" },
        }
      );
      // const response = await fetch("https://ecommerce-backend-data.onrender.com/users?email=" + email);

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("login", "true");
        console.log({ data });
        resolve({ data });
      } else {
        const err = await response.json();
        reject(err);
      }
    } catch (err) {
      reject(err);
    }
  });
}

export function logoutUser(loginInfo) {
  return new Promise(async (resolve) => {
    resolve({ data: "success" });
  });
}
