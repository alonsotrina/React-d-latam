import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const Field = ({ label, name, type, icon, value, onChange, handleBlur, validations, handleClick, showPassword }) => {
    return (
        <div>
            <label className={`block text-[12px] font-semibold leading-6 text-gray-500 capitalize after:content-['*'] after:ml-0.5 after:text-danger after:text-lg`}>
                {label}
            </label>
            <div className="mt-1 relative">
                <input
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    onBlur={handleBlur}
                    className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-700 shadow-sm ring-1 ring-inset ${validations ? "ring-danger" : 'ring-dark-300'} placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:outline-none sm:text-sm sm:leading-6 focus:ring-gray-500`}
                />
                {icon && (
                    showPassword ? (
                        <EyeIcon
                            onClick={handleClick}
                            className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2"
                        />
                    ) : (
                        <EyeSlashIcon
                            onClick={handleClick}
                            className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2"
                        />
                    )
                )}
            </div>
            {validations && <div className="text-[12px] text-danger font-semibold mt-1">{validations}</div>}
        </div>
    )
}

export default Field