import{getInventories,getInventory,addInventory,deleteInventory,editInventory} from '../model/inventory'


export default{
    getProds:async(req,res)=>{
        res.send( await getProducts())
    },
    getProd:async(req,res)=>{
        res.send(await getProduct(+req.params.prodID))
    },
    addProds:async(req,res)=>{
        const { prodName, quantity, amount, category, prodUrl} = req.body;
        const post = await addProduct(prodName, quantity, amount, category, prodUrl);
        res.send(await getProducts());  
    },
    deleteProd:async(req,res)=>{
        res.send(await deleteProduct(req.params.prodID))
    },
    editProd:async(req,res)=>{
       const [tshirt]=await getProduct(+req.params.prodID)

       let {prodName,quantity,amount,category,prodUrl}=req.body

       prodName ? prodName=prodName: {prodName}=tshirt
       quantity ? quantity=quantity: {quantity}=tshirt
       amount ? amount=amount: {amount}=tshirt
       category ? category=category: {category}=tshirt
       prodUrl ? prodUrl=prodUrl: {prodUrl}=tshirt

       await editProduct(prodName,quantity,amount,category,prodUrl,+req.params.prodID)

       res.json(await getProducts())

    }
}