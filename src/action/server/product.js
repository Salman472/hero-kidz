"use server"

import { collections, dbCollection } from "@/lib/dbCollection"
import { ObjectId } from "mongodb"


export const getProduct=async()=>{
    const products=await dbCollection(collections.PRODUCTS).find().toArray()
    return products || []
}

export const getSingleProduct=async(id)=>{
    // if(id.length != 24){
    //     return {}
    // }
    const query={_id:new ObjectId(id)}
    const product=await dbCollection(collections.PRODUCTS).findOne(query)
    return product || {}
}