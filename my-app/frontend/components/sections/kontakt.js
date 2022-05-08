const Kontakt = ({ data }) => {
  return (
    <section
      className="container section-padding px-5 section-kontakt"
      id={data.viditelnostVMenu.idSekce}
    >
      <h2 className="text-center mb-5">{data.nadpis}</h2>
      <div className="row">
        <div className="col-12 col-lg-6 text-left">
          <div dangerouslySetInnerHTML={{ __html: data.kontakt }}></div>
        </div>
        <div className="col-12 col-lg-6 mt-5 mt-lg-0 ">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                width="600"
                height="350"
                id="gmap_canvas"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2624.875221597534!2d17.14282525839216!3d48.86058973750488!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf76d0b5eeaa2c74a!2zUGVkaWvDunJhLCBtYW5pa8O6cmE!5e0!3m2!1scs!2scz!4v1652006532764!5m2!1scs!2scz"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Kontakt
