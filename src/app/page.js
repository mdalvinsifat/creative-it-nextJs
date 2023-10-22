import Image from 'next/image'
import styles from './page.module.css'
import LayOut from './Layout/LayOut'
import Section1 from './(home)/Section1'
import Section2 from './(home)/Section2'
import Section3 from './(home)/Section3'
import Section4 from './(home)/Section4'
import Section5 from './(home)/Section5'
import Section7 from './(home)/Section7'
import Section6 from './(home)/Section6'

export default function Home() {


  return (
    <LayOut>
   <Section1></Section1>
   <Section2></Section2>
   <Section3></Section3>
   <Section4></Section4>
   <Section5></Section5>
   <Section6></Section6>
   <Section7></Section7>
    </LayOut>
  )
}
