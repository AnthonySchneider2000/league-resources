"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

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
  const [botWaves, setBotWaves] = useState(0)
  const [midWaves, setMidWaves] = useState(0)
  const [topWaves, setTopWaves] = useState(0)
  const [jungleCamps, setJungleCamps] = useState(0)
  const [towers, setTowers] = useState(0)
  const [towerPlating, setTowerPlating] = useState(0)
  const [kills, setKills] = useState(0)

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
            value={towers}
            setValue={setTowers}
            id="towers"
            label="Towers"
          />
          <UserInput
            value={towerPlating}
            setValue={setTowerPlating}
            id="tower-plating"
            label="Tower Plating"
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
              value={
                botWaves * 105 +
                midWaves * 105 +
                topWaves * 105 +
                jungleCamps * 100 +
                towers * 300 +
                towerPlating * 160 +
                kills * 300
              }
              readOnly
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="total-experience">Total Experience</Label>
            <Input
              id="total-experience"
              type="number"
              value={
                botWaves * 105 +
                midWaves * 105 +
                topWaves * 105 +
                jungleCamps * 100 +
                towers * 300 +
                towerPlating * 160 +
                kills * 300
              }
              readOnly
            />
          </div>
        </div>
      </section>
    </section>
  )
}
