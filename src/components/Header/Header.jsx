import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import {Logo,Container,LogoutBtn} from '..index/'
const Header = () => {
  const authStatus=useSelector(state=>state.auth.status);
  const navigate=useNavigate();

  const navItems=[
    {
      name:"Home",
      slug:"/",
      active:true,
    },
    {
      name:"Login",
      slug:"/Login",
      active:!authStatus,
    },
    {
      name:"Signup",
      slug:"/Signup",
      active:!authStatus,
    },
    {
      name:"All Posts",
      slug:"/AllPosts",
      active:authStatus,
    },
    {
      name:"Add Posts",
      slug:"/AddPost",
      active:authStatus,
    }
  ]


  return (
    <div>
      <Header>
        <Container>
          <nav className='flex'>
            <div className='mr-4'>
              <Link to='/'>
              <Logo width="70px"/>
              </Link>
            </div>
            <ul className='flex ml-auto'>
              {navItems.map((item)=>
              item.active ? (
                <li key={item.name}>
                  <button 
                  className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                  onclick={()=>navigate(item.slug)}>{item.name}</button>
                </li>
              ) : null
              )}

              {authStatus && (
                <li>
                  <LogoutBtn/>
                </li>
              )}
            </ul>
          </nav>
        </Container>
      </Header>
    </div>
  )
}

export default Header
