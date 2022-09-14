import React, { FC, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux'
import { setAlert } from '../store/actions/alertActions';
import { getWeather, setLoading } from '../store/actions/weatherActions';
import { Button, Form, Row, Input, Typography} from 'antd';

interface SearchProps {
    title: string
}

const Search: FC<SearchProps> =({title}) => {
    const [ city, setCity ] = useState('');
    const dispatch = useDispatch();

    const changeHandler  = (values: any) => {
        setCity(values?.city)
    }

    const submitHandler  = (values: any) => {

       if(values.city.trim() === ''){
            return dispatch(setAlert('City is required!'))
       }

       dispatch(setLoading())
       dispatch(getWeather(values.city) as any)
       setCity('')
    }

    return (
        <Row>
        <Row>
          <Row>
            <Typography.Title level={3} style={{color: "white"}}>{title}</Typography.Title>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 24 }}
                initialValues={{ city: '' }}
                onFinish={submitHandler}
                autoComplete="off"
                style={{display: 'inline-flex', marginLeft: 20}}
              >
                  <Form.Item
                    name="city"
                    rules={[{ required: true, message: 'Please enter city!' }]}
                  >
                    <Input value={city}  onChange={changeHandler}/>
                  </Form.Item>
                 <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button htmlType="submit" type='primary' style={{background: "white", color:'black'}}>Search</Button>
                 </Form.Item>
            </Form>
          </Row>
        </Row>
      </Row>
    )
}

export default Search; 