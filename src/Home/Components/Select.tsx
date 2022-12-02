import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useEffect, useState } from "react";

type SelectProps = {
  data: { name: string }[],
  value: { name: string },
  priceFullTuning: number,
  setValue: (value: any) => void
}

export default function Select({ data, value, setValue, priceFullTuning }: SelectProps) {

  const [isFullTuning, setIsFullTuning] = useState(false)

  const dataFullTuningTypes = [
    { name: "Sem Full Tuning" },
    { name: "LV3 - Sem Blindagem" },
    { name: "LV3 - Com Blindagem" },
    { name: "LV4 - Sem Blindagem" },
    { name: "LV4 - Com Blindagem" }
  ]

  useEffect(() => {
    if (data[0].name != dataFullTuningTypes[0].name && priceFullTuning != 0) {
      if (isFullTuning == false) {
        setIsFullTuning(!isFullTuning)
      }
    } else {
      if (isFullTuning == true)
        setIsFullTuning(!isFullTuning)
    }
  }, [priceFullTuning]);

  return (
    <Listbox value={value} onChange={setValue} disabled={isFullTuning}>
      <div className="relative mt-1">
        <Listbox.Button className={({ disabled }) =>
          ` border border-gray-700 w-full rounded-md py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-green-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-green-300 sm:text-sm ${disabled ? 'bg-gray-800 text-gray-500' : 'text-white'
          } `
        }>
          <span className="block truncate ">{value.name}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="bg-transparent border border-gray-700 text-white bg-black absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {data.map((types, typesIdx) => (
              <Listbox.Option
                key={typesIdx}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-green-100 text-green-900' : 'text-white'
                  } `
                }
                value={types}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                        }`}
                    >
                      {types.name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}