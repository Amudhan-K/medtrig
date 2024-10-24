import React, { useState } from 'react';
import { Link, mergeStyles, Icon } from '@fluentui/react';

// Styles for the second row container
const secondRowContainerStyles = mergeStyles({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px 20px',
  backgroundColor: "#b1bac7",
  width: '100%',
  position: 'relative',
  boxSizing: 'border-box',
  zIndex: 10,
  '@media (max-width: 850px)': {
    display: 'none', // Hide the second row on smaller screens
  },
});

// Styles for the links
const secondRowLinkStyles = mergeStyles({
  color: '#333',
  textDecoration: 'none',
  fontSize: '16px',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  fontWeight: 'semibold',
  margin: '0 15px',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
});

// Styles for the dropdown menu
const dropdownMenuStyles = mergeStyles({
  position: 'absolute',
  top: '100%',
  left: 0,
  backgroundColor: 'white',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '10px',
  minWidth: '150px',
  zIndex: 2,
});

// Individual link styles for dropdown items
const dropdownLinkStyles = mergeStyles({
  display: 'block',
  color: '#333',
  textDecoration: 'none',
  padding: '8px 10px',
  fontSize: '14px',
  ':hover': {
    backgroundColor: '#f1f1f1',
  },
});

// Specialties data
const specialties = [
  { href: '#item1', text: 'Family Practice' },
  { href: '#item2', text: 'Walk-in' },
  { href: '#item3', text: 'Clinical Neurology' },
  { href: '#item4', text: 'Dermatology' },
  { href: '#item5', text: 'Fertility' },
  { href: '#item6', text: 'Midwifery' },
  { href: '#item7', text: 'Obstetrics+Gynecology' },
  { href: '#item8', text: 'Ophthalmology' },
  { href: '#item9', text: 'Pain Clinic' },
  { href: '#item10', text: 'Pediatrics' },
  { href: '#item11', text: 'Rheumatology' },
  { href: '#item12', text: 'Sleep Study' },
];

// More dropdown items
const moreItems = [
  { href: '#articles', text: 'Articles' },
  { href: '#resources', text: 'Resources' },
  { href: '#knowledge-base', text: 'Knowledge Base' },
];

// Navigation links
const navLinks = [
  { href: '#', text: 'Features' },
  { href: '#', text: 'Pricing' },
  { href: '#', text: 'About' },
];

// SecondRow component
const SecondRow: React.FC = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isMoreDropdownVisible, setMoreDropdownVisible] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  // Toggle "More" dropdown visibility
  const toggleMoreDropdown = () => {
    setMoreDropdownVisible((prev) => !prev);
  };

  return (
    <nav className={secondRowContainerStyles}>
      {/* Specialties link with dropdown */}
      <div className={secondRowLinkStyles} onClick={toggleDropdown}>
        Specialties
        <Icon iconName={isDropdownVisible ? 'ChevronUp' : 'ChevronDown'} styles={{ root: { marginLeft: '5px' } }} />
        {isDropdownVisible && (
          <div className={dropdownMenuStyles}>
            {specialties.map((specialty) => (
              <Link key={specialty.text} href={specialty.href} className={dropdownLinkStyles}>
                {specialty.text}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Other links */}
      {navLinks.map(link => (
        <Link key={link.text} href={link.href} className={secondRowLinkStyles}>
          {link.text}
        </Link>
      ))}

      {/* More link with dropdown */}
      <div className={secondRowLinkStyles} onClick={toggleMoreDropdown}>
        More
        <Icon iconName={isMoreDropdownVisible ? 'ChevronUp' : 'ChevronDown'} styles={{ root: { marginLeft: '5px' } }} />
        {isMoreDropdownVisible && (
          <div className={dropdownMenuStyles}>
            {moreItems.map((item) => (
              <Link key={item.text} href={item.href} className={dropdownLinkStyles}>
                {item.text}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Phone Number */}
      <div style={{ marginLeft: 'auto', fontWeight: 'bold' }}>Ph:+91 9159441529</div>
    </nav>
  );
};

export default SecondRow;
