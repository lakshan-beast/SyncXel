// import React from "react";

// export default function FormField({
//   label,
//   name,
//   type = "text",
//   value,
//   onChange,
//   placeholder,
//   options,
//   required = false,
//   autoComplete,
// }) {
//   const sharedClasses =
//     "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-white/[0.1] dark:bg-[#111a27] dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-400";

//   return (
//     <div>
//       <label
//         htmlFor={name}
//         className="text-sm font-medium text-slate-700 dark:text-slate-300">
//         {label}
//         {required && <span className="ml-1 text-blue-500">*</span>}
//       </label>

//       {options ? (
//         <select
//           id={name}
//           name={name}
//           value={value}
//           onChange={onChange}
//           required={required}
//           className={sharedClasses}>
//           <option value="" disabled>
//             {placeholder}
//           </option>

//           {options.map((option) => (
//             <option key={option} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>
//       ) : (
//         <input
//           id={name}
//           name={name}
//           type={type}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//           required={required}
//           autoComplete={autoComplete}
//           className={sharedClasses}
//         />
//       )}
//     </div>
//   );
// }



import React from "react";

export default function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  options,
  required = false,
  autoComplete,
}) {
  const sharedClasses =
    "mt-2 w-full rounded-xl border border-white/[0.08] bg-[#080f1e] px-4 py-3.5 text-sm text-slate-200 outline-none transition-all placeholder:text-slate-600 hover:border-white/[0.14] focus:border-emerald-400/50 focus:ring-4 focus:ring-emerald-400/10";

  return (
    <div>
      <label
        htmlFor={name}
        className="text-sm font-semibold text-slate-300"
      >
        {label}

        {required && <span className="ml-1 text-emerald-400">*</span>}
      </label>

      {options ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`${sharedClasses} cursor-pointer`}
        >
          <option value="" disabled>
            {placeholder}
          </option>

          {options.map((option) => (
            <option key={option} value={option} className="bg-[#101a2c]">
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          autoComplete={autoComplete}
          className={sharedClasses}
        />
      )}
    </div>
  );
}
