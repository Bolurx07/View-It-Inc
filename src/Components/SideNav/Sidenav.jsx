import sidenavStyle from './Sidenav.module.css'


const Sidenav = ({image, paragraph}) => {
  return (
    <div className={sidenavStyle.container}>
        <img src={image} alt="" />
        <p>{paragraph}</p>
    </div>
  )
}

export default Sidenav