const LargeVideo = ({ data }) => {
  return (
    <section className="container section-padding px-5 section-kontakt" id={data.viditelnostVMenu.idSekce}>
        <h2 className="text-center mb-5">{data.nadpis}</h2>
        <div className="row">
            <div className="col-12 col-lg-6 text-left">
                <div dangerouslySetInnerHTML={{ __html: data.kontakt }}></div>
            </div>
            <div className="col-12 col-lg-6 mt-5 mt-lg-0 ">
                <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="350" id="gmap_canvas" src="https://maps.google.com/maps?q=Pedik%C3%BAra,%20manik%C3%BAra%20Hodon%C3%ADn&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
            </div>
        </div>
    </section>
  )
}

export default LargeVideo
