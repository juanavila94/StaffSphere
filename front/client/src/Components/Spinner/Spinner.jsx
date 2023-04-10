const Spinner = () => {
    return (
      <div className="flex justify-center items-center">
        <div className="spinner-border text-gray-500 w-12 h-12" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  
  export default Spinner;