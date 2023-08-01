const { useState } = React;

const HomePage = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Here, you can implement the logic to handle the email subscription
    // For now, let's just display the email in the console
    console.log('Email:', email);
  };

  return (
    <div className="container mt-5">
      <h1>Welcome to Our Recruitment Startup</h1>
      <p>We help you find the best talent for your company.</p>

      <form onSubmit={handleSubscribe}>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email to subscribe for updates"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Subscribe</button>
      </form>
    </div>
  );
};

ReactDOM.render(<HomePage />, document.getElementById('root'));
