import React from 'react'
import {connect} from 'react-redux';
import ImagesContainer from '../ImageGrid/ImageGrid';
import SeedURLForm from '../Form/SeedURLForm'
import Grid from '@material-ui/core/Grid'


class Crawler extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            crawl_data:props.crawl_data
        }
    }

    componentDidUpdate(preProps){

        const pre_crawl_data = preProps.crawl_data;
        const {crawl_data} = this.props;

        if(!pre_crawl_data.data_present && crawl_data.data_present){
            this.setState({
                crawl_data:crawl_data,
            });
        }

        if(pre_crawl_data.data_present && !crawl_data.data_present){
            this.setState({
                crawl_data:crawl_data,
            });

        }

    }

    render(){
        const {data_present,data,fetching} = this.state.crawl_data;

        return (
            <div id='crawler'>
                <SeedURLForm/>
                {
                  data_present?
                      <Grid container spacing={8} justify={'flex-start'} alignItems={'flex-start'}>
                            <Grid item>
                                {Object.keys(data).map((key,index)=>{
                                    return <ImagesContainer key={`url${index}`} images={data[key]} url={key}/>
                                })}
                             </Grid>
                      </Grid>
                      :null
                }
                {fetching?<div style={{marginTop:'30px',fontSize:'18px'}}>
                    Loading...
                </div>:null}
            </div>
        )
    }
}


function mapStateToProps(store) {

    return {
        crawl_data:store.crawl_data
    }
}


export default connect(
    mapStateToProps)(Crawler);