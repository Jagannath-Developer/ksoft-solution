import { ReactElement, FC } from "react";
import { Button } from "antd";
import { ButtonProps } from "antd/lib/button";

interface CButtonProps extends ButtonProps {
  onClick?: () => void;
}

const CButton: FC<CButtonProps> = ({
  onClick,
  children,
  className,
  type,
  icon,
  size,
  shape,
  disabled,
  danger,
  ghost,
  block,
  color,
  style
}): ReactElement => {
  return (
    <Button
      type={type}
      className={className}
      ghost={ghost}
      size={size}
      block={block}
      color={color}
      children={children}
      style={style}
      onClick={onClick}
    />
  );
};

export default CButton;
