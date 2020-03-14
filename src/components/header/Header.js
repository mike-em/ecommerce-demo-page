import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.util';
import CartIcon from '../cart-icon/Cart-icon';
import CartDropdown from '../cart-dropdown/Cart-dropdown';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

const HeaderWrapper = styled.div`
  height: 70px;
  max-width: 100vw;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const Options = styled.div`
  /* width: 70px; */
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const linkStyle = {
  padding: '10px 15px',
  textTransform: 'uppercase',
  cursor: 'pointer',
};

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderWrapper>
      <Link to='/'>
        <Logo
          className='logo'
          style={{
            height: '100%',
            width: '70px',
            padding: '10px',
          }}
        />
      </Link>
      <Options>
        <Link to='/shop' style={linkStyle}>
          shop
        </Link>
        {/* <Link to="/contact" style={linkStyle}>
          contact
        </Link> */}
        {currentUser ? (
          <div style={linkStyle} onClick={() => auth.signOut()}>
            sign out
          </div>
        ) : (
          <Link to='/signin' style={linkStyle}>
            sign in
          </Link>
        )}
        <CartIcon />
      </Options>
      {hidden ? null : <CartDropdown />}
    </HeaderWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
