import React from 'react';

interface MapProps {
  className?: string;
}

const Map: React.FC<MapProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-80 ${className}`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.5555555555555!2d75.5837!3d11.7401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDQ0JzI0LjQiTiA3NcKwMzUnMDEuMyJF!5e0!3m2!1sen!2sin!4v1234567890123"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg shadow-natural border border-border"
        title="Prana Roots Ayurveda Clinic Location - Poweloom Metta, Mambaram"
      />
    </div>
  );
};

export default Map;