import React from 'react';
import { Stack, Text, Image, mergeStyleSets } from '@fluentui/react';

const cardData = [
  {
    title: 'Accurate Data In Less Time',
    description: 'Reduce staff hours spent on registration, booking, and data entry. Get accurate patient contact information.',
    iconSrc: '/_nuxt/img/iconpink.bb6efc5.svg',
    bgColor: 'rgb(253, 233, 240)',
  },
  {
    title: 'Improve Efficiency',
    description: 'Eliminate schedule gaps and no-shows. Control appointment volumes.',
    iconSrc: '/_nuxt/img/iconblue.d318aff.svg',
    bgColor: 'rgb(238, 240, 255)',
  },
  {
    title: 'Enhance Patient Satisfaction',
    description: 'Improve patient and doctor satisfaction by reducing in-clinic wait times.',
    iconSrc: '/_nuxt/img/icongreen.a8dc746.svg',
    bgColor: 'rgb(229, 250, 243)',
  },
  {
    title: 'Increase Your Profits',
    description: 'Case study shows 30% decrease in staff cost per appointment.',
    iconSrc: '/_nuxt/img/icongrey.5698411.svg',
    bgColor: 'rgb(245, 245, 249)',
  },
];

const styles = mergeStyleSets({
  card: {
    padding: '15px',
    borderRadius: '10px',
    width: '530px', // Fixed width for all cards
    height: '150px', // Fixed height for uniformity
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    margin: '10px', // Space between cards
  },
  icon: {
    width: '40px',
    height: '40px',
    marginBottom: '10px',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: '20px',
    marginBottom: '5px',
  },
  cardDescription: {
    fontSize: '18px',
    flexGrow: 1, // Ensure the description area can grow
  },
  stackItem: {
    display: 'flex', // Flex to align cards properly
    justifyContent: 'center',
    '@media(max-width: 768px)': {
      width: '100%', // Stack on smaller screens
    },
  },
});

const ClinicCards: React.FC = () => {
  return (
    <Stack
      horizontalAlign="center"
      styles={{ root: { width: '100%', padding: '20px', marginTop: '40px' } }}
    >
      <Stack horizontal wrap tokens={{ childrenGap: 10 }} styles={{ root: { maxWidth: '1200px' } }}>
        {cardData.map((card, index) => (
          <Stack.Item key={index} styles={{ root: styles.stackItem }}>
            <div style={{ backgroundColor: card.bgColor }} className={styles.card}>
              <Image src={card.iconSrc} alt={card.title} className={styles.icon} />
              <Text className={styles.cardTitle}>{card.title}</Text>
              <Text className={styles.cardDescription}>{card.description}</Text>
            </div>
          </Stack.Item>
        ))}
      </Stack>
    </Stack>
  );
};

export default ClinicCards;
