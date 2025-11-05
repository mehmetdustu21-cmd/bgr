const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-primary-foreground/80">
          © {new Date().getFullYear()} BGR MOBİLYA. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
