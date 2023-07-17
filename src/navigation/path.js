export const {default: Login} = require('../screens/loginSignup/login/Login');

// signup routes
export const {default: Email} = require('../screens/loginSignup/signup/Email');
export const {
  default: Password,
} = require('../screens/loginSignup/signup/Password');
export const {
  default: Username,
} = require('../screens/loginSignup/signup/Username');
export const {
  default: VerificationCode,
} = require('../screens/loginSignup/signup/VerificationCode');
export const {default: Roll} = require('../screens/loginSignup/signup/Roll');
// forget password
export const {
  default: EmailCheck,
} = require('../screens/loginSignup/forgetPassword/EmailCheck');
export const {
  default: ForgetVerification,
} = require('../screens/loginSignup/forgetPassword/ForgetVerification');
export const {
  default: ForgetPassword,
} = require('../screens/loginSignup/forgetPassword/ForgetPassword');
export const {
  default: Successfuly,
} = require('../screens/loginSignup/forgetPassword/Successfuly');
// main page routes
export const {default: Home} = require('../screens/mainPage/Home');
export const {default: Chats} = require('../screens/chats/Chats');
export const {default: Settings} = require('../screens/mainPage/Settings');
