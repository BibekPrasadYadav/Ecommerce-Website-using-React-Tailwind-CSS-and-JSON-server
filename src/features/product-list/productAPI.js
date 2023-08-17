export function fetchAllProducts(){
    return new Promise(async (resolve)=>{
        const response=await fetch("http://localhost:8080/products");
        const data=await response.json()
        resolve({data});
    })
}

export function fetchProductsByFilters(filter,sort,pagination){

    //filter={"category" : ["smartphone","laptops"]}
    //sort={"_sort" : "price"}
    //order={"_order" : "asc/desc"}
    //For pagination: http://localhost:8080/products?_page=1&_limit=10
    //pagination: {_page=1,_limit=10}

    let queryString=''

    for(let key in filter){
        const categoryValues=filter[key]
        if(categoryValues.length>0){
            const lastCategoryValue=categoryValues[categoryValues.length-1]
        queryString += `${key}=${lastCategoryValue}&`
        }
        
    }

    for(let key in sort){
        queryString+= `${key}=${sort[key]}&`;
    }


    for(let key in pagination){
        queryString+=`${key}=${pagination[key]}&`
    }
    return new Promise(async (resolve)=>{
        const response=await fetch("http://localhost:8080/products?" + queryString)
        const data=await response.json()
        //To get the total pages
        const totalItems=await response.headers.get('X-Total-Count')
        console.log({data:{products:data,totalItems:+totalItems}})
        resolve({data:{products:data,totalItems:+totalItems}})
        // resolve({data})
    })
}


export function fetchBrands(){
    return new Promise(async (resolve)=>{
        const response=await fetch("http://localhost:8080/brands");
        const data=await response.json()
        resolve({data});
    })
}

export function fetchCategories(){
    return new Promise(async (resolve)=>{
        const response=await fetch("http://localhost:8080/categories");
        const data=await response.json()
        resolve({data});
    })
}




