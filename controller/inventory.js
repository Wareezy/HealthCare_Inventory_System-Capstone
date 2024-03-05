import{getInventories,getInventory,addInventory,deleteInventory,editInventory} from '../model/inventory.js'


export default{
    getInvents:async(req,res)=>{
        res.send( await getInventories())
    },
    getInvent:async(req,res)=>{
        res.send(await getInventory(+req.params.id))
    },
    addInvents:async(req,res)=>{
        const { productName, quantity, category, imgUrl, pricePerProduct, expenses, income} = req.body;
        const post = await addInventory(productName, quantity, category, imgUrl, pricePerProduct, expenses, income);
        res.send(await getInventories());  
    },
    deleteInvent:async(req,res)=>{
        res.send(await deleteInventory(req.params.id))
    },
    editInvent:async(req,res)=>{
       const [item]=await getInventory(+req.params.id)

       let {productName, quantity, category, imgUrl, pricePerProduct, expenses, income}=req.body

       productName ? productName=productName: {productName}=item
       quantity ? quantity=quantity: {quantity}=item
       category ? category=category: {category}=item
       imgUrl ? imgUrl=imgUrl: {imgUrl}=item
       pricePerProduct ? pricePerProduct=pricePerProduct: {pricePerProduct}=item
       expenses ? expenses=expenses: {expenses}=item
       income ? income=income: {income}=item

       await editInventory(productName, quantity, category, imgUrl, pricePerProduct, expenses, income,+req.params.id)

       res.json(await getInventories())

    }
}