import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";

// Komponen Placeholder untuk Tombol Google (Sign Up)
const GoogleButton = ({ children, className = "", ...props }) => {
    // Tombol Google menggunakan gaya 'outline' atau 'secondary' pada shadcn
    return (
        <button
            {...props}
            className={`
                flex w-full items-center justify-center space-x-2 
                rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium 
                shadow-sm transition-colors hover:bg-gray-50 
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 
                disabled:pointer-events-none disabled:opacity-50 text-gray-800
                ${className}
            `}
        >
            {/* Ikon Google (SVG Sederhana) */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                className="w-4 h-4"
                width="100"
                height="100"
                viewBox="0 0 48 48"
            >
                <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
            </svg>
            <span>{children}</span>
        </button>
    );
};

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            {/* Wrapper Form, meniru lebar pada desain login */}
            <div className="mx-auto w-full max-w-sm">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-xl font-bold tracking-tight text-gray-900">
                        Create an account
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Enter your details below to create your account
                    </p>
                </div>

                <form onSubmit={submit} className="space-y-4">
                    {/* Field Name */}
                    <div className="grid gap-1.5">
                        <InputLabel
                            htmlFor="name"
                            value="Name"
                            className="text-sm font-medium text-gray-700"
                        />
                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            // Style Input Minimalis: Border abu-abu tipis
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:border-black focus:ring-0"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData("name", e.target.value)}
                            required
                        />
                        <InputError
                            message={errors.name}
                            className="mt-1 text-sm text-red-500"
                        />
                    </div>

                    {/* Field Email */}
                    <div className="grid gap-1.5">
                        <InputLabel
                            htmlFor="email"
                            value="Email"
                            className="text-sm font-medium text-gray-700"
                        />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            // Style Input Minimalis: Border abu-abu tipis
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:border-black focus:ring-0"
                            autoComplete="username"
                            onChange={(e) => setData("email", e.target.value)}
                            required
                        />
                        <InputError
                            message={errors.email}
                            className="mt-1 text-sm text-red-500"
                        />
                    </div>

                    {/* Field Password */}
                    <div className="grid gap-1.5">
                        <InputLabel
                            htmlFor="password"
                            value="Password"
                            className="text-sm font-medium text-gray-700"
                        />
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            // Style Input Minimalis: Border abu-abu tipis
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:border-black focus:ring-0"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            required
                        />
                        <InputError
                            message={errors.password}
                            className="mt-1 text-sm text-red-500"
                        />
                    </div>

                    {/* Field Confirm Password */}
                    <div className="grid gap-1.5">
                        <InputLabel
                            htmlFor="password_confirmation"
                            value="Confirm Password"
                            className="text-sm font-medium text-gray-700"
                        />
                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            // Style Input Minimalis: Border abu-abu tipis
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:border-black focus:ring-0"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                            required
                        />
                        <InputError
                            message={errors.password_confirmation}
                            className="mt-1 text-sm text-red-500"
                        />
                    </div>

                    {/* Tombol Register Utama (Dark Style) */}
                    <PrimaryButton
                        className="w-full h-10 rounded-md bg-gray-900 text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 disabled:opacity-50 flex items-center justify-center"
                        disabled={processing}
                    >
                        Register
                    </PrimaryButton>
                </form>

                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-gray-300"></span>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-gray-500">
                            Or continue with
                        </span>
                    </div>
                </div>

                {/* Tombol Sign Up with Google */}
                <GoogleButton
                    onClick={() => console.log("Sign Up with Google clicked")}
                    type="button"
                    className="mb-4"
                >
                    Sign up with Google
                </GoogleButton>

                {/* Separator OR */}

                {/* Link Already registered? (Pindah ke bawah seperti desain login) */}
                <p className="mt-8 text-center text-sm text-gray-500">
                    Already have an account?{" "}
                    <Link
                        href={route("login")}
                        className="font-medium text-gray-900 hover:underline"
                    >
                        Sign in
                    </Link>
                </p>
            </div>
        </GuestLayout>
    );
}
