import { EyeIcon } from '@heroicons/react/24/outline';

const Field = ({ label, name, type, value, onChange, handleBlur, validations }) => {
    return (
        <div>
            <label className="block text-[12px] font-semibold leading-6 text-gray-500">
                {label}
            </label>
            <div className="mt-1 relative">
                <input
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    onBlur={handleBlur}
                    className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-700 shadow-sm ring-1 ring-inset ${validations ? "ring-red-600": 'ring-gray-300'} placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:outline-none sm:text-sm sm:leading-6 focus:ring-gray-500`}
                />
                {type === 'password' ?
                    <EyeIcon className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
                    : null
                }
            </div>
            {validations && <div className="text-[12px] text-red-600 mt-1">{validations}</div>}
        </div>
    )
}

export default Field