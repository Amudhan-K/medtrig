import * as React from "react";
import { Image, Stack, Text } from "@fluentui/react";
import bookingImage from '../assets/booking.png'; // Ensure this path is correct
import tickIcon from '../assets/tick.svg'; // Path to your tick icon
import { makeStyles, Button } from "@fluentui/react-components";
import { CalendarMonthRegular } from "@fluentui/react-icons";

// Constants for the content text
const HEADER_TEXT = "Appointment Reminders";
const LIST_ITEMS = [
  "Reduce no-shows and late cancellations.",
  "Decrease wait times and increase efficiency.",
  "Email and SMS reminders tailored to different appointment types.",
  "Enable online appointment cancellations within a custom time frame."
];

// Styles for the elements
const useStyles = makeStyles({
  outerContainer: {
    margin: '0 auto',
    padding: '40px',
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'row', // Row layout for larger screens
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  textContainer: {
    flex: '1 1 400px', // Allow text container to grow and shrink
    paddingRight: '20px', // Space between text and image
  },
  header: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  listItem: {
    fontSize: '1rem',
    color: 'black',
    margin: '10px 0',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  tickIcon: {
    marginRight: '10px',
    width: '20px',
    height: '20px',
  },
  button: {
    marginTop: '20px',
    borderRadius: '8px',  // Rounded edges for the button
  },
  imageContainer: {
    flex: '1 1 300px', // Allow image container to grow and shrink
    display: 'flex', 
    justifyContent: 'center', 
  },
  image: {
    maxWidth: '90%', // Responsive image size
    height: 'auto',
    borderRadius: '25px',
  },
});

const AppointmentReminders = () => {
  const styles = useStyles();

  return (
    <div className={styles.outerContainer}>
      <div className={styles.contentContainer}>
        {/* Text Section */}
        <div className={styles.textContainer}>
          {/* Header */}
          <Text variant="xLarge" className={styles.header}>
            {HEADER_TEXT}
          </Text>

          {/* List */}
          <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
            {LIST_ITEMS.map((item, index) => (
              <li key={index} className={styles.listItem}>
                <img src={tickIcon} alt="Tick Icon" className={styles.tickIcon} />
                {item}
              </li>
            ))}
          </ul>

          {/* Primary Button with rounded edges */}
          <Button appearance="primary"  className={styles.button}>
            Learn More
          </Button>
        </div>

        {/* Image Section */}
        <div className={styles.imageContainer}>
          <Image src={bookingImage} alt="Appointment Booking" className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentReminders;
