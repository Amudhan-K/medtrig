import React from 'react';
import { Image, Text, PrimaryButton } from '@fluentui/react';
import telemedImage from '../assets/telemed.png'; // Ensure this path is correct
import tickIcon from '../assets/tick.svg'; // Path to your tick icon

// Constants for the content text
const HEADER_TEXT = "The Most Complete Telemedicine Toolset";
const LIST_ITEMS = [
  "Conduct consultations, diagnose patients, and take notes in your EMR alongside a built-in video conferencing platform.",
  "Securely send prescriptions and lab requisitions straight from your EMR.",
  "No app or password required.",
  "Secure platform with no data stored."
];

// Styles for the elements
const styles = {
  outerContainer: {
    margin: '0 auto',
    padding: '40px',
  } as React.CSSProperties,
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  } as React.CSSProperties,
  imageContainer: {
    flex: '1 1 300px',
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
  } as React.CSSProperties,
  image: {
    maxWidth: '90%',
    height: 'auto',
    borderRadius: '34px',
  } as React.CSSProperties,
  textContainer: {
    flex: '1 1 400px',
    paddingLeft: '20px',
  } as React.CSSProperties,
  header: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: '2rem',
    marginBottom: '1rem',
  } as React.CSSProperties,
  listItem: {
    fontSize: '1rem',
    color: 'black',
    margin: '10px 0',
    display: 'flex',
    alignItems: 'center', // Align tick icon with text
    fontWeight: 'bold',
  } as React.CSSProperties,
  tickIcon: {
    width: '20px', // Width for the tick icon
    height: '20px',
    marginRight: '10px', 
    
    verticalAlign: 'middle',
  } as React.CSSProperties,
  button: {
    marginTop: '20px',
    borderRadius: '5px'
  } as React.CSSProperties,
};

// Functional Component
const Telemedicine = () => {
  return (
    <div style={styles.outerContainer}>
      <div style={styles.contentContainer}>
        {/* Image Section */}
        <div style={styles.imageContainer}>
          <Image src={telemedImage} alt="Telemedicine" style={styles.image} />
        </div>

        {/* Text Section */}
        <div style={styles.textContainer}>
          {/* Header */}
          <Text variant="xLarge" style={styles.header}>
            {HEADER_TEXT}
          </Text>

          {/* List with Tick Icon */}
          <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
            {LIST_ITEMS.map((item, index) => (
              <li key={index} style={styles.listItem}>
                <Image src={tickIcon} alt="Tick Icon" style={styles.tickIcon} /> {/* Tick Icon */}
                {item}
              </li>
            ))}
          </ul>

          {/* Button */}
          <PrimaryButton text="Learn More" style={styles.button} />
        </div>
      </div>
    </div>
  );
};

export default Telemedicine;
