import { useEffect, useState } from "react"
import data from "../components/data"

export const useFetchQuestion = ()=>{
    const[getData,SetGetData]=useState( {isLoading : false, apiData :[],serverError:null});

    useEffect(()=>{
        SetGetData(prev =>({
            ...prev, isLoading:true
        }))

        // async function
        (async ()=>{
            
        })
    })
}