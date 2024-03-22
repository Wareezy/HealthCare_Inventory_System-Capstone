import{getInventories,getInventory,addInventory,deleteInventory,editInventory} from '../model/inventory.js'

// just changing the adding product routes
export default{
    getInvents: async (req, res) => {
        try {
            res.send(await getInventories());
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
    
    getInvent: async (req, res) => {
        try {
            res.send(await getInventory(+req.params.id));
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
    
    addInvents: async (req, res) => {
        try {
            const { productName, quantity, category, imgUrl, pricePerProduct, expenses, income } = req.body;
            const post = await addInventory(productName, quantity, category, imgUrl, pricePerProduct, expenses, income);
            res.send(await getInventories());
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
    
    deleteInvent: async (req, res) => {
        try {
            res.send(await deleteInventory(req.params.id));
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
    
    editInvent: async (req, res) => {
        try {
            const [item] = await getInventory(+req.params.id);
    
            let { productName, quantity, category, imgUrl, pricePerProduct, expenses, income } = req.body;
    
            productName ? productName = productName : { productName } = item;
            quantity ? quantity = quantity : { quantity } = item;
            category ? category = category : { category } = item;
            imgUrl ? imgUrl = imgUrl : { imgUrl } = item;
            pricePerProduct ? pricePerProduct = pricePerProduct : { pricePerProduct } = item;
            expenses ? expenses = expenses : { expenses } = item;
            income ? income = income : { income } = item;
    
            await editInventory(productName, quantity, category, imgUrl, pricePerProduct, expenses, income, +req.params.id);
    
            res.json(await getInventories());
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    }
}