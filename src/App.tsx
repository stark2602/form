// App.tsx
import React, { useState } from 'react';
import SignupForm from './component/SignupForm.tsx';
import LoginForm from './component/LoginForm.tsx';
import './App.css';
const App: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [formType, setFormType] = useState<'login' | 'signup'>('login'); 

  const handleOpenModal = (type: 'login' | 'signup') => {
    setFormType(type);
    setShowModal(true); 
  };

  const handleCloseModal = () => {
    setShowModal(false); 
  };

  return (
    <div className="app">
      <div className="buttons">
        <button onClick={() => handleOpenModal('login')}>Login</button>
        <button onClick={() => handleOpenModal('signup')}>Sign Up</button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>×</span>
            {formType === 'login' ? <LoginForm /> : <SignupForm />}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;