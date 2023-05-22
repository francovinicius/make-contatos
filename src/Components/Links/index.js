import styles from './Links.css'

export default function Links() {
    return (
        <section className='section-link' id='links'>
            <div className="d-flex flex-column align-items-center justify-content-center">
                <div className='div-link d-flex flex-column align-items-center justify-content-center'>
                    <a className="nav-link" aria-current="page" target='_blank' href="#">Portfólio (Em construção)</a>
                </div>
                <div className='div-link d-flex flex-column align-items-center justify-content-center'>
                    <a className="nav-link" aria-current="page" target='_blank' href="https://api.whatsapp.com/send?phone=5524999256629&text=Ol%C3%A1&fbclid=PAAaZt2vDYFNTUkMkhZ2SBx0aaf2_hK5ZRVV984U8FKTu2fK7SFDSuGXfQQJw">Whatsapp</a>
                </div>
                <div className='div-link d-flex flex-column align-items-center justify-content-center'>
                    <a className="nav-link" aria-current="page" target='_blank' href="https://instagram.com/makefotografia?igshid=MzRlODBiNWFlZA==">Instagram</a>
                </div>
            </div>

        </section>
    )
}