import React, { PureComponent } from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import axios from 'axios';
class Dashboard extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            intent: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5001/task-870cf/us-central1/api/intent')
            .then(res => {
                this.setState({
                    intent: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <div className='container'>
                <div className="container2">
                        <AppBar >
                            <Toolbar>
                              Intent List
                            </Toolbar>
                        </AppBar>
                    
                    {this.state.intent.map((d, i) => {
                        return (
                            <div key={i} className="" >
                                <Accordion className="radius-zero">
                                    <AccordionSummary>
                                        <Typography className="intents">{d.info.displayName}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            {d.info.messages.map((d1, j) => {
                                                return (
                                                    <div key={j}>
                                                        <div>
                                                            {
                                                                d1.text.text.map((element, k) => {
                                                                    return (
                                                                        <div className="flex" key={k}>
                                                                            <div>{element}</div>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Dashboard