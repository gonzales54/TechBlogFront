import style from '@/styles/footer/main.module.scss'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="containerLarge">
        <h3 className={style.footerTitle}>Tech Itokawa Blog</h3>
        <div className={style.socialMediaBlock}>
          <h4 className={style.socialMediaTitle}>Social Media</h4>
          <button className={style.twitterBtn}>
            Twitter
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer;