import axios from "axios";
import { useState } from "react";
export enum REQUEST_TYPES{
    POST="post",
    GET="get",
    PUT="put",
    DELETE="delete"
}
export function useFetcher<ReturnType>(endPoint:string, requestType:REQUEST_TYPES, _queryParams?:{[key:string]:any}, requestBody?:{[key:string]:any}){
    const [loading, setLoading] = useState<boolean>(false);
    const [responseData, setResponseData] = useState<ReturnType>();
    const [error, setError] = useState<any>();
    const [queryParams, setQueryParams] = useState<typeof _queryParams>(_queryParams);
    const parseQueryParams = (newParams: typeof _queryParams = {})=>{
        if(queryParams){
            return Object.keys({...queryParams, ...newParams}).map((key:string)=>(`${key}=${queryParams[key]}`)).join("&");
        }
        return ""
    }
    const updateQueryParams = (newQueryParams: typeof _queryParams)=>{
        setQueryParams(newQueryParams);
        fetch();
    }
    const fetch = (newParams:typeof _queryParams={})=>{
        Object.keys(newParams).length>0?setQueryParams(newParams):"";
        axios({
            method: requestType,
            url: `${endPoint}?${parseQueryParams(newParams)}`,
            data:requestBody
        }).then((response:any)=>{
            setResponseData(response.data);
            setLoading(false);
        }).catch((err:any)=>{
            setError(err)
        });
    }
    
    return {loading, responseData, fetch, error, updateQueryParams};

}