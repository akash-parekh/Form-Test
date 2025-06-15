import { Input } from "@/components/ui/input";
import AdvancedConstraints from "./AdvancedColumns/AdvancedConstraints";
import { Label } from "@/components/ui/label";
import type { UseFormRegister } from "react-hook-form";
const FormColumn3 = ({
    register,
}: {
    register: UseFormRegister<FormFields>;
}) => {
    return (
        <div className="h-full flex flex-col justify-start items-start p-4 gap-8">
            <span className="w-full font-semibold text-center border-b border-b-gray-400">
                Remote Stockpile and Direct Feed
            </span>
            <div className="flex flex-col-reverse gap-2 ">
                <Input
                    placeholder="Example: 0.65"
                    id="lumpsFinesRatio"
                    {...register("lumpFinesRatio")}
                />
                <Label htmlFor="lumpsFinesRatio" className="font-light">
                    Lumps to Fines Ratio
                </Label>
            </div>
            <div className="flex flex-col-reverse gap-2 ">
                <Input
                    placeholder="Example: 0.65"
                    id="targetYield"
                    {...register("targetYield")}
                />
                <Label htmlFor="targetYield" className="font-light">
                    Target Yield
                </Label>
            </div>
            <AdvancedConstraints />
        </div>
    );
};

export default FormColumn3;
