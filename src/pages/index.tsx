import {HashRouter , Routes , Route} from 'react-router-dom'
import { Dashboard } from './dashboard'
import { Login } from './login'
export const Pages: React.FC = () => {
    return (
       <div className="pages">
       <HashRouter>

        <Routes>
            <Route path="login" element={<Login />}/>
            <Route path="dashboard" element={<Dashboard/>} />
        </Routes>
      
       </HashRouter>
       </div>
    )
}