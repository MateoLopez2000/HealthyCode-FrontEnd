import React from 'react';
import './FooterLinks.css';
export default function FooterLinks(props) {
  return (
    <section className="link">
      <div className="sub-links">
        <ul>
          <li>
            <a href="/">Help Center</a>
          </li>
          <li>
            <a href="/">Terms of Use</a>
          </li>
          <li>
            <a href="/">Privacy</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
