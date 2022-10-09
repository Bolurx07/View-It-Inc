import sidenavStyle from './Sidenav.module.css'


const Sidenav = ({image, paragraph, active}) => {
  return (
    <div  className={ active === true ? sidenavStyle.background : sidenavStyle.nobackground} >
    <div className={sidenavStyle.container}>
        <img src={image} alt="" />
        <p>{paragraph}</p>
    </div>
    </div>
  )
}

export default Sidenav