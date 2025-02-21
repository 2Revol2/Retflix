import { useEffect, useState } from "react";
import s from "./VideoPlayer.module.scss";
import axios from "axios";

export const VideoPlayer = () => {
  const [scriptHMTL, setScriptHTML] = useState("");
  const dataUrl = window.location.href;
  useEffect(() => {
    axios
      .get(
        "//js.espanplay.site/get_player?w=610&h=370&type=widget&kp_id=&players=apicollaps,videocdn,hdvb,bazon,alloha,ustore,kodik,trailer&r_id=videoplayers&ani=COLLAPS&ati=&adi=&vni=VIDEOCDN&vti=&vdi=&hni=HDVB&hti=&hdi=&bni=BAZON&bti=&bdi=&alni=ALLOHATV&alti=&aldi=&usni=USTOREBZ&usti=&usdi=&koni=KODIK&koti=&kodi=&tti=&ru=" +
          dataUrl
      )
      .then((res) => {
        setScriptHTML(res.data.match(/<iframe.*<\/iframe>/gm)[1])
      });
  }, []);

  return (
    <div
      className={s.videoPlayer}
      id="videoplayers"
      dangerouslySetInnerHTML={{ __html: scriptHMTL }}
    ></div>
  );
};
