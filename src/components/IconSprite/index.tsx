import { AllIcons } from "./all-icons";
import clsx from "clsx";

import styles from "./styles.module.scss";

interface Props {
  className?: string;
  width?: number;
  height?: number;
  id: AllIcons;
  onClick?(): void;
  style?: React.CSSProperties;
}

export const AppIcon = ({
  className,
  width = 24,
  height = 24,
  id,
  onClick,
  ...props
}: Props) => {
  return (
    <span
      {...props}
      onClick={onClick}
      className={clsx(styles.wrapper, className)}
    >
      <svg width={width} height={height}>
        <use xlinkHref={`/icons-sprite.svg#${id}`} />
      </svg>
    </span>
  );
};

export default AppIcon;
