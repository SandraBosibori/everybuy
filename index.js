const categories=document.querySelector('.categories')
const container1= document.querySelector('.container1')
let searchParam='phone'
const form= document.querySelector('.form')
const cartNum= document.querySelector('.cartNum')
let cartItems=[]
let products= document.querySelector('.products')
const small= document.querySelector('.small')
const ham= document.querySelector('.ham')



small.addEventListener('click', (e)=>{
    const child= document.querySelector('.container1')
    if (child.style.display==='none'){
        child.style.display='block'
    }
    else{
        child.style.display='none'
    }
    
})

const dummyprod= async (product)=>{
    const response= await fetch('https://dummyjson.com/products')
    const data= await response.json()
    data.products.forEach((item)=>{
        const good= document.createElement('div')
        good.classList.add('item')
        good.innerHTML=`

        <div class="productImage"><img src="${item.thumbnail}"/></div>
        <p class='title'>${item.title}</p>
        <p class='price'>Ksh.${item.price}</p>
        <button class='cartbtn'>Add to cart</button>

        `
        products.appendChild(good)
        const addButton = good.querySelector('.cartbtn')
        addButton.addEventListener('click', ()=>{
            
            const addButton = good.querySelector('.cartbtn')
                addButton.addEventListener('click', ()=>{
                const productObject = {
                    title: item.title,
                    price: item.price,
                    image: item.thumbnail,
                }
                cartItems.push(productObject)
                console.log(cartItems)
                localStorage.setItem('cartItems', JSON.stringify(cartItems))
                cartNum.innerHTML = cartItems.length
    })  })  })

}
dummyprod()

const fetchData= async ()=>{
    const response= await fetch('https://dummyjson.com/products/categories')
    const data= await response.json()
    
    


    data.forEach(async(category)=>{
        const list= document.createElement('ul')
        list.classList.add('list')
        list.innerHTML=`
        <li class='categoryTitle'>${category}</li>
        `

        
        

        const response = await fetch(`https://dummyjson.com/products/category/${category}`)
        const data = await response.json()
        console.log(data)
        

        container1.appendChild(list)
        
            const categoryTitle= list.querySelector('.categoryTitle')
            data.products.forEach((product)=>{
            const eachProduct=document.createElement('ul')
            eachProduct.classList.add('product')
            eachProduct.innerHTML=`
            <li class='productName'>${product.title}</li>
            `
            categoryTitle.appendChild(eachProduct)
            


        })
        
                      
        form.addEventListener('submit',async (e)=>{
            e.preventDefault()
            const input = form.querySelector('.input')
            searchParam = input.value
            products.innerHTML = ''
            console.log(searchParam)
            searchProducts(searchParam)
        })
        const searchProducts= async (product)=>{
            const response= await fetch(`https://dummyjson.com/products/search?q=${product}`)
            const data= await response.json()
            data.products.forEach((item)=>{
               
                const good= document.createElement('div')
                good.classList.add('item')
                good.innerHTML=`
                <div class="productImage"><img src="${item.thumbnail}"/></div>
                <div><p class='title'>${item.title}</p></div>
                <div><p class='price'>Ksh.${item.price}</p></div>
                <div><button class='cartbtn'>Add to cart</button></div>
                `
                products.appendChild(good)
            const addButton = good.querySelector('.cartbtn')
            addButton.addEventListener('click', ()=>{
            const productObject = {
                title: item.title,
                price: item.price,
                image: item.thumbnail,
            }
            
            cartItems.push(productObject)
            console.log(cartItems)
            localStorage.setItem('cartItems', JSON.stringify(cartItems))
            cartNum.innerHTML = cartItems.length
        })
            })

            
        
    
        }
        
    })
   
}
fetchData()

ham.addEventListener('click', ()=>{
    const child= document.querySelector('.nav3')
    if (child.style.display==='none'){
        child.style.display='block'
    }
    else{
        child.style.display='none'
    }
})
