import Image from "next/image"
export default function Home() {
  return (
    <>
      <div>
        <header className="masthead">
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12 text-center">
                <h1 className="fw-bolder text-white">Get A Superhero Design Team <br /> To Grow Your Business</h1>
                <p className="fw-display text-white mt-3 mb-3">We provide an experienced design team that works with you everyday
                  <br /> to create high-quality design assets to help grow your business.
                  <br /> Zero headaches, fixed pricing and no contracts.
                </p>
                <button className="btn" id="pricing">SEE OUR PRICING</button>
              </div>
            </div>
          </div>
        </header>
      </div>
      <section id="clients">
        <div className="container tag">
          <div className="row g-0 justify-content-center clearfix wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
            <div className="col-lg-2 col-md-12 col-xs-6">
              <div className="client-logo">
                <img src="/edu.png" className="img-fluid" alt />
              </div>
            </div>
            <div className="col-lg-2 col-md-12 col-xs-6">
              <div className="client-logo">
                <img src="/streak.png" className="img-fluid" alt />
              </div>
            </div>
            <div className="col-lg-2 col-md-12 col-xs-6">
              <div className="client-logo">
                <img src="/lion.png" className="img-fluid" alt />
              </div>
            </div>
            <div className="col-lg-2 col-md-12 col-xs-6">
              <div className="client-logo">
                <img src="/profit.svg" className="img-fluid" alt />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container tag px-4 px-lg-5">
        <div className="text-center">
          <h1 className="fw-bold mb-5 py-5 text-white" style={{ fontSize: '2rem' }}>We get it. Reliable designers <br /> <span style={{ color: "#50b8dc" }}>are hard to find</span></h1>
        </div>
        <div className="row gx-4 gx-lg-5 row-cols-3 row-cols-md-3 row-cols-xl-3 ms-auto">
          <div className="col-lg-6 col-md-6 mb-5">
            <div className="card h-100" style={{ width: "18em" }}>
              <img src="/people1.svg" className="card-img-top" id="cardimg" alt />
              <div className="card-body">
                <h5 className="card-title text-white">Poor Quality</h5>
                <p className="card-text mb-5" style={{ color: "#d4d6ff" }}>You’re tired of the guessing game to find the right designer.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 mb-5">
            <div className="card h-100" style={{ width: "18em" }}>
              <img src="/people2.svg" className="card-img-top" id="cardimg" alt />
              <div className="card-body">
                <h5 className="card-title text-white">Bad Communication</h5>
                <p className="card-text mb-5" style={{ color: "#d4d6ff" }}>You’re fed up with having to explain yourself multiple times.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 mb-5">
            <div className="card h-100" style={{ width: "18em" }}>
              <img src="/people3.svg" className="card-img-top" id="cardimg1" alt />
              <div className="card-body">
                <h5 className="card-title text-white">Missed Deadlines</h5>
                <p className="card-text mb-5" style={{ color: "#d4d6ff" }}>You lose hope as deadlines are missed over and over again.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container tag px-4 px-lg-5">
        <div className="text-center">
          <h1 className="fw-bold mb-5 py-5 text-white" style={{ fontSize: '2rem' }}>Design doesn’t have to be hard. <br /> <span style={{ color: "#50b8dc" }}>We make it easy.</span></h1>
        </div>
        <div className="row mb-5 align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="lc-block">
              <img src="/animate2.svg" className="img-fluid" alt />
            </div>
          </div>
          <div className="col-lg-6 p-lg-2">
            <div className="lc-block mb-5">
              <div className="text-center">
                <h2 className="fw-bold text-white">Breath-taking Designs</h2>
                <p className="fw-display" style={{ color: "#d4d6ff" }}>All of our designers are carefully vetted and have years of experience working in the design industry.<br /><br />You’ll get a dedicated UI Designer, Graphic Designer, Illustrator and Project Manager. With a full design team, getting breath-taking designs couldn't be any easier!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5 align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="lc-block">
              <img src="/animate1.svg" className="img-fluid" alt />
            </div>
          </div>
          <div className="col-lg-6 p-lg-2">
            <div className="lc-block mb-5">
              <div className="text-center">
                <h2 className="fw-bold text-white">Communication That Matters</h2>
                <p className="fw-display" style={{ color: "#d4d6ff" }}>With a dedicated Project Manager who cares about your success <br /> and direct live-chat access to your experienced designers, communication issues will be no more! </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container tag px-4 px-lg-5">
        <div className="text-center">
          <h1 className="fw-bold mb-5 py-5 text-white" style={{ fontSize: '2rem' }}>How it<span style={{ color: "#50b8dc", paddingLeft: "0.3em" }}>works</span></h1>
        </div>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <ul className="timeline text-white">
              <li>
                <div className="card w-100 px-3 py-2">
                  <p className="fw-bold">Create design projects</p>
                  <p className="fw-display">Submit as many job requests as you want. We'll then assign you your personal designers and project manager to work on these requests.</p>
                </div>
              </li>
              <li>
                <div className="card w-100 px-3 py-2">
                  <p className="fw-bold">Drafts & revisions</p>
                  <p className="fw-display">You’ll receive your design within a few business days. Submit as many revisions as you want until the design is perfect!</p>
                </div>
              </li>
              <li>
                <div className="card w-100 px-3 py-2">
                  <p className="fw-bold">Complete & download</p>
                  <p className="fw-display">Submit as many job requests as you want. We'll then assign you your personal designers and project manager to work on these requests.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 text-center">
          <button className="btn" id="pricing">MORE INFO</button>
        </div>
      </div>
    </>
  )
}
