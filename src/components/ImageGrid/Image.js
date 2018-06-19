import React from 'react';
import {Card,CardMedia} from '@material-ui/core';

 function Image(props){

        const {url} = props;
        return (
            <Card style={{height:200}}>
                <img src={url} style={{width:'100%'}}/>
            </Card>
        );
}


export default Image;
