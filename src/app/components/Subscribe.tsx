export default function Subscription() {
  return (
    <>
      <center>
        <div className="subscribe-area pt-10 py-24">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="subscribe">
                  <form action="#">
                    <input type="text" placeholder="Enter your email address" />
                    <button
                      className="submit-button submit-btn-2 button-one"
                      data-text="subscribe"
                      type="submit"
                    >
                      subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}
