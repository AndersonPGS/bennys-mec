import { Switch } from "@headlessui/react";

type SwitchComponentType = {
  hasItem: boolean;
  setHasItem: any;
  itemTitle: string;
  itemSubtitle: string;
}

export default function SwitchComponent({ hasItem, setHasItem, itemTitle, itemSubtitle }: SwitchComponentType) {
  return (
    <div className="bg-transparent focus:outline-none focus-visible:border-green-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-green-300 border border-gray-700 text-white shadow-md flex items-center justify-between py-2 my-2 px-3 rounded-lg">
      <h4 className="text-center text-white text-xl font-bold truncate overflow-hidden hover:text-clip">
        {itemTitle}
        <span className="text-center text-gray-400 text-lg font-light"> - {itemSubtitle}</span>
      </h4>
      <Switch
        checked={hasItem}
        onChange={setHasItem}
        className={`${hasItem ? 'bg-green-400' : 'bg-gray-700'}
          relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${hasItem ? 'translate-x-5' : 'translate-x-0'}
            pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  )
}