
const product=[
    {
    category:"Pizza",
    iteams:[
        {image:"images/img/pizza1.jpg", name:"Aussie Pizza", price:39.90},
        {image:"images/img/pizza2.jpg", name:"Margherita Pizza", price:39.90},
        {image:"images/img/pizza3.jpg", name:"Cheese N Corn Pizza", price:39.90},
        {image:"images/img/pizza4.jpeg", name:"BBQ Chicken Pizza", price:39.90},
        {image:"images/img/pizza5.jpeg", name:"Pepperoni Pizza", price:39.90},
        {image:"images/img/pizza6.jpeg", name:"Spring Pizza", price:39.90},
     ]

    },
    {
        category:"Biryani",
        iteams:[
            {image:"images/img/biryani1.jpg", name:"Kolkata biryani", price:39.90},
            {image:"images/img/biryani2.jpg", name:"Sindhi Biryani", price:39.90},
            {image:"images/img/biryani3.jpeg", name:"Memoni biryani", price:39.90},
            {image:"images/img/biryani4.jpg", name:"Malabar biryani", price:39.90},
            {image:"images/img/biryani5.jpeg", name:"Thalassery biryani", price:39.90},
            {image:"images/img/biryani6.jpg", name:"Ambur biryani", price:39.90},
        ]
    },
        {
            category:"Chicken",
            iteams:[
                {image:"images/img/chicken1.jpg", name:"Chicken chilli", price:39.90},
                {image:"images/img/chicken2.jpeg", name:"Chicken Cury", price:39.90},
                {image:"images/img/chicken3.jpg", name:"Chicken tanddori", price:39.90},
                {image:"images/img/chicken4.jpg", name:"Chicken Jhatka", price:39.90},
                {image:"images/img/chicken5.jpeg", name:"Chicken Masala", price:39.90},
                {image:"images/img/chicken6.jpeg", name:"Murgh Mussalm", price:39.90},
            ]
    }
]

let cart=[];
var itemcount=0;
var final_cart=[]
function addtocart(product_id){
    let itemValueCount = parseInt(document.getElementById('iteamcount').innerHTML);
    console.log(itemValueCount)
    itemcount = itemValueCount+1;
    console.log(itemcount);
    document.getElementById('iteamcount').innerHTML = itemcount;
    let categorySelected=document.getElementById('cardtitle').innerHTML
    console.log(categorySelected);
    product_id=parseInt(product_id.charAt(product_id.length-1))
    console.log(product_id);
    cart.push({category:`${categorySelected}`,product:product_id})
    console.log(cart)
    for(j=0;j<cart.length;j++){
        let obje = product.find((o,i) => {
            if (o.category==cart[j].category) {
                return true // stop searching
            
        }
    });
    console.log(obje)
    final_cart.push(obje.iteams[[cart[j].product]-1]);
    obje=[]
    console.log(final_cart);
    console.log(obje);
    }
}


function selectedCategory(nks){

    let obj = product.find((o,i) => {
        if (o.category==nks) {
            return true; // stop searching
        }
    });
    console.log(obj.iteams[1].image);
    console.log(obj);

    if(obj.category==nks){
        document.getElementById(`cardtitle`).innerHTML=obj.category;
            for(let j=1;j<=obj.iteams.length;j++){
                console.log(`card__image${j}`);
                document.getElementById(`card__image${j}`).src=obj.iteams[j-1].image;
                document.getElementById(`Produt-Name${j}`).innerHTML=obj.iteams[j-1].name;
                document.getElementById(`Produt-price${j}`).innerHTML=`price:${obj.iteams[j-1].price}`;
            }
        }
}

function viewCart(e){
    // e.classList.toggle("show")
    if(itemcount==0){
        window.alert("please add any product")
    }
    else{
        var elem=document.querySelector('#cartsidebar');
         elem.style.right="0px";
         for(let j=1;j<=cart.length;j++){
            console.log(`card__image${j}`);
            document.getElementById(`card__image${j}`).src=obj.iteams[j].image;
            document.getElementById(`Produt-Name${j}`).innerHTML=obj.iteams[j].name;
            document.getElementById(`Produt-price${j}`).innerHTML=`price:${obj.iteams[j].price}`;
        }
         let cartBoxElement=CartBoxComponent()
    }
}

function closeCart(){
    var elem=document.querySelector('#cartsidebar');
    elem.style.right="-300px";
}

 function CartBoxComponent(){
    return `<div class="cart-box">
    <img src="images/img/biryani1.jpg" alt="" class="cart-img">
    <div class="details-box">
      <div class="cartproducttitle">BACKPACK</div>
    <div class="cart-price">$0</div>
    <input type="number" value="1" class="cart-quantity" readonly>
    </div>
    <i class="glyphicon glyphicon-trash"></i>

  </div>`
 }