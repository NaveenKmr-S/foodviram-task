import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export default function carCard(props){
    return(
        <Card className="cards">
            <CardMedia
            component="img"
            alt={props.alt}
            height="140"
            image={props.url}
            title={props.title}
            />
            <CardContent >
            <Typography gutterBottom variant="h5" component="h2">
                {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {props.content}
            </Typography>
            </CardContent>
        </Card>
    );

}