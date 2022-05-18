import React, { useRef } from 'react';
import auth from '../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let signInError;
    const emailRef = useRef('');

    const { register, formState: { errors }, handleSubmit } = useForm();

    if (gUser || user) {
        navigate(from, { replace: true });
    }

    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }
    if (loading || gLoading || sending) {
        return <Loading></Loading>
    }
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    };

    return (
        <div className='flex h-screen justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-3xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" ref={emailRef}
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[A-Za-z]{3}/,
                                        message: 'Provide a valid email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}

                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}

                            </label>
                        </div>

                        {signInError}


                        <input type="submit" className='w-full max-w-xs btn btn-accent' value='Login' />
                    </form>
                    <button className='text-red-500 mb-3 text-left'
                        onClick={async () => {
                            await sendPasswordResetEmail(user?.email);
                            alert('Sent email');
                        }}
                    >
                        Reset password
                    </button>
                    <p><small>New to Doctors Portal <Link className='text-primary' to='/signup'>Create an Account</Link></small></p>
                    <div class="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} class="btn btn-outline btn-accent">Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;