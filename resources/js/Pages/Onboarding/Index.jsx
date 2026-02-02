import { Head, useForm } from "@inertiajs/react";
import PrimaryButton from "@/components/PrimaryButton";

export default function Index() {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();
        post(route("onboarding.complete"));
    };

    return (
        <div className="min-h-screen bg-gray-50 px-6 py-10">
           <h1>Tes</h1>

            <div className="mx-auto w-full max-w-3xl rounded-xl bg-white p-8 shadow">
                

                <form onSubmit={submit} className="mt-8">
                    <PrimaryButton disabled={processing}>
                        Lanjutkan ke dashboard
                    </PrimaryButton>
                </form>
            </div>
        </div>
    );
}
