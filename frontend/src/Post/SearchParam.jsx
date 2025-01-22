import React from 'react'
import { useParams } from 'react-router-dom';
import PostSection from './PostSection';

const SearchParam = () => {

    const { param } = useParams();
    let send;
    const arr = ['skin','cough','fever','diabetes','hair','diet','immunity-wellness','pain-reliever','juices'];
    const params = arr.filter((ele)=>ele.includes(param));
    

    if(params.length>0){
        send = params[0];
    }
    else{
        send="";
    }
   
  return (
   <PostSection send={send} />
  )
}

export default SearchParam
