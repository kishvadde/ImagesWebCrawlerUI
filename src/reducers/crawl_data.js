const crawlDataReducer = (state = {
    data:null,
    fetching:false,
    fetched:false,
    data_present:false,
    response_status:null,
    error:null},action) =>{
    let new_state;
    switch(action.type){

        case "CRAWL_URL_INITIATED":
            new_state = {
                ...state,
                fetching:true,
                fetched:false,
                data:null,
                data_present:false,
                response_status:null,
                error:null
            };
            break;

        case "CRAWL_URL_SUCCESSFULL":
            new_state =  {
                ...state,
                fetching:false,
                fetched:true,
                data:action.payload.data,
                data_present:true,
                response_status:action.payload.status} ;
            break;

        case "CRAWL_URL_FAILED":
            new_state = {
                ...state,
                data:null,
                fetching:false,
                fetched:true,
                response_status:action.payload.status,
                error:action.payload.error
            };
            break;
        default:
            new_state = state;
            break;
    }
    return new_state
};

export default  crawlDataReducer;
