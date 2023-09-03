export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products");
    // const response = await fetch("https://ecommerce-backend-data.onrender.com/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter, sort, pagination) {
  //filter={"category" : ["smartphone","laptops"]}
  //sort={"_sort" : "price"}
  //order={"_order" : "asc/desc"}
  //For pagination: http://localhost:8080/products?_page=1&_limit=10
  //pagination: {_page=1,_limit=10}

  let queryString = "";

  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length > 0) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1];
      queryString += `${key}=${lastCategoryValue}&`;
    }
  }

  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }

  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:8080/products?" + queryString
    );
    // const response = await fetch(
    //   "https://ecommerce-backend-data.onrender.com/products?" + queryString
    // );
    const data = await response.json();
    //To get the total pages
    const totalItems = await response.headers.get("X-Total-Count");
    console.log({ data: { products: data, totalItems: +totalItems } });
    resolve({ data: { products: data, totalItems: +totalItems } });
    // resolve({data})
  });
}

export function fetchProductById(id) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products/" + id);
    // const response = await fetch("https://ecommerce-backend-data.onrender.com/products/" + id);
    const data = await response.json();
    resolve({ data });
  });
}

export function addProduct(productData) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products", {
      // const response = await fetch("https://ecommerce-backend-data.onrender.com/products", {
      method: "POST",
      body: JSON.stringify(productData),
      headers: { "content-type": "application/json" },
    })
    const data=await response.json()
    resolve({productData})
  })
}

export function fetchBrands() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/brands");
    // const response = await fetch("https://ecommerce-backend-data.onrender.com/brands");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchCategories() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/categories");
    // const response = await fetch("https://ecommerce-backend-data.onrender.com/categories");
    const data = await response.json();
    resolve({ data });
  });
}

export function updateProduct(product){
  return new Promise(async(resolve)=>{
    const response=await fetch("http://localhost:8080/products/"+product.id,{
      // const response=await fetch("https://ecommerce-backend-data.onrender.com/products/"+product.id,{
      method: "PATCH",
      body: JSON.stringify(product),
      headers: { "content-type": "application/json" }
    })
    const data=await response.json()
    resolve({data})

  })
}
