import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div>
        <a href="http://localhost:3000/">
          <Image
            src="/images/netlify-logo.png"
            alt="Netlify image png"
            width={150}
            height={150}
            className="text-gray-500"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
