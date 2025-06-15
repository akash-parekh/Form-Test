import FormColumn1 from "./FormColumn1/FormColumn1";
import FormColumn2 from "./FormColumn2/FormColumn2";
import FormColumn3 from "./FormColumn3/FormColumn3";
import { Button } from "@/components/ui/button";
import { useForm, type SubmitHandler } from "react-hook-form";

const Form = () => {
    const { register, handleSubmit, control } = useForm<FormFields>();
    const onSubmit: SubmitHandler<FormFields> = (data) => {
        console.log(data);
    };
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full gap-4 h-full"
        >
            <header className="flex justify-end">
                <Button type="submit">Submit</Button>
            </header>
            <div className="grid grid-cols-3 divide-x divide-gray-400 h-full">
                <FormColumn1 register={register} control={control} />
                <FormColumn2 register={register} />
                <FormColumn3 register={register} />
            </div>
        </form>
    );
};

export default Form;
