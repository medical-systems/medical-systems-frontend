import { useState } from 'react';

const CollapsibleReadMore = ({ doctorInfo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleReadMore = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="mt-2">
        {!isOpen && (
          <button
            onClick={toggleReadMore}
            className="text-indigo-600 hover:underline cursor-pointer"
          >
            Read more...
          </button>
        )}
        {isOpen && (
          <>
            <p className="mt-2">{doctorInfo}</p>
            <button
              onClick={toggleReadMore}
              className="text-indigo-600 hover:underline cursor-pointer mt-2"
            >
              Read less
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default CollapsibleReadMore;