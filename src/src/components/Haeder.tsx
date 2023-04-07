import style from '@/styles/header/main.module.scss'

const Header = () => {
  return (
    <header className={style.header}>
      <div className="containerLarge">
        <h1 className={style.headerTitle}>Itokawa Tech Blog</h1>
      </div>
    </header>
  )
}

export default Header;