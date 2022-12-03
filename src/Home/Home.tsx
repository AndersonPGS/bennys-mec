import { Switch } from "@headlessui/react";
import copy from "copy-to-clipboard";
import { useEffect, useState } from "react";
import Select from "./Components/Select";
import SwitchComponent from "./Components/Switch";

export default function Home() {
  const [selledKits, setSelledKits] = useState(0)
  const [selledPneus, setSelledPneus] = useState(0)

  const [isPartner, setIsPartner] = useState(false)
  const [countKits, setCountKits] = useState(0)
  const [countPneus, setCountPneus] = useState(0)

  const dataFullTuningTypes = [
    { name: "Sem Full Tuning" },
    { name: "LV4 - Sem Blindagem" },
    { name: "LV4 - Com Blindagem" }
  ]

  const dataDefaultTypes = [
    { name: "Nível 0" },
    { name: "Nível 1" },
    { name: "Nível 2" },
    { name: "Nível 3" },
    { name: "Nível 4" }
  ]

  const dataShieldTypes = [
    { name: "Nível 0" },
    { name: "Nível 1" },
    { name: "Nível 2" },
    { name: "Nível 3" },
    { name: "Nível 4" },
    { name: "Nível 5" }
  ]

  const dataTurboTypes = [
    { name: "Não" },
    { name: "Sim" }
  ]
  const [valueFullTuning, setValueFullTuning] = useState(dataFullTuningTypes[0])
  const [valueTransmission, setValueTransmission] = useState(dataDefaultTypes[0])
  const [valueSuspension, setValueSuspension] = useState(dataDefaultTypes[0])
  const [valueEngine, setValueEngine] = useState(dataDefaultTypes[0])
  const [valueBrake, setValueBrake] = useState(dataDefaultTypes[0])
  const [valueShield, setValueShield] = useState(dataShieldTypes[0])
  const [valueTurbo, setValueTurbo] = useState(dataTurboTypes[0])

  const [priceFullTuning, setPriceFullTuning] = useState(0)
  const [priceTransmission, setPriceTransmission] = useState(0)
  const [priceSuspension, setPriceSuspension] = useState(0)
  const [priceEngine, setPriceEngine] = useState(0)
  const [priceBrake, setPriceBrake] = useState(0)
  const [priceShield, setPriceShield] = useState(0)
  const [priceTurbo, setPriceTurbo] = useState(0)

  const [hasSpoiler, setHasSpoiler] = useState(false)
  const [hasFrontBumper, setHasFrontBumper] = useState(false)
  const [hasRearBumper, setHasRearBumper] = useState(false)
  const [hasSideSkirt, setHasSideSkirt] = useState(false)
  const [hasExhaust, setHasExhaust] = useState(false)
  const [hasRollcage, setHasRollcage] = useState(false)
  const [hasRoof, setHasRoof] = useState(false)
  const [hasHood, setHasHood] = useState(false)
  const [hasWindowTint, setHasWindowTint] = useState(false)
  const [hasNeons, setHasNeons] = useState(false)
  const [hasXenon, setHasXenon] = useState(false)
  const [hasWheels, setHasWheels] = useState(false)
  const [hasPlateIndex, setHasPlateIndex] = useState(false)
  const [hasColorPrimary, setHasColorPrimary] = useState(false)
  const [hasColorSecondary, setHasColorSecondary] = useState(false)
  const [hasColorPearlescent, setHasColorPearlescent] = useState(false)
  const [hasColorWheels, setHasColorWheels] = useState(false)
  const [hasColorInterior, setHasColorInterior] = useState(false)
  const [hasColorDashboard, setHasColorDashboard] = useState(false)

  const [totalPrice, setTotalPrice] = useState(0)

  const date = new Date()

  const resetData = () => {
    localStorage.setItem("date", date.getDate().toString())
    localStorage.setItem("kits", "0")
    localStorage.setItem("pneus", "0")
    setSelledKits(0)
    setSelledPneus(0)
  }

  const storeDate = (value: string) => {
    console.log(value)
    localStorage.setItem("date", value)
  }

  const getStoredDate = () => {
    const value = localStorage.getItem("date")

    if (value !== null) {
      return value
    } else {
      const todayDate = date.getDate().toString()
      localStorage.setItem("date", todayDate)
      return todayDate
    }
  }

  const storeKits = (value: string) => {
    localStorage.setItem("kits", value)
  }

  const getStoredKits = async () => {
    const value = localStorage.getItem("kits")

    if (value !== null) {
      setSelledKits(+value)
    } else {
      setSelledKits(0)
    }
  }

  const storePneus = (value: string) => {
    localStorage.setItem("pneus", value)
  }

  const getStoredPneus = async () => {
    const value = localStorage.getItem("pneus")

    if (value !== null) {
      setSelledPneus(+value)
    } else {
      setSelledPneus(0)
    }
  }

  useEffect(() => {
    const currentDate = date.getDate().toString()
    const storedDate = getStoredDate()
    function checkStored() {
      if (storedDate == currentDate) {
        console.log("aqui")
        console.log(storedDate)
        console.log(currentDate)
        getStoredKits()
        getStoredPneus()
      } else {
        storeDate(currentDate)
        storeKits("0")
        storePneus("0")
        setSelledKits(0)
        setSelledPneus(0)
      }
    }
    checkStored()
  }, [])

  useEffect(() => {
    let costPerKit = isPartner ? 2000 : 3000
    let costPerPneu = isPartner ? 500 : 1000

    let costKits = costPerKit * countKits
    let costPneus = costPerPneu * countPneus

    let totalCost = costKits + costPneus

    if (priceFullTuning != 0) {
      totalCost += priceFullTuning
    } else {
      totalCost += priceTransmission + priceSuspension + priceEngine + priceBrake + priceShield + priceTurbo
    }

    if (hasSpoiler) {
      totalCost += 4000
    }

    if (hasFrontBumper) {
      totalCost += 4000
    }

    if (hasRearBumper) {
      totalCost += 4000
    }

    if (hasSideSkirt) {
      totalCost += 4000
    }

    if (hasExhaust) {
      totalCost += 4000
    }

    if (hasRollcage) {
      totalCost += 4000
    }

    if (hasRoof) {
      totalCost += 4000
    }

    if (hasHood) {
      totalCost += 4000
    }

    if (hasWindowTint) {
      totalCost += 4000
    }

    if (hasNeons) {
      totalCost += 4000
    }

    if (hasXenon) {
      totalCost += 4000
    }

    if (hasWheels) {
      totalCost += 10000
    }

    if (hasPlateIndex) {
      totalCost += 4000
    }

    if (hasColorPrimary) {
      totalCost += 4000
    }

    if (hasColorSecondary) {
      totalCost += 4000
    }

    if (hasColorPearlescent) {
      totalCost += 4000
    }

    if (hasColorWheels) {
      totalCost += 4000
    }

    if (hasColorInterior) {
      totalCost += 4000
    }

    if (hasColorDashboard) {
      totalCost += 4000
    }

    setTotalPrice(totalCost)
  },
    [
      countKits,
      countPneus,
      isPartner,
      priceFullTuning,
      priceTransmission,
      priceSuspension,
      priceEngine,
      priceBrake,
      priceShield,
      priceTurbo,
      hasSpoiler,
      hasFrontBumper,
      hasRearBumper,
      hasSideSkirt,
      hasExhaust,
      hasRollcage,
      hasRoof,
      hasHood,
      hasWindowTint,
      hasNeons,
      hasXenon,
      hasWheels,
      hasPlateIndex,
      hasColorPrimary,
      hasColorSecondary,
      hasColorPearlescent,
      hasColorWheels,
      hasColorInterior,
      hasColorDashboard
    ]
  )

  useEffect(() => {
    switch (valueFullTuning.name) {
      case "Sem Full Tuning":
        //Sem Full Tuning
        setPriceFullTuning(0)
        break;
      case "LV4 - Sem Blindagem":
        //Level 4 - Sem Blindagem
        setPriceFullTuning(170000)

        //Set all selection default
        setPriceTransmission(0)
        setValueTransmission(dataDefaultTypes[0])
        setPriceSuspension(0)
        setValueSuspension(dataDefaultTypes[0])
        setPriceEngine(0)
        setValueEngine(dataDefaultTypes[0])
        setPriceBrake(0)
        setValueBrake(dataDefaultTypes[0])
        setPriceShield(0)
        setValueShield(dataShieldTypes[0])
        setPriceTurbo(0)
        setValueTurbo(dataTurboTypes[0])
        break;
      case "LV4 - Com Blindagem":
        //Level 4 - Com Blindagem
        setPriceFullTuning(260000)

        //Set all selection default
        setPriceTransmission(0)
        setValueTransmission(dataDefaultTypes[0])
        setPriceSuspension(0)
        setValueSuspension(dataDefaultTypes[0])
        setPriceEngine(0)
        setValueEngine(dataDefaultTypes[0])
        setPriceBrake(0)
        setValueBrake(dataDefaultTypes[0])
        setPriceShield(0)
        setValueShield(dataShieldTypes[0])
        setPriceTurbo(0)
        setValueTurbo(dataTurboTypes[0])
    }
  }, [valueFullTuning])

  useEffect(() => {
    switch (valueTransmission.name) {
      case "Nível 0":
        //Level 0
        setPriceTransmission(0)
        break;
      case "Nível 1":
        //Level 1
        setPriceTransmission(16000)
        break;
      case "Nível 2":
        //Level 2
        setPriceTransmission(22000)
        break;
      case "Nível 3":
        //Level 3
        setPriceTransmission(29000)
        break;
      case "Nível 4":
        //Level 4
        setPriceTransmission(38000)
    }
  }, [valueTransmission])

  useEffect(() => {
    switch (valueSuspension.name) {
      case "Nível 0":
        //Level 0
        setPriceSuspension(0)
        break;
      case "Nível 1":
        //Level 1
        setPriceSuspension(16000)
        break;
      case "Nível 2":
        //Level 2
        setPriceSuspension(22000)
        break;
      case "Nível 3":
        //Level 3
        setPriceSuspension(29000)
        break;
      case "Nível 4":
        //Level 4
        setPriceSuspension(38000)
    }
  }, [valueSuspension])

  useEffect(() => {
    switch (valueEngine.name) {
      case "Nível 0":
        //Level 0
        setPriceEngine(0)
        break;
      case "Nível 1":
        //Level 1
        setPriceEngine(16000)
        break;
      case "Nível 2":
        //Level 2
        setPriceEngine(22000)
        break;
      case "Nível 3":
        //Level 3
        setPriceEngine(29000)
        break;
      case "Nível 4":
        //Level 4
        setPriceEngine(40000)
    }
  }, [valueEngine])

  useEffect(() => {
    switch (valueBrake.name) {
      case "Nível 0":
        //Level 0
        setPriceBrake(0)
        break;
      case "Nível 1":
        //Level 1
        setPriceBrake(16000)
        break;
      case "Nível 2":
        //Level 2
        setPriceBrake(22000)
        break;
      case "Nível 3":
        //Level 3
        setPriceBrake(29000)
        break;
      case "Nível 4":
        //Level 4
        setPriceBrake(39000)
    }
  }, [valueBrake])

  useEffect(() => {
    switch (valueShield.name) {
      case "Nível 0":
        //Level 0
        setPriceShield(0)
        break;
      case "Nível 1":
        //Level 1
        setPriceShield(29000)
        break;
      case "Nível 2":
        //Level 2
        setPriceShield(44000)
        break;
      case "Nível 3":
        //Level 3
        setPriceShield(59000)
        break;
      case "Nível 4":
        //Level 4
        setPriceShield(74000)
      case "Nível 5":
        //Level 5
        setPriceShield(90000)
    }
  }, [valueShield])

  useEffect(() => {
    switch (valueTurbo.name) {
      case "Não":
        //Sem Turbo
        setPriceTurbo(0)
        break;
      case "Sim":
        //Com Turbo
        setPriceTurbo(15000)
        break;
    }
  }, [valueTurbo])

  useEffect(() => {
    if (selledKits > 0) {
      storeKits(selledKits.toString())
    }
    if (selledPneus > 0) {
      storePneus(selledPneus.toString())
    }
  }, [selledKits, selledPneus])

  function onFinished() {
    setSelledKits((selledKits) => selledKits + countKits)
    setSelledPneus((selledPneus) => selledPneus + countPneus)

    setIsPartner(false)
    setCountKits(0)
    setCountPneus(0)

    setValueFullTuning(dataFullTuningTypes[0])
    setValueTransmission(dataDefaultTypes[0])
    setValueSuspension(dataDefaultTypes[0])
    setValueEngine(dataDefaultTypes[0])
    setValueBrake(dataDefaultTypes[0])
    setValueShield(dataShieldTypes[0])
    setValueTurbo(dataTurboTypes[0])

    setPriceFullTuning(0)
    setPriceTransmission(0)
    setPriceSuspension(0)
    setPriceEngine(0)
    setPriceBrake(0)
    setPriceShield(0)
    setPriceTurbo(0)

    setHasSpoiler(false)
    setHasFrontBumper(false)
    setHasRearBumper(false)
    setHasSideSkirt(false)
    setHasExhaust(false)
    setHasRollcage(false)
    setHasRoof(false)
    setHasHood(false)
    setHasWindowTint(false)
    setHasNeons(false)
    setHasXenon(false)
    setHasWheels(false)
    setHasPlateIndex(false)
    setHasColorPrimary(false)
    setHasColorSecondary(false)
    setHasColorPearlescent(false)
    setHasColorWheels(false)
    setHasColorInterior(false)
    setHasColorDashboard(false)
  }

  function decreaseKits() {
    if (countKits > 0) {
      setCountKits((countKits) => countKits - 1)
    }
  }

  function increaseKits() {
    setCountKits((countKits) => countKits + 1)
  }

  function decreasePneus() {
    if (countPneus > 0) {
      setCountPneus((countPneus) => countPneus - 1)
    }
  }

  function increasePneus() {
    setCountPneus((countPneus) => countPneus + 1)
  }

  return (

    <div className="w-full h-screen">
      <div className="w-full lg:grid lg:grid-cols-3 lg:gap-7  flex-row justify-center align-center rounded-2xl">

        {/* SELLEDS */}
        <div className="lg:sticky " >
          {/* TOTAL KITS AND PNEUS SELLED */}
          <div className="relative bg-transparent border border-gray-700 text-white shadow-md flex-row w-full lg:mt-7 p-5 rounded-2xl">
            <button onClick={resetData} className="absolute right-6 top-7 lg:right-7 lg:top-7"><svg className="w-6 h-6 stroke-slate-400 transition-colors hover:stroke-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
            </button>
            <h1 className="w-full text-center text-gray-400 md:text-3xl text-2xl font-bold">VENDIDOS HOJE</h1>
            <div className="flex justify-evenly align-center" >
              <div className="m-4">
                <h2 className="w-full text-center text-white text-8xl font-bold">{selledKits}</h2>
                <h3 className="w-full text-center text-gray-400 text-lg">KITS</h3>
              </div>
              <div className="m-4">
                <h2 className="w-full text-center text-white text-8xl font-bold">{selledPneus}</h2>
                <h3 className="w-full text-center text-gray-400 text-lg">PNEUS</h3>
              </div>
            </div>
          </div>

          {/* KITS AND PNEUS TO SELL */}
          <h1 className="mt-7 mb-2 w-full text-center flex items-center justify-center text-gray-400 md:text-3xl text-2xl font-bold"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.9" stroke="currentColor" className="w-6 h-6 md:w-7 md:h-7 mr-3 -mt-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
            KITS & PNEUS
          </h1>
          <div className="flex w-full justify-between mb-4">
            <div className=" bg-transparent border h-48 border-gray-700 text-white shadow-md flex-row justify-center items-center mr-2 py-4 w-2/4 rounded-2xl relative overflow-hidden">
              <h3 className="text-2xl font-light text-gray-400 text-center w-full">KIT</h3>
              <h2 className="text-7xl text-white text-center w-full font-bold">{countKits}</h2>
              <div className="flex justify-evenly">
                <button className="focus:outline-none flex items-center justify-center  transition-colors hover:border-red-600 hover:bg-red-500 focus-visible:border-green-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-green-300 h-12 border-t border-r rounded-tr-lg border-gray-700  shadow-md  text-3xl font-bold  absolute bottom-0 left-0 w-1/2" onClick={decreaseKits}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                  </svg>
                </button>
                <button className="focus:outline-none flex items-center justify-center  transition-colors hover:border-green-600 hover:bg-green-500 focus-visible:border-green-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-green-300 h-12 border-t border-l rounded-tl-lg border-gray-700  text-3xl font-bold  absolute bottom-0 right-0 w-1/2" onClick={increaseKits}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </button>
              </div>
            </div>

            <div className=" bg-transparent border h-48 border-gray-700 text-white shadow-md flex-row justify-center items-center mr-2 py-4 w-2/4 rounded-2xl relative overflow-hidden">
              <h3 className="text-2xl font-light text-gray-400 text-center w-full">PNEU</h3>
              <h2 className="text-7xl text-white text-center w-full font-bold">{countPneus}</h2>
              <div className="flex justify-evenly">
                <button className="focus:outline-none flex items-center justify-center  transition-colors hover:border-red-600 hover:bg-red-500 focus-visible:border-green-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-green-300 h-12 border-t border-r rounded-tr-lg border-gray-700  shadow-md  text-3xl font-bold  absolute bottom-0 left-0 w-1/2" onClick={decreasePneus}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                  </svg>
                </button>
                <button className="focus:outline-none flex items-center justify-center transition-colors hover:border-green-600 hover:bg-green-500 focus-visible:border-green-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-green-300 h-12 border-t border-l rounded-tl-lg border-gray-700  text-3xl font-bold  absolute bottom-0 right-0 w-1/2" onClick={increasePneus}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="flex w-full p-2 items-center justify-between bg-transparent border rounded-lg border-gray-700 shadow-md">
            <h4 className="text-center text-white text-xl flex items-center font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              Parceria
            </h4>
            <Switch
              checked={isPartner}
              onChange={setIsPartner}
              className={`${isPartner ? 'bg-green-400' : 'bg-gray-700'}
          relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={`${isPartner ? 'translate-x-5' : 'translate-x-0'}
            pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
              />
            </Switch>
          </div>
        </div>

        {/* PERFORMANCE */}
        <div className="lg:sticky top-0 lg:after:content-[''] lg:after:h-full lg:after:absolute lg:after:-left-3 lg:after:top-0 lg:after:w-[1px] lg:after:bg-gray-700 lg:before:content-[''] lg:before:h-full lg:before:absolute lg:before:-right-3 lg:before:top-0 lg:before:w-[1px] lg:before:bg-gray-700">
          {/* SELECTS FROM PERFORMANCE */}
          <h1 className="mt-7 w-full text-center flex items-center justify-center text-gray-400 md:text-3xl text-2xl font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 md:w-7 md:h-7 mr-3 -mt-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008z" />
            </svg>
            DESEMPENHO
          </h1>
          <div className="w-full">
            {/* FULL TUNING */}
            <div className="flex-row mt-4 justify-center items-center">
              <h3 className="font-medium text-xl text-left ml-3 text-white">Full Tuning</h3>
              <Select priceFullTuning={priceFullTuning} data={dataFullTuningTypes} value={valueFullTuning} setValue={setValueFullTuning} />
            </div>

            {/* TRANSMISSION */}
            <div className="flex-row mt-4 justify-center items-center">
              <h3 className="font-medium text-xl text-left ml-3 text-white">Transmissão</h3>
              <Select priceFullTuning={priceFullTuning} data={dataDefaultTypes} value={valueTransmission} setValue={setValueTransmission} />
            </div>

            {/* SUSPENSION */}
            <div className="flex-row mt-4 justify-center items-center">
              <h3 className="font-medium text-xl text-left ml-3 text-white">Suspensão</h3>
              <Select priceFullTuning={priceFullTuning} data={dataDefaultTypes} value={valueSuspension} setValue={setValueSuspension} />
            </div>

            {/* ENGINE */}
            <div className="flex-row mt-4 justify-center items-center">
              <h3 className="font-medium text-xl text-left ml-3 text-white">Motor</h3>
              <Select priceFullTuning={priceFullTuning} data={dataDefaultTypes} value={valueEngine} setValue={setValueEngine} />
            </div>

            {/* BRAKE */}
            <div className="flex-row mt-4 justify-center items-center">
              <h3 className="font-medium text-xl text-left ml-3 text-white">Freio</h3>
              <Select priceFullTuning={priceFullTuning} data={dataDefaultTypes} value={valueBrake} setValue={setValueBrake} />
            </div>

            {/* SHIELD */}
            <div className="flex-row mt-4 justify-center items-center">
              <h3 className="font-medium text-xl text-left ml-3 text-white">Blindagem</h3>
              <Select priceFullTuning={priceFullTuning} data={dataShieldTypes} value={valueShield} setValue={setValueShield} />
            </div>

            {/* TURBO */}
            <div className="flex-row mt-4 justify-center items-center">
              <h3 className="font-medium text-xl text-left ml-3 text-white">Turbo</h3>
              <Select priceFullTuning={priceFullTuning} data={dataTurboTypes} value={valueTurbo} setValue={setValueTurbo} />
            </div>
          </div>
        </div>


        {/* APPEARANCE */}
        <div className="lg:sticky pb-24">
          {/* SWITCHS FROM APPEARANCE */}
          <h1 className="mt-7 w-full text-center flex items-center justify-center text-gray-400 md:text-3xl text-2xl font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 md:w-7 md:h-7 mr-3 -mt-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
            </svg>
            APARÊNCIA
          </h1>

          {/* SPOILER */}
          <SwitchComponent hasItem={hasSpoiler} setHasItem={setHasSpoiler} itemTitle={"Aerofólio"} itemSubtitle={"Spoiler"} />

          {/* FRONT BUMPER */}
          <SwitchComponent hasItem={hasFrontBumper} setHasItem={setHasFrontBumper} itemTitle={"Parachoque Diant."} itemSubtitle={"Front Bumper"} />

          {/* REAR BUMPER */}
          <SwitchComponent hasItem={hasRearBumper} setHasItem={setHasRearBumper} itemTitle={"Parachoque Tras."} itemSubtitle={"Rear Bumper"} />

          {/* SIDE SKIRT */}
          <SwitchComponent hasItem={hasSideSkirt} setHasItem={setHasSideSkirt} itemTitle={"Saia Lateral"} itemSubtitle={"Side Skirt"} />

          {/* EXHAUST */}
          <SwitchComponent hasItem={hasExhaust} setHasItem={setHasExhaust} itemTitle={"Escapamento"} itemSubtitle={"Exhaust"} />

          {/* ROOLCAGE */}
          <SwitchComponent hasItem={hasRollcage} setHasItem={setHasRollcage} itemTitle={"Gaiola de Prot."} itemSubtitle={"Rollcage"} />

          {/* ROOF */}
          <SwitchComponent hasItem={hasRoof} setHasItem={setHasRoof} itemTitle={"Capô"} itemSubtitle={"Roof"} />

          {/* HOOD */}
          <SwitchComponent hasItem={hasHood} setHasItem={setHasHood} itemTitle={"Teto"} itemSubtitle={"Hood"} />

          {/* WINDOW TINT */}
          <SwitchComponent hasItem={hasWindowTint} setHasItem={setHasWindowTint} itemTitle={"Vidro Fumê"} itemSubtitle={"Window Tint"} />

          {/* NEONS */}
          <SwitchComponent hasItem={hasNeons} setHasItem={setHasNeons} itemTitle={"Neons"} itemSubtitle={"Neons"} />

          {/* XENON */}
          <SwitchComponent hasItem={hasXenon} setHasItem={setHasXenon} itemTitle={"Xenôn"} itemSubtitle={"Xenon"} />

          {/* WHEELS */}
          <SwitchComponent hasItem={hasWheels} setHasItem={setHasWheels} itemTitle={"Roda"} itemSubtitle={"Wheels"} />

          {/* PLATE INDEX */}
          <SwitchComponent hasItem={hasPlateIndex} setHasItem={setHasPlateIndex} itemTitle={"Placa"} itemSubtitle={"Plate Index"} />


          {/* PAINT */}
          <div className="bg-transparent border border-gray-700 text-white shadow-md  py-2 px-3 mb-8 rounded-lg">
            <h4 className="text-white text-xl font-bold text-left">
              Pinturas
              <span className="text-center text-gray-400 text-lg font-light"> - Respray</span>
            </h4>

            {/* PRIMARY */}
            <SwitchComponent hasItem={hasColorPrimary} setHasItem={setHasColorPrimary} itemTitle={"Primária"} itemSubtitle={"Primary"} />

            {/* SECONDARY */}
            <SwitchComponent hasItem={hasColorSecondary} setHasItem={setHasColorSecondary} itemTitle={"Secundária"} itemSubtitle={"Secondary"} />

            {/* PEARLESCENT */}
            <SwitchComponent hasItem={hasColorPearlescent} setHasItem={setHasColorPearlescent} itemTitle={"Perolado"} itemSubtitle={"Pearlescent"} />

            {/* PEARLESCENT */}
            <SwitchComponent hasItem={hasColorWheels} setHasItem={setHasColorWheels} itemTitle={"Roda"} itemSubtitle={"Wheels"} />

            {/* INTERIOR */}
            <SwitchComponent hasItem={hasColorInterior} setHasItem={setHasColorInterior} itemTitle={"Interior"} itemSubtitle={"Interior"} />

            {/* INTERIOR */}
            <SwitchComponent hasItem={hasColorDashboard} setHasItem={setHasColorDashboard} itemTitle={"Painel"} itemSubtitle={"Dashboard"} />
          </div>

          <span className="text-gray-700 pb-3 ">Developed by <a onClick={() => { copy("Anderson Paiva#0221"); alert(`Usuário do Discord copiado 🤝`); }} className="text-gray-600 hover:text-green-400 cursor-pointer">Anderson Paiva#0221</a></span>

        </div>

      </div >
      {/* SUM AND FINISH */}
      <div className={`bg-transparent border border-gray-700 text-white shadow-md flex left-1/2 -translate-x-2/4 w-full  bg-black rounded-lg items-center fixed ${totalPrice == 0 ? '-bottom-96' : 'bottom-0'} transition-all`}>
        <h3 className="w-1/2 text-gray-400 text-2xl md:text-3xl flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2 md:w-8 md:h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
          </svg>
          <span className="text-white font-bold">{totalPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".")}</span></h3>
        <button className="w-1/2 h-24 hover:bg-green-600 transition-colors bg-green-500 rounded-lg text-3xl font-bold [text-shadow:_0_2px_15px_rgb(0_40_5_/_40%)]" onClick={onFinished}>FINALIZAR</button>
      </div>
    </div >
  );
}
