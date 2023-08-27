export function createOrder(order){
    return new Promise(async(resolve)=>{
        // const response=await fetch("http://localhost:8080/orders",{
            const response=await fetch("https://ecommerce-backend-data.onrender.com/orders",{
        method:"POST",
        body: JSON.stringify(order),
        headers: {"content-type":"application/json"}
    })
    const data=await response.json()
    resolve({data})
    })
}

export function fetchAllOrders(sort,pagination){

    let queryString ="";

    for(let key in pagination){
        queryString+=`${key}=${pagination[key]}&`
    }

    for(let key in sort){
    queryString +=`${key}=${sort[key]}&`
    }
    return new Promise(async(resolve)=>{
        const response=await fetch("http://localhost:8080/orders?"+ queryString)
        // const response=await fetch("https://ecommerce-backend-data.onrender.com/orders?"+ queryString)
        const data=await response.json()
        const totalOrders=await response.headers.get('X-Total-Count')
        resolve({data:{orders:data,totalOrders:+totalOrders}})
    })
   
}

export function updateOrder(order){
    return new Promise(async(resolve)=>{
        const response=await fetch("http://localhost:8080/orders/"+order.id,{
            // const response=await fetch("https://ecommerce-backend-data.onrender.com/orders/"+ order.id,{
        method:"PATCH",
        body: JSON.stringify(order),
        headers: {"content-type":"application/json"}
    })
    const data=await response.json()
    resolve({data})
    })
}


export function sortOrder(order){
    let queryString =""

    

    return new Promise(async(resolve)=>{
        const response=await fetch("http://localhost:8080/orders?"+ queryString);
        const data=await response.json()
        resolve({data})
    })
}