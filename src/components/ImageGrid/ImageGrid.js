import React from 'react';
import Grid from '@material-ui/core/Grid'
import {Card,CardContent,CardHeader} from '@material-ui/core/'

import Image from './Image';

class ImagesContainer extends React.Component{


    render(){
        const {images,url} = this.props;
        return(
            <Card>
                <CardHeader title ={url}/>
                <CardContent>
                    <Grid container spacing={8}>
                        {images.map((image,index)=>{
                                 return (
                                    <Grid item md={3}>
                                        <Image key={`image${index+1}`} url={image}/>
                                    </Grid>
                                );
                        })}
                    </Grid>
                </CardContent>
            </Card>
        );
    }
}

export default ImagesContainer;

