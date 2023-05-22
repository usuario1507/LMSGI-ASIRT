import { BrowserRouter as Router, Routes, Route,Link, NavLink, Outlet } from "react-router-dom";
    export default function App() {
      return (
       <Router>
         <Navbar2 />
         <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/about" element={<About/>} />
         <Route path='*' element={<NoPage />} />
       </Routes>
       </Router>
     );
    }
    function Home(){
        return(
            <>
            <div>Home</div>
            </>
        )
    }
    function About(){
        return(
            <>
            <div>About</div>
            </>
        )
    }
    function NoPage(){
        return(
            <>
            <div>Página 404</div>
            </>
        )
    }
    function Navbar2() {
     return (
       <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
       </nav>
     )
    }
    export function RutaOutlet() {
        return (
        <Router>
          <Navbar3 />
          <Routes>
                <Route exact path="/" element={<Home2/>} >
                  <Route path="usuario/:nombre" element={<MySkills/>} />
                  <Route path="/about" element={<About/>} />
                </Route>
                <Route path="/otra" element={<Otra/>} />
                <Route path="*" element={<NoPage/>} />
          </Routes>
        </Router>
        );
       }
    function Navbar3() {
        // visible on every page
        return (
        <nav>
        <Link to="/">Home</Link>
        <Link to="usuario/Angel">Usuarios</Link>
        <Link to="about">Acerca de...</Link>
        <Link to="otra">Otros...</Link>
        </nav>
        )
    }
    function Otra(){
        return(
            <div>OTRA COSA</div>
        )
    }
    function MySkills() {
        return <div>SKILLS</div>;
      }
  
    function Home2() {
      return (
         <div>
            <h1> Home </h1>
            <Outlet/>
         </div>
      )
    }