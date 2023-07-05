const cartContainer= document.querySelector('.cartContainer')
const results = document.querySelector('.results')
const clear = document.querySelector('.clear')




const data= localStorage.getItem('cartItems')
const products= JSON.parse(data)


const container= document.querySelector('.container')

const finalProducts = products.filter((product, index, self)=>{
    return index === self.findIndex((obj)=> obj.title === product.title)
})


finalProducts.forEach((product, index)=>{
    const item= document.createElement('div')
    item.classList.add('item')
    item.innerHTML=`
    <div class='prodImage'><img src='${product.image}'></div>
    <div><p class='title'>${product.title}</p></div>
    <div><p class='price'>Ksh.${product.price}</p></div>
    <div><button class='deleteBtn'>Delete from cart</button></div>
    
    `  
    container.appendChild(item)
    

    const deleteBtn= item.querySelector('.deleteBtn')
    deleteBtn.addEventListener('click', ()=>{
        finalProducts.splice(index, 1)
        localStorage.setItem('cartItems', JSON.stringify(finalProducts))
        window.location.reload()
        
    })
    localStorage.setItem('item',JSON.stringify(finalProducts))

    clear.addEventListener('click', ()=>{
        localStorage.removeItem('cartItems')
        window.location.reload()
    })
})


