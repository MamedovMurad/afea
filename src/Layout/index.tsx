import React, { useEffect } from "react";
import agent from "../Api/agent";
import { Header } from "../components/header";


type LayoutProps = {
    children:any
}
 
const Layout:React.FC<LayoutProps> = ({children}:LayoutProps) => {
    const [active, setActive] = React.useState('home');
  
    
    return (
        <>
        <header>
        <div>
        <Header />
  
        </div>
        </header>
        <main>
{children}
        </main>
</>
    );
}
 

export default Layout;