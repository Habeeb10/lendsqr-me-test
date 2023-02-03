// import { NativeStackScreenProps } from "@react-navigation/native-stack";

// export type CommonStackParamList = {
//   // page with virtual keyboard
//   TransactionKeypad: TransactionKeypadParamsType;
//   VaultWithdrawConfirm: VaultConfirmationParamsType;
//   SendMoneyFeature: undefined;
//   TransactionCertainty: undefined;
//   InviteUsers: undefined;
//   RequestMoneyFeature: undefined;
//   GameCredit: undefined;
//   WithdrawFeature: undefined;
//   DepositFeature: undefined;
//   GameFeature: undefined;
//   CharitySupport: undefined;
//   CharityFeature: undefined;
//   GiftCardEasy: undefined;
//   GiftCardFit: undefined;
//   GiftCardChoice: undefined;
//   QRFeature: undefined;
//   CloseAccountScreen: undefined;
//   AccountClosureSurveyScreen: undefined;
//   WithdrawKeyPad: undefined;
//   CloseAccount: undefined;
//   AlternativeSurvey: undefined;
//   AirtimeIndexScreen: undefined;

//   //bvn
//   BvnVerification: BvnScreenParamsType;

//   // Status
//   StatusScreen: StatusScreenParamsType;

//   Receipt: {
//     amount: string;
//     beneficiaryName: string;
//   };

//   //Payments
//   AirtimeData: undefined;
//   Confirm: undefined;
//   CompleteTransaction: undefined;
//   InternetPlans: undefined;
//   InternetPlanDetail: { name: string };
//   Electricity: undefined;
//   CableTV: undefined;
//   Pie: undefined;
//   Water: undefined;
//   Charity: undefined;
//   CharityDetail: IXCharity;
//   ElectricityConfirmation: undefined;
//   PaymentConfirmation: {
//     beneficiaryLogo: string;
//     beneficiaryName: string;
//     phoneNumber?: string;
//     amount: string;
//     paymentMethod?: string;
//     purchaseName: string;
//     meterNumber?: string;
//     accountOrUserId?: string;
//     smartCardNumber?: string;
//     customerAccountNumber?: string;
//   };
//   GiftCardConfirmation: undefined;
//   CharityConfirmation: undefined;
//   GiftCard: undefined;
//   GiftCardDetails: IGiftCard;
//   GameScreen: undefined;
//   PaymentRecurring: undefined;
//   AirtimeRecurring: undefined;
//   InternetRecurring: undefined;
//   CableRecurring: undefined;
//   ElectricityRecurring: undefined;
//   WaterRecurring: undefined;
//   CharityRecurring: undefined;
//   RecurringPlan: undefined;
//   GiftCardEmail: undefined;

//   // Vault
//   NewVault: undefined;
//   VaultPassword: undefined;
//   LockVault: undefined;
//   VaultSuccessful: undefined;
//   AddVault: undefined;
//   ConfirmDeleteVault: undefined;
//   ArchievedVault: undefined;
//   VaultToAza: undefined;
//   VaultWithdrawsuccessful: undefined;
//   details: undefined;
//   activity: undefined;
//   TopBar: undefined;
//   mature: undefined;
//   MatureTab: undefined;
//   VaultToBank: undefined;
//   VaultWithdrawConfirmation: undefined;
//   VaultToBankSuccessful: undefined;
//   NewUserVault: undefined;
//   AddCoverImage: undefined;
//   AddCoverImageSuccessful: undefined;
//   SetVaultGoal: undefined;
//   ConfirmGoal: undefined;
//   UserVault: undefined;
//   ChangeVaultName: undefined;
//   ChangeGoalAmount: undefined;
//   VaultRecurringTransfer: undefined;
//   VaultRecurringAmount: undefined;
//   RecurringMoneyConfirmationScreen: undefined;
//   Vault: undefined;
//   VaultToBankAmount: undefined;
//   VaultFeature: undefined;
//   VaultLiberty: undefined;

//   // Settings
//   ChangePassword: undefined;
//   NewPassword: { oldPassword: string };
//   ChangePhoneNumber: undefined;
//   ChangePhoneNumberOTP: undefined;
//   ChangeEmail: undefined;
//   PrivacySettings: undefined;
//   AccountBalanceVisibility: undefined;
//   NameVisibility: undefined;
//   ContactVisibility: undefined;
//   SplitAndMoneyRequests: undefined;
//   BlockUsers: undefined;
//   BlockNewUser: undefined;
//   NotificationSettings: undefined;
//   FaceId: undefined;
//   LoginOptions: undefined;
//   Appearance: undefined;
//   AppLanguage: undefined;
//   TransactionPin: undefined;

//   // Profile
//   AccountDetails: undefined;
//   TransactionHistory: undefined;
//   BankAccounts: BankAccountsParamsType;
//   SelectBank: BankAccountsParamsType;
//   AddBankAccount: IBank & BankAccountsParamsType;
//   AddBankAccountConfirmation: IBank &
//     BankAccountsParamsType & { accountNumber: string; accountName: string };
//   EditBankAccountDetails: IBankAccount;
//   DebitCreditCards: undefined;
//   ManageCard: undefined;
//   AddNewCard: { navigateBackTo: string };
//   ScanCard: undefined;
//   TermsOfUse: undefined;

//   // Home Menu
//   Split: undefined;
//   ChooseSplit: undefined;
//   SplitSelectContacts: SplitSelectContactsParamsType;
//   SplitEditContacts: SplitEditContactsParamsType;
//   SplitEditContact: SplitEditContactParamsType;
//   SplitConfirmation: SplitConfirmationParamsType;
//   IncomingSplitRequests: undefined;
//   IncomingSplitRequestAcceptance: { requestItem: IRequest };
//   CompletedSplitRequestDetails: { requestItem: IRequest };
//   OutgoingSplitRequests: undefined;
//   MonthlySummary: undefined;
//   FeesAndLimits: undefined;
//   ContactUs: undefined;

//   //withdraw and deposit
//   WithdrawDepositTabs: { screen: string };
//   Deposit: undefined;
//   Withdraw: undefined;

//   // Transfer modal screens
//   SendMoney: undefined;
//   RequestMoney: undefined;
//   RequestMoneyConfirmation: undefined;
//   SendMoneyConfirmation: undefined;
//   SetupRecurringTransfer: IBeneficiary;
//   RecurringTransfer: undefined;
//   SelectNewRecurringTransfer: undefined;
//   RecurringTransferConfirmation: {
//     amount: string;
//     beneficiary: IBeneficiary;
//     period: string;
//     day: string;
//   };

//   // CEOMessage screen
//   CEOMessage: undefined;

//   // Common!!!
//   Common: undefined;
// };

// export type CommonScreenProps<Screen extends keyof CommonStackParamList> =
//   NativeStackScreenProps<CommonStackParamList, Screen>;

// // Page with virtual keyboard

// export interface RecurringTransaction {
//   type: "recurring";
//   beneficiary: IBeneficiary;
//   period: string;
//   day: string;
// }
// export interface NormalTransaction {
//   type: "normal";
//   transaction: "withdraw" | "deposit" | "send" | "request" | "debit";
//   beneficiary: IBeneficiary;
//   openDescriptionModal?: boolean;
// }

// export type TransactionKeypadParamsType = {
//   transactionType: RecurringTransaction | NormalTransaction;
//   headerTitle: string;
// };

// export type VaultConfirmationParamsType = {
//   transactionType: RecurringTransaction | NormalTransaction;
//   headerTitle: string;
// };