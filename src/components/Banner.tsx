import React from 'react';
import bannerImage from '../assets/banner.jpg'; 
import { PrimaryButton } from '@fluentui/react';
import medAiVideo from '../assets/med_ai.mp4';
const Banner: React.FC = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '130vh',
        backgroundImage: `url(${bannerImage})`, // Update with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // padding: '0 20px',
        zIndex: 3, 
        overflow: 'hidden',
        
      }}
    >
      <h1 style={{
        color: 'white',
        fontWeight: 'bold',
        marginTop: '2.5rem',
        fontSize: '2rem', // Use responsive styles as needed
        textAlign: 'center',
        lineHeight: '1.2',
      }}>
        Save Time in Healthcare.
      </h1>
      <p style={{
        color: 'white',
        marginTop: '1.25rem',
        fontSize: '1.25rem',
        textAlign: 'center',
      }}>
        Cortico saves doctors and medical staff precious time, so they can deliver better care.
      </p>
      <PrimaryButton
        styles={{
          root: {
            marginTop: '1.25rem',
            backgroundColor: '#c40e75',
            color: 'white',
            padding: '10px 40px',
            borderRadius: '25px',
          },
        }}
      >
        Book A Demo
      </PrimaryButton>
      <div style={{
        marginTop: '1.25rem',
        maxWidth: '600px',
        textAlign: 'center',
      }}>
        <p style={{
          color: 'white',
          fontSize: '1rem',
        }}>
          The digital health tools that patients love to use (100% engagement is common).
        </p>
      </div>
      <div style={{
        maxWidth: '600px',
        marginTop: '2rem',
        width: '100%',
        overflow: 'hidden',
        borderRadius: '10px',
      }}>
        <video controls preload="metadata" style={{ width: '100%', borderRadius: '10px' }}>
          <source src={medAiVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Banner;
