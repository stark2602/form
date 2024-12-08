import React from 'react';

interface PasswordStrengthIndicatorProps {
  password: string;
}

const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({ password }) => {
  const getStrength = () => {
    if (password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password) && /[!@#$%^&*]/.test(password)) {
      return 'Strong';
    } else if (password.length >= 6) {
      return 'Moderate';
    }
    return 'Weak';
  };

  return <div className={`strength ${getStrength().toLowerCase()}`}>{getStrength()}</div>;
};

export default PasswordStrengthIndicator;
