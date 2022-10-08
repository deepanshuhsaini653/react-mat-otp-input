### Getting Started

In this libary module will provide a custom, moduler UI authentication like: Login, Forgot Password, Reset Password, Login Via OTP, Login Via Password, Login Password with OTP.

## Login Featrue

Login feature is working fine now.

### Login Features Props

ILoginViaOTPProps { fieldConfig?: IFeild; fieldGutter?: number; loader?: boolean; submitHandler?: (data: IFormInputs) => void | undefined; redirectToForgotPassword?: () => void | undefined;
hideForgotPassword?: boolean; hideRememberMe?: boolean; }

#Examle:

const [loader, setLoader] = useState(false);

<LoginViaOTP fieldConfig={{ variant: "outlined" }} loader={loader} submitHandler={(data: any) => { console.log(data); setLoader(true); setTimeout(() => { setLoader(false); }, 1000); }}
redirectToForgotPassword={() => { console.log("Redirect Forgot Password"); }} />

## Forgot Password Feature

Under working now...
