
import { useNavigate } from 'react-router-dom'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation"

function Home() {
  const navigate = useNavigate()

  return (
    <div>
      <BackgroundGradientAnimation>
        <div className = "absolute z-10 inset-0 pointer-events-none flex justify-center items-center">
          <Card className = "static bg-white/10 backdrop-blur-md">
            <CardHeader>
              <CardTitle className='text-black'>David Youm</CardTitle>
              <CardDescription className='text-black'>
                Full-Stack Developer | Founder of Alter AI | CS@PennState'26
              </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='flex pointer-events-auto flex-col items-center justify-between m-auto'>
              <Button onClick={() => {navigate("/work")}} className='m-[5px] max-w-min text-black backdrop-blur-md bg-white/20 hover:bg-white/50'>
                My Work
              </Button>
              <Button onClick={() => {navigate("/about")}} className='m-[5px] max-w-min text-black backdrop-blur-md bg-white/20 hover:bg-white/50'>
                About Me
              </Button>
              <Button onClick={() => {navigate("/contact")}} className='m-[5px] max-w-min text-black backdrop-blur-md bg-white/20 hover:bg-white/50'>
                Contact Me
              </Button>
            </div>
            
          </CardContent>
          <CardFooter className='text-black flex justify-between mt-10'>
            Made by David Youm
            <p>2024</p>
          </CardFooter>
        </Card>
        </div>
      </BackgroundGradientAnimation>
    </div>
  )
}

export default Home
