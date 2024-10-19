import Link from 'next/link';
import { Form } from './components/form';
import {LoginButton} from './components/loginButton'


export default function Login() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <h3 className="text-xl font-semibold">Sign In to ZAP</h3>
        </div>

       

          {/* <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
       

        <Form>
         <LoginButton> Log in </LoginButton>
        </Form>
      </div>
    </div>
  );
}