import TopBar from "./TopBar";

const Layout = ()=>{
  return (
    <>
      <TopBar></TopBar>
      <div className='body'>
          <div className='aside'>
            <div className='nav'></div>
            <div className='extensions'></div>
          </div>
          <div className='main'>
            <div className='main-content'></div>
            <div className='title-bar'></div>
          </div>
      </div>
    </>
  )
}

export default Layout;
