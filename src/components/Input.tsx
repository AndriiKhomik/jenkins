import { FC } from "react";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";
import { cn } from "../utils";

interface InputProps {
  label?: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
}

const Input: FC<InputProps> = ({
  id,
  register,
  disabled,
  label,
  required,
  type = "text",
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          type={type}
          id={id}
          autoComplete={id}
          disabled={disabled}
          {...register(id, { required })}
          className={cn(
            "bg-gray-50 border border-black text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          )}
        />
      </div>
    </div>
  );
};

export default Input;
