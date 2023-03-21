/**
 * ########################################################
 * the footer component
 * Content
 *  -Africa Systems logo information/description
 *  -Links to (About us, Industries, Services, Contact us) pages
 *  -Africa systems contact info.
 * 
 * this content is not yet editable from Sanity cms(to be done)
 */

import ASL from "../assets/ASL.png";
import DataAS from "../dbitems/dataAs";

const footer = () => {

  const { Footer } = DataAS("footer")
  let show = true;
  let ASs;
  let ASc;

  if (Footer.length <= 1) {
    show = false;
  } else {
    ASs = Footer.find(data => (data.slug.current === "africa-systems"))
    ASc = Footer.find(data => (data.slug.current === "contact-info"))
  }

  return (
    <div>
      {show &&

        <div>
          {/* <!-- footer begin --> */}

          <div
            className=" h-full md:h-96 bg-[url('/src/assets/logo/footer.png')] bg-cover grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 px-4 md:px-20 lg:px-40 py-16 gap-3">
            {/* <!-- text As --> */}
            <div className="col-span-1 md:col-span-2 ml-5">
              <div className="w-52">
                <div className="flex items-center gap-1">
                  <img src={ASL} alt="As Logo" className="h-11" />
                  <p className="text-xl font-bold">Africa Systems</p>
                </div>
                <div>
                  <p>{ASs.body}</p>
                </div>
              </div>
            </div>

            {/* <!-- quick links --> */}
            <div className="col-span-1 ml-5 mt-2">
              <div className="flex items-center gap-1">
                <p className="text-2xl font-serif">Quick Links</p>
              </div>
              <div>
                <ul>
                  <li><a href="test.html">About us</a></li>
                  <li><a href="test.html">Industires</a></li>
                  <li><a href="test.html">Services</a></li>
                  <li><a href="test.html">Blogs</a></li>
                  <li><a href="test.html">Contact us</a></li>
                </ul>
              </div>
            </div>

            {/* <!-- contact info --> */}
            <div className="col-span-1 ml-5 mt-2">
              <div className="flex items-center gap-1">
                <p className="text-2xl font-serif">Contact Info</p>
              </div>
              <div>
                {ASc.body}
              </div>
            </div>

          </div>

          {/* <!-- footer band --> */}
          <div className="h-10 flex bg-green-700 px-28 justify-end">
            <div className="flex items-center">
              <img src={ASL} alt="As logo" className="h-8" />
            </div>
          </div>
          {/* <!-- footer end --> */}
        </div>

      }
    </div>
  );
}

export default footer;