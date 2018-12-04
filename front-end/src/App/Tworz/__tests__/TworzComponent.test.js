import React from 'react'
import TworzComponent from '../TworzComponent'
import { shallow } from 'enzyme'
import { expect } from 'chai'

describe('<TworzComponent />', () => {
  it('contain main elemnt', () => {
    const wrapper = shallow(<TworzComponent/>);
    expect(wrapper.find('main')).to.have.lengthOf(1);
  })
})
