import styles from "../styles/Global.module.css";
import { Box, Text, Button, CheckCircleIcon } from "../shared/chakra";
import { ViewRouteContext } from "../context/ViewRoute";
import { useContext } from "react";

export default function Home(props) {
  const { fullScreen } = props;
  const { _, setViewRoute } = useContext(ViewRouteContext);
  return (
    <>
      <Box
        className={styles.main + (fullScreen ? " " + styles.fullScreen : "")}
      >
        <Box className={styles.title + " " + styles.titleFirst}>
          <span>Hi visitor!</span>
          <h1 className={styles.heading}>
            I'm <span>ALEXANDRO TAPIA</span>
          </h1>
          <Text>Django - Next - Chakra ❤️</Text>
          <Box className={styles.buttonContainer}>
            <Button
              color="white.400"
              background="green.600"
              onClick={(e) => {
                setViewRoute("about");
              }}
            >
              About me
            </Button>
            <Button
              color="white.400"
              background="green.600"
              onClick={(e) => {
                window.open("/Alexandro Tapia - CV.pdf");
              }}
            >
              Resume
            </Button>
            <Button
              color="white.400"
              background="green.600"
              onClick={(e) => {
                setViewRoute("contact");
              }}
            >
              Contact me
            </Button>
          </Box>
        </Box>
        <Box className={styles.title + " " + styles.technologiesContainer}>
          <Box>
            <Text>
              <CheckCircleIcon color="green.400"></CheckCircleIcon>{" "}
              <b>Full stack software developer</b> from Ecuador 🇪🇨,{" "}
              <b>best graduated Mechatronics engineer</b> with experience in{" "}
              <b>languages and frameworks like:</b>
            </Text>
            <Text className={styles.technologies}>
              JavaScript (React - NextJs, AngularJs, Angular 9, Express,
              Handlebars), Python (Flask, Django, Jinja), CSS (Bootstrap, Sass),
              C++, C#, Java, HTML, VBScript, MQL4 – MQL5, Ladder, LabVIEW,
              MATLAB
            </Text>
            <Text>
              <CheckCircleIcon color="green.400"></CheckCircleIcon>{" "}
              <b>
                Experience designing, creating, managing and maintaining
                databases in:
              </b>
            </Text>
            <Text className={styles.technologies}>
              MongoDB, MySQL, PostgreSQL, SQLite, MariaDB, Redis, Firebase -
              Firestore and Realtime database.
            </Text>
            <Text>
              <CheckCircleIcon color="green.400"></CheckCircleIcon>{" "}
              <b>
                Experience using and developing in Microsoft, AWS, Google and
                other paid and Open-Source technologies, for example:
              </b>{" "}
            </Text>
            <Text className={styles.technologies}>
              Git, Postman, Celery, RabbitMQ, Netlify, Vercel, Twilio,
              DialogFlow, Jira, Slack, HubSpot, Zapier, Hubstaff, Bitbucket.
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}
