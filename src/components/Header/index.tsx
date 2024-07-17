import React, {useState} from "react";
import styles from "./Header.module.scss"
import BtnCategory from "./headerComponents/BtnCategory/btnCategory"
import TopHeader from "./headerComponents/topHeader/topHeader"
import MainIcon from '../img/svg/MainIcon.svg'
import Image from "next/image"
import '@/styles/global.scss'
import SearchBar from "./headerComponents/SearchBar";
import LoginButton from "./headerComponents/LoginBtn";
import NotificationButton from "./headerComponents/NotificationBtn";
import FavoritesBtn from './headerComponents/FavoritesBtn'
import MyOrdersBtn from "./headerComponents/MyOrders";
import BottomMenu from "./headerComponents/BottomMenu";

const Header = () => {
  
  return (
    <header className={styles.header}>
      <div className="container">
      <TopHeader />
      <div className={styles.middleMenu}>
        <div className={styles.img} >
          <Image src={MainIcon} alt="" fill />
        </div>
        <BtnCategory/>
        <SearchBar />
        <div className={styles.btns_wrapper}>
          <LoginButton />
          <NotificationButton />
          <FavoritesBtn />
          <MyOrdersBtn />
        </div>
        
      </div>
      <BottomMenu />
      </div>
    </header>
  )
}

export default Header
