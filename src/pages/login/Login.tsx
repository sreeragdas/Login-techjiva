import './styles.scss';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import security from '../../assets/images/security.png'
import { Button, IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';
export const Login: React.FC = () => {
    const navigate = useNavigate();
    const [values, setValue] = useState({ email: '', password: '' });
    const [pwType, setPwType] = useState('password');
    const handleLogin = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        console.log(values , 'valuess')
        
        if (values.email === "h@gmail.com" && values.password === '123') {
            navigate('/dashboard');
        }
    }
    return (
        <div className='login'>
            <div className='login-form'>

                <form onSubmit={handleLogin}>
                    <div className='img-style' >
                        <img style={{ width: '80px' }} src={security} />
                        <div style={{ fontSize: '2rem' }}>Log in</div>
                        <div className='text'>Enter your email and password below</div>
                    </div>
                    <div className='input-field'>
                        <div className='input-field-username'>
                            <TextField id="outlined-basic" sx={{ width: 400 }} value={values.email} onChange={(e) => setValue((prev) => ({ ...prev, email: e.target.value }))} label="UserName" variant="outlined" />
                        </div>
                        <div className='input-field-password'>
                            <TextField id="outlined-basic" sx={{ width: 400 }} type='password' value={values.password} onChange={(e) => setValue((prev) => ({ ...prev, password: e.target.value }))}
                                label="Password" variant="outlined" />
                        </div>

                    </div>
                    {/* <input
                    type='text'
                    placeholder='User ID'
                    autoComplete='userId'
                    value={values.email}

                />
                <input
                    type={pwType}
                    placeholder='password'
                    autoComplete='current-password'
                    value={values.password}
                    onChange={(e) => setValue((prev) => ({ ...prev, password: e.target.value }))}
                /> */}
                    <span className='eye-icon'>

                    </span>
                    <div className='forgot-pw'>
                        Forget Password?
                    </div>
                    <div className='button-style'>
                    <Button
                        className='login-btn'
                        variant='contained'
                        size='small'
                        type='submit'
                        sx={{
                            backgroundColor: '#EE1C29',
                            '&:hover': {
                                backgroundColor: '#a6131c',
                            },
                        }}
                    >
                        Login
                    </Button>
                    </div>
                </form>
            </div>
        </div>
    );

}