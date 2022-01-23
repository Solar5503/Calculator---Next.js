import headerStyles from '../styles/Header.module.css';

const Header = () => {
  //   const x = 5;
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Welcome </span>to Calculator
      </h1>
      <p className={headerStyles.description}>Do you need money? Come to us!</p>
      {/* <style jsx>
        {`
          .title {
            color: ${x > 3 ? 'red' : 'blue'};
          }
        `}
      </style> */}
    </div>
  );
};

export default Header;
