import React, {useEffect} from 'react'
import './main.css'
import { MdDescription } from 'react-icons/md'
import img from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css'


import { HiOutlineClipboard, HiOutlineLocationMarker } from 'react-icons/hi'

const Data = [
  {
    id:1,
    imgsrc: img,
    destTitle: 'Bora Bora',
    location: 'New zeland',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'the epitome of romance, bora bora is one of the best travel destination in the world. this place is known for its luxurious stays and adventurous activities'
  },
  {
    id:2,
    imgsrc: img2,
    destTitle: 'Bora Bora',
    location: 'New zeland',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'the epitome of romance, bora bora is one of the best travel destination in the world. this place is known for its luxurious stays and adventurous activities'
  },
  {
    id:3,
    imgsrc: img3,
    destTitle: 'Bora Bora',
    location: 'New zeland',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'the epitome of romance, bora bora is one of the best travel destination in the world. this place is known for its luxurious stays and adventurous activities'
  },
  {
    id:4,
    imgsrc: img4,
    destTitle: 'Bora Bora',
    location: 'New zeland',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'the epitome of romance, bora bora is one of the best travel destination in the world. this place is known for its luxurious stays and adventurous activities'
  },
  {
    id:5,
    imgsrc: img5,
    destTitle: 'Bora Bora',
    location: 'New zeland',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'the epitome of romance, bora bora is one of the best travel destination in the world. this place is known for its luxurious stays and adventurous activities'
  },
  {
    id:6,
    imgsrc: img6,
    destTitle: 'Bora Bora',
    location: 'New zeland',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'the epitome of romance, bora bora is one of the best travel destination in the world. this place is known for its luxurious stays and adventurous activities'
  },
  {
    id:7,
    imgsrc: img7,
    destTitle: 'Bora Bora',
    location: 'New zeland',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'the epitome of romance, bora bora is one of the best travel destination in the world. this place is known for its luxurious stays and adventurous activities'
  },
  {
    id:8,
    imgsrc: img8,
    destTitle: 'Bora Bora',
    location: 'New zeland',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'the epitome of romance, bora bora is one of the best travel destination in the world. this place is known for its luxurious stays and adventurous activities'
  },
  {
    id:9,
    imgsrc: img9,
    destTitle: 'Bora Bora',
    location: 'New zeland',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'the epitome of romance, bora bora is one of the best travel destination in the world. this place is known for its luxurious stays and adventurous activities'
  }
]

const Main = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
    <section className='main container section' id='main'>  
      <div className='secTitle'>
        <h3 data-aos="fade-right" className='title titles'>
        Destination Spotlight
        </h3>
      </div>

      <div className='secContent grid'>
        {
          Data.map(({id, imgsrc, destTitle, location, grade, fees, description })=>{
            return(
              <div key={id} data-aos="fade-up" className='singleDestination'>
               <div className='imageDiv'>
                 <img src={imgsrc} alt={destTitle}/>
               </div>

               <div className='cardInfo'>
                 <h4 className='destTitle'>
                  {destTitle}
                 </h4>
                 <span className='continent flex'>
                   <HiOutlineLocationMarker className='icon'/>
                   <span className='name'>{location}</span>
                 </span>

                 <div className='fees flex'>
                   <div className='grade'>
                     <span>{grade}<small>+1</small></span>
                   </div>
                   <div className='price'>
                     <h5>{fees}</h5>
                   </div>
                 </div>
                 <div className='desc'>
                   <p>{description}</p>
                 </div>
                 <button className='btn flex'>
                  DETAILS <HiOutlineClipboard className='icon' />
                 </button>
               </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main
