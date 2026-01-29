import InputLabel from "@/components/InputLabel";
import Layout from "@/components/Layout";
import { RadioGroupComponent } from "@/components/RadioGroup";
import { FieldTextarea } from "@/components/Textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup } from "@/components/ui/radio-group";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import { Form, router, useForm } from "@inertiajs/react";


export default function AddQuestionPage(){
    const [option, setOption] = useState([]);
    const [form, setForm] = useState({
        question:"",
        option:""
    })

    const {data, setData, post, processing, errors, reset} = useForm({
        question: form.question,
        option: option
    })

    const handleForm = (e) => {
        const {name, value} = e.target
        setForm({...form, [name]:value})
    }

    const handleAddAnswer = (value) => {
        if(option.length < 4){
            setOption([...option, form.option])
        }
    }

    const handleDeleteAnswer = (e) => {
        e.stopPropagation();
        const id = e.currentTarget.getAttribute('id');
        setOption(option.filter((item, index) => index !== parseInt(id)))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formdata = new FormData;

        formdata.append("option", option);
        formdata.append("question", form.question);

        router.post("question.store", formdata)
    }

    const handleOnSuccess = () => {
        alert("Done submit")
    }

    const handleOnError = () => {
        alert("error wakaranai")
    }

    return(
        <Layout>
            <div className="mt-6  border border-gray-300 overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-6xl sm:rounded-lg">
                <Form onSubmit={handleSubmit} /* onSuccess={handleOnSuccess} onError={handleOnError} resetOnSuccess method="post" */>
                    {({errors}) => (
                        (errors[question] && <div>{errors[question]}</div>)
                        (errors[option] && <div>{errors[option]}</div>)
                    )}
                    <div className="mb-6">
                        <h2 className="font-bold text-xl">Add New Question</h2>
                    </div>
                    <div className="mb-6">
                        <FieldTextarea name='question' onInput={handleForm}></FieldTextarea>
                        {errors.question && <div>{error.question}</div>}
                    </div>
                    <div className="mb-6">
                        <InputLabel className="mb-4">Insert your list option</InputLabel>
                        <Input name='option' onInput={handleForm} />
                    </div>
                    <Button onClick={handleAddAnswer} type='button'>Add option</Button>
                    <div className="w-full my-6">
                        <p className="mb-4">All option</p>
                        <RadioGroup defaultValue="comfortable" className="w-full ">
                            {
                                option.length != 0 ?
                                option.map((item, index) =>
                                    <div className="flex items-center gap-3 border border-gray-300 w-full p-6 rounded-lg justify-between" key={index}>
                                        <div>
                                            <RadioGroupItem value="Dislike" id="r4" />
                                            <Label htmlFor="r4"> {item}</Label>
                                        </div>
                                        <div >
                                            <Trash2 className="cursor-pointer" id={index} onClick={handleDeleteAnswer}/>
                                        </div>
                                    </div>
                                )
                                :
                                <div className="flex items-center gap-3 border border-gray-300 w-full p-6 rounded-lg">
                                    <p>No List Option Yet</p>
                                </div>
                            }
                        </RadioGroup>
                    </div>
                    <div className='flex justify-end'>
                        <Button type='submit' disabled={processing}>Submit</Button>
                    </div>

                </Form>
            </div>
        </Layout>
    )
}
