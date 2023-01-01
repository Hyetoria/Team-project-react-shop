import React, {useState} from 'react';
import styled from 'styled-components';
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {editUserInfo} from "../../utils/useAPI";

const EditProfile = () => {
    const navigate = useNavigate();
    const [loginInfo, setLoginInfo] = useState({
      newPassword: '',
      oldPassword: '',
      displayName:'',
    });

    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
      try{
        const res = await editUserInfo(data);
        if(res){
          console.log(res);
          alert("정보가 수정되었습니다.");
          navigate('/');
        }else{
          alert("정보가 수정이 되지 않았습니다.");
        }

      }catch (err){
        console.log(err);
      }

    };

    return (
      <Container>
        <ul>
          <li>
            <Link to={'/'} className="go-back">
              <span className="material-symbols-outlined">cottage</span>
              HOME
            </Link>
          </li>
          <li>
            <Link to={'/SignUp'} className="Login"></Link>
          </li>
        </ul>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h1>SignUp</h1>
          </div>
          <div>
            <h4>OldPassword</h4>
            <div className="password-input">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="********" {...register('oldPassword', { required: true })} />
            </div>
          </div>
          <div>
            <h4>NewPassword</h4>
            <div className="password-input">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="********" {...register('newPassword', { required: true })} />
            </div>
          </div>
          <div>
            <h4>Username</h4>
            <div className="password-input">
              <input type="text" placeholder="User Name" {...register('displayName', { required: true })} />
            </div>
          </div>
          <div className="submit">
            <button type="submit" value="submit" >
              SignUp
            </button>
          </div>
        </LoginForm>
      </Container>
    );

  };

  const Container = styled.div`
  font-family: 'Marcellus', serif;

  ul {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-top: 20px;
    line-height: 55px;
    height: 55px;

    text-align: center;
    color: gray;
    font-family: 'Marcellus', serif;
  }

  li {
    width: 30%;
    box-sizing: border-box;
    height: 65.99px;
  }

  .go-back {
    padding-bottom: 20px;
    height: 100%;
  }

  .navbar-logo {
    padding-bottom: 20px;
    height: 100%;
  }

  .material-symbols-outlined {
    height: 100%;
    padding-right: 20px;
    padding-top: 20px;
  }

  h4 {
    margin: 20px 0 5px 0;
    font-size: 1.5rem;
    font-weight: 300;
    font-family: 'Marcellus', serif;
  }

  .Login {
    font-family: 'Marcellus', serif;
  }
`;

  const LoginForm = styled.form`
  font-family: 'Marcellus', serif;
  letter-spacing: 0.5px;
  margin: auto;
  width: 600px;
  height: 800px;
  transform: translateY(10%);

  h1 {
    font-family: 'Marcellus', serif;
    margin: 20px 0 10px 0;
    font-size: 4rem;
    padding-bottom: 40px;
  }

  .username-input,
  .password-input {
    width: 90%;
    border-bottom: 1px solid #a4a4a4;
  }

  button {
    width: 100%;
    outline: none;
    border-radius: 0px;
    line-height: 2.5rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.5rem;
    font-size: 15px;
  }

  .submit {
    margin-top: 50px;
    width: 90%;
  }

  .submit  button{
    height: 50px;
    border-radius: 30px;
    margin-top: 10px;
    padding: 0px 20px;
    border: 1px solid lightgray;
    outline: none;
  }
`;

  export { EditProfile };


