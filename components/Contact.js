import styles from '../styles/Global.module.css';
import { Box } from '../shared/chakra';

export default function About(props) {
  const { fullScreen } = props;
  return (
    <>
      <Box
        className={styles.contact + (fullScreen ? ' ' + styles.fullScreen : '')}
      >
        <Box>
          <div></div>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3304.727565360205!2d-118.4308681!3d34.0764974!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc65c07ac239%3A0x9f66d4bfd54b427!2sPlayboy%20Mansion!5e0!3m2!1sen!2sec!4v1615422310404!5m2!1sen!2sec'
            width='100%'
            height='100%'
            allowFullScreen={true}
            loading='lazy'
          ></iframe>
        </Box>
      </Box>
    </>
  );
}
