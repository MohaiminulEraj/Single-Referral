import React, { useEffect } from 'react'
import { FaSignInAlt, FaSignOutAlt, FaHome, FaBell } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Link from 'next/link'
import styles from '@/styles/Header.module.css'
// import { useDispatch, useSelector } from 'react-redux';
// import { loadUser } from '@/redux/actions/userActions'
// import { signOut } from 'next-auth/client'
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'
import Image from 'next/image';

const Header = () => {
    // const dispatch = useDispatch()
    // const { user, loading } = useSelector(state => state.loadedUser)

    // useEffect(() => {
    //     dispatch(loadUser())
    // }, [dispatch])

    const logoutHandler = () => {
        signOut();
    }
    return (
        <>
            <ToastContainer />
            <header className={styles.header}>
                <div className={styles.logo}>
                    <Nav className="navbar navbar-expand-md">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link href='/'>
                                    <a style={{ "fontSize": "2rem" }}>
                                        <FaHome />
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </Nav>
                </div>

                <Navbar expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="navbar navbar-expand-md">
                            {/* {user && user ? (
                                <div className="ml-4 dropdown d-line">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item">
                                            <Link href={user?.role === 'user' ? '/me/publications/pending-articles' : '/me'}>
                                        

                                                <a className={styles.logo}>
                                            
                                                    <Image width={45} height={45} style={{ marginRight: 8, border: "1px solid black" }} src={user?.avatar?.url || "/images/default_avatar.jpg"} alt={user?.name} className="rounded-circle" />

                                                  
                                                </a>

                                            
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href={user?.role === 'user' ? '/me/publications/pending-articles' : '/me'}>
                                                <a className={styles.logo}>
                                                    {user?.fullname.toUpperCase()}
                                                </a>
                                            </Link>
                                        </li>
                                        
                                        {user && user.role == 'admin' && (

                                            <li className="nav-item">
                                                <Link href='/admin/users'>
                                                    <a>
                                                        USERS
                                                    </a>
                                                </Link>
                                            </li>
                                        )}
                                        <li className="nav-item">
                                            <Link href='/'>
                                                <a style={{ color: 'whitesmoke' }} className="nav-link btn-dark btn-icon" onClick={logoutHandler}>
                                                    <FaSignOutAlt /> LOGOUT
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            ) :
                             !loading && */}
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link href='/account/register'>
                                        <a style={{ color: 'whitesmoke', fontWeight: '900', borderRadius: '5px' }} className="nav-link btn-info btn-icon px-1 my-1">
                                            REGISTER
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href='/account/login'>
                                        <a style={{ color: 'whitesmoke', borderRadius: '5px' }} className="nav-link btn-dark btn-icon px-2 my-1">
                                            <FaSignInAlt /> LOGIN
                                        </a>
                                    </Link>
                                </li>
                            </ul>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header >
        </>

    )
}

export default Header