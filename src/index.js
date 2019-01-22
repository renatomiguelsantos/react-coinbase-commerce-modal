// @flow
import * as React from 'react';
import IFrame from './components/IFrame';
import type {MessageData} from './types';

type Props = {
  showModal?: boolean,
  styled?: boolean,
  children?: React.Node,
  checkoutId?: string,
  chargeId?: string,
  customMetadata?: string,
  onLoad: () => void,
  onChargeSuccess?: (MessageData) => void,
  onChargeFailure?: (MessageData) => void,
  onPaymentDetected?: (MessageData) => void,
  onModalClosed?: () => void,
  disableCaching: true
};

type State = {};

class CoinbaseCommerceModal extends React.Component<Props, State>{
  constructor(props: Props){
    super(props);
  }

  handleModalClose = () => {
    if (this.props.onModalClosed){
      this.props.onModalClosed();
    }
  };

  /*
   * If we experience an unexpected error,
   * log it as an error to the console and close the modal.
   */
  handleError = (msg: MessageData) => {
    console.error(msg);
  };

  render(){
    const {showModal} = this.props;
    const {onLoad, onChargeSuccess, onChargeFailure, checkoutId, chargeId, customMetadata, onPaymentDetected, disableCaching} = this.props;
    const iFrameProps = {onLoad, onChargeSuccess, onChargeFailure, checkoutId, chargeId, onPaymentDetected, disableCaching};
    return (
      <div>
        {showModal && (
          <IFrame {...iFrameProps} onModalClose={this.handleModalClose} onError={this.handleError} customMetadata={customMetadata}/>
        )}
      </div>
    )
  }
}
export default CoinbaseCommerceModal;
export type {MessageData};
