import axios from 'axios';

export function crawlURL(values){

    return (dispatch)=>{

        const url = 'http://127.0.0.1:8000/api/v1/crawl/';

        dispatch({type:'CRAWL_URL_INITIATED'});
        axios.post(url,values)
             .then((response)=>{
                dispatch({type:'CRAWL_URL_SUCCESSFULL',payload:{
                    status:response.status,
                    data:response.data
                }});
             })
            .catch((error) =>{
                dispatch({type:'CRAWL_URL_FAILED',payload:{status:error.response.status,
                                                            error:error.response.data}});
            })
    }
}