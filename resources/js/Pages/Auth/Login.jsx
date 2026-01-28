import Checkbox from "@/components/Checkbox";
import InputError from "@/components/InputError";
import InputLabel from "@/components/InputLabel";
import PrimaryButton from "@/components/PrimaryButton";
import TextInput from "@/components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import GoogleButton from "@/components/ui/ButtonGoogle";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Login to your account" />

            {/* Wrapper Form, meniru lebar pada desain */}
            <div className="mx-auto w-full max-w-sm">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-xl font-bold tracking-tight text-gray-900">
                        Login to your account
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Enter your email below to login to your account
                    </p>
                </div>

                {/* Pesan Status */}
                {status && (
                    <div className="mb-4 text-sm font-medium text-green-600">
                        {status}
                    </div>
                )}

                <form onSubmit={submit} className="space-y-4">
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
                            isFocused={true}
                            placeholder="m@example.com"
                            onChange={(e) => setData("email", e.target.value)}
                        />
                        <InputError
                            message={errors.email}
                            className="mt-1 text-sm text-red-500"
                        />
                    </div>

                    {/* Field Password & Forgot Password */}
                    <div className="grid gap-1.5">
                        <div className="flex items-center justify-between">
                            <InputLabel
                                htmlFor="password"
                                value="Password"
                                className="text-sm font-medium text-gray-700"
                            />
                            {canResetPassword && (
                                <Link
                                    href={route("password.request")}
                                    // Style link tanpa underline dan warna tegas
                                    className="text-sm font-medium text-gray-500 hover:text-gray-700"
                                >
                                    Forgot your password?
                                </Link>
                            )}
                        </div>

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            // Style Input Minimalis: Border abu-abu tipis
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:border-black focus:ring-0"
                            autoComplete="current-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />
                        <InputError
                            message={errors.password}
                            className="mt-1 text-sm text-red-500"
                        />
                    </div>

                    {/* Tombol Login Utama (Dark Style) */}
                    <PrimaryButton
                        className="w-full h-10 rounded-md bg-gray-900 text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 disabled:opacity-50 flex items-center justify-center"
                        disabled={processing}
                    >
                        Login
                    </PrimaryButton>
                </form>

                {/* Separator OR */}
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

                {/* Tombol Login with GitHub */}
                <GoogleButton className="mt-6">Login with Google</GoogleButton>

                {/* Link Don't have an account */}
                <p className="mt-8 text-center text-sm text-gray-500">
                    Don't have an account?{" "}
                    <Link
                        href={route("register")}
                        className="font-medium text-gray-900 hover:underline"
                    >
                        Sign up
                    </Link>
                </p>

                {/* Catatan: Checkbox "Remember Me" tidak ada di desain yang Anda berikan, jadi saya menghapusnya untuk kesederhanaan. */}
            </div>
        </GuestLayout>
    );
}
