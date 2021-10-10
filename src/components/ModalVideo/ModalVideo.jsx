import React, { useState } from "react";
import YouTube from "react-youtube";
import styled from "styled-components";

function ModalVideo({ videoId, setModal }) {
  const [overlayClicked, setOverlayClicked] = useState(false);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      {videoId && (
        <ModalVideoContainer
          overlay={overlayClicked ? "none" : "grid"}
          onClick={() => {
            setOverlayClicked(!overlayClicked);
            setModal(false);
          }}
        >
          <ModalVideoYoutube>
            {!overlayClicked && (
              <YouTube
                videoId={videoId}
                opts={opts}
                onReady={(e) => e.target.playVideo()}
              />
            )}
          </ModalVideoYoutube>
        </ModalVideoContainer>
      )}
    </>
  );
}

export default ModalVideo;

const ModalVideoContainer = styled.div`
  position: fixed;
  display: ${(props) => props.overlay};
  place-items: center;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalVideoYoutube = styled.div`
  position: relative;
  z-index: 2000;
`;
