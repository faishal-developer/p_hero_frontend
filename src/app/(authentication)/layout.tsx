/* eslint-disable @next/next/no-img-element */
import style from "./style/authentication.module.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={style.container}>
      <div className={style.layout}>
        <div className={style.layout_image}>
          <img
            src="https://i.ibb.co/dQykjqq/marvin-meyer-SYTO3xs06f-U-unsplash.jpg"
            alt=""
          />
        </div>
        <div className={style.layout_display}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
