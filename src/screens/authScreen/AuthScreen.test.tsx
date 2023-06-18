import React from 'react';
import renderer, { act } from 'react-test-renderer';
import AuthScreen from './AuthScreen';
import useAuthentication from '../../hooks/useAuthentication';

jest.mock('../../hooks/useAuthentication', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('AuthScreen', () => {
  let onAuthenticate: any;

  beforeEach(() => {
    onAuthenticate = jest.fn();
    // @ts-ignore
    useAuthentication.mockImplementation(() => ({ onAuthenticate }));
  })
  it('renders the AuthScreen screen correctly', () => {
    const tree = renderer.create(
      <AuthScreen />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it('calls onAuthenticate when the button is pressed', () => {
    let component: any;
    act(() => {
      component = renderer.create(<AuthScreen />);
    });

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    const button = component.root.findByProps({ testID: 'auth-button' });

    act(() => {
      button.props.onPress();
    });

    expect(onAuthenticate).toHaveBeenCalled(); // Check if onAuthenticate was called
  });
});
