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
import { toast } from "sonner";


export default function EditQuestionPage({editedData}){
    const [option, setOption] = useState([]);
    const [error, setError] = useState("");

    const {data, setData, post, processing, errors, reset} = useForm({
        question: editedData?.question_text || '',
        optionInput: '',
        option: []
    })

    const handleForm = (e) => {
        const {name, value} = e.target;
        setData({...data, [name]:value});
    }

    const handleAddAnswer = () => {
        if(data.option.length < 4 && data.optionInput.length != 0){
            setData((prev) => ({...prev, option: [...prev.option, data.optionInput]}));
        }
        else{
            setError("You must input character!");
            setTimeout(() => {
                setError("");
            },[1000])
        }
    }

    const handleDeleteAnswer = (e) => {
        e.stopPropagation();
        const id = e.currentTarget.getAttribute('id');
        setData({option: data.option.filter((item, index) => index !== parseInt(id))})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formdata = new FormData;

        formdata.append("option", option);
        formdata.append("question", form.question);

        post(route("question.update"), {
            onSuccess: () => {
                toast.success("Data sucessfully added", {
                    position: "top-center",
                });
                reset();
            },
            onError: (e) => {
                toast.error(`${e.question}`, {
                    position: "top-center",
                    description: e.option,
                    style: {borderColor:'#909090', color: 'black'},
                    descriptionClassName: 'text-black'

                });
            }
        })
    }

    useEffect(() => {
        console.log(editedData)
    }, [editedData])

    useEffect(() => {
        if(editedData){
            setData((prev) => ({...prev, question: editedData.question_text}));
            editedData.options.map((item) => {
                setData((prev) => ({...prev, option: [...prev.option, item.option_text]}));
            })
        }
    }, [editedData])

    useEffect(() => {
        console.log(data)
    })

    return(
        <Layout>
            <div className="mt-6  border border-gray-300 overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-6xl sm:rounded-lg">
                <form onSubmit={handleSubmit}/* onSuccess={handleOnSuccess} onError={handleOnError} resetOnSuccess method="post" */>

                    {({errors}) => (
                        (errors[question] && <div>{errors[question]}</div>)
                        (errors[option] && <div>{errors[option]}</div>)
                    )}
                    <div className="mb-6">
                        <h2 className="font-bold text-xl">Add New Question</h2>
                    </div>
                    <div className="mb-6">
                        <FieldTextarea name='question' onInput={handleForm} value={data.question}></FieldTextarea>
                        {errors.question && <div>{error.question}</div>}
                    </div>
                    <div className="mb-6">
                        <InputLabel className="mb-4">Insert your list option</InputLabel>
                        <Input name='optionInput' onInput={handleForm} />
                    </div>
                    <Button onClick={handleAddAnswer} type='button'>{error ? error : "Add Option"}</Button>
                    <div className="w-full my-6">
                        <p className="mb-4">All option</p>
                        <RadioGroup defaultValue="comfortable" className="w-full ">
                            {
                                data.option.length != 0 ?
                                data.option.map((item, index) =>
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
                        <Button type='submit' >Submit</Button>
                    </div>

                </form>
            </div>
        </Layout>
    )
}
