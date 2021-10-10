import React, { useState } from "react";
import Post from "../components/PostClassOrCommunity/Post";
import { PostContainer } from "../components/PostClassOrCommunity/style";
import post1 from "../assets/img/post1.jpg";
import ModalVideo from "../components/ModalVideo/ModalVideo";

const Clases = () => {
  const [clase, setClase] = useState([]);
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [modal, setModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!url.includes("https://www.youtube.com/watch?v=")) {
      alert("Ingresa un link valido.");
    } else {
      const keyUrl = url.search("&")
        ? url.slice(url.indexOf("=") + 1, url.indexOf("&"))
        : url.slice(url.indexOf("=") + 1, url.length + 1);

      setClase([
        ...clase,
        { id: String(+Date.now()), url: keyUrl, title: title, desc: desc },
      ]);
    }
  };
  const handleShow = () => {
    setModal(true);
  };
  return (
    <div>
      <PostContainer>
        <p>Rellena la informacion de tu clase:</p>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder="Titulo del video"
            />
            <input
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
              placeholder="Descripcion del video"
            />
            <input
              onChange={(e) => setUrl(e.target.value)}
              value={url}
              placeholder="Link del video eg. Youtube"
            />
          </div>
          <button type="submit">Subir</button>
        </form>
        <span>
          {clase.map((cls) => (
            <Post key={cls.id} title={cls.title} desc={cls.desc} image={post1}>
              <button onClick={handleShow}>
                Pulsa aqui para ver la clase.
              </button>
              {modal && (
                <ModalVideo
                  key={cls.id}
                  videoId={cls.url}
                  setModal={setModal}
                />
              )}
            </Post>
          ))}
        </span>
        <Post
          title="Post Class #1"
          desc="Esta es una clase que trata de cosas de la vida porque asi es la vida cuando es la vida de la vida vamos a por todas"
          image={post1}
        />
      </PostContainer>
    </div>
  );
};

export default Clases;
