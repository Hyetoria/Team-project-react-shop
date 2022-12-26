/*esline-diable*/
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import axios from "axios";


const StyledHeader = styled.div`
  flex-wrap: wrap;
  font-family: 'Marcellus', serif;
  display: flex;
  margin: 30px;

  .header {
    Justify-content: space-between;
    width: 100%;
    margin: 0;
    padding-right: 19rem;
    padding-left: 10rem;
    display: flex;
    text-align: center;
    text-decoration: none;
    font-weight: bold;
  }

  .nav-logo-link {
    font-size: 50px;
    margin-left: 2.5em;
    padding-left: 2.50em;
  }

  input {
    color: gray;
    margin: 0 auto;
    width: 11rem;
    height: 3rem;
    text-align: center;
    font-size: 9px;
    border: 0;
    border-radius: 15px;
    outline: none;
    padding-left: 10px;
    background-color: gainsboro;
  }

  .nav-menu-side {
    font-weight: 400;
    color: gray;
  }
}
`;

const StyledCategory = styled.div`

  ul {
    font-family: 'Marcellus', serif;
    display: flex;
    justify-content: center;
    margin: 0rem 0rem 0rem 0rem;
    padding: 2rem 40rem;
    text-decoration: none;
    @media screen and (max-width: 500px) {
      display: none;
    }

    li {
      padding-left: 40px;
      color: dark-gray;
    }

`;

const Header = () => {
  const accessToken = window.localStorage.getItem("accessToken");

  const [isLogin, setIsLogin] = useState(
    window.localStorage.getItem("accessToken") !== ""
  );

  console.log(accessToken);

  const validLogin = async () => {
    try {
      const instance = axios.create({
        baseURL:
          "https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth",
        headers: {
          "content-type": "application/json",
          apikey: "FcKdtJs202209",
          "username": "KDT3_teamOT",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const response = (await instance.post("/me")).data;
      console.log(response);
    } catch (err) {
      console.log(err);
      setIsLogin(false);
    }
  };

  useEffect(() => {
    validLogin();
    console.log("하이");
  }, []);

  const logout = async () => {
    try {
      console.log(isLogin);
      const instance = axios.create({
        baseURL:
          "https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth",
        headers: {
          "content-type": "application/json",
          apikey: "FcKdtJs202209",
          "username": "KDT3_teamOT",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const response = (await instance.post("/logout")).data;
      window.localStorage.setItem("accessToken", "");
      console.log(response);
      setIsLogin(false);
    } catch (err) {
      alert("로그아웃 실패.");
      console.log("실패");
    }
  };


  return (
    <StyledHeader>
      <div className="header">
        <div className='header-left'>
          <input type="text" placeholder="Enter item to be searched" onChange={(e) => this.searchSpace(e)}/>
        </div>
        <div className="header-center">
          <Link to={"/"} className="nav-logo-link">
            N4
          </Link>
        </div>
        {/* 요건 잠시만기다려주세용ㅎㅎㅎㅎ */}
        {isLogin ? (
          <>
            <button type="button" onClick={logout}>
              로그아웃
            </button>
          </>
        ) : (
          <>
            <Link to={"/login"} className="nav-menu-side">Login/out</Link>
            <Link to={"/Cart"} className="nav-menu-side">Chart</Link>        </>
        )}


      </div>
      <StyledCategory>
        <ul>
          <li><Link to={"/category"} className="nav-menu-category">Category</Link></li>
          {/* {아직 아래 카테고리 미정} */}
          <li><Link to={"/category"} className="nav-menu-category">Category</Link></li>
          <li><Link to={"/category"} className="nav-menu-category">Category</Link></li>
          <li><Link to={"/category"} className="nav-menu-category">Category</Link></li>
        </ul>
        <div className="categoryList">


        </div>

      </StyledCategory>
    </StyledHeader>

  );


};

export default Header;