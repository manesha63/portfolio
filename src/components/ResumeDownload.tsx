import React from 'react';

const ResumeDownload: React.FC = () => {
  const handleDownload = () => {
    // Replace with your actual resume file path
    const resumeUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Manisha_Chand_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
    >
      Download Resume
    </button>
  );
};

export default ResumeDownload; 