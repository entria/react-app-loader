// @flow

import React, { Component } from 'react';
import styled from 'styled-components';

import AnyExternalApp from './externals/AnyExternalApp';

const FormWrapper = styled.div`
  display: flex;
  margin: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FormText = styled.span`
  font-size: 20px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

type State = {
  url: string,
};
class App extends Component<any, State> {
  state = {
    url: 'https://github.com/',
  };

  handleChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ url: event.target.value });
  };

  render() {
    const { url } = this.state;
    return (
      <div className="App">
        <FormWrapper>
          <FormText>Insert any url to load any page you want:</FormText>
          <InputWrapper>
            <form>
              <input
                type="text"
                name="url"
                placeholder={'https://github.com/'}
                size={75}
                value={url}
                onChange={this.handleChange}
              />
            </form>
          </InputWrapper>
        </FormWrapper>
        <div>
          <AnyExternalApp externalUrl={url} />
        </div>
      </div>
    );
  }
}

export default App;
