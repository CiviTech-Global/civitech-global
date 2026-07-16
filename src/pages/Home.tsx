import { Hero } from '../components/home/Hero'
import { Stats } from '../components/home/Stats'
import { Mission } from '../components/home/Mission'
import { TeamPortal } from '../components/home/TeamPortal'
import { CallToAction } from '../components/home/CallToAction'

export function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Mission />
      <TeamPortal />
      <CallToAction />
    </>
  )
}
