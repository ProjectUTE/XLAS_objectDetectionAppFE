import {
  AiOutlineCamera,
  AiOutlineSend,
  AiOutlineCloudDownload,
} from 'react-icons/ai';
function HowToWork() {
  return (
    <section className="services section container" id="services">
      <h2 className="section__title">How Does It Work?</h2>
      <div className="services__container grid">
        <div className="services__data">
          <h3 className="services__subtitle">Select an image</h3>
          <AiOutlineCamera className="svg__color services__img" />
          <p className="services__description">
            Select an image for your directory or drag and drop it into the
            provied dropzone in the browser.
          </p>
          <div>
            <div className="button button-link">Step 1</div>
          </div>
        </div>
        <div className="services__data">
          <h3 className="services__subtitle">Send the image</h3>
          <AiOutlineSend className="svg__color services__img" />
          <p className="services__description">
            Press the send image button to send the image to the machine
            learning.
          </p>
          <div>
            <div className="button button-link">Step 2</div>
          </div>
        </div>
        <div className="services__data">
          <h3 className="services__subtitle">Get result</h3>
          <AiOutlineCloudDownload className="svg__color services__img" />
          <p className="services__description">
            Next, the machine learning model processes the image and the result
            is printed on the screen.
          </p>
          <div>
            <div className="button button-link">Step 3</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowToWork;
