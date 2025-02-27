import { useEffect, useState } from "react";
import s from "./VideoPlayer.module.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import { Flex } from "antd";
export const VideoPlayer = () => {
  const [scriptHMTL, setScriptHTML] = useState("");
  const [error, setError] = useState<null | string>(null);
  const dataUrl = window.location.href;
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(
        `//js.espanplay.site/get_player?w=610&h=370&type=widget&kp_id=${id}&players=apicollaps,videocdn,hdvb,bazon,alloha,ustore,kodik,trailer&r_id=videoplayers&ani=COLLAPS&ati=&adi=&vni=VIDEOCDN&vti=&vdi=&hni=HDVB&hti=&hdi=&bni=BAZON&bti=&bdi=&alni=ALLOHATV&alti=&aldi=&usni=USTOREBZ&usti=&usdi=&koni=KODIK&koti=&kodi=&tti=&ru=` +
          dataUrl
      )
      .then((res) => {
        setScriptHTML(res.data.match(/<iframe.*<\/iframe>/gm)[1]);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  useEffect(() => {
    if (error) {
      toast.error(
        "Сервер выполняет редирект. Возможно, поможет включение или смена VPN.",
        {
          position: "top-right",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        }
      );
    }
  }, [error]);
  return (
    <>
      {error && (
        <Flex className={s.errorBlock} align="center" justify="center">
          <p className={s.errorMessage}>Произошла ошибка</p>
        </Flex>
      )}

      {!error && (
        <div
          className={s.videoPlayer}
          id="videoplayers"
          dangerouslySetInnerHTML={{ __html: scriptHMTL }}
        ></div>
      )}
    </>
  );
};
