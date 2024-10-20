import Link from 'next/link';
import { Form } from './components/form';
import {Button} from "@nextui-org/button";
import {NextUIProvider} from "@nextui-org/react";

export default function Login() {
  return (
    <NextUIProvider>
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <h3 className="text-xl font-semibold">Sign In to ZAP</h3>
        </div>
        <Form>
        <Button variant="bordered">
        Log In
       </Button>  
        </Form>
      </div>
   
    </div>
    </NextUIProvider>
  );
}