export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "https://backend-ecommerce-80ec.onrender.com/products"
    );
    // const response = await fetch("https://ecommerce-backend-data.onrender.com/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(
  filter = {},
  sort = {},
  pagination = {}
) {
  let queryString = "";

  // Add filters
  for (let key in filter) {
    if (filter[key] && filter[key].length > 0) {
      queryString += `${key}=${filter[key].join(",")}&`;
    }
  }

  // Add sorting
  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }

  // Add pagination
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }

  return new Promise(async (resolve) => {
    try {
      const response = await fetch(
        "https://backend-ecommerce-80ec.onrender.com/products?" + queryString
      );
      const data = await response.json();
      const totalItems = await response.headers.get("X-Total-Count");
      console.log({ data: { products: data, totalItems: +totalItems } });
      resolve({ data: { products: data, totalItems: +totalItems } });
    } catch (error) {
      console.error("Error fetching products:", error);
      resolve({ data: { products: [], totalItems: 0 } });
    }
  });
}

export function fetchProductById(id) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "https://backend-ecommerce-80ec.onrender.com/products/" + id
    );
    // const response = await fetch("https://ecommerce-backend-data.onrender.com/products/" + id);
    const data = await response.json();
    resolve({ data });
  });
}

export function addProduct(productData) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "https://backend-ecommerce-80ec.onrender.com/products",
      {
        // const response = await fetch("https://ecommerce-backend-data.onrender.com/products", {
        method: "POST",
        body: JSON.stringify(productData),
        headers: { "content-type": "application/json" },
      }
    );
    const data = await response.json();
    resolve({ productData });
  });
}

export function fetchBrands() {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "https://backend-ecommerce-80ec.onrender.com/brands"
    );
    // const response = await fetch("https://ecommerce-backend-data.onrender.com/brands");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchCategories() {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "https://backend-ecommerce-80ec.onrender.com/categories"
    );
    // const response = await fetch("https://ecommerce-backend-data.onrender.com/categories");
    const data = await response.json();
    resolve({ data });
  });
}

export function updateProduct(product) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "https://backend-ecommerce-80ec.onrender.com/products/" + product.id,
      {
        // const response=await fetch("https://ecommerce-backend-data.onrender.com/products/"+product.id,{
        method: "PATCH",
        body: JSON.stringify(product),
        headers: { "content-type": "application/json" },
      }
    );
    const data = await response.json();
    resolve({ data });
  });
}
