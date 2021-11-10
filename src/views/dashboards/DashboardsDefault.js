import React, { useState, useEffect, useRef } from 'react';
import { Button, Row, Col, Card} from 'react-bootstrap';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { NavLink } from 'react-router-dom';
import { Steps } from 'intro.js-react';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import Glide from 'components/carousel/Glide';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import ChartLargeLineSales from 'views/interface/plugins/chart/ChartLargeLineSales';
import ChartLargeLineStock from 'views/interface/plugins/chart/ChartLargeLineStock';
import 'intro.js/introjs.css';
import Mapbox from 'views/dashboards/Mapboxgl';
import axios from 'axios';
import "./DashboardsDefault.scss"
import Modal from 'react-bootstrap/Modal'


// axios.defaults.baseURL = "http://127.0.0.1:8000/api" 
const URL = 'http://api-2108.bs-soft.co.kr/mt10-hydro-detection-fbe3d/us-central1/api/devices';


const DashboardsDefault = () => {
  const [devicelist, setdevicelist] = useState([]);
  const [gridModal, setgridModal] = useState(false);


  const [deviceId, setdeviceId] = useState("");
  const changeid = (e)=>{

    setdeviceId(e.target.value);
    console.log(deviceId)
  }
  const [deviceLocation, setdeviceLocation] = useState("");
  const changelocation = (e)=>{

    setdeviceLocation(e.target.value);
    console.log(deviceLocation)
  }
  const submitting = ()=>{
    console.log(devicelist)
    console.log(deviceLocation)
  }
  


  useEffect(()=>{
      axios.get(URL).then((response)=>{
      setdevicelist(response.data);
      console.log(devicelist);
    })
  },[]);

  

  function Graph(){
    const device = [
        {
        deviceId: '001',
        time: ['20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18',],
        value: [32, 35, 40, 51, 24,32, 35, 40, 51, 24,32, 35, 40, 51, 24,32, 35, 40, 51, 24,32, 35, 40, 51, 24,32, 35, 40, 51, 24,],
        },
        { 
        deviceId: '002', 
        time: ['20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18',],
        value: [11, 24, 20, 17, 30,11, 24, 20, 17, 30,11, 24, 20, 17, 30,11, 24, 20, 17, 30,11, 24, 20, 17, 30,11, 24, 20, 17, 30,] 
        },
        { 
        deviceId: '003', 
        time: ['20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18',],
        value: [32, 21, 13, 24, 32,32, 21, 13, 24, 32,32, 21, 13, 24, 32,32, 21, 13, 24, 32,32, 21, 13, 24, 32,32, 21, 13, 24, 32,]
        },
        { 
        deviceId: '004', 
        time: ['20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18',],
        value: [40, 47, 26, 14, 34,40, 47, 26, 14, 34,40, 47, 26, 14, 34,40, 47, 26, 14, 34,40, 47, 26, 14, 34,40, 47, 26, 14, 34,]
        },
        { 
        deviceId: '005', 
        time: ['20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18',],
        value: [40, 47, 26, 14, 34,40, 47, 26, 14, 34,40, 47, 26, 14, 34,40, 47, 26, 14, 34,40, 47, 26, 14, 34,40, 47, 26, 14, 34,]
        },
        { 
        deviceId: '006', 
        time: ['20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18',],
        value: [40, 47, 26, 14, 34,40, 47, 26, 14, 34,40, 47, 26, 14, 34,40, 47, 26, 14, 34,40, 47, 26, 14, 34,40, 47, 26, 14, 34,]
        },
        { 
        deviceId: '007', 
        time: ['20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18',],
        value: [40, 47, 26, 14, 34,40, 47, 26, 14, 34,40, 47, 26, 14, 34,40, 47, 26, 14, 34,40, 47, 26, 14, 34,40, 47, 26, 14, 34,]
        },
        { 
        deviceId: '009', 
        time: ['20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18',],
        value: [40, 47, 26, 14, 34,40, 47, 26, 14, 34,40, 47, 26, 14, 34,40, 47, 26, 14, 34,40, 47, 26, 14, 34,40, 47, 26, 14, 34,]
        },
        { 
        deviceId: '010', 
        time: ['20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18','20211007_10:11:18', '20211007_10:11:18',],
        value: [40, 47, 26, 14, 34,40, 47, 26, 14, 34,40, 47, 26, 14, 34,40, 47, 26, 14, 34,40, 47, 26, 14, 34,40, 47, 26, 14, 34,]
        },
    ];
    
      return (
        <>
          {device.map((item, index) => (
            <Card className="mb-2 h-5 sh-xl-24" id="introFirst" key={index}>
              <Card.Body>
                <Row className="g-2 h-100">
                  <ChartLargeLineSales device={item}/>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </>
      );
  }

  function DeviceCard(){

      return (
        <>
          {devicelist.map((item, index) => (
              <Card className="mb-2 h-5 sh-xl-24" id="introSecond" key={index}>
              <Row className="g-2 h-100"> 
                <Col xs="auto">
                  <NavLink to="/pages/portfolio/detail">
                    <img src="/img/product/small/hydro.jpg" alt="user" className="card-img card-img-horizontal sw-13 sw-lg-15" />
                  </NavLink>
                </Col>
                <Col>
                  <Card.Body className="pt-0 pb-0 h-100">
                    <Row className="g-0 h-100 align-content-center">
                      <Col md="7" className="d-flex flex-column mb-2 mb-md-0">
                        <NavLink to="/pages/portfolio/detail">기기ID</NavLink>
                        <div className="text-small text-muted text-truncate">{item.deviceId}</div>
                      </Col>
                      <Col md="7" className="d-flex flex-column mb-2 mb-md-0">
                        <NavLink to="/pages/portfolio/detail">설치장소</NavLink>
                        <div className="text-small text-muted text-truncate">{item.deviceLocation}</div>
                      </Col>
                      <Col md="5" className="d-flex align-items-center justify-content-md-end">
                        <Button onClick={()=> setgridModal(true)} variant="outline-primary" size="sm" className="btn-icon btn-icon-start ms-1">
                          <CsLineIcons icon="edit-square" width="15" height="15" className="me-xxl-2" />
                          <span className="d-none d-xxl-inline-block">Edit</span>
                        </Button>
                        
                        <form onSubmit={submitting()}>
                        <Modal backdrop='static' show={gridModal} onHide={() => setgridModal(false)} >
                        <Modal.Header closeButton>
                          <Modal.Title>디바이스 수정</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                          <input value={deviceId} onChange={changeid} placeholder="기기ID"/><br/>
                          <input value={deviceLocation} onChange={changelocation} placeholder="설치장소"/>
                        </Modal.Body>

                        <Modal.Footer>
                          <Button variant="secondary" onClick={() => setgridModal(false)}>
                            Close
                          </Button>
                          <Button onClick={() => setgridModal(false)}>Save changes</Button>
                        </Modal.Footer>
                        </Modal>
                        </form>
                        
                        <Button variant="outline-primary" size="sm" className="btn-icon btn-icon-start ms-1">
                          <CsLineIcons icon="bin" width="15" height="15" className="me-xxl-2" />
                          <span className="d-none d-xxl-inline-block">Delete</span>
                        </Button>

                      </Col>
                    </Row>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          ))}
        </>
      );
  }

  const title = 'Dashboard';
  const description = 'Default Dashboard';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'dashboards', text: 'Dashboards' },
  ];

  const [tourEnabled, setTourEnabled] = useState(false);
  const tourSteps = [
    {
      element: '#introFirst',
      title: 'Fancy Charts',
      intro: 'Some charts over here!',
    },
    {
      element: '#introSecond',
      title: 'Product Card',
      intro: 'Here is a product card with buttons!',
    },
    {
      element: '#introThird',
      title: 'More Cards',
      intro: 'Category card with an icon!',
    },
  ];
  const tourOptions = {
    nextLabel: '<span>Next</span><i class="cs-chevron-right"></i>',
    prevLabel: '<i class="cs-chevron-left"></i><span>Prev</span>',
    skipLabel: '<i class="cs-close"></i>',
    doneLabel: '<i class="cs-check"></i><span>Done</span>',
    overlayOpacity: 0.5,
    exitOnOverlayClick: true,
    exitOnEsc: true,
  };

  return (
    <>
      <HtmlHead title={title} description={description} />

      {/* Tour Start */}
      {/* <Steps
        enabled={tourEnabled}
        steps={tourSteps}
        initialStep={0}
        options={tourOptions}
        onExit={() => {
          setTourEnabled(false);
        }}
      /> */}
      {/* Tour End */}

      {/* Title and Top Buttons Start */}
      <div className="page-title-container">
        <Row>
          {/* Title Start */}
          <Col md="7">
            <h1 className="mb-0 pb-0 display-4">{title}</h1>
            <BreadcrumbList items={breadcrumbs} />
          </Col>
          {/* Title End */}

          {/* Top Buttons Start */}
          <Col md="5" className="d-flex align-items-start justify-content-end">
            <Button
              variant="outline-primary"
              className="btn-icon btn-icon-start btn-icon w-100 w-md-auto ms-1"
              onClick={() => {
                setTourEnabled(true);
              }}
            >
              <CsLineIcons icon="flag" /> <span>Take a Tour</span>
            </Button>
          </Col>
          {/* Top Buttons End */}
        </Row>
      </div>
      {/* Title and Top Buttons End */}

      <h1>수소 탐지 시스템 </h1>
      <Row>
        <Col xl="4" className="mb-5">
          <h2 className="small-title">디바이스<Button variant="outline-primary" size="sm" className="btn-icon btn-icon-start ms-1" style={{marginLeft:"100px"}}>
                          <CsLineIcons icon="plus" width="15" height="15" className="me-xxl-2" />
                          <span className="d-none d-xxl-inline-block">Add new device</span>
                        </Button></h2>
          <DeviceCard/>
        </Col>

        <Col xl="8">
          <h2 className="small-title">실시간 모니터링</h2>
          <Graph />
        </Col>
      </Row>

    
    </>
  );
};

export default DashboardsDefault;


