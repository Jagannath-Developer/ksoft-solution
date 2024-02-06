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
  type,
  icon,
  size,
  shape,
  disabled,
  danger,
  block,
}): ReactElement => {
    return (
        <Button>
            first test
        </Button>
    )
};

export default CButton;
