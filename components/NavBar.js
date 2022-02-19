import styles from '../styles/Global.module.css';
import { useContext, useEffect, useRef, useState } from 'react';
import { ViewRouteContext } from '../context/ViewRoute';
import {
  Box,
  Image,
  Text,
  IconMdHome,
  IconMdPerson,
  IconMdInsertDriveFile,
  IconMdMyLocation,
} from '../shared/chakra';
export default function NavBar(props) {
  const { navVisitble } = props;
  const [playerStatus, setPlayerStatus] = useState(false);
  const [audio, setAudio] = useState(null);
  const roar = useRef(null);
  const { viewRoute, setViewRoute } = useContext(ViewRouteContext);

  useEffect(() => {
    if (audio) {
      audio.oncanplaythrough = function () {
        audio.play();
        setPlayerStatus(true);
      };
    }
  }, [audio]);

  return (
    <>
      <Box
        className={styles.navbar}
        left={!navVisitble ? '-80px' : '0'}
        transform={!navVisitble ? 'scale(0)' : 'scale(1)'}
      >
        <Box w="100px">
          <Image
            src="/logo.png"
            className={playerStatus ? 'playerOn' : ''}
            onClick={(e) => {
              if (!audio) setAudio(new Audio('/song.mp3'));
              else {
                if (playerStatus) {
                  audio.pause();
                  setPlayerStatus(false);
                } else {
                  audio.currentTime = 0;
                  audio.play();
                  setPlayerStatus(true);
                }
              }
            }}
          />
          <Box className={styles.roar} ref={roar}>
            Ahggg!
          </Box>
        </Box>
        <Box className={styles.navbar_options}>
          <Box>
            <Text
              className={viewRoute === 'home' ? styles.select : ''}
              onClick={(e) => {
                setViewRoute('home');
              }}
            >
              <IconMdHome></IconMdHome>
            </Text>
          </Box>
          <Box>
            <Text
              className={viewRoute === 'about' ? styles.select : ''}
              onClick={(e) => {
                setViewRoute('about');
              }}
            >
              <IconMdPerson></IconMdPerson>
            </Text>
          </Box>
          <Box
            onClick={(e) => {
              window.open('/Alexandro_Tapia_CV.pdf');
            }}
          >
            <Text className={viewRoute === 'resume' ? styles.select : ''}>
              <IconMdInsertDriveFile></IconMdInsertDriveFile>
            </Text>
          </Box>
          <Box>
            <Text
              className={viewRoute === 'contact' ? styles.select : ''}
              onClick={(e) => {
                setViewRoute('contact');
              }}
            >
              <IconMdMyLocation></IconMdMyLocation>
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}
