import React from 'react';

function SkeletonCard() {
  return (
    <div className='container mt-5'>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {Array.from({ length: 3 }).map((_, idx) => (
          <div className="col mb-3" key={idx}>
            <div className="card" aria-hidden="true">
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkeletonCard;
