import { ReactElement, FC, ReactNode } from "react";
import { Button, ConfigProviderProps } from "antd";
import { ButtonProps, ButtonShape, ButtonType } from "antd/lib/button";

type SizeType = ConfigProviderProps["componentSize"];

interface Props {
  type?: ButtonType;
  icon?: ReactNode;
  shape?: ButtonShape;
  size?: SizeType;
  disabled?: boolean;
  className?: string;
  ghost?: boolean;
  danger?: boolean;
  block?: boolean;
  children: ReactNode;
}

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
}): ReactElement => {
    return (
        <Button type={type} className={className} ghost={ghost} size={size} block={block}>
            {children}
        </Button>
    )
};

export default CButton;
