function Link({ uri, text }) {
  return <a href={uri} target="_blank" rel="noreferrer">{text}</a>;
}

function Footer() {
  return (
    <div>
      
      <h2 className ="text-dark">Plus de ressources</h2>
      
    <footer className="d-flex bg-info  ">
      <Link uri={""} text={"Bonus"} />
      <Link uri={""} text={"Aide"} />
      <Link uri={""} text={"A propos de nous "} />
      <Link uri={""} text={"conditions du site"} />
    </footer >
    </div>
  );
}

export default Footer;
