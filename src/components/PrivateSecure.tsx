import React from 'react';
import { Image,  Text, PrimaryButton } from '@fluentui/react';
import secureImage from '../assets/Security.png'; // Adjust the path as necessary

// Constants for the content text
const HEADER_TEXT = "Private and Secure";
const PARAGRAPH_TEXT = "Cortico prioritizes security by design, and is in a class of its own for patient privacy. What sets Cortico apart as a unique patient platform is it stores no personal health information, period.";

// Styles for the elements
const styles = {
  outerContainer: {
    backgroundColor: '#F0F0F0', // Light gray background
    padding: '40px',
    borderRadius: '10px',
    maxWidth: '1200px',
    margin: '0 auto', // Center the container
  } as React.CSSProperties,
  contentContainer: {
    display: 'flex',
    flexDirection: 'row', // Image on the left, text on the right
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexWrap: 'wrap', // Wrap on small screens
  } as React.CSSProperties,
  imageContainer: {
    flex: '1 1 250px', // Allow image container to grow and shrink
    marginRight: '20px',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px', // Space below the image
  } as React.CSSProperties,
  image: {
    maxWidth: '80%', // Adjust image size for responsiveness
    height: 'auto',
    borderRadius: '15px',
  } as React.CSSProperties,
  textContainer: {
    flex: '1 1 400px', // Allow text container to grow and shrink
    textAlign: 'left', // Align text to the left
    display: 'flex', // Use flex for vertical stacking
    flexDirection: 'column', // Stack items vertically
  } as React.CSSProperties,
  header: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: '2rem',
    marginBottom: '0.5rem', // Space between header and paragraph
  } as React.CSSProperties,
  paragraph: {
    fontSize: '1rem',
    color: 'black',
    margin: '10px 0',
  } as React.CSSProperties,
  button: {
    marginTop: '20px',
    padding: '6px 12px', // Adjust padding for a smaller button
    fontSize: '0.9rem', 
    borderRadius: '8px',
  } as React.CSSProperties,
};

// Functional Component
const PrivateSecure = () => {
  return (
    <div style={styles.outerContainer}>
      <div style={styles.contentContainer}>
        {/* Image Section */}
        <div style={styles.imageContainer}>
          <Image src={secureImage} alt="Shield Image" style={styles.image} />
        </div>

        {/* Text Section */}
        <div style={styles.textContainer}>
          {/* Header */}
          <Text variant="xLarge" style={styles.header}>
            {HEADER_TEXT}
          </Text>
          {/* Paragraph */}
          <Text style={styles.paragraph}>
            {PARAGRAPH_TEXT}
          </Text>
          {/* Button */}
          <div><PrimaryButton text="Learn More" style={styles.button} /></div>
        </div>
        
      </div>
      
    </div>
    
  );
};

export default PrivateSecure;
