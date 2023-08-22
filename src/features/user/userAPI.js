export function fetchLoggedInUser(userId){
    return new Promise(async(resolve)=>{
        const response=await fetch("http://localhost:8080/users?id="+userId)
        const data=await response.json()
        resolve({data})
    })
}

export function fetchLoggedInUserOrder(userId){
    return new Promise(async(resolve)=>{
        const response=await fetch("http://localhost:8080/orders?user.id="+userId)
        const data=await response.json()
        resolve({data})
    })
}