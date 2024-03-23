import {
  FaFacebookF,
  FaTwitter,
  FaRedditAlien,
  FaPinterest,
} from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="container d-flex justify-content-between align-items-center flex-wrap">
        <div className="copyright">© 2015 Amazon eBook.</div>
        <div className="social_media d-flex justify-content-center align-items-center gap-3">
          <a href="http://facebook.com">
            <FaFacebookF />
          </a>
          <a href="http://twitter.com">
            <FaTwitter />
          </a>
          <a href="http://reddit.com">
            <FaRedditAlien />
          </a>
          <a href="http://pinterest.com">
            <FaPinterest />
          </a>
        </div>
        <div className="contribution">
          <p className="m-0">
            Themed By <a href="https://themewagon.com/">themewagon</a>
          </p>
          <p className="m-0">
            Coded By <a href="https://elbernaoui.is-a.dev/">EL BERNAOUI</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
