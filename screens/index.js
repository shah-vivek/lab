import AccountDetails from './account-details';
import SmsCodeVerification from './sms-code-verification';
import AcknowledgeActivation from './acknowledge-activation';
import {BranchSelection, TimeSelection, ServiceSelection} from './appointment-booking';
import CashDeposit from './services/cash-deposit';
import AcknowledgeAppointMentBooking from './acknowledge-appointment-booking';
import AddressChange from './change-address';
import ReviewAddress from './review-address';
import {ScanQRCode, AcknowledgeCheckin} from './check-in';
import DDTelegraphicTransfer from './dd_telegraphic-transfer';
import ReviewDDTelegraphicTransfer from './review-dd-telegraphic-transfer';
import ChequeDetails, {DepositCheque} from './cheque';

export {
    AccountDetails,
    SmsCodeVerification,
    AcknowledgeActivation,
    BranchSelection,
    TimeSelection,
    ServiceSelection,
    CashDeposit,
    AcknowledgeAppointMentBooking,
    AddressChange,
    ReviewAddress,
    ScanQRCode,
    AcknowledgeCheckin,
    DDTelegraphicTransfer,
    ReviewDDTelegraphicTransfer,
    ChequeDetails,
    DepositCheque
};