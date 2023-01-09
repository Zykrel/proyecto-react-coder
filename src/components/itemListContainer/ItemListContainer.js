import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/PedirData"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const {categoryId} = useParams()
    useEffect(() => {
        pedirDatos()
            .then((res) => {
                if(categoryId){
                    console.log("entro al if")
                    setProductos(res.filter(prod => prod.category === categoryId))
                }else{
                    setProductos(res)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }, [categoryId])
    return (
        <div>
            <ItemList productos={productos}/>
        </div>
    )
}