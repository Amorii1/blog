import Link from 'next/link'
const Header=()=>{
    return(
        <>
        <header>
        <div className="container">
            <div className="content">
           <Link href="../"><a><h2>FikraCamps</h2></a></Link>
           <ul>
               <li>Home</li>
               <li>About</li>
               <li>Help</li>
           </ul>
       </div>
    </div>
       </header>
       </>
    )
}
export default Header;