import './styles.scss';
import React , {useState} from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Button, IconButton } from '@mui/material';
import { Value } from 'sass';
export const Login: React.FC = () => {
    const navigate = useNavigate();
    const [values, setValue] = useState({ email: '', password: '' });
    const [pwType, setPwType] = useState('password');
    const handleLogin=(e: { preventDefault: () => void })=>{
         e.preventDefault();
        
        if (values.email==="h@gmail.com" && values.password==='123'){
            navigate('/dashboard');
        }
    } 
    return (
        <div className='login'>
        <div className='login-form'>
            
            <form onSubmit={handleLogin}>
                <input
                    type='text'
                    placeholder='User ID'
                    autoComplete='userId'
                    value={values.email}
                    onChange={(e) => setValue((prev) => ({ ...prev, email: e.target.value }))}
                />
                <input
                    type={pwType}
                    placeholder='password'
                    autoComplete='current-password'
                    value={values.password}
                    onChange={(e) => setValue((prev) => ({ ...prev, password: e.target.value }))}
                />
                <span className='eye-icon'>
                  
                </span>
                <div className='forgot-pw'>
                    Forget Password?
                </div>
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
            </form>
        </div>
    </div>
);
    
}