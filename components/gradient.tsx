import React from 'react';

const GradientCircle = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute h-[700px] w-[700px] rounded-full bg-gradient-radial transform translate-x-1/2 -translate-y-1/2"></div>
          <style jsx>{`
            .bg-gradient-radial {
              background: radial-gradient(circle, rgba(244, 114, 182, 1) 0%, rgba(244, 114, 182, 0) 70%);
            }
          `}</style>
        </div>
      );
    };
    

export default GradientCircle;
