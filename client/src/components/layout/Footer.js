import React, { Component } from "react";
import classnames from "classnames";

class Footer extends Component {
  render() {
    const pathname = window.location.pathname;

    return (
      <div>
        <div
          className={classnames("", {
            space: pathname !== "/"
          })}
        />
        <footer
          className={classnames(
            "footer bg-primary text-white p-4 text-center",
            {
              footerHome: pathname === "/"
            }
          )}
        >
          Copyright &copy; {new Date().getFullYear()} Flight Deck Music |
          developed by:{" "}
          <a
            rel="noopener noreferrer"
            className="whiteLink"
            target="_blank"
            href="https://www.instagram.com/jorrharris/"
          >
            @jorrharris
          </a>
        </footer>
      </div>
    );
  }
}

export default Footer;
