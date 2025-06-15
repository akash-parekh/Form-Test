import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import type { UseFormRegister } from "react-hook-form";

const FormColumn2 = ({
    register,
}: {
    register: UseFormRegister<FormFields>;
}) => {
    return (
        <div className="h-full flex flex-col justify-start items-start p-4 gap-8">
            <span className="w-full font-semibold text-center border-b border-b-gray-400">
                Remote Stockpile and Direct Feed
            </span>
            <Select {...register("remoteStockpile")}>
                <SelectTrigger>
                    <SelectValue placeholder="Select Remote Stockpiles" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="SP1">SP1</SelectItem>
                    <SelectItem value="SP2">SP2</SelectItem>
                    <SelectItem value="SP3">SP3</SelectItem>
                </SelectContent>
            </Select>
            <Select {...register("directFeed")}>
                <SelectTrigger>
                    <SelectValue placeholder="Select Direct Feed" />
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

export default FormColumn2;
