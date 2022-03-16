import ProfileComp from './profile';
import NavCategory from './navCategory';
import ListNav from './listNav';

const sampleData = [
    {
        category:"Category",
        items: [
            {
                text:"Dashboard",
                link:"/"
            },
            {
                text:"Widget",
                link:"/widget"
            },
            {
                text:"test1",
                link:"/tets1"
            },
        ]
    },
    {
        category:"Category 2",
        items: [
            {
                text:"Dashboard",
                link:"/"
            },
            {
                text:"Widget",
                link:"/widget"
            },
            {
                text:"test1",
                link:"/tets1"
            },
        ]
    }
]

const SideBar = () => {
  return (
    <nav className="sidebar sidebar-offcanvas">
        <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
            <a className="sidebar-brand brand-logo" href="index.html">
                <img src="https://www.bootstrapdash.com/demo/corona/jquery/template/assets/images/logo.svg" alt="logo"/>
            </a>
            <a className="sidebar-brand brand-logo-mini" href="index.html">
                <img src="https://www.bootstrapdash.com/demo/corona/jquery/template/assets/images/logo-mini.svg" alt="logo"/>
            </a>
            {/* <ul className="nav">
                <NavCategory text={"Navigation"}/>
            </ul> */}
            <ListNav headerItem={
                <li className="nav-item profile">
                    <ProfileComp />    
                </li>} 
                data={sampleData}
            />
        </div>
    </nav>
  )
}

export default SideBar
