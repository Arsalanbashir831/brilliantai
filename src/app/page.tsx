import Hero from "@/components/home/Hero"
// import Header from "@/components/Header"
import Offer from "@/components/home/Offer"
import IdeaToImpact from "@/components/home/IdeaToImpact"
import EndToEndTeam from "@/components/home/EndToEndTeam"
import GradientCTA from "@/components/home/GradientCTA"
import CallToAction from "@/components/home/CallToAction"
// import Footer from "@/components/home/Footer"
import AIMeasurableOutcomes from "@/components/home/AIMeasurableOutcomes"

export default function Home() {
    return (
        <div>
            {/* <Header /> */}
            <Hero />
            <Offer />
            <IdeaToImpact />
            <EndToEndTeam />
            <GradientCTA />
            <AIMeasurableOutcomes />
            <CallToAction />
            {/* <Footer /> */}



        </div>
    )
}
