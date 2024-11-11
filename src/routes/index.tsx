import { $, component$ } from "@builder.io/qwik";
import { server$ } from "@builder.io/qwik-city";
import { formAction$, useForm, valiForm$ } from "@modular-forms/qwik";
import type { InferInput } from "valibot";
import { pipe, any, object } from "valibot";
import { x } from "~/server/mysql.server";

const FieldSchema = object({
  name: pipe(any(), any()),
});
type NewFieldForm = InferInput<typeof FieldSchema>;

const xx = server$(async (data: any) => {
  await x();
});

export const useFormAction = formAction$<NewFieldForm>(
  $(async (values, {  }) => {
    // await x(); // THIS LINE BUNDLED pg INTO THE BUILD, but why?
    await xx({});
  }),
  valiForm$(FieldSchema),
);

export default component$(() => {
  const action = useFormAction();

  const [, { Form }] = useForm<NewFieldForm>({
    loader: {
      value: {},
    },
    action,
    validate: valiForm$(FieldSchema),
  });

  return <Form class="flex flex-col space-y-4"></Form>;
});
