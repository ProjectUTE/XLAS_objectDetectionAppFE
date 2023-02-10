import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { BiSkipNext } from 'react-icons/bi';
import { MdLiveTv } from 'react-icons/md';

function EmptyImage() {
  return <div style={{ height: '300px' }}></div>;
}

function DemoEditor() {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  function handleResetImageUpload() {
    setSelectedFile(null);
  }

  function handleChangeImageUpload(e) {
    if (!e.target.files || e.target.files.length === 0) {
      selectedFile(null);
      return;
    }
    setSelectedFile(e.target.files[0]);
    e.target.value = null;
  }

  useEffect(() => {
    if (!selectedFile) {
      setPreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  return (
    <section className="app section container">
      <div className="app__container grid">
        <div className="app__data">
          <h2 className="section__title-center">Demo Editor</h2>
          <div className="app__description">
            {preview ? (
              <img
                style={{
                  borderRadius: '10px',
                }}
                src={preview}
                alt=""
              />
            ) : (
              <EmptyImage />
            )}
          </div>
          <div
            className="app__buttons"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <label className="button button-flex" htmlFor="uploadImage">
              <BiSkipNext className="button__icon" />
              Upload
            </label>
            <input
              type={'file'}
              hidden={true}
              id="uploadImage"
              onChange={handleChangeImageUpload}
            />
            <button className="button button-flex">
              <MdLiveTv className="button__icon" />
              Send
            </button>
            <button
              className="button button-flex"
              onClick={handleResetImageUpload}
            >
              <MdLiveTv className="button__icon" />
              Reset
            </button>
          </div>
        </div>
        {/* Result */}
        <div className="app__data">
          <h2 className="section__title-center">Result</h2>
          <div className="app__description">
            {/* <img
              style={{ borderRadius: '10px' }}
              src="https://images.unsplash.com/photo-1490885578174-acda8905c2c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
              alt=""
            /> */}
            <EmptyImage />
          </div>
          <div
            className="app__buttons"
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <button className="button button-flex">
              <MdLiveTv className="button__icon" />
              Download Image
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DemoEditor;

DemoEditor.propTypes = {};
