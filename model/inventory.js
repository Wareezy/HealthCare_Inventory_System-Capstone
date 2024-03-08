import {pool} from '../config/config.js'

// inventory
const getInventories=async()=>{
    const [result]=await pool.query('SELECT * FROM inventory')
    return result
}

const getInventory=async(id)=>{
    const[item]=await pool.query(
        'SELECT * FROM inventory WHERE id=?',
        [id]
    )
    return item
}

const addInventory=async(productName, quantity, category, imgUrl, pricePerProduct, expenses, income)=>{

    await pool.query(`
    INSERT INTO inventory (productName, quantity, category, imgUrl, pricePerProduct, expenses, income) values (?,?,?,?,?,?,?)`,
   [productName, quantity, category, imgUrl, pricePerProduct, expenses, income]
    ) 
}


const deleteInventory=async(id)=>{
    const [item]=await pool.query(`
    DELETE FROM inventory WHERE id=?`,[id])
   return getInventories(item.DeleteId)
}

const editInventory=async(productName, quantity, category, imgUrl, pricePerProduct, expenses, income,id)=>{
    await pool.query(`
    UPDATE inventory SET productName=?, quantity=?, category=?, imgUrl=?, pricePerProduct=? ,expenses=?,income=?
    WHERE id=? `,
     [productName, quantity, category, imgUrl, pricePerProduct, expenses, income,id])
     return getInventories()
}

export{getInventories,getInventory,addInventory,deleteInventory,editInventory}

