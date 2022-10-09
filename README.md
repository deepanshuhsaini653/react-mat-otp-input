### Getting Started

In this libary module will provide a custom, moduler UI authentication given below here:

### Features

-   [x] Login Via Password
-   [x] Forgot Password
-   [x] Reset Password
-   [ ] Login Via OTP
-   [ ] Verify OTP

[Example Git Url](https://github.com/deepanshuhsaini653/root-application)

# Login Featrue

Login feature is working fine now.

### Login Props

```reactjs
ILoginViaPasswordProps {
  fieldConfig?: IFeild;
  fieldGutter?: number;
  loader?: boolean;
  subHead?: string;
  onSubmitData?: (data: IFormInputs) => void | undefined;
  redirectToForgotPassword?: () => void | undefined;
  hideForgotPassword?: boolean;
  hideRememberMe?: boolean;
}
```

### Example:

```reactjs
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { LoginViaPassword } from "./../../components";

const LoginComponent = () => {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const redirectToForgotPasswordHandler = () => navigate("/forgot-password");

  return (
    <LoginViaPassword
      fieldConfig={{ variant: "outlined" }}
      loader={loader}
      hideForgotPassword={true}
      hideRememberMe={true}
      onSubmitData={(data: any) => {
        console.log(data);
        setLoader(true);
        setTimeout(() => {
          setLoader(false);
        }, 1000);
      }}
      redirectToForgotPassword={redirectToForgotPasswordHandler}
    />
  );
};

export const Login = LoginComponent;
```

# Forgot Password Feature

Forgot password feature is working fine now.

### Forgot Password Props

```reactjs
IForgotPasswordProps {
  type: "mobile" | "email";
  isCode?: boolean;
  fieldConfig?: IFeild;
  loader?: boolean;
  onSubmitData: (data: any) => any;
  redirectToSignIn: () => void | undefined;
}
```

### Example:

```reactjs
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { ForgotPassword } from "../../components";

const ForgotPasswordComponent = () => {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const redirectToSigninHandler = () => navigate("/login");

  return (
    <div>
      <ForgotPassword
        type="mobile"
        loader={loader}
        onSubmitData={(data: any) => {
          console.log(data);
          setLoader(true);
          setTimeout(() => {
            setLoader(false);
            navigate("/reset-password");
          }, 1000);
        }}
        redirectToSignIn={redirectToSigninHandler}
      />
    </div>
  );
};

export const ForgotPasswordPage = ForgotPasswordComponent;
```

# Reset Password Feature

Forgot password feature is working fine now.

### Reset Password Props

```reactjs
IResetPasswordProps {
  fieldConfig?: IFeild;
  loader?: boolean;
  onSubmitData: (data: IFormInputs) => void | undefined;
  redirectToSignIn: () => void | undefined;
}

```

### Example:

```reactjs
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { ResetPassword } from "../../components";

export default function ResetPasswordPage() {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const redirectToSigninHandler = () => navigate("/login");

  return (
    <div>
      <ResetPassword
        loader={loader}
        onSubmitData={(data: any) => {
          console.log(data);
          setLoader(true);
          setTimeout(() => {
            setLoader(false);
            navigate("/reset-password");
          }, 1000);
        }}
        redirectToSignIn={redirectToSigninHandler}
      />
    </div>
  );
}
```
