import styles from '../styles/Global.module.css';
import { Box, Text } from '../shared/chakra';

export default function TimelineELement(props) {
  const { skills, date, title, description } = props;
  return (
    <>
      <Box
        padding="30px"
        display="flex"
        flexDir="column"
        margin="auto"
        justifyContent="center"
        alignItems="center"
        className={styles.timelineContainer}
      >
        <Box className={styles.timelineDate}>
          <span>{date}</span>
        </Box>
        <Box w="100%">
          <b>{title}</b>
          <Text>{description}</Text>
          <hr></hr>
          <Box className={styles.skillsContainer} mt="30px">
            {skills.map((skill, index) => (
              <Box
                w="100%"
                color="green.300"
                fontWeight="bold"
                key={`index-${index}`}
              >
                <Text>{skill}</Text>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
