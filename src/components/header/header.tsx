import React, { useState, useRef, useEffect } from 'react';
import { Link, mergeStyles, IconButton, Dropdown, IDropdownOption } from '@fluentui/react';
import logo from '../../assets/logo.png';

// Header container styles
const headerContainerStyles = mergeStyles({
  display: 'flex',
  // flexWrap: 'nowrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px 20px',
  backgroundColor: '#16263D',
  width: '100%',
  
  margin: '0 auto', 
  position: 'sticky',
  zIndex: 1,
  boxSizing: 'border-box',
  top: 0, // Ensures the header stays fixed at the top
  // left: 0, 
  // right: 0,
  overflow: 'hidden',
  // maxWidth: '1440px',
});

// Logo styles
const logoContainerStyles = mergeStyles({
  display: 'flex',
  justifyContent: 'flex-start',
  flexGrow: 1,
});

// Navigation links styles
const navLinksContainerStyles = mergeStyles({
  display: 'flex',
  justifyContent: 'center',
  flexGrow: 2,
  gap: '20px',
  '@media (max-width: 850px)': {
    display: 'none', // Hide nav links when the screen width is below 850px
  },
});

// Link styles
const navLinkStyles = mergeStyles({
  color: 'white',
  textDecoration: 'none',
  fontSize: '16px',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  fontWeight: 'semibold',
  ':hover': {
    textDecoration: 'underline',
  },
});

// Sign In styles
const signInContainerStyles = mergeStyles({
  display: 'flex',
  justifyContent: 'flex-end',
  flexGrow: 1,
  '@media (max-width: 850px)': {
    display: 'none', // Hide Sign In on small screens
  },
});

// Dropdown menu styles
const dropdownMenuStyles = mergeStyles({
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  backgroundColor: 'white',
  zIndex: 1,
  top: '60px',
  right: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  width: '200px',
  overflow: 'hidden', // Prevent overflow
});

// Dropdown options
const dropdownOptions: IDropdownOption[] = [
  { key: 'forProviders', text: 'For Providers' },
  { key: 'forPatients', text: 'For Patients' },
  { key: 'forHealthSystems', text: 'For Health Systems' },
  { key: 'signIn', text: 'Sign In' },
];

// Navigation links
const navLinks = [
  { href: '#', text: 'For Providers' },
  { href: '#', text: 'For Patients' },
  { href: '#', text: 'For Health Systems' },
];

// Hamburger icon styles
const hamburgerIconStyles = mergeStyles({
  display: 'none',
  '@media (max-width: 850px)': {
    display: 'block',
    position: 'absolute',
    right: '20px',
    top: '50%', // Center vertically
    transform: 'translateY(-50%)', // Adjust position to truly center
    zIndex: 10,
    padding: '5px',
    borderRadius: '4px',
    backgroundColor: 'white',
  },
});

const Header: React.FC = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDropdownChange = (event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption) => {
    if (option) {
      window.location.href = option.key as string; // Navigate based on the selected option key
    }
  };

  return (
    <header className={headerContainerStyles}>
      {/* Logo */}
      <div className={logoContainerStyles}>
        <img src={logo} alt="Logo" className={mergeStyles({ height: '30px', maxWidth: '100%' })} />
      </div>

      {/* Navigation Links */}
      <nav className={navLinksContainerStyles}>
        {navLinks.map(link => (
          <Link key={link.text} href={link.href} className={navLinkStyles}>
            {link.text}
          </Link>
        ))}
      </nav>

      {/* Sign In Link */}
      <div className={signInContainerStyles}>
        <Link href="#" className={navLinkStyles}>Sign In</Link>
      </div>

      {/* Hamburger Icon */}
      <IconButton
        iconProps={{ iconName: 'GlobalNavButton' }} // Hamburger icon
        className={hamburgerIconStyles}
        onClick={toggleDropdown}
        title="Menu"
        ariaLabel="Menu"
      />

      {/* Dropdown Menu */}
      {isDropdownVisible && (
        <div ref={menuRef} className={dropdownMenuStyles}>
          <Dropdown
            selectedKey="forProviders"
            aria-label="Dropdown Menu"
            options={dropdownOptions}
            onChange={handleDropdownChange}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
