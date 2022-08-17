import Logo from "../images/logo-white.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <div className="bg-very-dark-violet text-white flex flex-col lg:flex-row justify-center lg:justify-evenly items-center lg:items-start w-screen pt-10 lg:pb-20 lg:px-16">
      <div className="lg:flex lg:justify-start lg:w-56">
        <img src={Logo} alt="Shortly Logo" />
      </div>
      <div className="flex flex-col items-center justify-center lg:items-start space-y-2 mt-10 lg:mt-0">
        <h6 className="font-bold pb-1">Features</h6>
        <p className="footer-link">Link Shortening</p>
        <p className="footer-link">Branded Links</p>
        <p className="footer-link">Analytics</p>
      </div>

      <div className="flex flex-col items-center justify-center lg:items-start space-y-2 mt-10 lg:mt-0">
        <h6 className="font-bold pb-1">Resources</h6>
        <p className="footer-link">Blog</p>
        <p className="footer-link">Developers</p>
        <p className="footer-link">Suport</p>
      </div>

      <div className="flex flex-col items-center justify-center lg:items-start space-y-2 mt-10 lg:mt-0">
        <h6 className="font-bold pb-1">Company</h6>
        <p className="footer-link">About</p>
        <p className="footer-link">Our Team</p>
        <p className="footer-link">Careers</p>
        <p className="footer-link">Contact</p>
      </div>

      <div className="flex items-center justify-center space-x-5 mt-10 mb-16 lg:m-0">
        <FacebookIcon
          sx={{ fontSize: 30 }}
          className="hover:text-cyan cursor-pointer"
        />
        <TwitterIcon
          sx={{ fontSize: 30 }}
          className="hover:text-cyan cursor-pointer"
        />
        <PinterestIcon
          sx={{ fontSize: 30 }}
          className="hover:text-cyan cursor-pointer"
        />
        <InstagramIcon
          sx={{ fontSize: 30 }}
          className="hover:text-cyan cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Footer;
