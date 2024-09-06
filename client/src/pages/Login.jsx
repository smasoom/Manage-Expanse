import { Form, Input } from "antd";
import {Link} from 'react-router-dom'
const Login = () => {
    
const submitHandler=(values)=>{
    console.log(values)
    }
    
    
    return (
        <>
           <div className=" register d-flex align-items-center justify-content-center">
        <Form layout="vertical" onFinish={submitHandler}>
          <h1>Register Form</h1>
          <Form.Item label="Email" name="email">
            <Input type="email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password"/>
          </Form.Item>
          <div className="d-flex justify-content-between">
<Link to='/register'> Not a User? check here to Register</Link>
<button className="btn btn-primary">Login</button>

          </div>
        </Form>
      </div> 
        </>
    )
}

export default Login
