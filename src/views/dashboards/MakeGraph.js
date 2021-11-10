import React, { useState } from 'react';
import { Button, Row, Card } from 'react-bootstrap';
import ChartLargeLineSales from 'views/interface/plugins/chart/ChartLargeLineSales';
import 'intro.js/introjs.css';


const MakeGraph = () => {
    const device = [
        {
        deviceId: 'abc12',
        time: ['20211007_1', '20211007_2'],
        value: [32, 35, 40, 51, 24],
        },
        { 
        deviceId: 'abc13', 
        time: ['20211007_1', '20211007_2'],
        value: [11, 24, 20, 17, 30, 25] 
        },
        { 
        deviceId: 'abc14', 
        time: ['20211012_1', '20211007_2'],
        value: [32, 21, 13, 24, 32, 23]
        },
        { 
        deviceId: 'abc15', 
        time: ['20211012_1', '20211007_2'],
        value: [40, 47, 26, 14, 34, 29]
        },
    ];

    const devicelist = {
    values: [
        { deviceId: 'abc12', lat: 40.2342, lon: 128.2424 },
        { deviceId: 'abc13', lat: 41.2342, lon: 129.2424 },
        { deviceId: 'abc14', lat: 42.2342, lon: 130.2424 },
        { deviceId: 'abc15', lat: 43.2342, lon: 131.2424 },
    ],
    };


    function graph({array}){
        return(
            <div>
                <Card className="mb-2 h-auto sh-xl-24" id="introFirst">
                    <Card.Body>
                        <Row className="g-0 h-100">
                        <ChartLargeLineSales device={array[0]}/>
                        </Row>
                    </Card.Body>
                    </Card>
            </div>
        )
    }
    return(
        <div>
            {device.map(item => (
                <graph array={item} key={item.deviceId}/>
            ))}
        </div>
    )

};

export default MakeGraph;