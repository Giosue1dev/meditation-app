import React from 'react';

class ButtonLinks extends React.Component {
  // Function to open the link in a new page
  openLink = (link) => {
    window.open(link, '_blank');
  };

  render() {
    return (
      <div className="button-container">
        <button className="button" onClick={() => this.openLink('https://www.youtube.com/watch?v=HchoJcYNYlU&t=20s')}>Waterfalls</button>
        <button className="button" onClick={() => this.openLink('https://www.youtube.com/watch?v=MjJMQuJ7eNo')}>Rain</button>
        <button className="button" onClick={() => this.openLink('https://www.link3.comhttps://www.youtube.com/watch?v=h6Ez_5dd9Bc')}>Wind</button>
        <button className="button" onClick={() => this.openLink('https://www.youtube.com/watch?v=FUfca6cvB2I')}>chill</button>
      </div>
    );
  }
}

export default ButtonLinks;