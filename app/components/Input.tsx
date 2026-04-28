

export default function Input() {
    return (
        <div className="w-full relative">
            <input type="text" placeholder="" className="px-4 py-3 w-full border border-neutral-300 rounded-xl peer outline-none focus:border-black transition  " />
            <label className="absolute top-3 left-4 text-sm text-neutral-500  transition-all  
             peer-placeholder-shown:top-3
             peer-placeholder-shown:text-base
             peer-focus:-top-2
             peer-focus:text-xs
             peer-focus:text-black
             bg-white px-1">
                Name
             </label>

        </div>
    )
}