export const BASE_URL = "http://localhost:5000";

//registration
export const USER_REGISTRATION = `${BASE_URL}/register`
export const STAFF_REGISTRATION = `${BASE_URL}/add-staff`
export const DOCTOR_REGISTRATION = `${BASE_URL}/add-doctor`

//test related apis
export const GET_ALL_TEST_INFO = `${BASE_URL}/get-all-test-info`;
export const PARTICULAR_TEST_INFO =
  `${BASE_URL}/particular-test-details`;
export const EDIT_TEST_INFO = `${BASE_URL}/edit-test`;

//medicine related apis
export const GET_ALL_MEDICINES_INFO = `${BASE_URL}/get-all-medicines-info`;
export const GET_PARTICULAR_MEDICINE_INFO = `${BASE_URL}/get-particular-medicine-info`;
export const PARTICULAR_MEDICINE_FULL_STOCK_DETAILS = `${BASE_URL}/particular-medicine-details`;
export const ADD_MEDICINE_STOCK = `${BASE_URL}/add-medicine-stock-info`;

//members related apis
export const GET_ALL_DOCTORS = `${BASE_URL}/get-all-doctors`
export const GET_ALL_STAFFS = `${BASE_URL}/get-all-staffs`
export const GET_ALL_ACTIVE_DOCTORS = `${BASE_URL}/get-all-active-doctors`;

//take appointment
export const TAKE_APPOINTMENT = `${BASE_URL}/take-appointment`

//pending appointment 
export const PENDING_APPOINTMENTS_FOR_PARTICULAR_DOCTOR = `${BASE_URL}/get-all-pending-appointments-for-a-particular-doctor`;
//all appointments for a particular doctor
export const All_APPOINTMENTS_FOR_PARTICULAR_DOCTOR = `${BASE_URL}/get-all-appointments-for-a-particular-doctor`;
//all apointments
export const All_APPOINTMENTS = `${BASE_URL}/get-all-appointments`;
//change appointment status
export const CHANGE_APPOINTMENT_STATUS = `${BASE_URL}/change-appointment-status`;
//change medicine supply status
export const CHANGE_MEDICINE_SUPPLY_STATUS = `${BASE_URL}/change-medicine-supply-status`;