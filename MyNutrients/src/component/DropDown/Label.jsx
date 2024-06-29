export const Label = ({name,placeholder}) => {
    return (
        <div className="mb-1 ">
            <label className="block mb-2 text-base font-normal text-gray-900" placeholder={placeholder}>{name}</label>
        </div>
    )
}