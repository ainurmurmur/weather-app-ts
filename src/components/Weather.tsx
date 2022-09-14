import React, { FC} from 'react';
import { Col, Row, Typography } from 'antd';
import { WeatherData } from '../store/types';
import './Style.css'

interface WeatherProps {
    data: WeatherData
}

const Weather: FC<WeatherProps> =({data}) => {
    const celsius = (data.main.temp - 273.15).toFixed(2);

    return (
        <Row gutter={[28, 28]} align='middle' justify='center' style={{width: '100%'}}>
        <Col style={{width: '100%'}}>
          <Typography.Title level={1} style={{color:'white', marginBottom: 50}}>{data?.name} - {data?.sys.country}</Typography.Title>
          <Row  gutter={[28, 28]} className='content'>
               <Col span={5} md={5} xs={12}>
                <Typography.Title level={5}>{data.weather[0].description}</Typography.Title>
                <Typography.Text ><img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt=""/></Typography.Text>
              </Col>
               <Col span={5} md={5} xs={12}>
                 <Typography.Title level={5}>Temp</Typography.Title>
                  <Typography.Text>{celsius}<sup>&#8451;</sup></Typography.Text>
              </Col>
               <Col span={5} md={5} xs={12}>
                 <Typography.Title level={5}>Humidity</Typography.Title>
                <Typography.Text >{data.main.humidity}%</Typography.Text>
              </Col>
               <Col span={5} md={5} xs={12}>
                 <Typography.Title level={5}>Pressure</Typography.Title>
                <Typography.Text >{data.main.pressure}</Typography.Text>
              </Col>
              <Col span={4} md={4} xs={12}>
                 <Typography.Title level={5}>Wind</Typography.Title>
                <Typography.Text >{data.wind.speed} m/s</Typography.Text>
              </Col>
          </Row>
        </Col>
      </Row>
    )
}

export default Weather; 