// @flow
import * as React from "react";
import IFrame from "./components/IFrame";
import type { MessageData } from "./types";

type Props = {
  showModal?: boolean,
  styled?: boolean,
  children?: React.Node,
  checkoutId?: string,
  chargeId?: string,
  customMetadata?: string,
  onLoad: () => void,
  onChargeSuccess?: MessageData => void,
  onChargeFailure?: MessageData => void,
  onPaymentDetected?: MessageData => void,
  onModalClosed?: () => void,
  disableCaching: true
};
type State = {
  showModal: boolean
};

class CoinbaseCommerceModal extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      showModal: !!this.props.showModal
    };
  }

  handleButtonClick = () => {
    this.setState({ showModal: true });
  };

  handleModalClose = () => {
    this.setState({ showModal: false });
    if (this.props.onModalClosed) {
      this.props.onModalClosed();
    }
  };

  handleError = (msg: MessageData) => {
    console.error(msg);
    this.setState({ showModal: false });
  };

  render() {
    const { showModal } = this.state;
    const {
      onLoad,
      onChargeSuccess,
      onChargeFailure,
      checkoutId,
      chargeId,
      customMetadata,
      onPaymentDetected,
      disableCaching
    } = this.props;
    const iFrameProps = {
      onLoad,
      onChargeSuccess,
      onChargeFailure,
      checkoutId,
      chargeId,
      onPaymentDetected,
      disableCaching
    };
    return (
      <div>
        {showModal && (
          <IFrame
            {...iFrameProps}
            onModalClose={this.handleModalClose}
            onError={this.handleError}
            customMetadata={customMetadata}
          />
        )}
      </div>
    );
  }
}
export default CoinbaseCommerceModal;
export type { MessageData };
