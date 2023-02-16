const ShareBare = () => {
  return (
    <div>
      {/* <!-- Share begin --> */}

      <div className="px-4 md:px-40 my-10 md:my-20">
        <div className="flex justify-center items-center bg-green-600 h-16 mb-4">
          <h1 className="text-white font-serif">Learn More</h1>
        </div>

        <div className="flex justify-between px-4 items-center bg-green-300 h-16 border border-green-600">
          <div className="">Share</div>
          <div className="flex justify-around gap-4">
            <div className="bg-green-600 h-9 px-1">face</div>
            <div className="bg-green-600 h-9 px-1">twit</div>
            <div className="bg-green-600 h-9 px-1">inta</div>
            <div className="bg-green-600 h-9 px-1">link</div>
          </div>
        </div>
      </div>
      {/* <!-- Share end --> */}
    </div>
  );
}

export default ShareBare;