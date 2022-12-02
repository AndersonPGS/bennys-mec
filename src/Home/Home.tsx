import { Switch } from "@headlessui/react";
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
    { name: "LV3 - Sem Blindagem" },
    { name: "LV3 - Com Blindagem" },
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

  // const storeDate = (value: string) => {
  //   AsyncStorage.setItem("date", value)
  // }

  // const getStoredDate = async () => {
  //   const value = await AsyncStorage.getItem("date")

  //   if (value !== null) {
  //     return value
  //   } else {
  //     const todayDate = date.getDate().toString()
  //     return todayDate
  //   }
  // }

  // const storeKits = (value: string) => {
  //   AsyncStorage.setItem("kits", value)
  // }

  // const getStoredKits = async () => {
  //   const value = await AsyncStorage.getItem("kits")

  //   if (value !== null) {
  //     setSelledKits(+value)
  //   } else {
  //     setSelledKits(0)
  //   }
  // }

  // const storePneus = (value: string) => {
  //   AsyncStorage.setItem("pneus", value)
  // }

  // const getStoredPneus = async () => {
  //   const value = await AsyncStorage.getItem("pneus")

  //   if (value !== null) {
  //     setSelledPneus(+value)
  //   } else {
  //     setSelledPneus(0)
  //   }
  // }

  // useEffect(() => {
  //   const currentDate = date.getDate().toString()
  //   const storedDate = getStoredDate().then(data => { return data })
  //   async function checkStored() {
  //     if (await storedDate == currentDate) {
  //       getStoredKits()
  //       getStoredPneus()
  //     } else {
  //       storeDate(currentDate)
  //       storeKits("0")
  //       storePneus("0")
  //     }
  //   }
  //   checkStored()
  // }, [])

  useEffect(() => {
    let costPerKit = isPartner ? 2000 : 2500
    let costPerPneu = isPartner ? 500 : 600

    let costKits = costPerKit * countKits
    let costPneus = costPerPneu * countPneus

    let totalCost = costKits + costPneus

    if (priceFullTuning != 0) {
      totalCost += priceFullTuning
    } else {
      totalCost += priceTransmission + priceSuspension + priceEngine + priceBrake + priceShield + priceTurbo
    }

    if (hasSpoiler) {
      totalCost += 3000
    }

    if (hasFrontBumper) {
      totalCost += 3000
    }

    if (hasRearBumper) {
      totalCost += 3000
    }

    if (hasSideSkirt) {
      totalCost += 3000
    }

    if (hasExhaust) {
      totalCost += 3000
    }

    if (hasRollcage) {
      totalCost += 3000
    }

    if (hasRoof) {
      totalCost += 3000
    }

    if (hasHood) {
      totalCost += 3000
    }

    if (hasWindowTint) {
      totalCost += 3000
    }

    if (hasNeons) {
      totalCost += 3000
    }

    if (hasXenon) {
      totalCost += 3000
    }

    if (hasWheels) {
      totalCost += 8000
    }

    if (hasPlateIndex) {
      totalCost += 3000
    }

    if (hasColorPrimary) {
      totalCost += 3000
    }

    if (hasColorSecondary) {
      totalCost += 3000
    }

    if (hasColorPearlescent) {
      totalCost += 3000
    }

    if (hasColorWheels) {
      totalCost += 3000
    }

    if (hasColorInterior) {
      totalCost += 3000
    }

    if (hasColorDashboard) {
      totalCost += 3000
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

  // useEffect(() => {
  //   if (selledKits > 0) {
  //     storeKits(selledKits.toString())
  //   }
  //   if (selledPneus > 0) {
  //     storePneus(selledPneus.toString())
  //   }
  // }, [selledKits, selledPneus])

  function onFinished() {
    setSelledKits((selledKits) => selledKits + countKits)
    setSelledPneus((selledPneus) => selledPneus + countPneus)

    console.log("selledKits finished " + selledKits.toString())
    console.log("selledPneus finished " + selledPneus.toString())

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

  useEffect(() => {
    switch (valueFullTuning.name) {
      case "Sem Full Tuning":
        //Sem Full Tuning
        setPriceFullTuning(0)
        break;
      case "LV3 - Sem Blindagem":
        //Level 3 - Sem Blindagem
        setPriceFullTuning(127000)

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
      case "LV3 - Com Blindagem":
        //Level 3 - Com Blindagem
        setPriceFullTuning(215000)

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
      case "LV4 - Sem Blindagem":
        //Level 4 - Sem Blindagem
        setPriceFullTuning(160000)

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
        setPriceFullTuning(247000)

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
        setPriceTransmission(15000)
        break;
      case "Nível 2":
        //Level 2
        setPriceTransmission(21000)
        break;
      case "Nível 3":
        //Level 3
        setPriceTransmission(28000)
        break;
      case "Nível 4":
        //Level 4
        setPriceTransmission(36000)
    }
  }, [valueTransmission])

  useEffect(() => {
    switch (valueEngine.name) {
      case "Nível 0":
        //Level 0
        setPriceEngine(0)
        break;
      case "Nível 1":
        //Level 1
        setPriceEngine(15000)
        break;
      case "Nível 2":
        //Level 2
        setPriceEngine(21000)
        break;
      case "Nível 3":
        //Level 3
        setPriceEngine(28000)
        break;
      case "Nível 4":
        //Level 4
        setPriceEngine(37000)
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
        setPriceBrake(15000)
        break;
      case "Nível 2":
        //Level 2
        setPriceBrake(21000)
        break;
      case "Nível 3":
        //Level 3
        setPriceBrake(28000)
        break;
      case "Nível 4":
        //Level 4
        setPriceBrake(36000)
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
        setPriceShield(28000)
        break;
      case "Nível 2":
        //Level 2
        setPriceShield(43000)
        break;
      case "Nível 3":
        //Level 3
        setPriceShield(58000)
        break;
      case "Nível 4":
        //Level 4
        setPriceShield(73000)
      case "Nível 5":
        //Level 5
        setPriceShield(88000)
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

  return (

    <div className="w-full ">
      <div className="w-full flex-row justify-center align-center rounded-2xl">

        {/* TOTAL KITS AND PNEUS SELLED */}
        <div className="flex-row w-full my-5 p-5 bg-gray-700 rounded-2xl">
          <h1 className="w-full text-center text-gray-400 text-4xl font-bold">VENDIDOS HOJE</h1>
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
        <h1 className="w-full mt-7 text-center text-gray-400 text-3xl font-medium">KITS & PNEUS</h1>
        <div className="flex w-full justify-between mb-4">
          <div className="flex-row justify-center items-center mr-2 py-4 w-2/4 bg-gray-600 rounded-2xl">
            <h3 className="text-2xl font-light text-gray-400 text-center w-full">KIT</h3>
            <h2 className="text-7xl text-white text-center w-full font-bold">{countKits}</h2>
            <div className="flex justify-evenly">
              <button className="w-12 h-12 bg-gray-700 text-3xl font-bold rounded-lg" onClick={decreaseKits}>-</button>
              <button className="w-12 h-12 bg-gray-700 text-3xl font-bold rounded-lg" onClick={increaseKits}>+</button>
            </div>
          </div>

          <div className="flex-row justify-center items-center ml-2 py-4  w-2/4 bg-gray-600 rounded-2xl">
            <h3 className="text-2xl font-light text-gray-400 text-center w-full">PNEU</h3>
            <h2 className="text-7xl text-white text-center w-full font-bold">{countPneus}</h2>
            <div className="flex justify-evenly">
              <button className="w-12 h-12 bg-gray-700 text-3xl font-bold rounded-lg" onClick={decreasePneus}>-</button>
              <button className="w-12 h-12 bg-gray-700 text-3xl font-bold rounded-lg" onClick={increasePneus}>+</button>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-between">
          <h4 className="text-center text-white text-2xl">Parceria</h4>
          <Switch
            checked={isPartner}
            onChange={setIsPartner}
            className={`${isPartner ? 'bg-teal-900' : 'bg-teal-700'}
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

        {/* SELECTS FROM PERFORMANCE */}
        <h1 className="w-full mt-7 text-center text-gray-400 text-3xl font-medium">PERFORMANCE</h1>
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



          {/* SWITCHS FROM APPEARANCE */}
          <h1 className="w-full mt-7 text-center text-gray-400 text-3xl font-medium">APARÊNCIA</h1>

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
          <div className="bg-gray-900 py-2 px-3 mb-24 rounded-lg">
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


          {/* SUM AND FINISH */}
          <div className="flex left-1/2 -translate-x-2/4 w-full bottom-0 bg-gray-900 rounded-lg items-center fixed">
            <h3 className="w-1/2 text-gray-400 text-3xl">$ <span className="text-white font-bold">{totalPrice}</span></h3>
            <button className="w-1/2 h-24 bg-emerald-700 rounded-lg text-3xl font-bold" onClick={onFinished}>FINALIZAR</button>
          </div>
        </div>
      </div >
    </div >
  );
}
