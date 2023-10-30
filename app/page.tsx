"use client"

import { useState, useEffect } from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import * as constants from "@/lib/constants"

interface UserInputProps {
  value: number
  setValue: (value: number) => void
  id: string
  label: string
}

function UserInput({ value, setValue, id, label }: UserInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
    </div>
  )
}

export default function IndexPage() {
  
  //count
  const [botWaves, setBotWaves] = useState(0)
  const [midWaves, setMidWaves] = useState(0)
  const [topWaves, setTopWaves] = useState(0)
  const [jungleCamps, setJungleCamps] = useState(0)
  const [turrets, setTurrets] = useState(0)
  const [turretPlating, setTurretPlating] = useState(0)
  const [kills, setKills] = useState(0)
  //gold
  const [botWavesGold, setBotWavesGold] = useState(0)
  const [midWavesGold, setMidWavesGold] = useState(0)
  const [topWavesGold, setTopWavesGold] = useState(0)
  const [jungleCampsGold, setJungleCampsGold] = useState(0)
  const [turretsGold, setTurretsGold] = useState(0)
  const [turretPlatingGold, setTurretPlatingGold] = useState(0)
  const [killsGold, setKillsGold] = useState(0)

  //experience
  const [botWavesExperience, setBotWavesExperience] = useState(0)
  const [midWavesExperience, setMidWavesExperience] = useState(0)
  const [topWavesExperience, setTopWavesExperience] = useState(0)
  const [jungleCampsExperience, setJungleCampsExperience] = useState(0)
  const [turretsExperience, setTurretsExperience] = useState(0)
  const [turretPlatingExperience, setTurretPlatingExperience] = useState(0)
  const [killsExperience, setKillsExperience] = useState(0)

  //total
  const [gold, setGold] = useState(0)
  const [experience, setExperience] = useState(0)

  // functions 
  function calculateJungleCamps() {
  }

  function calculateTurrets() {
  }

  function calculateKills() {
  }
  function calculateResources() {
    console.log("calculating resources");
    let botMinionGold = botWaves * (constants.melee.gold + constants.caster.gold);
    let botCannonGold = Math.floor(botWaves / 3) * constants.botCannon.gold; //only 1 cannon per 3 waves
    setBotWavesGold(botMinionGold + botCannonGold);
    let botMinionExperience = botWaves * (constants.melee.experience + constants.caster.experience);
    let botCannonExperience = Math.floor(botWaves / 3) * constants.botCannon.experience;
    setBotWavesExperience(botMinionExperience + botCannonExperience);


    let midMinionGold = midWaves * (constants.melee.gold + constants.caster.gold);
    let midCannonGold = Math.floor(midWaves / 3) * constants.midCannon.gold;
    setMidWavesGold(midMinionGold + midCannonGold);
    let midMinionExperience = midWaves * (constants.melee.experience + constants.caster.experience);
    let midCannonExperience = Math.floor(midWaves / 3) * constants.midCannon.experience;
    setMidWavesExperience(midMinionExperience + midCannonExperience);

    let topMinionGold = topWaves * (constants.melee.gold + constants.caster.gold);
    let topCannonGold = Math.floor(topWaves / 3) * constants.topCannon.gold;
    setTopWavesGold(topMinionGold + topCannonGold);
    let topMinionExperience = topWaves * (constants.melee.experience + constants.caster.experience);
    let topCannonExperience = Math.floor(topWaves / 3) * constants.topCannon.experience;
    setTopWavesExperience(topMinionExperience + topCannonExperience);

    calculateJungleCamps();

    calculateTurrets();

    calculateKills();

    setGold(botWavesGold + midWavesGold + topWavesGold + jungleCampsGold + turretsGold + turretPlatingGold + killsGold);
    setExperience(botWavesExperience + midWavesExperience + topWavesExperience + jungleCampsExperience + turretsExperience + turretPlatingExperience + killsExperience);

  }

  useEffect(() => {
    calculateResources();
  }, [botWaves, midWaves, topWaves, jungleCamps, turrets, turretPlating, kills])

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          League of Legends <br className="hidden sm:inline" />
          Resource Calculator
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Compare the resources from waves, camps, and objectives.
        </p>
      </div>
      {/* section grid 2 cols */}
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <UserInput
            value={botWaves}
            setValue={setBotWaves}
            id="bot-waves"
            label="Bot Waves"
          />
          <UserInput
            value={midWaves}
            setValue={setMidWaves}
            id="mid-waves"
            label="Mid Waves"
          />
          <UserInput
            value={topWaves}
            setValue={setTopWaves}
            id="top-waves"
            label="Top Waves"
          />
          <UserInput
            value={jungleCamps}
            setValue={setJungleCamps}
            id="jungle-camps"
            label="Jungle Camps"
          />
          <UserInput
            value={turrets}
            setValue={setTurrets}
            id="turrets"
            label="Turrets"
          />
          <UserInput
            value={turretPlating}
            setValue={setTurretPlating}
            id="turret-plating"
            label="Turret Plating"
          />
          <UserInput
            value={kills}
            setValue={setKills}
            id="kills"
            label="Kills"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="total-gold">Total Gold</Label>
            <Input
              id="total-gold"
              type="number"
              value={gold}
              readOnly
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="total-experience">Total Experience</Label>
            <Input
              id="total-experience"
              type="number"
              value={experience}
              readOnly
            />
          </div>
        </div>
      </section>
    </section>
  )
}
