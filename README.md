# Get Started

A fully customizable, One Time Password input component.

<!-- [Example Git Url](https://github.com/deepanshuhsaini653/root-application) -->

# Installation

### To install the latest stable version:

```reactjs
npm install --save react-mat-otp-input
```

### Basic usage:

```react
import React, {  useState } from "react";
import { OtpInput } from "react-mat-otp-input";

function App() {
const [otp, setOtp] = useState<string>("");

const otpChangeHandler = (event: any) => setOtp(event);

  return (
    <Fragment>
      <OtpInput
          autoFocus
          isNumberInput={true}
          length={6}
          className="otpContainer"
          inputClassName="otpInput"
          onChangeOTP={otpChangeHandler}
        />
    </Fragment>
  );
}

export default App;
```

### Add this CSS

```css
.otpContainer {
    display: flex;
}

.otpInput {
    width: 100% !important;
    height: 3rem;
    margin: 0 1rem;
    font-size: 2rem;
    text-align: center;
    border: none;
    outline: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}

.otpInput::-webkit-outer-spin-button,
.otpInput::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

/*  Add breakpoint for iPhone */
@media only screen and (max-width: 375px) {
    .otpInput {
        width: 100% !important;
        height: 1.5rem;
        font-size: 1rem;
        padding: 8px;
    }
}
```

# API

```
OTPInputProps {
    length: number;
    onChangeOTP: (otp: string) => any;
    autoFocus?: boolean;
    isNumberInput?: boolean;
    disabled?: boolean;
    style?: CSSProperties;
    className?: string;
    inputStyle?: CSSProperties;
    inputClassName?: string;
}
```
