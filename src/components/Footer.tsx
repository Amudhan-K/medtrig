import * as React from 'react';
import { Image, Text, makeStyles, FluentProvider, webLightTheme } from '@fluentui/react-components';

// Import the images
import logo from '../assets/logo.png';
import facebookIcon from '../assets/facebook.png';
import twitterIcon from '../assets/twitter.png';
import linkedinIcon from '../assets/linkedin.png';
import instagramIcon from '../assets/instagram.png';

const useStyles = makeStyles({
  footer: {
    backgroundColor: '#16263D',
    padding: '40px 20px',
    color: '#fff',
    display: 'flex',
    marginTop: '20px',
    justifyContent: 'space-between', // Space between columns (left, center, right)
  },
  column: {
    flex: '1',
    padding: '10px',
  },
  logo: {
    maxWidth: '200px',
    marginBottom: '20px',
  },
  contactInfo: {
    marginBottom: '10px',
  },
  textLink: {
    color: '#fff',
    display: 'block', // Each text on a new line
    marginBottom: '5px',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline', // Hover effect
    },
  },
  centerSection: {
    textAlign: 'center',
  },
  rightSection: {
    textAlign: 'right',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'flex-start', // Align social icons to the right in the right section
    gap: '15px',
    marginTop: '15px',
  },
  socialIcon: {
    width: '30px',
    height: '30px',
  },
});

const Footer: React.FC = () => {
  const styles = useStyles();

  return (
    <FluentProvider theme={webLightTheme}>
      <div className={styles.footer}>
        {/* Left Section: Logo and Contact Info */}
        <div className={styles.column}>
          <Image src={logo} alt="Footer Logo" className={styles.logo} />
          <Text className={styles.contactInfo} block>
            1234 Devala Gudalur The Nilgiris
          </Text>
          <Text className={styles.contactInfo} block>
            9159441529
          </Text>
          <Text className={styles.contactInfo} block>
            kamudhan111@gmail.com
          </Text>
          <div className={styles.iconContainer}>
          <Image src={facebookIcon} alt="Facebook" className={styles.socialIcon} />
            <Image src={twitterIcon} alt="Twitter" className={styles.socialIcon} />
            <Image src={linkedinIcon} alt="LinkedIn" className={styles.socialIcon} />
            <Image src={instagramIcon} alt="Instagram" className={styles.socialIcon} />
            </div>
        </div>

        {/* Center Section: Text Content */}
        <div className={`${styles.column} ${styles.centerSection}`}>
          <Text className={styles.textLink}>FOR PROVIDERS</Text>
          <Text className={styles.textLink}>Features</Text>
          <Text className={styles.textLink}>Pricing</Text>
          <Text className={styles.textLink}>Knowledge Base</Text>
          <br />
          <Text className={styles.textLink}>FOR PATIENTS</Text>
          <Text className={styles.textLink}>Patient Portal</Text>
          <Text className={styles.textLink}>Clinic Map</Text>
          <Text className={styles.textLink}>Prescription Renewal</Text>
          <Text className={styles.textLink}>Resources</Text>
        </div>

        {/* Right Section: More Content and Social Media Icons */}
        <div className={`${styles.column} ${styles.rightSection}`}>
          <Text className={styles.textLink}>FOR HEALTH SYSTEMS</Text>
          <Text className={styles.textLink}>Overview</Text>
          <Text className={styles.textLink}>Clinics</Text>
          <Text className={styles.textLink}>Pharmacies</Text>
          <Text className={styles.textLink}>Laboratories</Text>
          <br />
          <Text className={styles.textLink}>MORE</Text>
          <Text className={styles.textLink}>Articles</Text>
          <Text className={styles.textLink}>Careers</Text>
          <Text className={styles.textLink}>Privacy Policy</Text>
          <Text className={styles.textLink}>Terms & Conditions</Text>
          <Text className={styles.textLink}>Community</Text>
          <br />
          {/* <div className={styles.iconContainer}>
            <Image src={facebookIcon} alt="Facebook" className={styles.socialIcon} />
            <Image src={twitterIcon} alt="Twitter" className={styles.socialIcon} />
            <Image src={linkedinIcon} alt="LinkedIn" className={styles.socialIcon} />
            <Image src={instagramIcon} alt="Instagram" className={styles.socialIcon} />
          </div> */}
        </div>
      </div>
    </FluentProvider>
  );
};

export default Footer;
