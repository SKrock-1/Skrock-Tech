import * as React from 'react';

// interface LogoProps {
//   size?: 'sm' | 'md' | 'lg' | 'xl';
//   className?: string;
// }

const Logo = ({ size = "md", className = "" }/*: React.FC<LogoProps>*/) => {
  const sizes = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
    xl: "w-40 h-40",
  };

  const sizeClass = sizes[size] || sizes.md;

  // Using the cropped image saved as skrockhope_symbol.png in the public directory
  const imageUrl = "/logo.png"; // This will be replaced with SVG later

  return (
    <div className={`${sizeClass} ${className}`}>
      <img 
        src={imageUrl}
        alt="SKROCKHOPE Symbol Logo"
        className="w-full h-full object-contain logo-glow"
      />
    </div>
  );
};

export default Logo;
