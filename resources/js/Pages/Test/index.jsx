import Checkbox from "@/components/Checkbox";
import { ProgressComponent } from "@/components/Progress";
import { RadioGroupComponent } from "@/components/RadioGroup";
import { Button } from "@/components/ui/button";
import { RadioGroup } from "@/components/ui/radio-group";
import MainLayout from "@/Layouts/MainLayout";

const TEXT_SIZE = 'text-xl'

export default function TestPage(){
    return(
        <MainLayout>
            <div className="min-h-64">
                <div className="my-6">
                    <ProgressComponent />
                </div>
                <div className="mb-6">
                    <h1 className={`font-bold ${TEXT_SIZE}`}>Question 1</h1>
                </div>

                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita quibusdam nemo velit aspernatur, officiis debitis deserunt assumenda sint cum aperiam illum nam molestiae aut modi corporis, porro ad, nisi impedit!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint neque voluptatibus quis ratione quae, cupiditate autem reprehenderit nostrum odit hic illo nulla aspernatur non perspiciatis aperiam reiciendis error omnis perferendis?
                </p>
            </div>
            <div className="mb-8">
                <div className="mb-6">
                    <h2 className={`font-bold ${TEXT_SIZE}`}>Answer</h2>
                </div>

                <RadioGroupComponent />
            </div>
            <div className="flex justify-between">
                <Button>Previous</Button>
                <Button>Next</Button>
            </div>
        </MainLayout>
    )
}
