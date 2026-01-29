import { Field, FieldLabel } from "@/components/ui/field"
import { Progress } from "@/components/ui/progress"

export function ProgressComponent() {
  return (
    <Field className="w-full max-[100%]">
      <FieldLabel htmlFor="progress-upload">
        <span>Question Progress</span>
        <span className="ml-auto">66%</span>
      </FieldLabel>
      <Progress value={66} id="progress-upload" />
    </Field>
  )
}
