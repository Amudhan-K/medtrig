import React from 'react';
import { Stack, Text, Image } from '@fluentui/react';

const titleText = "Online Booking System\nThat Integrates With Your EMR\n(Oscar, Accuro, OpenEMR, and more)";
const items = [
  "Enable patients to schedule appointments from your website.",
  "Automatically add appointments to doctor’s schedule in EMR.",
  "Keep your patients’ contact info up-to-date.",
  "Allow out-of-province patients to book hassle-free."
];

const titleStyle = { color: 'black', marginBottom: '20px', lineHeight: '1.3', fontWeight: 'bold', textAlign: 'left' }; // Ensure left alignment
const itemStyle = { color: 'black', fontWeight: 'bold' }; // Bold and black text

const BookingInfo: React.FC = () => {
  return (
    <Stack 
      className="md:flex-1 lg:flex-3" 
      styles={{ root: { padding: '50px', textAlign: 'left' } }}
    >
      <Text 
        variant="xxLarge" 
        styles={{ root: titleStyle }}
      >
        {titleText.split('\n').map((line, index) => (
          <span key={index} style={{ display: 'block', marginBottom: '10px' }}>{line}</span>
        ))}
      </Text>
      <Stack>
        <ul style={{ paddingLeft: '20px' }}> {/* Ensure consistent indentation */}
          {items.map((item, index) => (
            <li className="flex items-center my-4" key={index} style={{ display: 'flex', alignItems: 'center' }}>
              <Image
                src={require('../assets/tick.svg').default} // Adjust the path accordingly
                alt="Check Icon"
                styles={{ root: { marginRight: '5px', width: '20px', height: '30px' } }}
              />
              <Text variant="medium" styles={{ root: itemStyle }}>
                {item}
              </Text>
            </li>
          ))}
        </ul>
      </Stack>
    </Stack>
  );
};

export default BookingInfo;
