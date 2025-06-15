import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
    Controller,
    type Control,
    type UseFormRegister,
} from "react-hook-form";

const FormColumn1 = ({
    register,
    control,
}: {
    register: UseFormRegister<FormFields>;
    control: Control<FormFields, unknown, FormFields>;
}) => {
    return (
        <div className="h-full flex flex-col justify-start items-start p-4 gap-8">
            <span className="w-full font-semibold text-center border-b border-b-gray-400">
                Loaders and ROM Stockpiles
            </span>
            <Controller
                name="loader"
                control={control}
                render={({ field }) => (
                    <RadioGroup
                        className="flex justify-evenly items-center"
                        value={field.value}
                        onValueChange={field.onChange}
                    >
                        <div className="flex items-center justify-start gap-2">
                            <RadioGroupItem value="OneLoader" id="OneLoader" />
                            <Label htmlFor="OneLoader">One Loader</Label>
                        </div>
                        <div className="flex items-center justify-start gap-2">
                            <RadioGroupItem value="TwoLoader" id="TwoLoader" />
                            <Label htmlFor="TwoLoader">Two Loader</Label>
                        </div>
                    </RadioGroup>
                )}
            />

            <Separator />
            <Select {...register("romStockpile")}>
                <SelectTrigger>
                    <SelectValue placeholder="Select Stockpiles" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="SP1">SP1</SelectItem>
                    <SelectItem value="SP2">SP2</SelectItem>
                    <SelectItem value="SP3">SP3</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
};

export default FormColumn1;
