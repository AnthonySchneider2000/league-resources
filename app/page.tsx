"use client"

import { useState } from "react"

import * as constants from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

interface UserInputProps {
  value: number
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void
  id: string
  label: string
}

function UserInput({ value, setValue, id, label }: UserInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type="number" value={value} onChange={setValue} />
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

  //saved
  const [saved, setSaved] = useState<any>([])

  // functions

  function handleBotWavesChange(e: React.ChangeEvent<HTMLInputElement>) {
    const botWaves = parseInt(e.target.value)
    setBotWaves(botWaves)
    let botMinionGold =
      botWaves * 3 * (constants.melee.gold + constants.caster.gold)
    let botCannonGold = Math.floor(botWaves / 3) * constants.botCannon.gold //only 1 cannon per 3 waves
    const botWavesGold = botMinionGold + botCannonGold
    setBotWavesGold(botWavesGold)
    let botMinionExperience =
      botWaves * 3 * (constants.melee.experience + constants.caster.experience)
    let botCannonExperience =
      Math.floor(botWaves / 3) * constants.botCannon.experience
    const botExperience = botMinionExperience + botCannonExperience
    setBotWavesExperience(botExperience)
    setGold(
      botWavesGold +
        midWavesGold +
        topWavesGold +
        jungleCampsGold +
        turretsGold +
        turretPlatingGold +
        killsGold
    )
    setExperience(
      botExperience +
        midWavesExperience +
        topWavesExperience +
        jungleCampsExperience +
        turretsExperience +
        turretPlatingExperience +
        killsExperience
    )
  }

  function handleMidWavesChange(e: React.ChangeEvent<HTMLInputElement>) {
    const midWaves = parseInt(e.target.value)
    setMidWaves(midWaves)
    let midMinionGold =
      midWaves * 3 * (constants.melee.gold + constants.caster.gold)
    let midCannonGold = Math.floor(midWaves / 3) * constants.midCannon.gold //only 1 cannon per 3 waves
    const midWavesGold = midMinionGold + midCannonGold
    setMidWavesGold(midWavesGold)
    let midMinionExperience =
      midWaves * 3 * (constants.melee.experience + constants.caster.experience)
    let midCannonExperience =
      Math.floor(midWaves / 3) * constants.midCannon.experience
    const midExperience = midMinionExperience + midCannonExperience
    setMidWavesExperience(midExperience)
    setGold(
      botWavesGold +
        midWavesGold +
        topWavesGold +
        jungleCampsGold +
        turretsGold +
        turretPlatingGold +
        killsGold
    )
    setExperience(
      midExperience +
        botWavesExperience +
        topWavesExperience +
        jungleCampsExperience +
        turretsExperience +
        turretPlatingExperience +
        killsExperience
    )
  }

  function handleTopWavesChange(e: React.ChangeEvent<HTMLInputElement>) {
    const topWaves = parseInt(e.target.value)
    setTopWaves(topWaves)
    let topMinionGold =
      topWaves * 3 * (constants.melee.gold + constants.caster.gold)
    let topCannonGold = Math.floor(topWaves / 3) * constants.topCannon.gold //only 1 cannon per 3 waves
    const topWavesGold = topMinionGold + topCannonGold
    setTopWavesGold(topWavesGold)
    let topMinionExperience =
      topWaves * 3 * (constants.melee.experience + constants.caster.experience)
    let topCannonExperience =
      Math.floor(topWaves / 3) * constants.topCannon.experience
    const topExperience = topMinionExperience + topCannonExperience
    setTopWavesExperience(topExperience)
    setGold(
      botWavesGold +
        midWavesGold +
        topWavesGold +
        jungleCampsGold +
        turretsGold +
        turretPlatingGold +
        killsGold
    )
    setExperience(
      topExperience +
        botWavesExperience +
        midWavesExperience +
        jungleCampsExperience +
        turretsExperience +
        turretPlatingExperience +
        killsExperience
    )
  }

  function handleJungleCampsChange(e: React.ChangeEvent<HTMLInputElement>) {
    let jungleCamps = parseInt(e.target.value)
    if (jungleCamps > 1000) {
      return
    }
    setJungleCamps(jungleCamps)
    let jungleCampsGold = 0
    let jungleCampsExperience = 0
    while (jungleCamps > 0) {
      switch (jungleCamps % 6) {
        case 1:
          // red buff
          jungleCampsGold += constants.redBuff.gold
          jungleCampsExperience += constants.redBuff.experience
          jungleCamps--
          break
        case 2:
          // krugs
          jungleCampsGold +=
            constants.bigKrug.gold +
            constants.mediumKrug.gold +
            constants.smallKrug.gold * 5
          jungleCampsExperience +=
            constants.bigKrug.experience +
            constants.mediumKrug.experience +
            constants.smallKrug.experience * 5
          jungleCamps--
          break
        case 3:
          // raptors
          jungleCampsGold +=
            constants.bigRaptor.gold + constants.smallRaptor.gold * 5
          jungleCampsExperience +=
            constants.bigRaptor.experience +
            constants.smallRaptor.experience * 5
          jungleCamps--
          break
        case 4:
          // wolves
          jungleCampsGold +=
            constants.bigWolf.gold + constants.smallWolf.gold * 2
          jungleCampsExperience +=
            constants.bigWolf.experience + constants.smallWolf.experience * 2
          jungleCamps--
          break
        case 5:
          // blue buff
          jungleCampsGold += constants.blueBuff.gold
          jungleCampsExperience += constants.blueBuff.experience
          jungleCamps--
          break
        case 0:
          // gromp
          jungleCampsGold += constants.gromp.gold
          jungleCampsExperience += constants.gromp.experience
          jungleCamps--
          break
        default:
          break
      }
    }
    setJungleCampsGold(jungleCampsGold)
    setJungleCampsExperience(jungleCampsExperience)
    setGold(
      botWavesGold +
        midWavesGold +
        topWavesGold +
        jungleCampsGold +
        turretsGold +
        turretPlatingGold +
        killsGold
    )
    setExperience(
      jungleCampsExperience +
        botWavesExperience +
        midWavesExperience +
        topWavesExperience +
        turretsExperience +
        turretPlatingExperience +
        killsExperience
    )
  }

  function handleTurretsChange(e: React.ChangeEvent<HTMLInputElement>) {
    let turrets = parseInt(e.target.value)
    if (turrets > 11) {
      return
    }
    setTurrets(turrets)
    let turretsGold = 0
    while (turrets > 0) {
      switch (turrets % 3) {
        case 1:
          // outer turret
          turretsGold += constants.outerTurret.gold
          turrets--
          break
        case 2:
          // inner turret
          turretsGold += constants.innerTurret.gold
          turrets--
          break
        case 0:
          // inhib turret
          turretsGold += constants.inhibTurret.gold
          turrets--
          break
        default:
          break
      }
    }
    setTurretsGold(turretsGold)
    setGold(
      botWavesGold +
        midWavesGold +
        topWavesGold +
        jungleCampsGold +
        turretsGold +
        turretPlatingGold +
        killsGold
    )
  }

  function handleTurretPlatingChange(e: React.ChangeEvent<HTMLInputElement>) {
    const turretPlating = parseInt(e.target.value)
    setTurretPlating(turretPlating)
    const turretPlatingGold = turretPlating * constants.plating.gold
    setTurretPlatingGold(turretPlatingGold)
    setGold(
      botWavesGold +
        midWavesGold +
        topWavesGold +
        jungleCampsGold +
        turretsGold +
        turretPlatingGold +
        killsGold
    )
  }

  function handleKillsChange(e: React.ChangeEvent<HTMLInputElement>) {
    let kills = parseInt(e.target.value)
    if (kills > 1000) {
      return
    }
    setKills(kills)
    let killsGold = 0
    let killsExperience = 0
    while (kills > 0) {
      switch (kills) {
        case 1:
          killsGold += constants.firstKill.gold
          killsExperience += constants.firstKill.experience
          kills--
          break
        case 2:
          killsGold += constants.secondKill.gold
          killsExperience += constants.secondKill.experience
          kills--
          break
        case 3:
          killsGold += constants.thirdKill.gold
          killsExperience += constants.thirdKill.experience
          kills--
          break
        case 4:
          killsGold += constants.fourthKill.gold
          killsExperience += constants.fourthKill.experience
          kills--
          break
        case 5:
          killsGold += constants.fifthKill.gold
          killsExperience += constants.fifthKill.experience
          kills--
          break
        case 6:
          killsGold += constants.sixthKill.gold
          killsExperience += constants.sixthKill.experience
          kills--
          break
        default:
          killsGold += constants.seventhKill.gold
          killsExperience += constants.seventhKill.experience
          kills--
          break
      }
    }
    setKillsGold(killsGold)
    setKillsExperience(killsExperience)
    setGold(
      botWavesGold +
        midWavesGold +
        topWavesGold +
        jungleCampsGold +
        turretsGold +
        turretPlatingGold +
        killsGold
    )
    setExperience(
      killsExperience +
        botWavesExperience +
        midWavesExperience +
        topWavesExperience +
        jungleCampsExperience +
        turretsExperience +
        turretPlatingExperience
    )
  }

  function resetData() {
    setBotWaves(0)
    setMidWaves(0)
    setTopWaves(0)
    setJungleCamps(0)
    setTurrets(0)
    setTurretPlating(0)
    setKills(0)
    setBotWavesGold(0)
    setMidWavesGold(0)
    setTopWavesGold(0)
    setJungleCampsGold(0)
    setTurretsGold(0)
    setTurretPlatingGold(0)
    setKillsGold(0)
    setBotWavesExperience(0)
    setMidWavesExperience(0)
    setTopWavesExperience(0)
    setJungleCampsExperience(0)
    setTurretsExperience(0)
    setTurretPlatingExperience(0)
    setKillsExperience(0)
    setGold(0)
    setExperience(0)
  }

  function saveData() {
    let data: any = {
      botWaves,
      midWaves,
      topWaves,
      jungleCamps,
      turrets,
      turretPlating,
      kills,
      // botWavesGold,
      // midWavesGold,
      // topWavesGold,
      // jungleCampsGold,
      // turretsGold,
      // turretPlatingGold,
      // killsGold,
      // botWavesExperience,
      // midWavesExperience,
      // topWavesExperience,
      // jungleCampsExperience,
      // turretsExperience,
      // turretPlatingExperience,
      // killsExperience,
      gold,
      experience,
    }
    // remove 0 values
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        const element = data[key]
        if (element === 0) {
          delete data[key]
        }
      }
    }
    setSaved([...saved, data])
  }

  function deleteItem(index: number) {
    const newSaved = saved.filter((item: any, i: number) => i !== index)
    setSaved(newSaved)
  }

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          League of Legends <br className="hidden sm:inline" />
          Resource Calculator
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Compare resources gained from laning, jungling, and splitpushing
        </p>
      </div>
      {/* section grid 2 cols */}
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <UserInput
            value={botWaves}
            setValue={handleBotWavesChange}
            id="bot-waves"
            label="Bot Waves"
          />
          <UserInput
            value={midWaves}
            setValue={handleMidWavesChange}
            id="mid-waves"
            label="Mid Waves"
          />
          <UserInput
            value={topWaves}
            setValue={handleTopWavesChange}
            id="top-waves"
            label="Top Waves"
          />
          <UserInput
            value={jungleCamps}
            setValue={handleJungleCampsChange}
            id="jungle-camps"
            label="Jungle Camps"
          />
          <UserInput
            value={turrets}
            setValue={handleTurretsChange}
            id="turrets"
            label="Turrets"
          />
          <UserInput
            value={turretPlating}
            setValue={handleTurretPlatingChange}
            id="turret-plating"
            label="Turret Plating"
          />
          <UserInput
            value={kills}
            setValue={handleKillsChange}
            id="kills"
            label="Kills"
          />
        </div>
        <div className="flex flex-col gap-4">
          <Separator className="my-6 md:hidden" />
          <div className="flex flex-col gap-2">
            <Label htmlFor="total-gold">Total Gold</Label>
            <Input id="total-gold" type="number" value={gold} readOnly />
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
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Button variant="secondary" onClick={saveData}>
          Save Data
        </Button>
        <Button variant="secondary" onClick={resetData}>
          Reset
        </Button>
      </section>
      {/* if saved has items */}
      {saved.length > 0 && (
        <>
          <Separator />
          <Card>
            <CardHeader>
              <CardTitle>Saved</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              {saved.length > 0 ? (
                saved.map((item: any, index: any) => (
                  <Card key={index}>
                    <CardHeader
                      className="rounded-t-md hover:cursor-pointer hover:bg-accent"
                      title="Click to delete"
                      onClick={() => deleteItem(index)}
                    >
                      <CardTitle>Item {index + 1}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-2">
                      {Object.keys(item).map((key) => {
                        const value = item[key]
                        return value !== 0 ? (
                          <div key={key}>
                            <p>
                              {key}: {value}
                            </p>
                          </div>
                        ) : null
                      })}
                    </CardContent>
                  </Card>
                ))
              ) : (
                <p className="mb-4">Nothing saved yet.</p>
              )}
            </CardContent>
          </Card>
        </>
      )}
    </section>
  )
}
