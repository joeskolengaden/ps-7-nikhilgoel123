import React, {Component} from 'react';
import * as d3 from 'd3';
import { Card, Button, CardBody, CardTitle, CardText, Col } from 'reactstrap';

export class Artists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        d3.csv("data/artists.csv").then((d) => {
            this.setState({ data: d });
        });

    }
    render() {
        console.log(this.state.data)
        return <div className="container">Artists
                {this.state.data.map((d)=> {
                    return (
                    <Card>
                        <CardBody>
                            <CardTitle><a href={d.link}>{d.name}</a></CardTitle>
                            <CardText>{d.description}</CardText>
                        </CardBody>
                    </Card>
                    )
                })}
               </div> 
    }
}

