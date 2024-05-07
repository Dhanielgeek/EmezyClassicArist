import React, { useRef } from 'react';

interface Props {
  scrollToId: string;
}

export const ScrollToAboutMe: React.FC<Props> = ({ scrollToId }) => {

  const buttonRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (buttonRef.current) {
      const targetElement = document.getElementById(scrollToId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div ref={buttonRef} onClick={handleClick}>
        <nav className='cursor-pointer'>About me</nav>
    </div>
  );
};

export const ScrollToHome: React.FC<Props> = ({ scrollToId }) => {

  const buttonRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (buttonRef.current) {
      const targetElement = document.getElementById(scrollToId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div ref={buttonRef} onClick={handleClick}>
        <nav className='cursor-pointer'>Home</nav>
    </div>
  );
};

export const ScrollToGallery: React.FC<Props> = ({ scrollToId }) => {

  const buttonRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (buttonRef.current) {
      const targetElement = document.getElementById(scrollToId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div ref={buttonRef} onClick={handleClick}>
        <nav className='cursor-pointer'>Gallery</nav>
    </div>
  );
};

export const ScrollToSongs: React.FC<Props> = ({ scrollToId }) => {

  const buttonRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (buttonRef.current) {
      const targetElement = document.getElementById(scrollToId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div ref={buttonRef} onClick={handleClick}>
        <nav className='cursor-pointer'>Songs</nav>
    </div>
  );
};

export const ScrollToContact: React.FC<Props> = ({ scrollToId }) => {

  const buttonRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (buttonRef.current) {
      const targetElement = document.getElementById(scrollToId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div ref={buttonRef} onClick={handleClick}>
        <nav className='cursor-pointer'>Contact</nav>
    </div>
  );
};
