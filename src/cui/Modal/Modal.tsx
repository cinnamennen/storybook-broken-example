/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";

interface Props {
  visible: boolean;
  size?: "small" | "large" | "full" | "fluid";
  onClose?: () => void;
}

export default class Modal extends React.Component<Props> {
  public static Header = Header;


  public static propTypes = {
    visible: PropTypes.bool,
    onClose: PropTypes.func,
    size: PropTypes.oneOf(["", "small", "large", "full", "fluid"]),
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  };

  onCloseKeyHandler = (event: KeyboardEvent): void => {
    if (event.key === "Escape" || event.code === "Escape" || event.keyCode === 27) {
      this.props.onClose && this.props.onClose();
    }
  };

  componentDidMount(): void {
    document.addEventListener("keyup", this.onCloseKeyHandler);
  }

  componentWillUnmount(): void {
    document.removeEventListener("keyup", this.onCloseKeyHandler);
  }

  public render(): JSX.Element {
    const { visible, size, children, onClose } = this.props;

    let header: any = null;
    let body: any = null;
    let footer: any = null;

    React.Children.forEach(children, (child): void => {
      const childElement: any = child;
      if (childElement.type) {
        switch (childElement.type.displayName) {
          case "Header":
            header = child;
            break;
          case "Footer":
            footer = child;
            break;
          case "Body":
            body = child;
            break;
          default:
            break;
        }
      }
    });
    return (
      <div
        className={`modal ${size ? `modal--${size}` : ""} ${visible ? "" : "hide"}`}
        onClick={onClose} // close modal on background click
      >
        <div
          className="modal__dialog"
          // prevent closing modal if inside dialog
          onClick={(event) => event.stopPropagation()}
        >
          <div className="modal__content" style={{ overflow: "scroll" }}>
            {onClose && (
              <a className="modal__close" onClick={onClose} role="button">
                <span className="icon-close" />
              </a>
            )}
            {header}
            {body}
            {footer}
          </div>
        </div>
      </div>
    );
  }
}
