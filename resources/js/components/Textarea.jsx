import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldSet,
  } from "@/components/ui/field"
  import { Textarea } from "@/components/ui/textarea"

  export function FieldTextarea({...props}) {
    return (
      <FieldSet className="w-full ">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="feedback">Insert your question</FieldLabel>
            <Textarea
              id="feedback"
              placeholder="Question..."
              rows={4}
              onInput={props.onInput}
              name={props.name}
            />
          </Field>
        </FieldGroup>
      </FieldSet>
    )
  }
