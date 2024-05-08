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
        <nav className='cursor-pointer hover:text-[blue]'>About me</nav>
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
        <nav className='cursor-pointer hover:text-[blue]'>Home</nav>
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
        <nav className='cursor-pointer hover:text-[blue]'>Gallery</nav>
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
        <nav className='cursor-pointer hover:text-[blue]'>Songs</nav>
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
        <nav className='cursor-pointer hover:text-[blue]'>Contact</nav>
    </div>
  );
};
