import React from 'react'

export default function Home() {
  return (

    <>
  {/* marquee */}
  <marquee className="marqueetag" width="100%" direction="left">
    अखिल भारतीय नार्मदीय ब्राह्मण समाज आपका हार्दिक स्वागत अभिनन्दन करता हैं !!
  </marquee>
  {/* marquee */}
  <div className="container block1 more-size">
    <div className="row">
    <div
  className="col-xs-12 col-md-4 marqee-tab ">
        <div className="society_news animated2 drop_eff2  ">
          <div className="news_list">
            <h2 className="gred_bg box-heading ">
              <a href="">
                <font color="white">नार्म‍दीय ब्राह्मण समाज मुख्य समाचार</font>
              </a>
            </h2>
            <marquee direction="up" height="350px" scrollamount={2}>
              <ul>
                <li>
                  <a href="/news#{{i}}" className="newshtitle">
                    test
                  </a>
                </li>
              </ul>
            </marquee>
            <h2 className="gred_bg box-heading ">
              <a href="">
                <font color="white">नार्म‍दीय ब्राह्मण समाज प्रतिभा</font>
              </a>
            </h2>
            <marquee direction="up" height="350px" scrollamount={2}>
              <ul>
                <li>
                  <a href="/news#{{i}}" className="newshtitle">
                    test
                  </a>
                </li>
              </ul>
            </marquee>
          </div>
        </div>
      </div>
      <div className="col-xs-12  col-md-8">
        {/* courasel slider  */}
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src={require('../img/rojgar sammelan-3.jpg')}
                width="1350px"
                height="450px"
                alt="Third slide"
              />
            </div>
            <div className="carousel-item ">
              <img
                className="d-block w-100"
                src={require('../img/Maheshwar.jpg')}
                width="1350px"
                height="450px"
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={require('../img/sunset-river-view-ahilya-fort-maheshwar-india-1919x1080.jpg')}
                width="1350px"
                height="450px"
                alt="Second slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
        {/* slider ends */}
        <div className="info">
          <p>
            "narmadiyabrahmins.com" वेबसाइट नार्मदीय ब्राह्मण समाज को आपस मे
            जोड़ने के रुप मे स्वयं का मंच प्रदान करने वाला एक मात्र विश्वसनीय
            संगठन है जो समाज की एकता , समस्त संगठनों की योजक कड़ी तथा सभी
            रजिस्टर्ड संस्थाओं को बढावा देने को ध्यान मे रखकर
            स्वाभीमानी,संगठित,अनुशासित,व कर्मठ कार्यकर्ताओ के बल पर कार्यरत है
            ओर राष्ट्रीय द्रष्टीकोण के साथ शिक्षा के विकास , समाज सुधार व विकास
            के नए आयाम की सोच रखने वाले विद्वानों द्वारा बताए मार्ग पर चलते हुए
            सम्पूर्ण नार्मदीय ब्राह्मण समाज को आपस मे जोड़ना ही हमारा मुख्य
            उद्देश्य है। हमारी टीम पूर्ण लोकतांत्रिक पद्धति से कार्यरत रहते हुए
            आपने लक्ष्य की ओर अग्रसर है।
            <br />
            <br />
            <b>निवेदन : </b>
            <br />
            <br />
            आप सभी समाजजनो से निवेदन है कि आप अपने-अपने सुझाव भेजकर इस वेब साईट
            को मजबूत बनायें ताकि आपसी सम्पर्क मे उपयोंग ले सके। आप सभी से निवेदन
            है। कि आप अपने-अपने क्षेत्र की संस्थाओ की पूरी जानकारी
            ritikatre27@gmail.com , himanshuatre088@gmail.com Whats app :
            7089986702 | 7694969509 को भेजें, हमे पूरी आशा है कि आप सभी लोग समाज
            को अन्तर्राष्ट्रीय स्तर पर जोड़ने मे हमारी सहायता करेगे।
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="home_middle more-size">
    <div className="container ndpatrika">
      {/*- start row 1 */}
      <div className="row">
        <div className="col-md-9 shadi-div">
          <div className="society_news skyblu_bg animated2 drop_eff2">
            <h2 className="gred_bg ">
              <font color="white">नार्मदीय वैवाहिक </font>
            </h2>
            <div className="shadi">
              <p>
                समाज के इस आर्थिक विकास के युग मे परिवार के लिए समय की कमी बढती
                जा रही है। इससे लङके लङकियो के वैवाहिक सम्बंध की खोज करने का समय
                भी नही मिल रहा है समाज के लोगो की इस बढती हुई परेशानी का सामना
                करना पङता है । योग्य व सही उचित संबंध हो इस हेतु नार्मदीय
                ब्राह्मण समाज ने विवाह योग्य लङके लङकियों की सुची इस वेबसाइट पर
                उपलब्ध करने का निर्णय लिया है इसमे आप सभी का सहयोग अपेक्षित है
                आप इसका फायदा उठावे तथा अपने सुझाव देते रहे ।
              </p>
              <p style={{ color: "red" }}>
                NOTE: विवाह के लिए पंजीकरण करने या लड़के/लडकियों की सूची देखने से
                पहले ये सुनिश्चित कर लें की आपका इस वेबसाइट में रजिस्ट्रेशन होना
                आवश्यक हैं |
              </p>
              <div className="btnvivah">
                <button className="vivah">
                  <a href="/matrimonyform">विवाह के लिए पंजीकरण फॉर्म </a>
                </button>
                <button className="vivah">
                  <a href="/matrimony"> विवाह योग्य लड़के एवं लडकियों की सूची</a>
                </button>
                <div className="registration">
                  <a href="/register">नया रजिस्ट्रेशन </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-md-3">
          <div className="society_news skyblu_bg animated2 drop_eff2">
            <h2 className="gred_bg ">
              <a href="">
                <font color="white">पत्रिकाए एवं प्रकाशन</font>
              </a>
            </h2>
            <div className="news_list">
              <p>
                नार्मदीय ब्राह्मण समाज के कई न्यास व इकाइयां हैं जो की समाज हित
                में अनेक पत्रिकाओं का प्रकाशन करते हैं |
              </p>
              <p>नार्मदीय ब्राह्मण समाज की मुख्य पत्रिकाओ का विवरण</p>
              <ul>
                <li>
                  <a href="/Patrika#patrika1"  className="newshtitle">
                    नार्मदीय लोक : एक मासिक पत्रिका
                  </a>
                </li>
                <li>
                  <a href="/Patrika#patrika2" className="newshtitle">
                    अभिरुचि : त्रेमासिक पत्रिका
                  </a>
                </li>
                <li>
                <a href="/Patrika#patrika3" className="newshtitle">
                    नार्मदीय जगत : एक मासिक पत्रिका
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Team */}
    <section id="team">
      <div className="container">
        <h5 className="section-title h1">महत्वपूर्ण सेवांए </h5>
        <div className="row">
          {/* Team member */}
          <div className="col-xs-12 col-sm-6 col-md-3">
            <div className="image-flip">
              <div className="mainflip flip-0">
                <div className="frontside">
                  <div className="card">
                    <div className="card-body text-center">
                      <p>
                        <img
                          className=" img-fluid" src={require('../img/directory.jpg')} />
                      </p>
                      <h4 className="card-title">समाज संपर्क</h4>
                      <a className="btn btn-primary btn-sm">
                        <i className="fa fa-plus" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="backside">
                  <div className="card">
                    <div className="card-body text-center mt-3">
                      <h4 className="card-title">समाज संपर्क</h4>
                      <p className="card-text">
                        समाज के सभी महत्वपूर्ण सद्स्यो, संस्थाओ, धर्मशालाओ एवं‌
                        ट्रस्ट के आवश्यक संपर्क देखने के लिये निचे दिये लिंक पर
                        क्लिक करें।{" "}
                      </p>
                      <a href="/sampark">click here</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ./Team member */}
          {/* Team member */}
          <div className="col-xs-12 col-sm-6 col-md-3">
            <div
              className="image-flip"
              ontouchstart="this.classList.toggle('hover');"
            >
              <div className="mainflip">
                <div className="frontside">
                  <div className="card">
                    <div className="card-body text-center">
                      <p>
                        <img
                          className=" img-fluid"
                          src={require('../img/talent.jpg')}
                        />
                      </p>
                      <h4 className="card-title">समाज प्रतिभा </h4>
                      <a className="btn btn-primary btn-sm">
                        <i className="fa fa-plus" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="backside">
                  <div className="card">
                    <div className="card-body text-center mt-3">
                      <h4 className="card-title">समाज प्रतिभा </h4>
                      <p className="card-text">
                        समाज के सभी प्रतिभाशाली बालक-बालिकाएँ, समाज रत्न
                        महिला-पुरुष की प्रतिभाये यहां प्रकाशित होंगी। अगर आप भी
                        अपनी जानकारी में कोई प्रतिभा को प्रकाशित करना चाहतें है
                        तो हमें संपर्क करें।{" "}
                      </p>
                      <a href="/pratibha">click here</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ./Team member */}
          {/* Team member */}
          <div className="col-xs-12 col-sm-6 col-md-3">
            <div
              className="image-flip"
              ontouchstart="this.classList.toggle('hover');"
            >
              <div className="mainflip">
                <div className="frontside">
                  <div className="card">
                    <div className="card-body text-center">
                      <p>
                        <img
                          className=" img-fluid"
                          src={require('../img/sanstha.jpg')}
                          
                        />
                      </p>
                      <h4 className="card-title">समाज संस्थाएँ</h4>
                      <a className="btn btn-primary btn-sm">
                        <i className="fa fa-plus" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="backside">
                  <div className="card">
                    <div className="card-body text-center mt-3">
                      <h4 className="card-title">समाज संस्थाएँ </h4>
                      <p className="card-text">
                        समाज के सभी महत्वपूर्ण संस्थाओ, धर्मशालाओ एवं‌ ट्रस्ट की
                        आवश्यक जानकारी देखने के लिये निचे दिये लिंक पर क्लिक
                        करें।
                      </p>
                      <a href="/sanstha">click here</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ./Team member */}
          {/* Team member */}
          <div className="col-xs-12 col-sm-6 col-md-3">
            <div
              className="image-flip"
              ontouchstart="this.classList.toggle('hover');"
            >
              <div className="mainflip">
                <div className="frontside">
                  <div className="card">
                    <div className="card-body text-center">
                      <p>
                        <img
                          className=" img-fluid"
                          src={require('../img/family--share.6b7d8e3c9abd.jpg')}

                        />
                      </p>
                      <h4 className="card-title">समाज विस्तार</h4>
                      <a className="btn btn-primary btn-sm">
                        <i className="fa fa-plus" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="backside">
                  <div className="card">
                    <div className="card-body text-center mt-3">
                      <h4 className="card-title">समाज विस्तार</h4>
                      <p className="card-text">
                        नार्मदीय ब्राह्मण समाज के सभी गौत्र, उपनाम एव उनकी
                        कुलदेवियो-कुलगुरुओ की जानकारी के लिये निचे दि गयी लिंक
                        पर क्लिक करे।
                      </p>
                      <a href="/About">click here</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ./Team member */}
          {/* Team member */}
          <div className="col-xs-12 col-sm-6 col-md-3">
            <div
              className="image-flip"
              ontouchstart="this.classList.toggle('hover');"
            >
              <div className="mainflip">
                <div className="frontside">
                  <div className="card">
                    <div className="card-body text-center">
                      <p>
                        <img
                          className=" img-fluid"
                          src={require('../img/blood.jpg')}

                        />
                      </p>
                      <h4 className="card-title">ब्लड बैंक </h4>
                      <a className="btn btn-primary btn-sm">
                        <i className="fa fa-plus" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="backside">
                  <div className="card">
                    <div className="card-body text-center mt-3">
                      <h4 className="card-title">ब्लड बैंक </h4>
                      <p className="card-text">
                        आपातकालिन परिस्थिति मे आवश्यक ब्लड की पुर्ति हेतु ब्लड
                        बैंक मे सम्पर्क कर सकते है। जानकारी के लिये निचे दिये
                        गये लिंक को क्लिक करे।
                      </p>
                      <a href="/bloodbank">click here</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ./Team member */}
          {/* Team member */}
          <div className="col-xs-12 col-sm-6 col-md-3">
            <div
              className="image-flip"
              ontouchstart="this.classList.toggle('hover');"
            >
              <div className="mainflip">
                <div className="frontside">
                  <div className="card">
                    <div className="card-body text-center">
                      <p>
                        <img
                          className=" img-fluid"
                          src={require('../img/donations.jpg')}

                        />
                      </p>
                      <h4 className="card-title">दान-दक्षिणा </h4>
                      <a className="btn btn-primary btn-sm">
                        <i className="fa fa-plus" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="backside">
                  <div className="card">
                    <div className="card-body text-center mt-3">
                      <h4 className="card-title">दान-दक्षिणा </h4>
                      <p className="card-text">
                        समाज के दान-दाताओ कि सुची, और आप भी समाज को आर्थिक रुप
                        से मजबूत बनाने एवम वेबसाइट केे संचालन हेतु दान दे सकते
                        है।{" "}
                      </p>
                      <a href="donation">click here</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ./Team member */}
          {/* Team member */}
          <div className="col-xs-12 col-sm-6 col-md-3">
            <div
              className="image-flip"
              ontouchstart="this.classList.toggle('hover');"
            >
              <div className="mainflip">
                <div className="frontside">
                  <div className="card">
                    <div className="card-body text-center">
                      <p>
                        <img
                          className=" img-fluid"
                          src={require('../img/advertising-1200x900.jpg')}

                        />
                      </p>
                      <h4 className="card-title">विज्ञापन </h4>
                      <a className="btn btn-primary btn-sm">
                        <i className="fa fa-plus" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="backside">
                  <div className="card">
                    <div className="card-body text-center mt-3">
                      <h4 className="card-title">विज्ञापन </h4>
                      <p className="card-text">
                        अपने व्यापार, फर्म , दुकान , संस्थान , आदि का विज्ञापन
                        करने हेतु हमसे सम्पर्क करे, अधिक जानकारी के लिये निचे
                        दिये लिंक पर क्लिक करे।{" "}
                      </p>
                      <a href="add">click here</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ./Team member */}
          {/* Team member */}
          <div className="col-xs-12 col-sm-6 col-md-3">
            <div
              className="image-flip"
              ontouchstart="this.classList.toggle('hover');"
            >
              <div className="mainflip">
                <div className="frontside">
                  <div className="card">
                    <div className="card-body text-center">
                      <p>
                        <img
                          className=" img-fluid"
                          src={require('../img/feedback.jpg')}

                        />
                      </p>
                      <h4 className="card-title">फीडबेक </h4>
                      <a className="btn btn-primary btn-sm">
                        <i className="fa fa-plus" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="backside">
                  <div className="card">
                    <div className="card-body text-center mt-3">
                      <h4 className="card-title">फीडबेक</h4>
                      <p>
                        इस वेबसाइट के संदर्भ मे आपके कोइ सुझाव या शिकायत हो तो
                        हमे जरुर बताये, निचे दिये लिंक को क्लिक कर के आप अपना
                        फीडबेक दे सकते है।{" "}
                      </p>
                      <a href="contactus">click here</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ./Team member */}
        </div>
      </div>
    </section>
    {/* Team */}
  </div>


    </>
  )
}
