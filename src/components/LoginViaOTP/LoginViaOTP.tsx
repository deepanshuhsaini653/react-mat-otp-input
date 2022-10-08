import React, { useState } from 'react';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Grid, TextField, BaseTextFieldProps, Button, Typography, IconButton, InputAdornment, FormControlLabel, Checkbox } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import * as yup from 'yup';
import { REGREX } from '../../utils/regrex';

export interface ILoginViaOTPProps {
    fieldConfig?: IFeild;
    fieldGutter?: number;
    loader?: boolean;
    submitHandler?: (data: IFormInputs) => void | undefined;
    redirectToForgotPassword?: () => void | undefined;
    hideForgotPassword?: boolean;
    hideRememberMe?: boolean;
}

export interface IFeild extends BaseTextFieldProps {}

const schema = yup.object({
    email: yup.string().required('Required').email('Enter valid email id'),
    password: yup
        .string()
        .trim()
        .required('Required')
        .matches(REGREX.password, 'Password should contain atleast one capital letter, one small letter, one digit, one special character and must be at least 8 characters and max 15 characters.')
});

interface IFormInputs {
    email: string;
    password: string;
}

export const LoginViaOTP: React.FC<any> = (props): JSX.Element => {
    const { fieldConfig, loader, submitHandler, redirectToForgotPassword, hideForgotPassword = true, hideRememberMe = true } = props;
    const [visiblePassword, setVisiblePassword] = useState<boolean>(false);
    const viewPasswordHandler = () => setVisiblePassword(!visiblePassword);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: IFormInputs) => submitHandler(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container sx={{ padding: '10%' }}>
                <Grid item xs={12} lg={12} pb={4}>
                    <TextField fullWidth id="email" label="Enter Email id*" variant="outlined" {...register('email')} {...fieldConfig} error={!!errors.email} helperText={errors.email?.message} />
                </Grid>
                <Grid item xs={12} lg={12} pb={1}>
                    <TextField
                        type={visiblePassword ? 'text' : 'password'}
                        fullWidth
                        id="email"
                        label="Enter password*"
                        variant="outlined"
                        {...register('password')}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton aria-label="toggle password visibility" onClick={viewPasswordHandler} edge="end">
                                        {visiblePassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                        {...fieldConfig}
                    />
                </Grid>
                <Grid container justifyContent={'space-between'}>
                    <Grid item xs={2} pb={4} sx={{ textAlign: 'left' }}>
                        {!!hideRememberMe && <FormControlLabel sx={{ color: '#7B7887', userSelect: 'none' }} control={<Checkbox />} label="Remember me" />}
                    </Grid>
                    <Grid item xs={8} sx={{ textAlign: 'right' }}>
                        {!!hideForgotPassword && (
                            <Button sx={{ textTransform: 'unset', boxShadow: 'none' }} onClick={() => redirectToForgotPassword()}>
                                <Typography sx={{ fontSize: '.9rem', color: '#1447F7' }}>Forgot password?</Typography>
                            </Button>
                        )}
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <LoadingButton type="submit" sx={{ height: '50px', textTransform: 'unset', boxShadow: 'none' }} loading={loader} fullWidth loadingPosition="start" variant="contained">
                        <Typography sx={{ fontSize: '1rem' }}>Sign in</Typography>
                    </LoadingButton>
                </Grid>
            </Grid>
        </form>
    );
};
