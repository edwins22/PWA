import { WebsiteList } from "./components/WebsiteList";
import { WebsiteForm } from "./components/WebsiteForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { LoginButton } from "./login/login";
import { LogoutButton } from "./login/logout";
import { Profile } from "./login/profile";
import { useAuth0 } from "@auth0/auth0-react";


function App() {
  const { isAuthenticated } = useAuth0();
  return (

    
    <BrowserRouter>
            <br></br>
            
          <div> 
            {isAuthenticated ? (
          <>
            <Profile />
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
            </div>  
            <br></br>
       
            
            
      <Routes>
      
        <Route path="/" element={<Layout />}>
           <Route path="/" element={<WebsiteList />} />
          <Route path="add" element={<WebsiteForm />} />
          <Route path="edit/:id" element={<WebsiteForm />} />
          <Route path="*" element={<h1>Not Found</h1>} />
          
        </Route>
        
      </Routes>
      
     
    </BrowserRouter>
  ); 
}

export default App;
