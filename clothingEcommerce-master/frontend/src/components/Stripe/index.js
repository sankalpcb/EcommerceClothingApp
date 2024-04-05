import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
 
export default class TakeMoney extends React.Component {
  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }
 
  
 
  render() {
    return (
    
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_51OuWgGSJQCgkGw8lBGQjwwXkUVzcAFa2wkGBIfLdBRj5cUqE7AdhR54Z45jCU3DtgdvtOaCebSO79u4am6HaQT3n000cYNZUSK"
      />
    )
  }
}