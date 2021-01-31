import React from "react";
import PropTypes from "prop-types";

export default class Header extends React.Component {
  public static displayName = "Header";

  public static propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  };

  public render(): JSX.Element {
    const { children } = this.props;

    return <div className="modal__header">{children}</div>;
  }
}
