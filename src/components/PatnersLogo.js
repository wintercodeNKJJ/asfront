import sss from "../assets/logo/sss.png";
import jlk from "../assets/logo/jlk.png";
import lewoo from "../assets/logo/lewoo.png";

const PatnersLogo = () => {
  return (
    <div>
      {/* <!-- Logos begin --> */}

      <div className="grid grid-cols-1 md:grid-cols-3 mx-40 my-32 gap-10">
        <div className="flex justify-center">
          <img src={jlk} alt="" className="h-24" />
        </div>

        <div className="flex justify-center">
          <img src={sss} alt="" className="h-24" />
        </div>

        <div className="flex justify-center">
          <img src={lewoo} alt="" className="h-24" />
        </div>
      </div>

      {/* <!-- Logos End --> */}
    </div>
  );
}

export default PatnersLogo;