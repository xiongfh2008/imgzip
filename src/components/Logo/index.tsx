import { Typography } from "antd";
import style from "./index.module.scss";
import { observer } from "mobx-react-lite";
import { Image } from "antd";

interface LogoProps {
  iconSize?: number;
  title?: string;
}

export const Logo = observer(({ title = "IMGZIP", iconSize = 32 }: LogoProps) => {
  return (
    <div className={style.container}>
      <div className={style.logoContainer}>
        <Image 
          src="/logo.svg" 
          alt="Image Zip Logo"
          width={iconSize}
          height={iconSize}
          preview={false}
          fallback="/logo.svg"
        />
        <Typography.Text className={style.title}>{title}</Typography.Text>
      </div>
    </div>
  );
});
