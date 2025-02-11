import BgRejected from '../assets/others/hurts.gif'

export const Rejected = () => {
  return (
    <div 
      className="flex justify-center items-center w-screen h-screen border bg-[url(../assets/us.gif)]"
      style={{ backgroundImage: `url(${BgRejected})`, backgroundSize: 'contain',backgroundRepeat: 'no-repeat',backgroundPosition: 'center' }}>
    </div>
  )
}