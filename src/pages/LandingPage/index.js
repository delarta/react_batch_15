import React from "react";
import style from "./style.module.scss";

function LandingPage() {
  return (
    <div className={style.background}>
      <div className={style.navbar}>
        <div className={style.left__menu}>
          <div className={style.brand}><a href="#">Brand</a></div>
          <div className={style.item}><a href="#">Features</a></div>
          <div className={style.item}><a href="#">Why</a></div>
          <div className={style.item}><a href="#">Pricing</a></div>
          <div className={style.item}><a href="#">Blog</a></div>
        </div>
        <div className={style.right__menu}>
          <div className={style.item}><a href="#">Login</a></div>
          <div className={`${style.item} ${style.signup}`}><a href="#">SignUp</a></div>
        </div>
      </div>

      <div className={style.content}>
        <div className={style.content__left}>
          <h1>Digital data analytics_..</h1>
          <p>Integrate our solution - and start processing more sales</p>

          <div className={style.content__left__cta}>
            <button>Get Started</button>
            <button className={style.text}>It's free</button>
          </div>
        </div>
        <div className={style.content__right}>
          <img src="https://cdn.dribbble.com/users/623359/screenshots/9759917/media/65f2008952879ec1bab009b0730743fe.png?compress=1&resize=1200x900" alt="illustration" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
